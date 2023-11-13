import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselSection = styled.div`
    color:#fff;
	background-color: ${(props) => (props.theme.color.primary)};
	padding: 60px 16px;
`;
export const ImageSection = styled.div`
   width: 100%;
   transition:transform .25s;
  
`;
export const CarouselImage = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
	vertical-align: middle;
	position: relative;
	transition:transform .25s;
	
`;
export const CarouselImageContent = styled.div`
 
    color: #fff;
	position: absolute;
	top:20px;
	width: 60px;
	height:75px ;
	padding: 16px;
	transition:transform .25s;
	&:hover{
		transform:scale(1.05);
		transition: transform .5s;
	}
		`;
export const CarouselCard = styled.div`


	position: absolute;
	opacity: .3;
	top:20px;
	width: 60px;
	height:75px ;
	padding: 16px;
	text-align: center;
	background-color: ${(props) => (props.theme.color.lightAlt)};
	margin: 10px;
	transition:transform .25s;
`;

export const ImageWrapper = styled.div`
	width: 80%;
	display: flex ;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	outline: none;
	height: 430px;
	color:  ${(props) => (props.theme.color.lightAlt)};
	transition:transform .25s;
	
`;


export const ContentWrapper = styled.div`
text-align: left;
padding: 8px 0px;

`;

export const ContentTitle = styled.div`
	font-size: 1.2rem;
	color: #fff;
	padding: 8px 0px;
`;
export const Content = styled.div`
	font-size: .8rem;
	
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content:flex-end;
	font-size:.2px;
	cursor: pointer;
	padding: 0 8px ;

	
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;
	
	.slick-track {
		display: flex;
		justify-content: space-between;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
		padding: 16px;
		
	}
	.slick-list {
		overflow: hidden;
		
	}
`;

export const CardButton = styled.button`
	background-color: ${(props) => (props.theme.color.primary)};
	font-size: .9rem;
	color:  ${(props) => (props.theme.color.lightAlt)};
	padding: 10px 0;
	cursor: pointer;
	width: 100%;
	font-weight: 500;
	margin: auto 0 0 0;
	border: none;
	text-align: left;

	 &:hover{
    color:#6456db;
    cursor: pointer;
  }

`;

