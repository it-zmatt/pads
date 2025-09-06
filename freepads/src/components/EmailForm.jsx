import { useState } from 'react';

const EmailForm = ({ buttonText = "Join Waitlist", placeholder = "Enter your email" }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateEmail(email)) {
      // Store in localStorage
      const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
      if (!existingEmails.includes(email)) {
        existingEmails.push(email);
        localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));
      }
      
      // Log to console
      console.log('Email added to waitlist:', email);
      console.log('All waitlist emails:', existingEmails);
      
      setIsSubmitted(true);
      setEmail('');
    } else {
      setIsValid(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div>
        <div>
          <p>Thank you! You're on the waitlist.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={placeholder}
          required
        />
        {!isValid && (
          <p>Please enter a valid email address</p>
        )}
      </div>
      <button type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default EmailForm;
