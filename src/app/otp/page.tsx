"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import OTPInput from "react-otp-input";

import style from "../login/style.module.css";
import { NUIButton } from "@/components/Button";

export default function Home() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  return (
    <main
      className={`flex md:h-full h-screen flex-col justify-between md:items-center md:justify-end md:relative p-12 ${style.container}`}
    >
      <div className="flex-col md:w-96 md:absolute md:top-6">
        <div className="flex-col">
          <div className="flex row items-center justify-center mb-10 md:mb-20">
            <div className={style.fillBar}></div>
            <div className={style.fillBar}></div>
          </div>
          <div className={style.primaryText}>{`Enter OTP`}</div>
          <div className={`mb-12 ${style.secondaryText}`}>
            Enter the 4-digit code sent to you at
          </div>
          <div className={`mb-12 flex row ${style.secondaryText}`}>
            <span>+91 9988776655</span>
            <div
              className={`${style.singIn} ml-4`}
              onClick={() => router.push("/login")}
            >
              change number
            </div>
          </div>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span></span>}
            renderInput={(props) => (
              <input {...props} className={style.otpInput} />
            )}
          />

          <div className={`${style.singIn} mt-4 flex row`}>
            <Image
              src="/resend.svg"
              alt="resend"
              width={18}
              height={18}
              className="mr-2"
            />
            Resend Code
          </div>
        </div>
      </div>

      <div className=" md:w-96 ">
        <NUIButton
          fullWidth
          label="Send OTP"
          onclick={() => {
            router.push("/dashboard");
          }}
        />
      </div>
    </main>
  );
}
