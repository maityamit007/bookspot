"use client";

import Image from "next/image";
import style from "./style.module.css";
import React from 'react';

interface DetailCardItem {
    icon: string;
    itemTitle: string;
  }

type DetialsCardProps = {
    title?: string;
    detailsCardArray: DetailCardItem[];
}

const DetialsCard = ({
    title,
    detailsCardArray
}: DetialsCardProps) => {
    return (
        <div className={`flex flex-col pb-2 ${style.cardConatiner}`}>
            <div className={`p-3 ${style.cardTitle}`}>{title} </div>
            {
                detailsCardArray.map((ele,index) => {
                    return (
                        <div key={index} className="flex flex-row pl-2">
                            <Image
                                src={ele.icon}
                                alt="icon"
                                width={18}
                                height={18}
                            />
                            <div className={`p-1 ${style.itemTitle}`}>{ele.itemTitle} </div>
                        </div>
                    )
                })}
        </div>
    );
}

export default DetialsCard;
