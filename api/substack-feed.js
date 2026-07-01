// Vercel serverless function: fetches the Substack RSS feed server-side (no CORS,
// no Supabase) and returns the latest posts. Replaces the old Supabase edge function.
export default async function handler(req, res) {
  try {
    const feedUrl = "https://blythekarow.substack.com/feed";
    const response = await fetch(feedUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; KarowAdvisorySite/1.0)" },
    });
    if (!response.ok) throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    const xmlText = await response.text();

    const posts = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xmlText)) !== null && posts.length < 6) {
      const itemContent = match[1];
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = itemContent.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/
      );

      const title = titleMatch ? (titleMatch[1] || titleMatch[2] || "").trim() : "";
      const link = linkMatch ? linkMatch[1].trim() : "";
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : "";
      const description = descriptionMatch ? (descriptionMatch[1] || descriptionMatch[2] || "").trim() : "";

      const cleanDescription = description
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#8217;/g, "'")
        .replace(/&#8216;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&#8211;/g, "–")
        .replace(/&#8212;/g, "—")
        .replace(/&#8230;/g, "…")
        .replace(/&#\d+;/g, (m) => String.fromCharCode(parseInt(m.replace(/&#|;/g, ""))))
        .substring(0, 200);

      if (title && link) posts.push({ title, link, pubDate, description: cleanDescription });
    }

    // cache at the edge for an hour; refresh in the background after that
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error", posts: [] });
  }
}
