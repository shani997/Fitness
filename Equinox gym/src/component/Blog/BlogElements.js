import styled from 'styled-components';

export const CarouselSection = styled.div`
    color:#fff;
	background-color: ${(props) => (props.theme.color.primary)};
	padding: 60px 16px;
`;
export const ArticleSection = styled.div`
    color:#fff;
	background-color: ${(props) => (props.theme.color.primary)};
	width:100%;
	margin-bottom: 30px;
   	display: flex;

	 @media screen and (max-width: 850px) {
		display:flex;
		width:100%;
		flex-direction:column;
		justify-content:center;
	}
`;


export const Featured = styled.div`
    padding-bottom:20px ;
	width:75%;
	display:grid;
	grid-template-columns: repeat(3,1fr);
	
	
	
	
	 @media screen and (max-width: 850px) {
		display:flex;
		width:100%;
		margin-bottom: 210px;
		flex-direction:column;
		justify-content:center;
	}

	
`;




export const ImageWrapper = styled.div`
	position:relative;
	min-height:30rem;
	padding:10px;
	
	@media screen and (max-width: 850px) {
		height:30rem;
	}
`;
export const CarouselImage = styled.img`
	//position: absolute;
	object-fit:cover;
	transition:transform .25s;
	height:100%;
	width:100%;
`;

export const ContentCatogory = styled.div`
	position: absolute;
	top:1rem;
	right:1rem;
	padding: 1rem;
	font-size:1rem;
	color:#fff;
	background-color: ${(props) => (props.theme.color.primary)};
`;




export const ContentWrapper = styled.div`
	position: absolute;
	bottom:0;
	left:0;
	padding: 10px;
	z-index:10;
	width:100%;
	
`;

export const ContentDetails = styled.div`
	padding: 20px ;
	background-color:rgba(0, 0, 0, .75);

	 &:hover{
	background-color: ${(props) => (props.theme.color.primary)};
    color:#fff;
    
  }

  @media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;

export const ContentData = styled.div`
	font-size: .8rem;
	display:flex;
	justify-content:space-between;
	padding:0 0 10px 0;
	
`;
export const Date = styled.div`
	font-size: .8rem;
	padding:0 20px 0 0;
	
`;
export const Time = styled.div`
	font-size: .8rem;
	color:#6456db;
	padding:0 0 0 20px;
	
`;
export const ContentTitle = styled.div`
	font-size: 1.2rem;
	color: #fff;
	padding: 8px 0px;
`;
export const Content = styled.div`
	font-size: .8rem;
	
`;



export const CardButton = styled.div`
	
	font-size: .9rem;
	color:  ${(props) => (props.theme.color.lightAlt)};
	padding: 10px 0;
	cursor: pointer;
	font-weight: 500;
	margin: auto 0 0 0;
	border: none;
	text-align: left;

	 &:hover{
    color:#6456db;
    
  }

`;


export const Trending = styled.div`
   width:30%;
	height:30rem;

  @media screen and (max-width: 850px) {
		display:flex;
		width:100%;
		margin-bottom: 210px;
		flex-direction:column;
		justify-content:center;
	}
 
`;


export const SideWrapper = styled.div`
    padding: 10px;
	min-height:6rem;
  	display: flex;
	width: 100%;
	&:hover{
		transform:scale(1.05);
		transition: transform .5s;
	}
`;
export const ContentImage = styled.img`
    
	width: 30%;
	
	object-fit:cover;
	transition:transform .25s;
`;
export const SideContentWrapper = styled.div`
   
	bottom:0;
	left:0;
	padding:0 10px;
	background-color: ${(props) => (props.theme.color.primary)};
	z-index:10;
	width:70%;
	
	
	transition:background-color .5s;

 
	
`;
export const SideTitle = styled.div`
	font-size: .8rem;
	color: #fff;
	padding-bottom: 8px ;
`;
export const SideContent = styled.div`
	font-size: .6rem;
	
`;



export const SideCardButton = styled.div`
	
	font-size: .7rem;
	color:  ${(props) => (props.theme.color.lightAlt)};
	padding: 10px 0;
	cursor: pointer;
	font-weight: 500;
	margin: auto 0 0 0;
	border: none;
	text-align: left;

	 &:hover{
    color:#6456db;
    
  }

`;

export const CropCardSection = styled.div`
	
	width:100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap:20px;
	
	
`;


export const CropCard = styled.div`
	position:relative;
	width:100%;
	background: rgba(255,255,255,0.07);
	padding: 20px;
	height:150px;
	
	&:hover{
		transform:scale(1.05);
		transition: transform .5s;
	}
	
`;
export const CardName = styled.div`
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
`;