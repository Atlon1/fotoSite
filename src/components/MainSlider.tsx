import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../slider.css"
import {Pagination} from "swiper"

import CameraImg from '../img/camera.png'

interface sliderType {
    img: any,
    pretitle: string
    titlePart1: string
    titlePart2: string
    titlePart3: string
    btnText: string
}

const sliderData: sliderType[] = [
    {
        img: CameraImg,
        pretitle: "Spceial offer",
        titlePart1: "Save 20%",
        titlePart2: "On your",
        titlePart3: "first oreder",
        btnText: "Shop now",
    }, {
        img: CameraImg,
        pretitle: "Spceial offer",
        titlePart1: "Save 20%",
        titlePart2: "On your",
        titlePart3: "first oreder",
        btnText: "Shop now",
    }, {
        img: CameraImg,
        pretitle: "Spceial offer",
        titlePart1: "Save 20%",
        titlePart2: "On your",
        titlePart3: "first oreder",
        btnText: "Shop now",
    },
]


const MainSlider: React.FC = () => {

    return (
        <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{
                clickable: true
            }}
            className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'
        >
            <>
                {sliderData.map((slide, index) => {
                    return <SwiperSlide key={index}>
                        <div>
                            <div>
                                <div>
                                    {slide.pretitle}
                                    <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                                        {slide.titlePart1} <br/>
                                        {slide.titlePart2} <br/>
                                        {slide.titlePart3}
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <img
                                    className='xl:absolute xl:-right-16 xl:-bottom-12'
                                    src={slide.img}
                                    alt={slide.pretitle}/>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </>
        </Swiper>
    );
};

export default MainSlider;