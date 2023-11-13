import React from "react"
import "../css/HeaderFooter.css"

const Footer = () => {
  return (
    <footer className="bg-custom text-custom pt-4">
        <div className="container">
            <div className="row py-4">
            <div className="col-lg-3 col-md-6 mb-3">
                <h5>Tourist Trap</h5>
                <ul className="list-unstyled">
                <li><a href="#" className="footer-link">About Tourist Trap</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">News</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <h5>Follow us</h5>
                <a href="#" className="footer-link me-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="footer-link me-2"><i className="fab fa-instagram"></i></a>
                <a href="#" className="footer-link me-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="footer-link me-2"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="footer-link me-2"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="col-lg-6 col-md-12 text-end mb-3">
                <button type="button" className="btn btn-link text-custom text-decoration-none">
                <i className="fas fa-globe"></i> English
                </button>
            </div>
            </div>
            <div className="container border-top border-custom pt-3">
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-3">
                <a href="#" className="footer-link me-3">Tracking Preferences</a>
                <a href="#" className="footer-link me-3">Terms of Use</a>
                <a href="#" className="footer-link me-3">Program Terms & Conditions</a>
                <a href="#" className="footer-link me-3">Privacy Center</a>
                <a href="#" className="footer-link me-3">Your Privacy Rights</a>
                </div>
                <div className="col-lg-6 col-md-6 text-end mb-3">
                <a href="#" className="footer-link me-3">Digital Accessibility</a>
                <a href="#" className="footer-link me-3">Site Map</a>
                <a href="#" className="footer-link">Help</a>
                </div>
            </div>
            </div>
            <div className="text-center p-3 bg-custom">
            ©2023 Tourist Trap, Inc. All rights reserved.
            </div>
        </div>
    </footer>

  )
}

export default Footer;