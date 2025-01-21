import Image from 'next/image';
import React from 'react';
import style from './style.module.css';

const NavBar = () => {
    return (
        <div className={`p-4 flex justify-between items-center ${style.navbarContainer}`}>
            <div className="logo p-2 flex flex-row">
                <Image
                    src="/logo.png"
                    alt="bookspot"
                    width={40}
                    height={40}
                    className="mr-2"
                />
                <div className='flex flex-col'>
                    <div className={`text-orange-500 text-18.228 font-normal font-500 leading-normal ${style.brandName}`}>{`BookSpot`}</div>
                    <div className={`${style.businessTitle}`}>{`Business`}</div>
                </div>
            </div>
            <nav className="space-x-4 flex items-center">
                <a href="#" className={`${style.navItem}`}>Products</a>
                <a href="#" className={`${style.navItem}`}>Business</a>
                <a href="#" className={`${style.navItem}`}>Pricing</a>
                <a href="#" className={`${style.navItem}`}>Learn</a>
                <a href="#" className={`${style.navItem}`}>Grow and Earn</a>
                <a href="#" className={`flex flex-row items-center ${style.navItem} ${style.phoneNumber}`}>
                    <Image
                        src="/vendor-svg/PhoneCall.svg"
                        alt="phonecall"
                        width={14}
                        height={14}
                        className="mr-2"
                    />
                    +91 1234567890</a>
            </nav>
            <button className={`bg-green-500 py-2 px-4 rounded ${style.loginButton}`}>
                Login
            </button>
        </div>
    );
};

export default NavBar;
