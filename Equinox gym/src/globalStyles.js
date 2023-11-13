// short form for import styled from "styled-components" and import {createGlobalStyle} from "styled-components"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto','sans-serif';
  
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding:0 50px;
  
 
  @media screen and (max-width: 991px) {
    padding:0 30px;
  }
`;

export const Button = styled.button`
  border-radius:50px;
  background:  #6456db;           //if you want use 2 colors ${({ alt }) => (alt ? '##6456db' : "#ffff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #ffff;
  font-weight: 300;
  letter-spacing: 1px;
  font-size:  ${({ fontBig }) => (fontBig ? '16px' : '12px')};
  border:none;
  cursor: pointer;
  display: flex;
  

 


  &:hover{
    transition:all 0.3s ease-out;
    transform:scale(0.95,0.95);
  }

   @media screen and (max-width: 960px) {
    width:100%;
    justify-content: center;

  }

`;
export const TextWrapper = styled.div`
	padding: 0 0 20px;
	text-align: center;
   max-width: 100%;
   display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
   max-width: 60%;
   
   @media screen and (max-width:760px){
   max-width: 80%;
   }
   
`;



export const TopLine = styled.div`
  color: ${(props) => (props.theme.color.secondary)};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  

   &:hover{
    color:#6456db;
    cursor: pointer;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  color:  ${(props) => (props.theme.color.light)};
`;

export const Subtitle = styled.p`
  
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color:  ${(props) => (props.theme.color.lightAlt)};
`;

export default GlobalStyle