import { Container, Button } from '../../globalStyles'
import { FaAngleRight } from 'react-icons/fa'
import { logo } from '../Icon'
import React from 'react';
//import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Customer,
    Icon,
    ArrowIcon,
    Label



} from './InfoSectionElements'



const InfoSection = ({
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    iconShow,

}) => {

    const initial = {
        opacity: 0,
        y: 40
    };
    const animate = {
        y: 0,
        opacity: 1,
    };
    const animation = useAnimation();

    //const { ref, inView } = useInView({ threshold: 0.2 });

    // useEffect(() => {
    //     if (inView) {
    //         animation.start({
    //             opacity: 1,
    //             y: 0,
    //         });
    //     }
    // }, [inView, animation]);


    return (
        <>
            <InfoSec >
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper >
                                <TopLine
                                    initial={initial}
                                    transition={{ duration: 0.5 }}
                                    animate={animate}

                                >{topLine}</TopLine>
                                <Heading
                                    initial={initial}
                                    transition={{ duration: 0.5 }}
                                    animate={animate}

                                >{headline}</Heading>
                                <Subtitle

                                    initial={initial}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    animate={animation}

                                >{description}</Subtitle>

                                <Label to='/'>
                                    <Button fontBig>{buttonLabel}
                                        <ArrowIcon><FaAngleRight /></ArrowIcon>
                                    </Button>
                                </Label>


                                <Customer iconShow={iconShow}>

                                    <Icon src={logo.Reebok} />
                                    <Icon src={logo.Addidas} />
                                    <Icon src={logo.Brooks} />
                                    <Icon src={logo.Nike} />
                                </Customer>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img
                                    src={img}
                                    alt={alt}
                                    whileHover={{ rotate: 2, scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                />

                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container >
            </InfoSec >
        </>
    )
}

export default InfoSection