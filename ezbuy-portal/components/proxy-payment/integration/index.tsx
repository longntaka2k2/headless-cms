"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import EzImage from '@/components/commons/EzImage';


const Integration = ({ lang }: any) => {
    const contents = [
        { image: "/uploads/image_607_3ef81b9f6c.png", title: "Yahoo! Auction", background: "bg-[#FCDA44]" },
        { image: "/uploads/image_609_c0f7aa5f77.png", title: "Muji", background: "bg-[#7E131C]" },
        { image: "/uploads/image_608_dc641e2618.png", title: "Amazon", background: "bg-[#232F3E]" },
        { image: "/uploads/image_607_3ef81b9f6c.png", title: "Yahoo! Auction", background: "bg-[#FCDA44]" },
        { image: "/uploads/image_609_c0f7aa5f77.png", title: "Muji", background: "bg-[#7E131C]" },
        { image: "/uploads/image_608_dc641e2618.png", title: "Amazon", background: "bg-[#232F3E]" }
    ];

    return (
        <div className="container py-9 lg:py-[100px]">
            <p className="text-xl lg:text-[32px] font-bold text-center">{lang.proxyPayment.listStore}</p>
            <p className="text-sm pt-4 pb-14 text-center">{lang.proxyPayment.listStoreSub}</p>
            {/* slider */}
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    contents.map((item: any, index: number) => {
                        return (
                            <>
                                <SwiperSlide className="max-w-[276px] max-h-[279px] w-full h-full 
                                            border py-4 px-5 bg-[#fff] mb-16" key={index}>
                                    <div className={`${item.background}`}>
                                        <EzImage
                                            src={`${item.image}`}
                                            alt={`${item.image}`}
                                            width={235}
                                            height={94}
                                            className='max-w-[235px] max-h-[94px] w-full h-full'
                                        />
                                    </div>
                                    <p className='text-base font-bold pt-4'>{item.title}</p>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>
        </div >

    );
};

export default Integration;
