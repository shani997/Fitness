import React from 'react'
import { InfoSection, Features, Carousel, Pricing } from '../component'
import { homeObjOne, homeObjTwo } from '../Data/InfoSectionData';
import { cardObjOne } from '../Data/FeaturesData';
import { cardObjTwo } from '../Data/CarouselData';
import { cardObjThr } from '../Data/PricingData';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Features {...cardObjOne} />
            <InfoSection {...homeObjTwo} />
            <Carousel {...cardObjTwo} />
            <Pricing {...cardObjThr} />
        </>
    )
}

export default Home