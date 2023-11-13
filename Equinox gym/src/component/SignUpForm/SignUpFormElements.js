import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	background-color:#0b0b0b ;
	padding: 160px 0;
	
`;

export const FormTitle = styled.h1`
	 padding-bottom: .1rem;
  font-size: 40px;
	font-weight: 600;
  color:  ${(props) => (props.theme.color.light)};
`;

export const FormContainer = styled.div`
	display: flex;
	
`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 20px 40px 40px 40px;
	background: rgba(255,255,255,0.07);
	border: 20px;
	
	flex: 1;
	max-width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	flex-direction: column;

	
	
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
	//display: flex;
	//flex-direction: column;
	> button {
		margin-top: auto;
        align-items: center;
        justify-content: center;
		
		
	}

`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;
	
	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: .3px solid #494863;
	font-size: 1rem;
	background: none;
	color:#fff;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	/* color: #fff; */
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: black;
	}
`;

export const FormText = styled.p`
	font-size:.8rem;
	max-width: 100%;
	color:#afafaf;
	padding-top: 20px;
    align-items: center;
    justify-content: center;
	display: flex;
`;

export const Link = styled.p`
	font-size:.8rem;
	max-width: 100%;
	color:#6456db;
	padding-left: 10px;
    align-items: center;
    justify-content: center;
	cursor: pointer;
`;