const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const ServicesEngagement = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
            How Engagements Begin
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            It starts with a strategic assessment.
          </h2>
          <div className="space-y-5 text-background/85 text-lg leading-relaxed">
            <p>
              I work through your business and commercial plans with your leadership team and give you a
              clear read: where the line is for your product, whether and when to cross it, and what comes
              next, in order. Some companies take the plan and run with it. Others keep me involved.
            </p>
            <p>
              If a specific piece of the commercial picture is worrying you, like your health economics
              story or your reimbursement coding, we scope that after the assessment and bring in
              specialists who do that work every day.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-md hover:bg-background hover:text-accent transition-all duration-200"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesEngagement;
