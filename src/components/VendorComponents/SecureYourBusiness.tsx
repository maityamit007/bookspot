"use client";

import React from 'react';
import style from './style.module.css';
import Image from 'next/image';

type SecureYourBusinessProps = {
}

type DigitizeCardProps = {
    headline: string,
    desc: string
}

const DigitizeCard = ({
    headline,
    desc
}: DigitizeCardProps) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-y-5 pt-6 pb-6 bg-white ${style.digitizeCard}`}>
            <Image
                src="/vendor-svg/picture.svg"
                alt="picture"
                width={40}
                height={40}
                className=""
            />
            <span className={`${style.bannerFormTitle} font-bold`}>{headline}</span>
            <span className={`p-1 ${style.secureBookSpotTitle}`}>{desc}</span>
        </div>
    )
}

const SecureYourBusiness = ({
}: SecureYourBusinessProps) => {

    const cardArray = [{
        headline: 'Headline',
        desc: 'Please add your content here. Keep it short and simple. And smile :)'
    }, {
        headline: 'Headline',
        desc: 'Please add your content here. Keep it short and simple. And smile :)'
    }, {
        headline: 'Headline',
        desc: 'Please add your content here. Keep it short and simple. And smile :)'
    }, {
        headline: 'Headline',
        desc: 'Please add your content here. Keep it short and simple. And smile :)'
    }, {
        headline: 'Headline',
        desc: 'Please add your content here. Keep it short and simple. And smile :)'
    }];

    return (
        <div className={`${style.secureYourBussinessContainer}`} >
            <div className={`flex flex-col items-center justify-center ${style.digitizeTitleContainer}`}>
                <div className={`text-black ${style.digitizeText}`}>Secure Your Business with <span className={`${style.digitizeBrandName}`}>BookSpot</span></div>
                <div className={`text-black ${style.digitizeText}`}>Your Data Your Privacy Our Security</div>
            </div>
            <div className={`flex flex-row items-center justify-center gap-x-10 ${style.cardContainerDigital}`}>
                {
                    cardArray?.map((ele, index) =>
                        <DigitizeCard
                            key={index}
                            headline={ele.headline}
                            desc={ele.desc}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default SecureYourBusiness;
