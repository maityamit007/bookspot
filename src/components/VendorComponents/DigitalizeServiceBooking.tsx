import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import DetailsCard from './DetailsCard';

const DigitalizeServiceBooking = () => {
    return (
        <div className={`p-4 flex flex-col justify-center items-center ${style.serviceContainer}`}>
            <span className={`${style.serviceTitle}`}>Digitize Your Service Bookings,<br />Cut Wait Time & Elevate Customer Happiness</span>
            <div className={`${style.backgroundContainer}`}>
                <Image
                    src="/vendor-svg/Feather-Icon.svg"
                    alt="bookspot"
                    width={40}
                    height={40}
                    className="mr-2"
                />
            </div>
            <div className={`${style.stepsContainer}`}>
                <div className={`${style.howItWorksTitle}`}>{`How easily BookSpot works`}</div>
                <div className={`${style.steps}`}>{`In 6 easy steps set up your accounnt and get started`}</div>
            </div>
            <div className={`grid grid-cols-12 gap-x-10 px-24`}>
                <DetailsCard
                    detailsTitle='Download The App'
                    detailsDesc={'Lorem ipsum dolor samet cons oioo ect etyuin kur.'}
                    imgSrc={'/vendor-svg/StepOne.png'}
                    imgHeight={631}
                    imgWidth={250}
                />
                <DetailsCard
                    detailsTitle='Register Your Bussiness'
                    detailsDesc={'Lorem ipsum dolor samet cons oioo ect etyuin kur.'}
                    imgSrc={'/vendor-svg/StepTwo.png'}
                    imgHeight={631}
                    imgWidth={250}
                />
                <DetailsCard
                    detailsTitle='Start The Service'
                    detailsDesc={'Lorem ipsum dolor samet cons oioo ect etyuin kur.'}
                    imgSrc={'/vendor-svg/StepThree.png'}
                    imgHeight={631}
                    imgWidth={250}
                />

            </div>
        </div>
    );
};

export default DigitalizeServiceBooking;
