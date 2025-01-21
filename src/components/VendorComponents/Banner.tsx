"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import { Button } from '@nextui-org/react';
import { NUIInput } from '../Input';
import ComapnyTieUps from './ComapnyTieUps';

type BannerProps = {
}

const Banner = ({
}: BannerProps) => {
    const iconArray = [{
        imgSrc: '/vendor-svg/ICICI.svg',
    }, {
        imgSrc: '/vendor-svg/Jio.svg',
    }, {
        imgSrc: '/vendor-svg/Rapido.svg',
    }, {
        imgSrc: '/vendor-svg/Myntra.svg',
    }, {
        imgSrc: '/vendor-svg/Flipkart.svg',
    }, {
        imgSrc: '/vendor-svg/Airtel.svg',
    }, {
        imgSrc: '/vendor-svg/Jio.svg',
    }]
    return (
        <div className={`flex flex-row gap-x-10 ${style.bannerContainer}`}>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2'>
                    <div className={`flex flex-col gap-y-10 justify-center items-start ${style.bannerLeft}`}>
                        <div className={`mt-3 ${style.digitizeText} ${style.bannerTitle}`}>With BookSpot manage <br /> your <span className={`${style.digitizeBrandName}`}>Clinic Queues</span></div>
                        <div className={`${style.bannerSubTitleContainer}`}>
                            <span className={`${style.bannerSubTitle}`}>{`Customer Satisfaction`}</span><br />
                            <span className={`${style.bannerSubTitle}`}>{`Accelerated! No More Waits`}</span>
                        </div>
                        <div className={`gap-x-4 ${style.bannerButtonContainer}`}>
                            <Button
                                variant="solid"
                                color="primary"
                                size="md"
                                className={`mt-4 bg-primary`}
                                style={{
                                    height: 28,
                                    borderRadius: 10,
                                    padding: "16.5px 32px",
                                    paddingTop: 32,
                                    paddingLeft: 17,
                                    paddingBottom: 32,
                                    paddingRight: 17,
                                    background: "#F96021",
                                    width: 208,
                                    fontSize: 18,
                                    fontWeight: 500,
                                    ...style,
                                }}
                                onClick={() => { console.log("Dummy Function") }}
                            >
                                {`Get Started`}
                            </Button>
                            <Button
                                variant="solid"
                                color="primary"
                                size="md"
                                className={`mt-4 bg-primary`}
                                style={{
                                    height: 28,
                                    borderRadius: 10,
                                    paddingTop: 32,
                                    paddingLeft: 17,
                                    paddingBottom: 32,
                                    paddingRight: 17,
                                    background: "#fff",
                                    width: 208,
                                    fontSize: 18,
                                    color: '#f96021',
                                    border: '1px solid #f96021',
                                    fontWeight: 500,
                                    ...style,
                                }}
                                onClick={() => { console.log("Dummy Function") }}
                            >
                                {`Download`}
                                <Image
                                    src="/vendor-svg/apple.svg"
                                    alt="bookspot"
                                    width={17}
                                    height={21}
                                    className="mr-2 bg-white"
                                />
                                <Image
                                    src="/vendor-svg/playbutton.svg"
                                    alt="bookspot"
                                    width={17}
                                    height={21}
                                    className="mr-2"
                                />
                            </Button>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-4 ${style.bannerRight}`}>
                        <div className='grid gap-4 grid-cols-12'>
                            <div className='col-span-2'>
                                <Image
                                    src="/vendor-svg/Group.png"
                                    alt="group"
                                    width={149}
                                    height={298}
                                    className="mr-2 h-[320px]"
                                />
                            </div>
                            <div className={`col-span-8 ${style.bannerForm}`}>
                                <div className={`${style.bannerFormTitle}`}>Get a glance of how <br /> <span className={`${style.bannerFormSubTitle}`}>BookSpot</span>  can Grow Your Business</div>
                                <div className='flex flex-row gap-x-4'>
                                    <NUIInput label="Select Your Industry" />
                                    <NUIInput label="Bookings / Day" />
                                </div>
                                <div>
                                    <Button
                                        variant="solid"
                                        color="primary"
                                        size="md"
                                        className={``}
                                        style={{
                                            height: 28,
                                            borderRadius: 10,
                                            paddingTop: 20,
                                            paddingLeft: 71,
                                            paddingBottom: 20,
                                            paddingRight: 71,
                                            background: "#0B223D",
                                            fontSize: 18,
                                            color: '',
                                            fontWeight: 500,
                                        }}
                                        onClick={() => { console.log("Dummy Function") }}
                                    >
                                        {`Start My Free Trial`}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='grid col-span-5 gap-4 grid-row-12'>
                                <div className={`${style.bannerImageContainer} row-span-6`}>
                                    <Image
                                        src="/vendor-svg/ladyImage.png"
                                        alt="bookspot"
                                        fill
                                    />
                                </div>
                                <div className={`${style.bannerImageContainer} row-span-4`}>
                                    <Image
                                        src="/vendor-svg/handshake.png"
                                        alt="bookspot"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className='col-span-5'>
                                <Image
                                    src="/vendor-svg/PhoneInHand.png"
                                    alt="bookspot"
                                    width={289}
                                    height={610}
                                    className={`mr-2 ${style.bannerImageContainer}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.comapnyTieUps} pt-10 flex flex-row`}>
                    {iconArray.map((ele, index) => (
                        <ComapnyTieUps
                            key={index}
                            imgSrc={ele.imgSrc}
                            width={170}
                            height={80}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
