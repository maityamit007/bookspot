"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import { Button } from '@nextui-org/react';
import { NUIInput } from '../Input';

type ComapnyTieUpsProps = {
    imgSrc: string,
    width: number,
    height: number,
    additionalCSS?: string
}

const ComapnyTieUps = ({
    imgSrc,
    width,
    height,
    additionalCSS = ''
}: ComapnyTieUpsProps) => {
    return (
        <div className={`flex flex-row gap-x-10`}>
              <Image
                src={imgSrc}
                alt="company tier list"
                width={width}
                height={height}
                className={`mr-2 ${style[additionalCSS]}`}
              />
        </div>
    );
};

export default ComapnyTieUps;
