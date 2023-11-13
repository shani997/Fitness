export const cardObjTwo = {
    topLine: 'Our Articles',
    headline: 'Articles from tasking',
    description:
        'Stylish and modern fitness club for those who want to achieve your perfect body with professional trainers ',
};

export const data = [
    {
        title: 'heading back to the gym? Here is how to avoid injury after got fitness',
        description:
            'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
        image: require('../assests/carousel-1.jpg'),
    },
    {
        title: 'Gym membership, how to get the most out of it, according to a sport activelist',
        description: 'Learn more about our membership systems to make sure your data is always safe.Our team consists of the best experts ',
        image: require('../assests/carousel-2.jpg'),
    },
    {
        title: 'Can water improve your fitness ? or workout? thus scientist say water make best fitness',
        description: 'Learn more about water for best fitness than other food items',
        image: require('../assests/carousel-3.jpg'),
    },
    {
        title: 'heading back to the gym? Here is how to avoid injury after got fitness',
        description:
            'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
        image: require('../assests/carousel-4.jpg'),
    },
    {
        title: 'Gym membership, how to get the most out of it, according to a sport activelist',
        description: 'Learn more about our membership systems to make sure your data is always safe.Our team consists of the best experts ',
        image: require('../assests/carousel-5.jpg'),
    },
];

export const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    focusOnselect: false,
    accessability: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};