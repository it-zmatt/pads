const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Open the app",
      description: "Launch the app and grant location permissions to see nearby stations.",
      icon: "📱"
    },
    {
      number: "02", 
      title: "See a map of free stations nearby",
      description: "View real-time locations of free tampon and pad stations in your area.",
      icon: "🗺️"
    },
    {
      number: "03",
      title: "Get what you need with confidence",
      description: "Navigate to the nearest station and access the products you need, when you need them.",
      icon: "✨"
    }
  ];

  return (
    <section id="how-it-works">
      <div>
        {/* Section Header */}
        <div>
          <h2>
            How It Works
          </h2>
          <p>
            Simple, fast, and reliable. Get access to free feminine hygiene products in just three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, index) => (
            <div key={index}>
              {/* Step Number and Icon */}
              <div>
                <div>
                  {step.icon}
                </div>
                <div>
                  <span>{step.number}</span>
                </div>
              </div>

              {/* Step Content */}
              <h3>
                {step.title}
              </h3>
              <p>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div>
          <div>
            <h3>
              Ready to get started?
            </h3>
            <p>
              Join thousands of users who are already using our app to stay prepared.
            </p>
            <div>
              <a href="#hero">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
