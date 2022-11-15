import React from "react";
import "./index.css";
// import { Link } from 'react-router-dom'
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="footer-head-container d-flex justify-content-between  align-items-center mt-5 mb-5">
              <div className="d-flex">
                <a href="/">
                  <img
                    src="./images/footer-logo.png"
                    className="footer-logo"
                    alt="footer logo"
                  />
                </a>
                <h2 className="ms-3 poppins-font-semibold text-upper footer-head">
                  nom-nom
                </h2>
              </div>

              <div className="d-flex">
                <select>
                  <option>india</option>
                  <option> pakistan</option>
                </select>
                <select>
                  <option>English</option>
                  <option>Japanese</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 footer-links-wrapper">
              <ul className="footer-links-container">
                <li className="footer-link-item">
                  <a href="/" className=" footer-header-link text-upper">
                    about nom-nom
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className=" footer-link">
                    Who We Are
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className=" footer-link">
                    Blog
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className=" footer-link">
                    Work With Us
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className=" footer-link">
                    Investor Relations
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className=" footer-link">
                    Report Fraud
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className=" footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 footer-links-wrapper">
              <ul className="footer-links-container">
                <li className="footer-link-item">
                  <a href="/" className="footer-header-link text-upper">
                    nomverse
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="footer-link">
                    NOM-NOM
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="footer-link">
                    Feeding India
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="footer-link">
                    Hyperpure
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="footer-link">
                    Nomland
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 footer-links-wrapper d-flex flex-column justify-content-between">
              <ul className="footer-links-container">
                <li className="footer-link-item">
                  <a
                    href="/"
                    className="poppins-font-regular footer-header-link text-upper"
                  >
                    for restaurants
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    Partner With Us
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    Apps For You
                  </a>
                </li>
              </ul>

              <ul className="footer-links-container">
                <li className="footer-link-item">
                  <a
                    href="/"
                    className="poppins-font-regular footer-header-link text-upper"
                  >
                    for enterprises
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    NOM-NOM For Work
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-2 footer-links-wrapper">
              <ul className="footer-links-container">
                <li className="footer-link-item">
                  <a
                    href="/"
                    className="poppins-font-regular footer-header-link text-upper"
                  >
                    learn more
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    Privacy
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    Security
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    Terms
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/" className="poppins-font-regular footer-link">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 footer-links-wrapper">
              <ul className="footer-links-container">
                <li>
                  <a
                    href="/"
                    className="poppins-font-regular footer-header-link text-upper"
                  >
                    social links
                  </a>
                </li>

                <ul className="footer-icons-container d-flex">
                  <li className="footer-icon-item">
                    <a href="/" className="footer-icon">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="footer-icon-item">
                    <a href="/" className="footer-icon">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="footer-icon-item">
                    <a href="/" className="footer-icon">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="footer-icon-item">
                    <a href="/" className="footer-icon">
                      <FaYoutube />
                    </a>
                  </li>
                  <li className="footer-icon-item">
                    <a href="/" className="footer-icon">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
                <li className="mt-4">
                  <a href="/">
                    <img src="./images/google-play.png" alt="play store" />
                  </a>
                </li>
                <li className="mt-3">
                  <a href="/">
                    <img src="./images/apple-store.png" alt="apple store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
