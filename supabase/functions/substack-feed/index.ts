const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('Fetching Substack RSS feed...');
    
    const feedUrl = 'https://blythekarow.substack.com/feed';
    const response = await fetch(feedUrl);
    
    if (!response.ok) {
      console.error('Failed to fetch RSS feed:', response.status);
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }
    
    const xmlText = await response.text();
    console.log('RSS feed fetched successfully, parsing...');
    
    // Parse RSS XML manually (simple parser)
    const posts: SubstackPost[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    
    while ((match = itemRegex.exec(xmlText)) !== null && posts.length < 6) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/);
      
      const title = titleMatch ? (titleMatch[1] || titleMatch[2] || '').trim() : '';
      const link = linkMatch ? linkMatch[1].trim() : '';
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : '';
      const description = descriptionMatch ? (descriptionMatch[1] || descriptionMatch[2] || '').trim() : '';
      
      // Clean HTML from description
      const cleanDescription = description
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .substring(0, 200);
      
      if (title && link) {
        posts.push({
          title,
          link,
          pubDate,
          description: cleanDescription,
        });
      }
    }
    
    console.log(`Parsed ${posts.length} posts from RSS feed`);
    
    return new Response(
      JSON.stringify({ posts }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching Substack feed:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage, posts: [] }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
