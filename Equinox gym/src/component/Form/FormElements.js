import styled from 'styled-components';
import { motion } from 'framer-motion';


export const FormSection = styled.div`
	padding: clamp(10px, 10vh, 40px) 0;
	border-radius: 4px;
	width: 100%;
    background-color:#0b0b0b ;
       
`;

export const FormTitle = styled.h1`
	margin-bottom: 2rem;
	font-size: 2rem;
	color:  ${(props) => (props.theme.color.light)};
	font-weight: 600;
       
`;

export const FormContainer = styled.div`
	//display: flex;
 
`;
export const FormColumn = styled.div`

	flex: 1;
	max-width: 100%;
	display: flex;
	flex-direction: column;
       justify-content: center;
		align-items: center;
    
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	
	justify-content: center;
	
	flex-wrap: wrap;
	align-items: center;
    
`;

export const FormWrapper = styled.form`
	max-width: 540px;
	padding-top: 0;
	width: 100%;
    > button {
		
        align-items: center;
        justify-content: center;
		
		
	}
`;



export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: .5rem;
    font-size:.8rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1rem;
    
	> p {
		font-size: 0.3rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 30px;
	width: 100%;
	border: none;
	font-size: 1rem;
	border-bottom: 1px solid #494863;
    background-color:#0b0b0b;
    color:  ${(props) => (props.theme.color.light)};
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color:  ${(props) => (props.theme.color.light)};
`;
export const FormText = styled.p`
	font-size:.8rem;
	max-width: 100%;
	color:#afafaf;
	padding-top: 10px;
    align-items: center;
    justify-content: center;
	display: flex;
`;

export const SubText = styled.p`
	font-size:.8rem;
	max-width: 100%;
	color:#afafaf;
	align-items: center;
    justify-content: flex-end;
	display: flex;
	cursor: pointer;
	padding-top: 5px;

`;

export const SocialMediaWrap = styled.div`
	width: 100%;
	height: 80px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SocialIcons = styled.div`
	display: flex;
	flex-direction: row;
	
	align-items: center;
`;

export const SocialIconLink = styled.div`
	align-items: center;
	padding: 10px;
	
`;

export const Facebook = styled.img`
	height: 25px;
	width: 25px;
	align-items: center;
	cursor: pointer;
	
`;
export const Twitter = styled.img`
	height: 25px;
	width: 25px;
	cursor: pointer;
`;
export const Google = styled.img`
	height: 25px;
	width: 25px;
	cursor: pointer;
`;