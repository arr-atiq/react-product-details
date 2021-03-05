import React from 'react';
import './DetailsProductTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function DetailProductTabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="main-div">
            <div className="row main-row">
                <div className="col-8 product-table">
                    <div className="container">
                        <div className="bloc-tabs">
                            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Details Product</button>
                            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Customer Review</button>
                        </div>
                        <div className="content-tabs">
                            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                                <table>
                                    <tr>
                                        <td>Book Title</td>
                                        <td>Think and Grow Rich</td>

                                    </tr>
                                    <tr>
                                        <td>Author</td>
                                        <td>Napoleon Rich</td>
                                    </tr>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>12134138648(ISBN:12134138648)</td>
                                    </tr>
                                    <tr>
                                        <td>Edition Language</td>
                                        <td>English</td>
                                    </tr>
                                    <tr>
                                        <td>Book Format</td>
                                        <td>Paperback, 450 Pages</td>
                                    </tr>
                                    <tr>
                                        <td>Date Published</td>
                                        <td>August 10th 2019</td>
                                    </tr>
                                    <tr>
                                        <td>Publisher</td>
                                        <td>Giovanni Rovelli</td>
                                    </tr>
                                    <tr>
                                        <td>Tags</td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>

                            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                <h2>Review</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="relatedBooks">
                        <h3>Related books</h3>
                        <div className="sameBook">
                            <div className="box">

                            </div>
                            <div className="infoName">
                               <p>Terrible Madness</p>
                               <span><p>THRILL, DRAMA, HORROR</p></span>
                               <h5>$45.4  <small><s>$98.4</s></small></h5>
                               <button><i className="istar"><FontAwesomeIcon icon={faCartPlus} /></i> Add to Cart</button>
                            </div>
                        </div>
                        <div className="sameBook">
                            <div className="box">

                            </div>
                            <div className="infoName">
                               <p>Terrible Madness</p>
                               <span><p>THRILL, DRAMA, HORROR</p></span>
                               <h5>$45.4  <small><s>$98.4</s></small></h5>
                               <button><i className="istar"><FontAwesomeIcon icon={faCartPlus} /></i> Add to Cart</button>
                            </div>
                        </div>
                        <div className="sameBook">
                            <div className="box">

                            </div>
                            <div className="infoName">
                               <p>Terrible Madness</p>
                               <span><p>THRILL, DRAMA, HORROR</p></span>
                               <h5>$45.4  <small><s>$98.4</s></small></h5>
                               <button><i className="istar"><FontAwesomeIcon icon={faCartPlus} /></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProductTabs;