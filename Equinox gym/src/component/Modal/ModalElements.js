import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	width: clamp(100px, 90vw, 400px);
	height: clamp(100px, 80vh, 470px);
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.7);
	background: #fff;
	color: #000;
	display: flex;
	position: relative;
	
	border-radius: 10px;
	z-index: 100;
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 20px;
	height: 20px;
	padding: 0;
	z-index: 10;
	color: #fff;
	
`;