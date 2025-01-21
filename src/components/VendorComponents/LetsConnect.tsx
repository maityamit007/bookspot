"use client";

import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import { NUIInput } from '../Input';
import { Button } from '@nextui-org/react';

const LetsConnect = () => {
    return (
        <div className={`p-4 flex justify-center items-center ${style.letsConnectContainer}`}>
            <div className={`flex flex-row gap-x-12 ${style.letsConnectCard}`}>
                <div className='text-start flex flex-col gap-y-6'>
                    <span className={`text-start ${style.serviceTitle} ${style.letConnectTitle}`}>{"Let's Connect &"}<br/> {"Grow Together"}</span>
                    <span className={`${style.saloonItemDesc}`}>{`Fringilla non proin nec in in lorem amet eget ac. Mauris.`}</span>

                    <div className='flex flex-row gap-x-4'>
                        <NUIInput
                            label='Select Your Industry' />
                        <NUIInput
                            label='Bookings/Day'
                        />
                    </div>
                    <div>
                        <Button
                            variant="solid"
                            color="primary"
                            size="md"
                            className={`mt-4 bg-primary md:px-24 w-full} `}
                            style={{
                                height: 60,
                                borderRadius: 12,
                                background: "#0B223D",
                                fontSize: 18,
                                fontWeight: 500,
                                ...style,
                            }}
                            onClick={() => {}}
                        >
                            {`Start My Amazing Journey`}
                        </Button>

                    </div>
                </div>
                <Image
                    src={'/vendor-svg/Rocket.png'}
                    alt="saloon"
                    width={485}
                    height={485}
                    className=""
                />
            </div>
        </div>
    );
};

export default LetsConnect;
