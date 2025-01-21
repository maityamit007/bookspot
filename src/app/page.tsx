"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { NUIButton } from "@/components/Button";

import style from "@/app/login/style.module.css";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <div className="md:min-h-screen md:grid md:grid-rows-[64px_auto]">
      <Header />
      <div className="grid md:grid-cols-2">
        <div></div>
        <main
          className={`flex md:h-full h-screen flex-col justify-between md:justify-center p-12 md:relative ${style.container}`}
        >
          <div className="flex row justify-between items-center md:absolute md:top-4 md:right-12">
            <div className="flex row items-center md:hidden">
              <Image
                src="/logo.png"
                alt="bookspot"
                width={40}
                height={40}
                className="mr-2"
              />
              <div className={style.primaryText}>Bookspot</div>
            </div>
            <div className={`${style.singIn}`}>Sign In</div>
          </div>
          <div>
            <div className={`${style.primaryText}`}>
              Lets Pre-Book your Spot in the Queue 🚀
            </div>
            <div className={`mb-12 ${style.secondaryText}`}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <NUIButton
              label="Get started"
              onclick={() => router.push("/login")}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
