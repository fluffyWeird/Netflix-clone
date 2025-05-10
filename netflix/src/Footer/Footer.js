import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        
        {/* Social Media Icons */}
        <div className="footer_icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>

        {/* Footer Links */}
        <div className="footer_data">
          {[
            ['Audio Description', 'Investor Relations', 'Legal Notice'],
            ['Help Center', 'Jobs', 'Cookie Preferences'],
            ['Gift', 'Terms of Use', 'Corporate Information'],
            ['Media Center', 'Privacy', 'Contact Us']
          ].map((column, index) => (
            <div key={index}>
              <ul>
                {column.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 Netflix, BY Rstey tega.</p>
      </div>
    </div>
  );
};

export default Footer;