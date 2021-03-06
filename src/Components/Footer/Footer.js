import React from 'react';
import './Footer.css';
import image from '../../Images/card.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBookOpen, faMapMarkerAlt, faPhoneAlt, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <h1><i><FontAwesomeIcon icon={faPlus} /></i>Book Categories</h1>
            <div className="categories-section">
                <div className="all-categories">
                    <p>Architecture</p>
                    <p>Art</p>
                    <p>Action</p>
                    <p>Biography & Autobiography</p>
                    <p>Body, Mind & Spirit</p>
                </div>
                <div className="all-categories">
                    <p>Business & Economies</p>
                    <p>Children Fiction</p>
                    <p>Children Non-Fiction</p>
                    <p>Comics & Graphic Novels</p>
                    <p>Cooking</p>
                </div>
                <div className="all-categories">
                    <p>Crafts & Hobbies</p>
                    <p>Design</p>
                    <p>Drama</p>
                    <p>Education</p>
                    <p>Family & Relationships</p>
                </div>
                <div className="all-categories">
                    <p>Fiction</p>
                    <p>Foreign Language Study</p>
                    <p>Games</p>
                    <p>Gardening</p>
                    <p>Health & Fitness</p>
                </div>
                <div className="all-categories">
                    <p>History</p>
                    <p>House & Home</p>
                    <p>Humor</p>
                    <p>Literary Collections</p>
                    <p>Mathematics</p>
                </div>
                <div className="all-categories">
                    <p>Medical</p>
                    <p>Nature</p>
                    <p>Performing Arts</p>
                    <p>Pets</p>
                    <p>Show Others</p>
                </div>
            </div>

            <div className="about-author">
                <div className="all-info">
                    <div className="footer-brand">
                        <i className="icon"><FontAwesomeIcon icon={faBookOpen} /> </i>
                        <h1>Book<span>land</span></h1>
                    </div>
                    <h6>Book Store Website</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum placeat nam nemo reprehenderit, quidem sapiente ex recusandae voluptate odit dolorem molestias assumenda. Porro alias asperiores laudantium. Accusamus odio dicta quis!</p>
                    <div className="all-icon">
                        <a href="https://www.youtube.com/c/jamesqquick"
                            className="youtube-social">
                            <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </a>
                        <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook-social">
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
                        <a href="https://www.twitter.com/jamesqquick" className="twitter-social">
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://www.instagram.com/learnbuildteach"
                            className="instagram-social">
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                        <a href="https://www.instagram.com/learnbuildteach"
                            className="linkedin-social">
                            <FontAwesomeIcon icon={faLinkedin} size="1x" />
                        </a>
                    </div>
                </div>
                <div className="all-info">
                    <h1>Get in touch with us</h1>
                    <div className="our-info">
                        <h1><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> 832 Thompson Drive, San Fransisco CA 94107, United States</h1>
                        <h1><FontAwesomeIcon icon={faPhoneAlt} size="1x" /> +123 345123566</h1>
                        <h1><FontAwesomeIcon icon={faEnvelope} size="1x" /> support@bookland.id</h1>
                    </div>
                </div>
                <div className="all-info">
                    <h1>Payment Gateway</h1>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="copy-right">
                <p> Bookland Book Store Ecommerce Website- <FontAwesomeIcon icon={faCopyright} size="1x" /> 2021 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;