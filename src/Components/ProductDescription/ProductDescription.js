import React from 'react';
import './ProductDescription.css';
import image from '../../Images/gray.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCartPlus, faCommentDots, faHeart, faShieldAlt, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faUsps } from "@fortawesome/free-brands-svg-icons";

const ProductDescription = () => {
    return (
        <div className="main-description">
            <div className="product-allInfo">
                <img src={image} alt="" />
                <div className="user-product-des">
                    <div className="product-description">
                        <div className="review-author">
                            <h1>Think and grow</h1>
                            <div className="div-icon">
                                <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                <i className="iblank"><FontAwesomeIcon icon={faStar} /></i>
                                <h5 className="countN">4.8</h5>
                            </div>
                            <div className="div-all-author">
                                <img src={image} alt="" />
                                <div className="div-first-author">
                                    <p><small>Written By</small></p>
                                    <h3>Napoleon Rich</h3>
                                </div>
                                <div className="div-first-author">
                                    <p><small>Publisher</small></p>
                                    <h3>Printarea Studios</h3>
                                </div>
                                <div className="div-first-author">
                                    <p><small>Year</small></p>
                                    <h3>2021</h3>
                                </div>
                            </div>
                        </div>
                        <div className="product-icon">
                            <div className="icon-shipping">
                                <div className="div-like">
                                    <p><i className="imessenge"><FontAwesomeIcon icon={faCommentDots} /></i>235 Review</p>
                                    <p><i className="ithumbs"><FontAwesomeIcon icon={faThumbsUp} /></i>256 Like</p>
                                </div>
                                <div className="div-social">
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
                                </div>
                            </div>
                            <div className="div-button">
                                <button><i><FontAwesomeIcon icon={faBolt} size="2x" /></i> FREE SHIPPING</button>
                                <button className="stock"><i><FontAwesomeIcon icon={faShieldAlt} size="2x" /></i> IN STOCK</button>
                            </div>
                        </div>
                    </div>
                    <div className="last-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur, accusamus, atque quaerat architecto totam ad qui ab voluptate id aut placeat. Nobis fugit natus perferendis sint cupiditate minima delectus omnis vero repudiandae beatae libero ab expedita dolore animi ipsum alias, sequi voluptates debitis quasi, pariatur in aspernatur maxime deserunt?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, deleniti quaerat quae tempora in temporibus cupiditate necessitatibus reprehenderit alias fugiat ad maiores reiciendis sequi excepturi tempore dolor enim nisi beatae eius perspiciatis? Voluptas nihil quis voluptates quos a consectetur, deleniti quisquam dolorum expedita facere et.</p>
                    </div>
                    <div className="productPB">
                        <div className="priceBtn">
                            <h3>$15.63</h3>
                            <p><s>$16.99</s></p>
                            <p className="percentP">1%</p>
                        </div>
                        <div className="productCartBtn">
                            <button className="minus">-</button>
                            <input type="text" value="1" />
                            <button className="plus">+</button>
                        </div>
                        <button className="addCartBtn"><i><FontAwesomeIcon icon={faCartPlus} size="2x" /></i> Add to Cart</button>
                        <i className="heartIcon"><FontAwesomeIcon icon={faHeart} size="2x" /></i>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDescription;