"use client";

import React from 'react';
import { useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';

const FAQ = () => {
    const faqArray = [{
        question: 'How soon will my order ship?',
        answer: 'Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.'
    },{
        question: 'Is there any warranty exclusions?',
        answer: 'Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.'
    },{
        question: 'Are there any return exclusions?',
        answer: 'Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.'
    },{
        question: 'Will I be charged for a replacement item?',
        answer: 'Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.'
    },{
        question: 'How can I track my orders & payment?',
        answer: 'Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.'
    }];

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-row ${style.businessContainer}`}>
            <div className='mt-14'>
                <Image
                    src={'/vendor-svg/LadyStading.png'}
                    alt="saloon"
                    width={241}
                    height={400}
                    className=""
                />
            </div>
            <div className={`p-2 flex flex-row gap-x-10 ${style.faqContainer}`}>
                <div className='flex flex-col text-start w-1/2'>
                    <span className={`${style.faqTitle}`}>Frequent ask<br /> questions</span>
                    <span className={`${style.faqDesc}`}>{`Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus ali`}</span>
                </div>
                <div className='w-1/2'>
                    {faqArray.map((ele, index) => (
                        <div className={`${style.accordionContainer}`} key={index}>
                            <button
                                onClick={toggleAccordion}
                                className={`w-full cursor-pointer ${style.accordianButton}`}
                            >
                                {isOpen ?
                                    <div className={`flex flex-row ${style.accordianItem}`}>
                                        <span className={`${style.accordionTitle}`}>{ele.question}</span>
                                        <div className='float-right'>
                                            <Image
                                                src={'/vendor-svg/AccordionUp.svg'}
                                                alt="saloon"
                                                width={24}
                                                height={24}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                    : <div className={`flex flex-row ${style.accordianItem}`}>
                                        <span className={`${style.accordionTitle}`}>{ele.question}</span>
                                        <div className='float-right'>
                                            <Image
                                                src={'/vendor-svg/AccordiionRight.svg'}
                                                alt="saloon"
                                                width={24}
                                                height={24}
                                                className=""
                                            />
                                        </div>
                                    </div>}
                            </button>
                            {isOpen && (
                                <div className={`p-4 ${style.accordianDesc}`}>
                                    {ele.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FAQ;
