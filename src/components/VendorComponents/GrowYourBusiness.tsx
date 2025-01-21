import React from 'react';
import style from './style.module.css';
import DetailsCard from './DetailsCard';

const GrowYourBusiness = () => {
    return (
        <div className={`p-2 flex flex-col ${style.businessContainer}`}>
            <span className={`${style.growBusinessTitle}`}>{`Grow Your Business With BookSpot`}</span>
            <div>
                <div className={`p-2 mt-5 text-center`}><span className={`${style.saloonItemDesc}`}>{`Neque, pulvinar vestibulum non aliquam.`}</span></div>
                <div className={`gap-x-10 px-24 grid grid-cols-12`}>
                    <DetailsCard
                        detailsTitle='Free Listing on BookSpot'
                        detailsDesc={'Lorem ipsum dolor samet cons oioo ect etyuin kur.Lor em ipsum dolor samet cons oioo ect etyuin kur.'}
                        imgSrc={'/vendor-svg/BusinessOne.png'}
                        imgHeight={800}
                        imgWidth={389}
                        imageContainer="h-[440px] w-[200px]"
                    />
                    <DetailsCard
                        detailsTitle='Get Booking From Google'
                        detailsDesc={'Lorem ipsum dolor samet cons oioo ect etyuin kur.Lor em ipsum dolor samet cons oioo ect etyuin kur.'}
                        imgSrc={'/vendor-svg/BusinessTwo.png'}
                        imgHeight={800}
                        imgWidth={389}
                        imageContainer="h-[440px] w-[200px]"
                    />
                    <DetailsCard
                        detailsTitle='Get Reviewed'
                        detailsDesc={'Lorem ipsum dolor samet cons oioo ect etyuin kur.Lor em ipsum dolor samet cons oioo ect etyuin kur.'}
                        imgSrc={'/vendor-svg/BusinessThree.png'}
                        imgHeight={800}
                        imgWidth={389}
                        imageContainer="h-[440px] w-[200px]"
                    />
                </div>
                <div className={`p-10 mt-10 text-center`}>
                    <span className={`p-10 mt-10 ${style.saloonItemDesc}`}>{`Lorem ipsum dolor sit amet consectetur. Faucibus pharetra velit eu facilisi faucibus imperdiet non quis. Ultricies sapien quam enim risus. Ullamcorper eleifend bibendum dui aliquam integer. Facilisis non dolor`}</span>
                </div>
            </div>
        </div>
    );
};

export default GrowYourBusiness;
