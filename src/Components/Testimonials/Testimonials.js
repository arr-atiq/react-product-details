import React from 'react';
import './Testimonials.css';
import image from '../../Images/gray.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testi-title">
                <h1>Testimonials</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti est laborum harum dolores quas, laboriosam nobis vel nam dolorum?</p>
            </div>
            <div className="testimonials-says">
                <div className="testi-div">
                    <div className="testi-icon">
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <p>Lorem, ipsum dolor sit onsectetur adipisicing elit. Fugiat, labore.</p>
                    <div className="testi-author">
                        <img src={image} alt=""/>
                        <div className="author-title">
                            <h4>Jason Huang</h4>
                            <small>Book Lovers</small>
                        </div>
                    </div>
                </div>
                <div className="testi-div">
                    <div className="testi-icon">
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <p>Lorem, ipsum dolor sit onsectetur adipisicing elit. Fugiat, labore.</p>
                    <div className="testi-author">
                        <img src={image} alt=""/>
                        <div className="author-title">
                            <h4>Jason Huang</h4>
                            <small>Book Lovers</small>
                        </div>
                    </div>
                </div>
                <div className="testi-div">
                    <div className="testi-icon">
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <p>Lorem, ipsum dolor sit onsectetur adipisicing elit. Fugiat, labore.</p>
                    <div className="testi-author">
                        <img src={image} alt=""/>
                        <div className="author-title">
                            <h4>Jason Huang</h4>
                            <small>Book Lovers</small>
                        </div>
                    </div>
                </div>
                <div className="testi-div">
                    <div className="testi-icon">
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <p>Lorem, ipsum dolor sit onsectetur adipisicing elit. Fugiat, labore.</p>
                    <div className="testi-author">
                        <img src={image} alt=""/>
                        <div className="author-title">
                            <h4>Jason Huang</h4>
                            <small>Book Lovers</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;