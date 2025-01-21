"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';

type DetialsCardProps = {
    detailsTitle: string;
    detailsDesc: string;
    imgSrc: string;
    imageContainer?: string,
    imageStyle?: string,
    imgHeight: number;
    imgWidth: number;
    detialsDescAdditional?: string;
    containerAdditional?: string;
}

const DetailsCard = ({
    detailsTitle,
    detailsDesc,
    imgSrc,
    imageContainer = "h-[400px] w-[250px]",
    detialsDescAdditional= "",
    containerAdditional="",
    imageStyle ="bottom-0"
}: DetialsCardProps) => {
    return (
        <div className={`${style.detailsCardContainer} flex flex-col items-center justify-between overflow-hidden col-span-4`} >
            <div className={`flex flex-col items-center justify-center ${style.detailsTitleConatiner} ${style[detialsDescAdditional]}`}>
                <span className={`${style.detailsTitle} ${style[detialsDescAdditional]}`}>{detailsTitle}</span>
                <span className={`${style.detialsDesc} ${detialsDescAdditional ? `${style[detialsDescAdditional]} mt-4` : ''}`}>{detailsDesc}</span>
            </div>
            <div className={`flex justify-center relative mt-16 ${imageContainer}`}>
                <Image
                    src={imgSrc}
                    alt="img"
                    fill
                />
            </div>
        </div>
    );
};

export default DetailsCard;
