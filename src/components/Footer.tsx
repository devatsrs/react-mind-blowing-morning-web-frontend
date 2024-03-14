import React from "react";
import _footer from "./_footer.module.scss";
import _common from "../assets/styles/_common.module.scss";
import footerLogo from "../assets/images/footer-logo.png";

function Footer(props) {
  return (
    <footer>
      <div id={_footer.footerOuterGrid}>
        <div
          className={
            _footer.logo + " " + _footer.column + " " + _common.hideInMobile
          }
        >
          <div className={_footer.wrapper}>
            <a href="#">
              <img src={footerLogo} alt="Ashutosh Creation Logo" />
              <div className={_footer.tagline}>
                Clear your thoughts, Focus your mind, and Reduce stress!
              </div>
            </a>
          </div>
        </div>
        <div className={_footer.navLinks + " " + _footer.column}>
          <div className={_footer.innerCol}>
            <h4 className={_footer.title}>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
            </ul>
          </div>
          <div className={_footer.innerCol}>
            <h4 className={_footer.title}>Company</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
            </ul>
          </div>
          <div className={_footer.innerCol}>
            <h4 className={_footer.title}>Futher Infomration</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={_footer.socialMedia + " " + _footer.column}>
          <div className={_footer.wrapper}>
            <h4 className={_footer.title}>Need help?</h4>
            <div className={_footer.form}>
              <form action="">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
                <input type="submit" name="submit" className={_common.cta} />
              </form>
            </div>
            <div className={_footer.socialIcons}>
              <ul>
                <li>
                  <a
                    href="#"
                    className={_footer.icon + " " + _footer.insta}
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className={_footer.icon + " " + _footer.twitter}
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className={_footer.icon + " " + _footer.facebook}
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul id={_footer.footerCopyright} className={_common.hideInMobile}>
        <li>&copy; Copyright 2023</li>
        <li>MindBlowing Mornings</li>
        <li>All rights reserved</li>
      </ul>
    </footer>
  );
}

export default Footer;
