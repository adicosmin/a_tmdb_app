import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>The Basics</h2>
            <Link to="/sign-up">About TMDB</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Support Forums</Link>
            <Link to="/">API</Link>
          </div>
          <div className="footer-link-items">
            <h2>Get Involved</h2>
            <Link to="/">Contribution Bible</Link>
            <Link to="/">3rd Party Applications</Link>
            <Link to="/">Add New Movie</Link>
            <Link to="/">Add New TV Show</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Community</h2>
            <Link to="/">Guidelines</Link>
            <Link to="/">Discussions</Link>
            <Link to="/">Leaderboard</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div className="footer-link-items">
            <h2>Legal</h2>
            <Link to="/">Terms of Use</Link>
            <Link to="/">API Terms of Use</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src="apple-touch-icon-57ed4b3b0450fd5e9a0c20f34e814b82adaa1085c79bdde2f00ca8787b63d2c4.png" alt='logo'/> 
            </Link>
          </div>

          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/" target="_blank">
              {<FacebookIcon />}
            </Link>
            <Link className="social-icon-link instagram" to="/" target="_blank">
              {<InstagramIcon />}
            </Link>
            <Link className="social-icon-link youtube" to="/" target="_blank">
              {<YouTubeIcon />}
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank">
              {<TwitterIcon />}
            </Link>
            <Link className="social-icon-link linkedin" to="/" target="_blank">
              {<LinkedInIcon />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
