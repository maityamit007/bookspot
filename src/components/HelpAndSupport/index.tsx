"use client";

import Image from "next/image";
import style from "./style.module.css";

type helpCardProps = {
  title: string;
  image: any;
};

export default function HelpAndSupport(props: helpCardProps) {
  return (
    <div className={`flex row mx-8 my-6`}>
      <Image
        src={props.image}
        alt="file-text (1)"
        width={18}
        height={18}
        className="mr-2"
      />
      <div className={`${style.cardTitle}`}>{props.title}</div>
    </div>
  );
}
