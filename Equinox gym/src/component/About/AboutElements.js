import styled from 'styled-components';

export const AboutSection = styled.div`
    color:#fff;
    background-color: ${(props) => (props.theme.color.primary)};
    display: flex;
    padding:60px 16px;
    flex-wrap: wrap;
    align-items: center;
    height:100%;
    width: 100%;
    flex-direction: column;
    
`;
export const AboutTextWrapper = styled.div`
	
	padding: 0 0 20px;
	text-align: center;
   max-width: 100%;
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   
`;
export const AboutTitle = styled.div`
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

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 12px;
`;
