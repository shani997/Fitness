import React, { useState, useEffect } from 'react';
import logo from '../../assests/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../Data/NavData';
import Modal from '../Modal/Modal';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,

} from './NavbarElements';

function Navbar() {

    const [showModal, setShowModal] = useState(false);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [setShow] = useState(false);

    let history = useHistory();
    let location = useLocation();

    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        setShowModal(!showModal);
    };

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }

        history.push(to);
        setShow(false);
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" src={logo} />
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu >
                            {data.map((el, index) => (
                                <NavItem key={index}>
                                    <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                                        {el.text}
                                    </NavLinks>
                                </NavItem>
                            ))}
                            <NavItem>
                                <NavLinks onClick={toggleModal}>
                                    Log In
                                </NavLinks>

                            </NavItem>
                            <NavItemBtn>

                                {button ? (
                                    <NavBtnLink to="/signup">
                                        <Button>Join</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/signin">
                                        <Button fontBig>Join</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
            <Modal showModal={showModal} toggleModal={toggleModal} />
        </>
    );
}

export default Navbar;