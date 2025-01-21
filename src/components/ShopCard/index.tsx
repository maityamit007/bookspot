"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "@/app/login/style.module.css";
import { NUIButton } from "../Button";

export default function ShopCard() {
  const router = useRouter();

  return (
    <div className={`flex flex-col items-center p-2 m-2 ${style.shopCard}`}>
      <Image
        src="/logo.png"
        alt="bookspot"
        width={36}
        height={36}
        className="mr-2 rounded-full"
      />
      <div className={`${style.shopCardHeading} mt-2`}>Trendzz Elite Spa</div>
      <div className={`${style.shopCardAddress} mt-2`}>
        0.9km | Pratap nagar
      </div>
      <div
        className={`${style.shopCardAddress} border-1 rounded-full px-2 py-1 mt-2`}
      >
        10:00 - 14:00
      </div>
      <NUIButton
        label="Book"
        style={{
          height: 40,
          paddingLeft:20,
          paddingRight:20,
          fontSize:14
        }}
      />
      {/* className={"md:px-8 md:py-4 md:h-[40px] text-xs"} */}
    </div>
  );
}
