"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from "react";
import style from './style.module.css';
import { Button } from '@nextui-org/react';

type CuratedPlansProps = {
    plan: String,
    price: String,
    desc: String,
    points: Array<String>,
    buttonTitle: String,
    index: number,
    activeDiv: number,
    setActiveDiv: (divNumber: number) => void;
}

const PayOnceCard = ({
    index,
    plan,
    price,
    desc,
    points,
    buttonTitle,
    activeDiv,
    setActiveDiv
}: CuratedPlansProps) => {


    const handleDivClick = (divNumber: number) => {
        setActiveDiv(divNumber);
    };

    return (
        <div className={``}>
            {activeDiv === (index + 1) && (
                <div className={`flex justify-center items-center ${style.svgContainer}`}>
                    <Image
                        src="/vendor-svg/BestValue.png"
                        alt="BestValue"
                        width={206}
                        height={34}
                        className={``}
                    />
                    <span className={`${style.bannerFormTitle} ${style.textOverSvg}`}>{`Best Value`}</span>
                </div>
            )}
            <div className={`${style.bestValueContainer} ${activeDiv === (index + 1) ? style.active : style.inactive}`} onClick={() => handleDivClick(index + 1)}>
                <div className={`${style.pricingButton}`}>
                    <span>{plan}</span>
                </div>
                <div className='flex flex-row gap-x-2'>
                    <div className={`${style.dollar}`}>{'₹'}</div>
                    <span className={`${style.serviceTitle}`}>{price}</span>
                </div>
                <span className={`${style.notReadyToPay} ${style.curatedAdditional}`}>{desc}</span>
                <Button
                    variant="solid"
                    color="primary"
                    size="md"
                    className={`mt-4 bg-primary md:px-24 w-fit ${style.buyNowButton}`}
                    onClick={() => { }}
                >
                    <Image
                        src="/vendor-svg/Fire.svg"
                        alt="Fire"
                        width={18}
                        height={21}
                    />
                    {buttonTitle}
                </Button>
                <div className='flex flex-col gap-y-2 mt-5'>
                    {
                        points.map((item, index) =>
                            <div className='flex flex-row gap-x-2 mt-2' key={index}>
                                <Image
                                    src="/vendor-svg/check.svg"
                                    alt="check"
                                    width={24}
                                    height={24}
                                    className='mr-4'
                                />
                                <span className={`${style.notReadyToPay}`}>{item}</span>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

const CuratedPlans = () => {
    const [activeDiv, setActiveDiv] = useState(0);
    const curatedPlansArray = [{
        plan: 'FREE',
        desc: 'For freelancers, indie developers or solopreneurs.',
        price: '0',
        buttonTitle: 'Buy Now',
        points: ['Single user license', 'Lifetime updates', '5,000+ icons', '6 unique styles', 'Live stroke & corners', 'Powered by variants', 'IconJar & SVG library', 'Unlimited projects']
    }, {
        plan: 'PRO',
        desc: 'For fast-growing teams, up to 6 library users.',
        price: '112',
        buttonTitle: 'Buy Now',
        points: ['Up to 6 users license', 'Lifetime updates', '5,000+ icons', '6 unique styles', 'Live stroke & corners', 'Powered by variants', 'IconJar & SVG library', 'Unlimited projects']
    }, {
        plan: 'FREE',
        desc: 'For large teams, an unlimited number of library users.',
        price: '⚡⚡⚡',
        buttonTitle: 'Join Waitlist',
        points: ['Unlimited library users', 'Lifetime updates', '5,000+ icons', '6 unique styles', 'Live stroke & corners', 'Powered by variants', 'IconJar & SVG library', 'Unlimited projects']
    }]

    return (
        <div className={`bg-white ${style.curatedPlansContainer}`} >
            <div className=' flex flex-col justify-center items-center gap-x-2'>
                <span className={`${style.digitizeBrandName}`}>{`Best Plans curated That Suits Your Business`}</span>
                <span className={`${style.curatedPlansTitle}`}>{`Unbeatable Prices, Uncompromising Quality`}</span>
            </div>
            <div className={`${style.curatedBestPlansContainer}`}>
                <div className='flex flex-row gap-x-20'>
                    <div className='w-1/2 p-20'>
                        <div className={`${style.curatedPlansAffordability}`}>Say Hi to Affordability <br /> with Best Quality</div>
                        <div className={`${style.subTitleCuratedPlans} mt-4`}>Lorem ipsum dolor sit amet consectetur. Faucibus lectus ac mattis porttitor tincidunt at facilisis duis mi.</div>
                    </div>
                    <div className='w-1/2 p-20 flex justify-end items-end'>
                        <Image
                            src="/vendor-svg/Champ.png"
                            alt="location"
                            width={320}
                            height={380}
                            className="ml-4"
                        />
                    </div>
                </div>
                <div className={`${style.payOnceContainer}`}>
                    <div className={`flex flex-col justify-center items-center gap-y-5 pb-11`}>
                        <span className={`${style.pricingButton}`}>{`Pricing`}</span>
                        <span className={`${style.payOnceTitle}`}>{`Pay once, use forever, upgrade for free`}</span>
                        <span className={`${style.payOnceSubTitle}`}>Flexible pricing for any team size. It&apos;s a one-time payment — you only buy a<br /> license once, and all future updates are free for you forever.</span>
                    </div>
                    <div className={`pb-20 grid grid-cols-3 gap-x-4 gap-y-4`}>
                        {
                            curatedPlansArray.map((items, index) =>
                                <div className='' key={index}>
                                    <PayOnceCard
                                        index={index}
                                        plan={items.plan}
                                        price={items.price}
                                        desc={items.desc}
                                        points={items.points}
                                        buttonTitle={items.buttonTitle}
                                        activeDiv ={activeDiv}
                                        setActiveDiv={setActiveDiv}
                                    />
                                </div>
                            )
                        }
                    </div>
                    <div className='flex justify-center items-center pb-20'>
                        <span className={`${style.notReadyToPay}`}>Not ready to pay yet? <a href="#" className={`${style.payOnceLink}`}>Try Free Trial.</a> Same benefits, same<br /> features, same flexibility. It also includes full usage.</span>
                    </div>
                    <div className={`flex justify-center items-center ${style.notReadyToPay} ${style.detialsDescAdditional}`}>
                        Collapse Back
                        <Image
                            src="/vendor-svg/chevrons-down.svg"
                            alt="Chevrons Down"
                            width={24}
                            height={24}
                            className="mr-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CuratedPlans;
