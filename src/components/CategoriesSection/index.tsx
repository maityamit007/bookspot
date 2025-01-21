"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import style from "./style.module.css";
import ShopCard from "../ShopCard";

export default function CategoriesSection() {
  const router = useRouter();
  const active = 1;

  const list = [
    {
      id: 1,
      name: "Salon & Wellness",
    },
    {
      id: 2,
      name: "Dr.Ram",
    },
    {
      id: 3,
      name: "SBI Bank",
    },
    {
      id: 4,
      name: "SBI Bank",
    },
    {
      id: 5,
      name: "SBI Bank",
    },
  ];

  return (
    <div
      className="grid grid-rows-[auto_auto_auto] overflow-hidden max-h-[calc(100vh-230px)]"
      style={{
        maxWidth: "100vw",
      }}
    >
      <div className="flex row justify-between items-center ml-6 mr-6 mt-6 mb-4">
        <div className={`mb-2 ${style.secondaryText} flex row `}>
          Categories
        </div>
        <div className={`${style.singIn}`}>Browse all</div>
      </div>
      <div className="flex row items-start overflow-x-scroll ml-6">
        {list.map((item) => (
          <div
            key={item.id}
            className={`${style.cardItem} mr-6 flex flex-col items-center justify-center`}
          >
            <div className={style.cardIcon}></div>
            {/* <Image src="" alt={item.name} width={54} height={54} /> */}
            <div
              className={
                active == item.id ? style.activeCardName : style.cardName
              }
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex row items-start overflow-y-auto mt-6 ml-6">
        <div>
          {list.map((item) => (
            <div
              key={item.id}
              className={`${style.subCardItem} flex flex-col items-center justify-center mb-4`}
            >
              <div className={style.subCardICon}>{item.id}</div>
              {/* <Image src="" alt={item.name} width={54} height={54} /> */}
              <div className={style.subCardName}>{item.name}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap">
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </div>
  );
}
