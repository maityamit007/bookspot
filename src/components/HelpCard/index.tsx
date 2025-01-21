"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";
import dashboardStyle from "@/app/dashboard/style.module.css";

export default function HelpCard() {
  const router = useRouter();

  return (
    <main className={dashboardStyle.container}>
      <div className={`flex row justify-between ${style.helpCard} mt-2 p-6`}>
        <div>
          <div className={`${style.helpCard} mb-1`}> Need Help ? </div>
          <div className={`${style.helpDEscription}`}>
            Lorem ipsumdio dolor sit <br /> dior amet como ei.
          </div>
        </div>
        <div>
          <div className={`${style.call} flex row m-5 p-2`}>
            <Image
              src="/headphones-colored.svg"
              alt="headphones"
              width={40}
              height={40}
              className="mr-2"
            />
            Talk to our
            <br /> 24*7 Support Team
          </div>
        </div>
      </div>
    </main>
  );
}
