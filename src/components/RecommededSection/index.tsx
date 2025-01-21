"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";

export default function RecommendedSection() {
  const router = useRouter();

  const list = [
    {
      id: 1,
      name: "A-Salon",
    },
    {
      id: 1,
      name: "Dr.Ram",
    },
    {
      id: 1,
      name: "SBI Bank",
    },
    {
      id: 1,
      name: "SBI Bank",
    },
    {
      id: 1,
      name: "SBI Bank",
    },
    {
      id: 1,
      name: "SBI Bank",
    },
    {
      id: 1,
      name: "SBI Bank",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "100vw",
      }}
    >
      <div className={`mb-2 ${style.secondaryText} m-6 flex row `}>
        Recommended for you
        <Image
          src="/arrow-up-right.svg"
          alt="arrow-up-right"
          width={20}
          height={20}
          className="ml-2"
        />
      </div>
      <div className="flex row overflow-x-auto ml-6">
        {list.map((item) => (
          <div
            key={item.id}
            className={`${style.cardItem} flex flex-col items-center justify-center`}
          >
            <div className={style.cardIcon}></div>
            {/* <Image src="" alt={item.name} width={54} height={54} /> */}
            <div className={style.cardName}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
