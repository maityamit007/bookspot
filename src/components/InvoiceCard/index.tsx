"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";

type InvoiceCardProps = {
  name: string;
  dateTime: string;
  icon: string;
};

export default function InvoiceCard(props: InvoiceCardProps) {
  const router = useRouter();

  return (
    <div className="px-6 border-b-1 pb-3 pt-3">
      <div className={`flex row items-start m-4 relative`}>
        <Image
          src={props.icon}
          alt="profile"
          width={56}
          height={56}
          className="mr-6 rounded-full"
        />
        <div>
          <div className={`${style.cardTitle}`}>{props.name}</div>
          <div className={`${style.cardSubtitle}`}>{props.dateTime}</div>
        </div>
        <Image
          src="/arrow-right.svg"
          alt="profile"
          width={30}
          height={30}
          className="absolute right-0"
        />
      </div>

      <div className={` ${style.viewInvoice} grid grid-cols-12 `}>
        <div
          className={`flex row border-r-1 border-gray-light col-span-6 place-content-center pt-2 pb-2 cursor-pointer`}
        >
          <Image
            src="/help-circle.svg"
            alt="help-circle.svg"
            width={20}
            height={20}
            className="mr-1"
          />
          Need Help
        </div>
        <div
          className={`flex row col-span-6 place-content-center pt-2 pb-2 cursor-pointer`}
        >
          <Image
            src="/file-text.svg"
            alt="file-text.svg"
            width={20}
            height={20}
            className="mr-1"
          />
          View Invoice
        </div>
      </div>
    </div>
  );
}
