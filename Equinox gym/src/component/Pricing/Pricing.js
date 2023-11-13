import React from 'react';
import { Button, TextWrapper, Title, TopLine, Heading, Subtitle, Container } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingContainer,
    PricingCardInfo,
    PricingCardPlan,
    PricingCardCost,
    PricingCardFeatures,
    PricingCardText,
    PricingCardFeature,
    PricingCard,
} from './PricingElements';
import { pricingData } from '../../Data/PricingData';

function Pricing({
    topLine,
    headline,
    description,
}) {



    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
            <PricingSection id="pricing">
                <Container>                    <TextWrapper>
                    <Title>
                        <TopLine >{topLine}</TopLine>
                        <Heading >{headline}</Heading>
                        <Subtitle >{description}</Subtitle>
                    </Title>

                </TextWrapper>
                </Container>
                <PricingContainer>
                    {pricingData.map((card, index) => (
                        <PricingCard key={index}>
                            <PricingCardInfo>
                                <PricingCardPlan>{card.title}</PricingCardPlan>
                                <PricingCardCost>{card.price}</PricingCardCost>
                                <PricingCardText>{card.description}</PricingCardText>
                                <PricingCardFeatures>
                                    {card.features.map((feature, index) => (
                                        <PricingCardFeature key={index}>
                                            {feature}
                                        </PricingCardFeature>
                                    ))}
                                </PricingCardFeatures>
                                <Button>Get Started</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    ))}
                </PricingContainer>

            </PricingSection>
        </IconContext.Provider>
    );
}
export default Pricing;