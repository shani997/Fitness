import React from 'react';
import { FaWalking, } from 'react-icons/fa';
import { IoIosFitness, IoIosBody, IoIosHeart } from "react-icons/io";

export const cardObjOne = {
    topLine: 'Our Featured',
    headline: 'Find quality facilities in each of our clubs',
    description:
        'We want to help you live a fit and healthy lifestyle. We do this by healping you find the most suitable equipment',
};

export const featuresData = [
    {
        name: 'Cardio Area',
        description: 'Feel the rhythm while you feel the burn',
        icon: <FaWalking />,
        imgClass: 'one',
    },
    {
        name: 'Free Weights',
        description: 'Sculpt the muscles on your muscles',
        icon: <IoIosFitness />,
        imgClass: 'two',
    },
    {
        name: 'Floating Yoga',
        description: 'Ommm-azingly strengthening your mind',
        icon: < IoIosHeart />,
        imgClass: 'three',
    },
    {
        name: 'Boxing Area',
        description: 'Your heart rate is about to raise the roof with our action-packed classes',
        icon: <IoIosBody />,
        imgClass: 'four',
    },

];