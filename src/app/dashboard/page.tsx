"use client";

import Image from "next/image";

import { NUIInput } from "@/components/Input";

import style from "./style.module.css";
import RecommendedSection from "@/components/RecommededSection";
import HelpCard from "@/components/HelpCard";
import ProfileCard from "@/components/ProfileCard";
import InvoiceCard from "@/components/InvoiceCard";
import PaymentCard from "@/components/PaymentCard";
import AddressCard from "@/components/SaveAddressCard";
import HelpAndSupport from "@/components/HelpAndSupport";
import { helpList } from "@/components/HelpAndSupport/helpList";
import SettingCard from "@/components/SettingCard";
import AboutCard from "@/components/AboutCard";
import CategoriesSection from "@/components/CategoriesSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`grid grid-rows-[75px_155px_auto] overflow-hidden max-h-screen ${style.container}`}
    >
      <div className={`flex row justify-between p-4 ${style.header}`}>
        <div>
          <div className={`${style.helloUser} mb-1`}>Hey! Jhon💁🏻‍♂️</div>
          <div className={`${style.location} flex row`}>
            <Image
              src="/location.svg"
              alt="location"
              width={14}
              height={14}
              className="mr-2"
            />
            Home - Rajasthan university
          </div>
        </div>
        <div onClick={() => router.push("/profile")} className="cursor-pointer">
          <Image src="/profile.svg" alt="profile" width={40} height={40} />
        </div>
      </div>

      {/* search */}
      <RecommendedSection />

      {/* {helpList.map((item: any, index:number) => (
          <HelpAndSupport key={index} title={item.title} image={item.image} />
        ))} */}
      {/* Current queue status: Token #20  |  5 more to go . . . . status card */}
      {/* <CategoriesSection /> */}
      {/* banner */}
      <HelpCard />
      {/* Need Help ? */}
    </main>
  );
}
