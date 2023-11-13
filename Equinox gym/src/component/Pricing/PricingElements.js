import styled from 'styled-components';

export const PricingSection = styled.div`
	padding: 60px 0px;
	display: flex;
	flex-direction: column;
    background-color:#0b0b0b ;
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
   
	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
     
	> div {
		margin: 0.7rem;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCard = styled.div`
	justify-content: center;
	align-items:center;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PricingCardInfo = styled.div`
	background: rgba(255,255,255,0.07);
    width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px;
	color:  ${(props) => (props.theme.color.light)};
	margin: auto;
	justify-content: center;
	align-items:center;
	
	> button {
		margin-top: auto;
        align-items: center;
        justify-content: center;
		&:hover {
			
		    transition: background-color 0.3s ;
            cursor: pointer;
		}
	}

    &:hover{
        background: rgb(24,24,24);
        background: linear-gradient(0deg, rgba(24,24,24,0.6) 40%, rgba(252,252,252,0) 60%);
    }
	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 1.7rem;

    color:#6456db;
	
`;

export const PricingCardCost = styled.h4`
	font-size: .8rem;
    text-align:center;
`;

export const PricingCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: ${(props) => (props.theme.color.alt)};
	
	
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;
	&:before {
		content: '-';
		margin-right: 0.4rem;
	}
`;