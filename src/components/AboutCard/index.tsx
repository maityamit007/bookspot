"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";

type AboutCardProps = {
  title: string;
  titleR: any;
  subTitle: string;
};
export default function AboutCard(props: AboutCardProps) {
  const router = useRouter();

  return (
    <div className={` m-8 mb-8`}>
      <div className="flex row">
        <div className={` ${style.title}`}>{props.title}</div>
        <div className={`ml-2 mb-6 ${style.titleR}`}>{props.titleR}</div>
      </div>

      <div className={`mb-6 ${style.subTitle}`}>{props.subTitle}</div>

      <div className={`flex row mb-4 ${style.btn}`}>
        <Image
          src="/privacy.svg"
          alt="headphones"
          width={18}
          height={18}
          className="mr-2"
        />
        <div>Privacy Policy</div>
      </div>

      <div className={`flex row mb-4 ${style.btn}`}>
        <Image
          src="/termandcondition.svg"
          alt="headphones"
          width={18}
          height={18}
          className="mr-2"
        />
        <div>Terms & Conditions</div>
      </div>
    </div>
  );
}
