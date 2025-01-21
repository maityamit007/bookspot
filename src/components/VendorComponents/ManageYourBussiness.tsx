"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import DetailsCard from './DetailsCard';

type ManageYourBussinessProps = {
}

const ManageYourBussiness = ({
}: ManageYourBussinessProps) => {
    return (
        <div className={`${style.manageYourBussinessContainer}`} >
            <div className={`pt-10 pb-10 ${style.serviceTitle}`}>{`Manage Your Business Effortlessly with BookSpot`}</div>
            <div className='grid'>
                <div className='grid-cols-12'>
                    <div className='flex flex-row gap-x-10'>
                        <DetailsCard
                            detialsDescAdditional="detialsDescAdditional"
                            containerAdditional= "containerAdditional"
                            detailsTitle='1-Click Booking URL'
                            detailsDesc={'Our AI-powered bot automatically and accurately answers support questions with zero training required.'}
                            imgSrc={'/vendor-svg/GrowYourBusinessOne.png'}
                            imgHeight={301}
                            imgWidth={602}
                            imageContainer="h-[201px] w-[302px]"
                        />
                        <DetailsCard
                            detialsDescAdditional="detialsDescAdditional"
                            containerAdditional= "containerAdditional"
                            detailsTitle='Real Time Tracking'
                            detailsDesc={'Easily build powerful no-code automations with bots, triggers, conditions, and rules—all in one place.'}
                            imgSrc={'/vendor-svg/GrowYourBusinessTwo.png'}
                            imgHeight={301}
                            imgWidth={602}
                            imageContainer="h-[201px] w-[302px]"
                        />
                    </div>
                </div>
                <div className='grid-cols-12 mt-6'>
                    <div className='flex flex-row gap-x-10'>
                        <DetailsCard
                            detialsDescAdditional="detialsDescAdditional"
                            containerAdditional= "containerAdditional"
                            detailsTitle='1-Click Booking URL'
                            detailsDesc={'Our AI-powered bot automatically and accurately answers support questions with zero training required.'}
                            imgSrc={'/vendor-svg/GrowYourBusinessOne.png'}
                            imgHeight={301}
                            imgWidth={602}
                            imageContainer="h-[201px] w-[342px]"
                        />
                        <DetailsCard
                            detialsDescAdditional="detialsDescAdditional"
                            containerAdditional= "containerAdditional"
                            detailsTitle='Real Time Tracking'
                            detailsDesc={'Easily build powerful no-code automations with bots, triggers, conditions, and rules—all in one place.'}
                            imgSrc={'/vendor-svg/GrowYourBusinessTwo.png'}
                            imgHeight={301}
                            imgWidth={602}
                            imageContainer="h-[201px] w-[342px]"
                        />
                        <DetailsCard
                            detialsDescAdditional="detialsDescAdditional"
                            detailsTitle='Real Time Tracking'
                            detailsDesc={'Easily build powerful no-code automations with bots, triggers, conditions, and rules—all in one place.'}
                            imgSrc={'/vendor-svg/GrowYourBusinessThree.png'}
                            imgHeight={301}
                            imgWidth={602}
                            imageContainer="h-[201px] w-[342px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageYourBussiness;
