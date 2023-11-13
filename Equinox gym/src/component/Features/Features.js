import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Container } from '../../globalStyles';
import {
    FeatureSection,
    FeatureText,
    FeatureTitle,
    FeatureWrapper,
    FeatureColumn,
    FeatureImageWrapper,
    FeatureName,
    FeatureTextWrapper,
    TopLine,
    Heading,
    Subtitle,
} from './FeaturesElements';
import { featuresData } from '../../Data/FeaturesData';

const Features = ({
    topLine,
    headline,
    description

}) => {

    const initial = {
        y: 40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };




    return (
        <IconContext.Provider value={{ color: '#6456db', size: 40 }}>
            <FeatureSection>
                <Container>
                    <FeatureTextWrapper>
                        <FeatureTitle>
                            <TopLine >{topLine}</TopLine>
                            <Heading >{headline}</Heading>
                            <Subtitle >{description}</Subtitle>
                        </FeatureTitle>
                    </FeatureTextWrapper>
                    <FeatureWrapper>
                        {featuresData.map((el, index) => (
                            <FeatureColumn
                                initial={initial}
                                animate={animate}
                                transition={{ duration: 0.5 + index * 0.1 }}
                                key={index}
                            >
                                <FeatureImageWrapper className={el.imgClass}>
                                    {el.icon}
                                </FeatureImageWrapper>
                                <FeatureName>{el.name}</FeatureName>
                                <FeatureText>{el.description}</FeatureText>
                            </FeatureColumn>
                        ))}
                    </FeatureWrapper>
                </Container>
            </FeatureSection>
        </IconContext.Provider>
    );
};

export default Features;