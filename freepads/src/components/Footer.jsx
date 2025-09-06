import EmailForm from './EmailForm';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          {/* Logo and Description */}
          <div>
            <div>
              <h3>
                Pads App
              </h3>
              <p>
                Never get caught unprepared again. Find free tampon and pad stations instantly with our app, and stay safe with AI-powered protection.
              </p>
            </div>

            {/* Waitlist Form */}
            <div>
              <h4>Join the Waitlist</h4>
              <EmailForm 
                buttonText="Join Waitlist"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#plans">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#problem-solution">
                  About Us
                </a>
              </li>
              <li>
                <a href="#hero">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@padsapp.com
              </li>
              <li>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Available worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div>
          <div>
            <p>
              © 2024 Pads App. All rights reserved.
            </p>
            <div>
              <a href="#">
                Privacy Policy
              </a>
              <a href="#">
                Terms of Service
              </a>
              <a href="#">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
