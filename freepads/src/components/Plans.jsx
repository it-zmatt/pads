const Plans = () => {
  const plans = [
    {
      name: "Everyday Use",
      price: "$0.99",
      period: "per week",
      description: "Perfect for regular use and peace of mind",
      features: [
        "Access to interactive map",
        "Real-time station updates",
        "Basic location services",
        "Community reviews",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Complete Use",
      price: "$6.99",
      period: "per week",
      description: "Everything you need plus AI-powered safety features",
      features: [
        "Everything in Everyday Use",
        "AI Guardian location tracking",
        "Audio monitoring & alerts",
        "Family/emergency notifications",
        "Priority support",
        "Advanced safety features"
      ],
      popular: true
    },
    {
      name: "Ultra Use",
      price: "Coming Soon",
      period: "",
      description: "The ultimate experience with shared-use features",
      features: [
        "Everything in Complete Use",
        "Shared-use station access",
        "Community features",
        "Advanced AI insights",
        "Premium support",
        "Early access to new features"
      ],
      popular: false,
      comingSoon: true
    }
  ];

  return (
    <section id="plans">
      <div>
        {/* Section Header */}
        <div>
          <h2>
            Choose Your Plan
          </h2>
          <p>
            Flexible pricing options to fit your needs. Start with our basic plan or go all-in with complete protection.
          </p>
        </div>

        {/* Pricing Cards */}
        <div>
          {plans.map((plan, index) => (
            <div key={index}>
              {/* Popular Badge */}
              {plan.popular && (
                <div>
                  <span>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Coming Soon Badge */}
              {plan.comingSoon && (
                <div>
                  <span>
                    Coming Soon
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div>
                  <div>
                    {plan.name.charAt(0)}
                  </div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  
                  {/* Price */}
                  <div>
                    <span>{plan.price}</span>
                    {plan.period && (
                      <span>{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <div>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button disabled={plan.comingSoon}>
                  {plan.comingSoon ? 'Coming Soon' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div>
          <p>
            All plans include a 7-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
