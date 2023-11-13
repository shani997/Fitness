import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterSec = styled.div`
  background-color: ${(props) => (props.theme.color.primary)};
 

   
  `
export const FooterRow = styled.div`
  background-color: ${(props) => (props.theme.color.primary)};
  display: flex;
  flex-direction:row;
  margin:0 -15px -15px -15px;
  padding:60px 16px;
  align-items: center;
  height:100%;
 
    @media screen and (max-width: 820px) {
    display: block;
  }
   
  `;

export const FooterLeft = styled.div`
   flex:1;
    margin:0 0 15px ;
    padding:0 15px;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width:768px){
        max-width: 100%;
        flex-basis: 100%;
      justify-content: center;

    }

       @media screen and (max-width: 820px) {
        max-width: 100%;
        flex-basis: 100%;
      align-items: center;
  }
`;
export const FooterRight = styled.div`

    align-items:center;
    justify-content: space-between;
    flex:1;
    margin:0 0 15px ;
    padding:0 15px;
   
  

   @media screen and (max-width:768px){
        max-width: 100%;
 
    }

`;

export const FooterSubscription = styled.section`
   color:  ${(props) => (props.theme.color.lightAlt)};
   margin:25px 0;
`;

export const FooterSubHeading = styled.p`
  
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  
    color:  ${(props) => (props.theme.color.lightAlt)};
  
`;

export const FooterLogo = styled.img`

    
    cursor: pointer;
    width:9rem;
    height:1.3rem;
    display: flex;
    

  
`;

export const Form = styled.form`
  display: flex;
 
 
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 400px;
  &::placeholder {
    color: ${(props) => (props.theme.color.secondary)};
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
 
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }

`;

export const FooterLinksWrapper = styled.div`
  display: flex;
   justify-content: space-between;
 

`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  text-align: left;
  color: #fff;
  font-weight:300;

  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinksTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
 color:  ${(props) => (props.theme.color.lightAlt)};
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #6456db;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  display: flex;
   padding: 60px 16px;
  width: 100%;
  font-size:.8rem;
  color:#fff;

   @media screen and (max-width: 960px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
 
`;

export const SocialMediaWrap = styled.div`
  padding:0 10px;
   display: flex;
   justify-content: space-between;
   width: 100%;
   align-items: center;

    @media screen and (max-width: 960px) {
    margin: 0;
    padding: 5px;
    width: 100%;
  }
 
   
`;
export const WebsiteRight = styled.div`
   
  letter-spacing: 1.1px;
  font-weight: 300;
`;
export const SocialIcons = styled.div`
 
  width:25%;
  display: flex;
  justify-content: space-between;
 

    @media screen and (max-width: 960px) {
    margin: 0;
    padding: 6px;
   
  }
`;

export const SocialIconLink = styled(Link)`
  
 

  &:hover{
     color: #6456db;
    transition: 0.3s ease-out;
  }
`;


