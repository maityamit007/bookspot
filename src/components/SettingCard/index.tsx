"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";

type SettingCardProps = {
  title: string;
  subTitle: string;
  icon: string;
  path: string;
};

export default function SettingCard(props: SettingCardProps) {
  const router = useRouter();

  return (
    <div
      className={`flex row items-start justify-between m-6 mb-8 cursor-pointer`}
      onClick={() => router.push(props.path)}
    >
      <div>
        <div className={`${style.cardTitle}`}>{props.title}</div>
        <div className={`${style.cardSubtitle}`}>{props.subTitle}</div>
      </div>
      <Image src={props.icon} alt="settings" width={22} height={22} />
    </div>
  );
}
