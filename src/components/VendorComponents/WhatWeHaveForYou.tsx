"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import { NUIButton } from '../Button';
import { Button } from '@nextui-org/react';

interface RenderIconProps {
    imgSrc: string;
    height: number;
    width: number;
}

const RenderIcon = ({ imgSrc, height, width }: RenderIconProps) => {
    return (
        <div className={`${style.imageIconContainer}`}>
            <Image
                src={imgSrc}
                alt="imageIcon"
                width={width}
                height={height}
                className=""
            />
        </div>
    )
}

const WhatWeHaveForYou = () => {

    const iconArray = [{
        imgSrc: '/vendor-svg/spa.svg',
    }, {
        imgSrc: '/vendor-svg/Hospital.svg',
    }, {
        imgSrc: '/vendor-svg/Gym.svg',
    }, {
        imgSrc: '/vendor-svg/Academics.svg',
    }, {
        imgSrc: '/vendor-svg/Bank.svg',
    }, {
        imgSrc: '/vendor-svg/Homecare.svg',
    }, {
        imgSrc: '/vendor-svg/Pub.svg',
    }, {
        imgSrc: '/vendor-svg/Office.svg',
    }]

    return (
        <div className={`p-4 flex flex-col justify-between items-center ${style.whatHaveConatiner}`}>
            <div className='flex flex-col gap-y-6'>
                <span className={`${style.detailsTitle} ${style.WhatWeHaveForYouTitle}`}>{`What We Have For You`}</span>
                <div className={`flex flex-row ${style.iconContainer}`}>
                    {
                        iconArray.map((ele,index) => {
                            return (
                                <RenderIcon key={index} imgSrc={ele.imgSrc} height={70} width={70} />
                            )
                        })}
                </div>
                <div className='flex flex-row gap-x-20  mt-20'>
                    <div>
                        <Image
                            src={'/vendor-svg/Saloon.png'}
                            alt="saloon"
                            width={568}
                            height={396}
                            className=""
                        />
                    </div>
                    <div className={`flex flex-col gap-y-6 ${style.saloonItemsConatiner}`}>
                        <span className={`${style.serviceTitle}`}>{`Salon And Wellness`}</span>
                        <span className={`${style.serviceTitle}`} style={{ textAlign: 'start' }}>{`Services`}</span>
                        <span className={`${style.saloonItemDesc}`}>{`Fringilla non proin nec in in lorem amet eget ac. Mauris.`}</span>
                        <Button
                            variant="solid"
                            color="primary"
                            size="md"
                            className={`mt-4 bg-primary md:px-24 w-full md:w-fit`}
                            style={{
                                height: 60,
                                borderRadius: 10,
                                background: "#F96021",
                                fontSize: 18,
                                fontWeight: 500,
                            }}
                            onClick={() => { }}
                        >
                            {`Learn More`}
                            <Image
                                src={'/vendor-svg/ChevronRight.svg'}
                                alt="saloon"
                                width={24}
                                height={24}
                                className=""
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeHaveForYou;
