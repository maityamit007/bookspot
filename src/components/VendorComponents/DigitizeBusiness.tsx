"use client";

import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const DigitizeBusiness = () => {
    return (
        <div className={`flex items-center justify-center ${style.digitizeOverallContainer}`}>
            <div className={`flex flex-col`}>
                <div className={`flex flex-col gap-y-4 ${style.digitizeCardContainer}`}>
                    <div className={`${style.digitizeCardInnerContainer}`}>
                        <div className={`logo flex flex-row justify-center ${style.digitizeIcon}`}>
                            <Image
                                src="/vendor-svg/brandlogo.svg"
                                alt="bookspot"
                                width={130}
                                height={130}
                                className="mr-2"
                            />
                            <div className='flex flex-col'>
                                <div className={`mt-3 ${style.digitizeText} text-white`}>Digitize Your Business Now <br /> with <span className={`${style.digitizeBrandName}`}>BookSpot</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className={`${style.digitizeSubText}`}>{`Scan the QR Code to Get the App`}</div>
                        </div>
                        <div className=''>
                            <Image
                                src="/vendor-svg/BarScanner.png"
                                alt="bookspot"
                                width={180}
                                height={180}
                                className="mt-5"
                            />
                        </div>
                        <div className=''>
                            <Image
                                src="/vendor-svg/DownloadIcon.svg"
                                alt="download"
                                width={180}
                                height={180}
                                className="mt-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`${style.digitizeImageContainer}`}>
                <Image
                    src="/vendor-svg/Mockup.png"
                    alt="Mockup"
                    width={216}
                    height={466}
                    className={`${style.digitizeImage}`}
                />
            </div> */}
        </div>
    );
};

export default DigitizeBusiness;
