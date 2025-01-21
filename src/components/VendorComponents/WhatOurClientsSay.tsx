"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import { Button } from '@nextui-org/react';

type WhatOurClientsSayProps = {
    whatOurClientsSayArray?: Array<String>;
    title: String;
    imgSrc: String;
    productManager: String,
    designation: String
}

const ClientCard = ({ whatOurClientsSayArray = [],
    title,
    imgSrc,
    productManager,
    designation }: WhatOurClientsSayProps) => {
    return (
        <div className={`grid-cols-4 ${style.clientCard}`}>
            <div className={`${style.imageContainer} -mb-14`}>
                <Image
                    src={`/vendor-svg/${imgSrc}`}
                    alt="picture"
                    width={44}
                    height={44}
                    className={`${style.circularImage}`}
                />
                <span className={`${style.prdocutManagerName}`}>{productManager}</span>
                <span className={`${style.designation}`}>{designation}</span>
            </div>
            <div className={`flex flex-col gap-y-5 ${style.whatClientSayContainer}`}>
                <Image
                    src="/vendor-svg/Quote.svg"
                    alt="Quote"
                    width={31}
                    height={19}
                />
                <span className={`${style.descClient}`}>
                    {title}
                </span>
                <div className='flex flex-col gap-x-5'>
                    {
                        whatOurClientsSayArray?.map((item, index) =>
                            <div className={`flex flex-col gap-x-5 mb-6 ${style.descClientDesc}`} key={index}>{item}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const WhatOurClientsSay = ({
}) => {

    const whatOurClientsSayArray = [{
        title: 'Got into a product role after a degree in Infrastructure planning',
        points: ['I had almost joined another program, but thank god I learnt about Upraised at the last minute.',
            'The program helped me double down on my strengths & get into my dream role',
        ],
        imgSrc: 'ImageOne.png',
        productManager: 'Tanmay Singh',
        designation: 'Product Manager at Monexo'
    }, {
        title: 'No BS. Only Actionable insights that you can apply from tomorrow.',
        points: ['There is no BS. No fake magic sauce. You actually get your hands dirty, and learn along the way. The growth I achieved by getting real time feedback on my work was just phenomenal',
            'Thanks to Upraised I am killing it at my new product role',
        ],
        imgSrc: 'ImageTwo.png',
        productManager: 'Jahanvi Singh',
        designation: 'Product Manager at Deepsource'
    }, {
        title: 'Got into a product role after a degree in Infrastructure planning',
        points: ['A couple of years into my first job, I knew product management was the right fit for me. I was at Byju`s and was fascinated by the work PMs in the company were doing.',
            'At the beginning, there was a lot of doubt. My gut kept telling me, I could be a great PM. Years in sales & program management had taught me valuable lessons around communicating effectively, influencing without authority and having a keen eye for data.',
            'But, I was scared!'           
        ],
        imgSrc: 'ImageThree.png',
        productManager: 'Shoubhik Ghoshal',
        designation: 'Associate Product Manager - PhonePe'
    }, {
        title: 'You cant go wrong with Upraised',
        points: ['You need someone to be with you for the emotional up & downs of a career change. Someone who sticks with you all the way.',
            'Most courses are transactional, there is no personalized attention but I needed someone who could tell me “You can do it”',
            'My coach, counsellors made the tough transition to product possible',
        ],
        imgSrc: 'ImageFour.png',
        productManager: 'Ankit Bansal',
        designation: 'Product Manager at Nestaway'
    }];

    return (
        <div className={`flex flex-col bg-white justify-center items-center gap-y-6 ${style.whatOurClientsSayContainer}`} >
            <span className={`${style.clientSay}`}>{`what our clients says`}</span>
            <span className={`mt-2 ${style.clientSayTopTitle}`}>{`Over 20,000 Happy Customers`}</span>
            <div className={`grid grid-cols-4 mb-5 gap-4 ${style.contentGrid}`}>
                {
                    whatOurClientsSayArray?.map((item, index) =>
                        <div className={`${style.clientCardWrapper}`} key={index}>
                            <ClientCard
                                whatOurClientsSayArray={item.points}
                                title={item.title}
                                imgSrc={item.imgSrc}
                                productManager={item.productManager}
                                designation={item.designation}
                            />
                        </div>
                    )
                }
            </div>
            <Button
                variant="solid"
                color="primary"
                size="md"
                className={`mt-5`}
                placeholder={`Email Address`}
                style={{
                    height: 48,
                    borderRadius: 6,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    background: "#FFF",
                    color: '#F96021',
                    fontSize: 22,
                    fontWeight: 500,
                    ...style,
                }}
                onClick={() => { }}
            >
                Read More +
            </Button>
        </div>
    );
};

export default WhatOurClientsSay;
