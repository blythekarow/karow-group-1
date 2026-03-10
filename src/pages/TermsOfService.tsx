import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  usePageSEO({
    title: "Terms of Service | The Karow Advisory Group",
    description: "Terms of Service for The Karow Advisory Group website. Review the terms governing your use of thekarowgroup.com.",
  });

  return (
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 10, 2026</p>

          <div className="prose prose-neutral max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the website thekarowgroup.com ("Website"), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>The Karow Advisory Group provides strategic advisory, commercialization, and consulting services to medical technology companies. Information on this Website is for general informational purposes and does not constitute professional advice. Formal advisory engagements are governed by separate agreements.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
              <p>All content on this Website—including text, graphics, logos, images, and software—is the property of The Karow Advisory Group or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Use of Website</h2>
              <p>You agree to use this Website only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Website</li>
                <li>Use the Website to transmit harmful or malicious content</li>
                <li>Reproduce or scrape content for commercial purposes without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Disclaimer of Warranties</h2>
              <p>This Website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, The Karow Advisory Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Links</h2>
              <p>This Website may contain links to third-party websites or services (such as Calendly and Substack). We are not responsible for the content or practices of these external sites and encourage you to review their terms and policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Website constitutes acceptance of the revised terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us at:</p>
              <p className="mt-2">
                The Karow Advisory Group<br />
                <a href="mailto:info@thekarowgroup.com" className="text-primary hover:underline">info@thekarowgroup.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
