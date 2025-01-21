"use client";

import Image from "next/image";
import style from "./style.module.css";

export default function ProfileCard() {
  const name = "Jordan Smith";
  const phoneNumber = "+91-1234567890";

  return (
    <div className={`flex row items-start m-4 mb-8`}>
      <Image
        src="/profile.svg"
        alt="profile"
        width={60}
        height={60}
        className="mr-6"
      />
      <div>
        <div className={`${style.cardTitle}`}>{name}</div>
        <div className={`${style.cardSubtitle}`}>{phoneNumber}</div>
      </div>
    </div>
  );
}
