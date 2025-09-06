import EmailForm from './EmailForm';

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          {/* Main Headline */}
          <h1>
            Never get caught
            <span>
              unprepared again.
            </span>
          </h1>

          {/* Subheadline */}
          <p>
            Find free tampon and pad stations instantly with our app.
            <span>
              Stay prepared, stay confident, stay safe.
            </span>
          </p>

          {/* CTA Form */}
          <div>
            <EmailForm 
              buttonText="Join Waitlist"
              placeholder="Enter your email address"
            />
          </div>

          {/* Trust indicators */}
          <div>
            <div>
              <div></div>
              <span>Free to join</span>
            </div>
            <div>
              <div></div>
              <span>No spam, ever</span>
            </div>
            <div>
              <div></div>
              <span>Early access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
