"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import { Button } from '@nextui-org/react';

type HowBookSpotCanHelpProps = {
}

type CanHelpCardProps = {
    title: string,
    points?: Array<String>
}

const CanHelpCard = ({ title, points = [] }: CanHelpCardProps) => {
    return (
        <div className={`flex flex-col items-center justify-center pl-10 pr-10 pt-10 pb-16 gap-y-5 ${style.canHelpCard}`}>
            <span className={`${style.faqDesc}`}>{title}</span>
            <div className={`${style.faqDesc}`}>
                {
                    points?.map((item, index) =>
                        <ul className={`${style.customList}`} key={index}>
                            <li className={`${style.faqDesc}`}>{item}</li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

const HowBookSpotCanHelp = ({
}: HowBookSpotCanHelpProps) => {

    const howCanHelpArray = [{
        title: 'Life With BookSpot 😊',
        points: ['Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.']
    },{
        title: 'Life With BookSpot 😊',
        points: ['Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.']
    }];

    return (
        <div className={`bg-white flex flex-col justify-center items-center gap-y-10 ${style.howBookSpotCanHelpContainer}`} >
            <div className={`${style.canHelpTitle}`}>how bookSpot can help you make your life easier</div>
            <div className='flex flex-row gap-x-10'>
                {
                    howCanHelpArray?.map((item, index) =>
                        <CanHelpCard
                            key={index}
                            title={item.title}
                            points={item.points}
                        />
                    )
                }
            </div>
                <Button
                    variant="solid"
                    color="primary"
                    size="md"
                    className={`mt-4 bg-primary md:px-24 w-full} `}
                    style={{
                        height: 60,
                        borderRadius: 12,
                        background: "#F96021",
                        fontSize: 18,
                        fontWeight: 500,
                        ...style,
                    }}
                    onClick={() => { }}
                >
                    {`Experience it yourself`}
                    <Image
                        src="/vendor-svg/LongArrow.svg"
                        alt="bookspot"
                        width={43}
                        height={12}
                        className="ml-4"
                    />
                </Button>
        </div>
    );
};

export default HowBookSpotCanHelp;
