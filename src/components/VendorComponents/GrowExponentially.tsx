"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';

type GrowExponentiallyProps = {
}

const GrowExponentially = ({
}: GrowExponentiallyProps) => {
    return (
        <div className={`${style.growExponentiallyContainer}`} >
            <div className='grid mt-6'>
                <div className='flex flex-row'>
                    <div className='w-1/2 grid-col-6'>
                        <div className='flex flex-col gap-y-10'>
                            <span className={`${style.exponentTitle}`}>We&apos;re <br></br> Growing <br></br> Exponentially</span>
                            <span className={`${style.exponentDesc}`}>{`come and be part of this growth journey together`}</span>
                        </div>
                    </div>
                    <div className={`w-1/2 grid-col-6 gap-x-5`}>
                        <div className='flex flex-col gap-y-12'>
                            <div className={`flex flex-col justify-center items-center ${style.exponentailDetailContainerTop}`}>
                                <Image
                                    src="/vendor-svg/expone.svg"
                                    alt="bookspot"
                                    width={96}
                                    height={96}
                                    className={`mb-8 ${style.imgExp}`}
                                />
                                <span className={`${style.faqDesc}`}>{`Powered more than`}</span>
                                {/* <div className='flex flex-col justify-center items-center'> */}
                                <div className={`flex flex-row justify-center items-center ${style.expDesc}`}>
                                    <span className='block'>1&nbsp;Million&nbsp;</span>
                                    <span className={`${style.expDescTitle}`}> Bookings</span>
                                </div>
                                {/* </div> */}
                            </div>
                            <div className={`flex flex-row gap-x-6 justify-center items-center ${style.exponentailDetailContainerBottom}`}>
                                <div className=''>
                                    <Image
                                        src="/vendor-svg/exphand.svg"
                                        alt="bookspot"
                                        width={96}
                                        height={96}
                                        className={`mb-8 ${style.imgExp}`}
                                    />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className={`${style.faqDesc}`}>{`Successfully Onboarded`}</span>
                                    <div className={`${style.expDesc}`}>1000+<span className={`${style.expDescTitle}`}> Business</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowExponentially;
