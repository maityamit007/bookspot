"use client";

import { Button } from '@nextui-org/react';
import style from './style.module.css';
import Image from 'next/image';
import Divider from '../Divider';

const Footer = () => {
  return (
    <footer className={`bg-black text-white ${style.footerContainer}`}>
      <div className={`container mx-auto ${style.footerInnerContainer}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div>
            <h3 className="text-lg font-bold">Products</h3>
            <ul className={`mt-2 ${style.linkItems}`}>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
              <li>Sub Item 4</li>
              <li>Sub Item 5</li>
              <li>Sub Item 6</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Information</h3>
            <ul className={`mt-2 ${style.linkItems}`}>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
              <li>Sub Item 4</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className={`mt-2 ${style.linkItems}`}>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
            </ul>
          </div>
          <div className={`flex flex-col gap-y-4 ${style.emailContainer}`}>
            <span className={`text-lg font-bold`}>{`Connect With Us`}</span>
            <div className='flex flex-row'>
              <Button
                variant="solid"
                color="primary"
                size="md"
                className={``}
                placeholder={`Email Address`}
                style={{
                  height: 48,
                  borderRadius: 6,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  background: "#FFF",
                  width: 108,
                  fontSize: 9.6,
                  fontWeight: 500,
                  ...style,
                }}
                onClick={() => { console.log("Dummy Function") }}
              >
              </Button>
              <div className={`${style.emailIconContainer}`}>
                <Image
                  src={'/vendor-svg/RightLucide.svg'}
                  alt="LucideRight"
                  width={22}
                  height={22}
                  className=""
                />
              </div>
            </div>
            <span className={`${style.emailSubText}`}>{`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`}</span>
          </div>
        </div>
      </div>
      <div className={`${style.footerInnerBottomContainer}`}>
        <div className={`container mx-auto`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <Image
                src={'/vendor-svg/logoFooter.svg'}
                alt="LucideRight"
                width={211}
                height={53}
                className=""
              />
            </div>
            <div className='flex flex-row gap-x-4 justify-center'>
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
            <div className='flex flex-row-reverse gap-x-4'>
              <Image
                src={'/vendor-svg/social.svg'}
                alt="LucideRight"
                width={20}
                height={20}
                className=""
              />

              <Image
                src={'/vendor-svg/facebook.svg'}
                alt="LucideRight"
                width={20}
                height={20}
                className=""
              />
              <Image
                src={'/vendor-svg/linkdein.svg'}
                alt="LucideRight"
                width={20}
                height={20}
                className=""
              />


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
