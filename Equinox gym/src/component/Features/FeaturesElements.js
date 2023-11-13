import styled from 'styled-components';
import { motion } from 'framer-motion';


export const FeatureSection = styled.div`
	 color:#fff;
    background-color: ${(props) => (props.theme.color.primary)};
    display: flex;
    padding:60px 16px;
    flex-wrap: wrap;
    align-items: center;
    height:100%;
	
    
`;
export const FeatureTextWrapper = styled.div`
	
	padding: 0 0 20px;
	text-align: center;
   max-width: 100%;
   display: flex;
  align-items: center;
  justify-content: center;
  
   
`;
export const FeatureTitle = styled.div`
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




export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: .5rem;
	grid-gap: 2rem;
  

  
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;


export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: rgba(255,255,255,0.07);
	padding: 20px;
	box-shadow: 0 0 40px rgba(8,7,16,0.6);
	border-radius: 10px;
  backdrop-filter: blur(10px);
  border:2px slid rgba(255,255,255,0.1);

  &:hover{
background: rgb(24,24,24);
background: linear-gradient(0deg, rgba(24,24,24,0.6) 0%, rgba(252,252,252,0) 100%);
	cursor: pointer;
  }
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
  padding: 20px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;