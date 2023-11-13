import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
    color:#fff;
    background-color: ${(props) => (props.theme.color.primary)};
`;

export const InfoRow = styled.div`
    display: flex;
    margin:0 -15px -15px -15px;
    padding:60px 16px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
    height:100%;
`;

export const InfoColumn = styled.div`
    flex:1;
    margin:0 0 15px ;
    padding:0 15px;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width:768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;

    }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
    
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
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
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color:  ${(props) => (props.theme.color.lightAlt)};
`;

export const Label = styled(Link)`
  text-decoration: none;
 
`;


export const ArrowIcon = styled.div`
    padding : 0 0 0 10px;
  font-size: 1rem;

`;
export const Customer = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    margin:40px 0 0 0;
    display: ${({ iconShow }) => (iconShow ? 'flex' : 'none')};
  
   

`;
export const Icon = styled.img`
  max-width: 90px;
 
  padding: 0 6px 0 0;
  width:90px;
  height:20px;
  opacity:.5;

  &:hover{
    opacity: 1;
  }
   
 @media screen and (max-width: 768px) {
    width:80px;
    height:16px;
  }
`;


export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  transition:transform .25s;
`;

export const Img = styled.img`
  padding: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  transition:transform .25s;
`;




