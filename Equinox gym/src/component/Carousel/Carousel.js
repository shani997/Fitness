import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { data, sliderSettings } from '../../Data/CarouselData';
import { Container, TextWrapper, Title, TopLine, Heading, Subtitle } from '../../globalStyles';
import {
    CarouselSection,
    ButtonContainer,
    ReviewSlider,
    ImageWrapper,
    CarouselImage,
    CarouselImageContent,
    CardButton,
    ContentWrapper,
    ContentTitle,
    Content,
    CarouselCard,
    ImageSection,

} from './CarouselElements';

const Carousel = ({

    topLine,
    headline,
    description,

}) => {
    const [sliderRef, setSliderRef] = useState(null);

    const initial = {
        y: 40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };


    return (
        <CarouselSection>
            <Container>
                <TextWrapper>
                    <Title>
                        <TopLine >{topLine}</TopLine>
                        <Heading >{headline}</Heading>
                        <Subtitle >{description}</Subtitle>
                    </Title>

                </TextWrapper>


                < ImageSection >

                    <ButtonContainer>
                        <IconContext.Provider value={{ size: '1.6rem', color: '#aeb2b8' }}>
                            <FaAngleLeft onClick={sliderRef?.slickPrev} />
                            <FaAngleRight onClick={sliderRef?.slickNext} />
                        </IconContext.Provider>
                    </ButtonContainer>

                    <ReviewSlider {...sliderSettings} ref={setSliderRef}>
                        {data.map((el, index) => (
                            <ImageWrapper
                                initial={initial}
                                animate={animate}
                                transition={{ duration: 0.5 + index * 0.1 }}
                                key={index}>

                                <CarouselImage src={el.image} />
                                <CarouselCard>

                                </CarouselCard>
                                <CarouselImageContent>12 Dec 2022
                                </CarouselImageContent>
                                <ContentWrapper>
                                    <ContentTitle>{el.title}</ContentTitle>
                                    <Content>
                                        {el.description}
                                    </Content>

                                    <CardButton>Learn More</CardButton>
                                </ContentWrapper>
                            </ImageWrapper>
                        ))}
                    </ReviewSlider>
                </ImageSection>
            </Container>
        </CarouselSection>
    );
};

export default Carousel;