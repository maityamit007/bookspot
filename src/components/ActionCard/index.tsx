import Image from "next/image";
import style from "./style.module.css";
import { NUIButton } from "../Button";
import React from 'react';

type ActionCardProps = {
    altName?: string;
    imageSrc?: string;
    imgHeight?: number;
    imgWidth: number;
    titleText: string;
    labelName: string;
    titleDescription: string,
    timerText: string,
    backgroundColor: string,
    titleTextAdditionalCSS: string
}

const ActionCard = ({
    altName,
    imageSrc,
    imgHeight,
    imgWidth,
    titleText,
    labelName,
    titleDescription,
    timerText,
    backgroundColor,
    titleTextAdditionalCSS
}: ActionCardProps) => {
    return (
        <div className={`flex flex-col items-center p-6 ${style.cardConatiner}`}>
            <Image
                src={imageSrc || ""}
                alt={altName || `altCard`}
                width={imgHeight}
                height={imgWidth}
                className="mr-2 "
            />
            <div className={`${style.titleText} ${style[titleTextAdditionalCSS]}`}>{titleText}</div>
            <div className={style.titleDescription}>{titleDescription}</div>
            <NUIButton
                label={labelName}
                style={{
                    ...(backgroundColor !== undefined ? {backgroundColor: backgroundColor} : {}),
                    height: 34,
                    width: 24,
                    paddingTop: 8,
                    paddingLeft: 18,
                    paddingBottom: 8,
                    paddingRight: 18,
                    fontSize: 12,
                    marginTop: 0
                }}
            />
            <div className={`${style.titleDescription} ${style.timerText}`}>{timerText}</div>
        </div>
    );
}

export default ActionCard;
