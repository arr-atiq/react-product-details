import React from 'react';
import './AnimateCounter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faBox, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';


const AnimateCounter = () => {
   
        var happy = setInterval(happyCustomer, 10)
        var book = setInterval(bookCollection, 10)
        var store = setInterval(ourStore, 10)
        var writers = setInterval(famousWriter, 10)
        let count1 = 125000;
        let count2 = 50000;
        let count3 = 1100;
        let count4 = 100;

        function happyCustomer() {
            count1++
            document.querySelector("#number1").innerHTML = count1
            if (count1 === 125663) {
                clearInterval(happy)
            }
        }

        function bookCollection() {
            count2++
            document.querySelector("#number2").innerHTML = count2
            if (count2 === 50672) {
                clearInterval(book)
            }
        }

        function ourStore() {
            count3++
            document.querySelector("#number3").innerHTML = count3
            if (count3 === 1562) {
                clearInterval(store)
            }
        }

        function famousWriter(){
            count4++
            document.querySelector("#number4").innerHTML = count4
            if (count4 === 457) {
                clearInterval(writers)
            }
        }

        
            return (
                <div>
                    <div class="project-counter">
                        <ul>
                            <li>
                                <i><FontAwesomeIcon icon={faUser} /></i>
                                <p id="number1" class="number">125,663</p>
                                <span></span>
                                <p>Happy Customers</p>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faBookOpen} /></i>
                                <p id="number2" class="number">50672+</p>
                                <span></span>
                                <p>Book Collections</p>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faBox} /></i>
                                <p id="number3" class="number">1562</p>
                                <span></span>
                                <p>Our Stores</p>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faFeatherAlt} /></i>
                                <p id="number4" class="number">457</p>
                                <span></span>
                                <p>Famous Writers</p>
                            </li>
                        </ul>
                    </div>
                </div>
            );
 };
 
 export default AnimateCounter;