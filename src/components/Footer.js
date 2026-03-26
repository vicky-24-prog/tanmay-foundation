import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom"></div>
      <div className="footer-columns">
        <div className="footer-column">
          <h1>Tanmay foundation.</h1>
          <p>
            Our platform is dedicated in helping farmers, educate rural children
            and empower society that creates equal opportunities for dignified
            life to each and every individual.
          </p>
        </div>
        <div className="footer-column">
          <h3>Navigate</h3>
          <ul>
            <li>Home</li>
            <li>
              <a href="/Gallery" className="no-underline">
                Gallery
              </a>
            </li>
            <li>Media</li>
            <li>Careers</li>
            <li>Certificate</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support Us</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Security</li>
            <li>Center</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>tanmayfoundation17@gmail.com</p>
          <p>
            Address: <br />
            Vill- Jasmanda Gadia Barabanki
            <br />
            Uttar Pradesh 225003
          </p>
        </div>
        <div className="footer-column">
          <h3>Who We Are</h3>
          <p>
            TDF promotes and partners with community institutions to empower
            women, children and marginalized families and enhance and sustain
            their economic and social well-being.
          </p>
        </div>
      </div>
      <div className="social-media-links">
        <h1>Follow Us</h1>
         <a href="https://youtube.com/@tanmaydevelopmentfoundation-ky?si=V3pzRzHzTpn2DZvd"><img src="images/youtube-logo.png" alt="youtube-logo" className="logo-img" /></a> 
         <a href="https://www.facebook.com/profile.php?id=61553108560108&mibextid=ZbWKwL"><img src="images/facebook-logo.png" alt="facebook-logo" className="logo-img" /></a> 
          <a href="https://www.instagram.com/tanmay.foundation?igsh=MThmZmVsaDd4MDd0Zw=="><img src="images/i.png" alt="instagram-logo" className="logo-img" /></a>
          <a href="https://x.com/Tanmayfound8858?t=Wfau1BMsphhvS4ZcNAlGPg&s=09"><img src="images/X-logo.png" alt="X-logo" className="logo-img" /></a>
          <a href="https://www.linkedin.com/company/tanmay-developement-foundation-classes/"><img src="images/linkedin-logo.jpg" alt="Linkedin-logo" className="logo-img" /></a>
      </div>
      <div className="footer-bottom"></div>
      <p className="footer-p">Terms and Conditions, Privacy Policy</p>
    </footer>
  );
}
export default Footer;
