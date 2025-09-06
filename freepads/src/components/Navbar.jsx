const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          {/* Logo */}
          <div>
            <div>
              <h1>
                Pads App
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div>
              <a href="#how-it-works">
                How It Works
              </a>
              <a href="#plans">
                Plans
              </a>
              <a href="#problem-solution">
                About
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div>
            <button>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
