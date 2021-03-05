import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Dropdown} from 'react-bootstrap';

const Header = () => {
    return (
        <main className="all-navItems">
            <div className="navBrand">
                <i className="icon"><FontAwesomeIcon icon={faBookOpen} /> </i>
                <h1>Book<span>land</span></h1>
            </div>
            <div class="wrapper">
                <div class="search_box">
                    <Dropdown className="menus" id="basic-nav-dropdown">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Menus
                         </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/book">Books</Dropdown.Item>
                            <Dropdown.Item href="/literature">Literature</Dropdown.Item>
                            <Dropdown.Item href="/author">Author</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div class="search_field">
                        <input type="text" class="input" placeholder="Search books here" />
                        <i class="fas"><FontAwesomeIcon icon={faSearch} /></i>
                    </div>
                </div>
                <div className="main-btn">
                    <Button id="navLoginBtn" variant="light">Login</Button>{' '}
                    <Button id="navSignUpBtn" variant="warning">Sign Up</Button>{' '}
                </div>
            </div>
            </main>
    );
};

export default Header;