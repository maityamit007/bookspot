"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";

type AddressCardProps = {
  title: string;
  subTitle: string;
  icon: any;
};
export default function AddressCard(props: AddressCardProps) {
  return (
    <div
      className={`flex row items-start px-8 my-4 border-b-1 border-gray-light pb-2`}
    >
      <Image
        src={props.icon}
        alt="Address-Card"
        width={50}
        height={50}
        className={`${style.icon}`}
      />

      <div className="p-2">
        <div className={`${style.cardTitle}`}>{props.title}</div>
        <div className={`${style.cardSubtitle}`}>{props.subTitle}</div>
      </div>
    </div>
  );
}
