"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";

type PaymentCardProps = {
  upiName: string;
  upiDetail: string;
  upiNumber: string;
  icon: string;
};

export default function PaymentCard(props: PaymentCardProps) {
  const router = useRouter();

  return (
    <div className={`border-b-1 border-gray-light pb-2`}>
      <div className="flex m-8 mb-0 justify-between">
        <div>
          <div className={`${style.upiName}`}>{props.upiName}</div>
          <div className={`${style.upiDetail}`}>
            <div>{props.upiDetail}</div>
            <div className="ml-5">{props.upiNumber}</div>
          </div>
        </div>
        <Image src={props.icon} alt="Visa" width={48} height={48} />
      </div>
      <div className={`flex justify-center`}>
        <Image
          src="/more-vertical.svg"
          alt="more-vertical"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
