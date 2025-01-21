"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "@/app/login/style.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className={`md:flex hidden row px-4 py-3 ${style.container}`}>
      <Image
        src="/logo.png"
        alt="bookspot"
        width={40}
        height={40}
        className="mr-2"
      />
      <div className={`${style.primaryText}`}>Bookspot</div>
    </div>
  );
}
