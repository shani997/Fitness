import React, { useRef } from 'react'
import logo from '../../assests/logo.png';
import { Button, Container } from '../../globalStyles'
import { IconContext } from 'react-icons/lib';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

import {

    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLogo,
    FooterSec,
    FooterRight,
    FooterLeft,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    FooterRow,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    WebsiteRight,

} from './FooterElements';
const Footer = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l4rzoee', 'template_axrtazh', form.current, 'uwNgsY6kfN0Y4c7cX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <IconContext.Provider value={{
            color: '#fff',
            size: 18
        }}>
            <FooterSec>
                <Container>
                    <FooterRow>
                        <FooterLeft>

                            <FooterSubHeading>

                                <FooterLogo to="/" src={logo} />
                            </FooterSubHeading>
                            <FooterSubText>Get back to the gym and back to your best with us. Our sparkling clean gyms are waiting for you, with thousands of square feet of premium strength and cardio equipment, turf zones, lap pools, steam rooms and more. And with expert coaching and our app at the ready</FooterSubText>
                            <FooterSubscription>Come in and get the best part of your day</FooterSubscription>
                            <Form ref={form} onsubmit={sendEmail}>
                                <FormInput name="user_email" type="email" placeholder="Your Email" />
                                <Button fontBig>Subscribe</Button>

                            </Form>

                        </FooterLeft>

                        <FooterRight>
                            <FooterLinksContainer>
                                <FooterLinksWrapper>
                                    <FooterLinksItems>
                                        <FooterLinksTitle>About</FooterLinksTitle>
                                        <FooterLink to='/'>About us</FooterLink>
                                        <FooterLink to='/'>Investment</FooterLink>
                                        <FooterLink to='/'>Process</FooterLink>
                                        <FooterLink to='/'>Case studies</FooterLink>

                                    </FooterLinksItems>

                                    <FooterLinksItems>
                                        <FooterLinksTitle>Supports</FooterLinksTitle>
                                        <FooterLink to='/'>Contact us</FooterLink>
                                        <FooterLink to='/'>Snap Nation</FooterLink>
                                        <FooterLink to='/'>Careers</FooterLink>
                                        <FooterLink to='/'>FAQ</FooterLink>

                                    </FooterLinksItems>

                                    <FooterLinksItems>
                                        <FooterLinksTitle>Our policy</FooterLinksTitle>
                                        <FooterLink to='/'>Terms of Use</FooterLink>
                                        <FooterLink to='/'>Membership</FooterLink>
                                        <FooterLink to='/'>In-Club</FooterLink>


                                    </FooterLinksItems>
                                </FooterLinksWrapper>
                            </FooterLinksContainer>

                        </FooterRight>

                    </FooterRow>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <WebsiteRight>© 2021 EQUINOX All right reserved</WebsiteRight>
                            <SocialIcons>
                                <SocialIconLink href='/' target="_Blank" area-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_Blank" area-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_Blank" area-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_Blank" area-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_Blank" area-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </Container>
            </FooterSec>
        </IconContext.Provider>
    )
}

export default Footer