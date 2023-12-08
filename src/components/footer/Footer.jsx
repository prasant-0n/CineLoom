import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          <p>
            Unlock a world of cinematic wonders at cineLoom. Immerse yourself in
            trending sensations, discover top-rated gems, and anticipate
            upcoming masterpieces. Our user-friendly platform ensures an
            unparalleled movie adventure, personalized just for you. Join us and
            explore the magic of storytelling like never before !
          </p>
        </div>
        <div className="socialIcons">
          <span className="fb_icon">
            <FaFacebookF />
          </span>
          <span className="Insta_icon">
            <FaInstagram />
          </span>
          <span className="twit_icon">
            <FaTwitter />
          </span>
          <span className="linkedIn_icon">
            <FaLinkedin />
          </span>
        </div>
        <div className="copywrite">
          <p>© Copyright 2023 Company</p>
          <p> All rights reserved</p>
          <p>
            Designed by ~ <span> prashant</span>
          </p>
        </div>
        <div className="privecy">
          <ul className="privacyLinks">
            <li>
              <a href="#" className="privacyLink">
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="privacyLink">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

// <div className="footerBottom">
//   <p className="copyrightText">
//     © Copyright 2023 Company. All rights reserved.
//   </p>
//   <p className="designerText">Designed by prashant</p>
// <ul className="privacyLinks">
//   <li>
//     <a href="#" className="privacyLink">
//       Privacy &amp; Cookies Policy
//     </a>
//   </li>
//   <li>
//     <a href="#" className="privacyLink">
//       Disclaimer
//     </a>
//   </li>
// </ul>
// </div>
