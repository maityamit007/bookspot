"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { NUIButton } from "@/components/Button";
import { NUIInput } from "@/components/Input";

import style from "./style.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex md:h-full h-screen flex-col justify-between md:items-center md:justify-end md:relative p-12 ${style.container}`}
    >
      <div className="flex-col md:w-96 md:absolute md:top-6">
        <div className="flex row items-center justify-center mb-10 md:mb-20">
          <div className={style.fillBar}></div>
          <div className={style.emptyBar}></div>
        </div>
        <div className={style.primaryText}>{`Get Started Now ->`}</div>
        <div className={`mb-12 ${style.secondaryText} md:mt-2`}>
          It will only take a few seconds. . .
        </div>
      </div>
      <div className="flex row items-center justify-center md:hidden">
        <Image
          src="/logo.png"
          alt="bookspot"
          width={50}
          height={50}
          className="mr-2"
        />
        <div className={`${style.primaryText} ${style.logoText}`}>Bookspot</div>
      </div>
      <form className="md:w-96">
        <div className="flex-col items-center justify-center">
          <NUIInput label="Name" />
          <NUIInput label="Mobile Number" />
        </div>
      </form>
      <div className="md:w-96">
        <NUIButton
          label="Login"
          onclick={() => router.push("/otp")}
          fullWidth
        />
        <div className={`mb-12 ${style.secondaryText} mt-6 underline underline-offset-8 text-center`}>
          {`Don’t have an account? Sign Up ->`}
        </div>
      </div>
    </main>
  );
}
