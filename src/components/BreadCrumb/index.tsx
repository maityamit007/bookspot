"use client"

import Image from "next/image";
import style from "./style.module.css";
import React from "react";
import { useRouter } from "next/navigation";

type BreadCrumbProps = {
  navigationText?: string;
  includeNavigate: boolean;
  navIcon?: string;
};

const BreadCrumb = ({
  navigationText,
  includeNavigate = true,
  navIcon,
}: BreadCrumbProps) => {
  const router = useRouter();

  return (
    <div className={`bg-white ${style.container}`}>
      <nav className="p-4 relative z-10">
        <ol className="list-none p-2 flex justify-between items-center">
          <li className={`flex items-center`}>
            {includeNavigate ? (
              <div
                className="cursor-pointer flex row"
                onClick={() => {
                  router.back();
                }}
              >
                <Image
                  src="/arrow-left.svg"
                  alt="navigate"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                <div className={`hover:underline ${style.navigationConatiner}`}>
                  {navigationText}
                </div>
              </div>
            ) : (
              <>
                <a
                  href="#"
                  className={`hover:underline ${style.navigationConatiner}`}
                >
                  {navigationText}
                </a>
              </>
            )}
          </li>
          {navIcon && (
            <li>
              <Image src={navIcon} alt="icon" width={30} height={30} />
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
