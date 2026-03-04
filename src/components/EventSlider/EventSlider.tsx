import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { HistoricalEvent } from '../../data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './EventSlider.scss';
import gsap from 'gsap';

interface Props {
    events: HistoricalEvent[];
    activeIndex: number;
}

const EventSlider: React.FC<Props> = ({ events, activeIndex }) => {
    const swiperRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(containerRef.current, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
            );
        }
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0);
        }
    }, [activeIndex]);

    return (
        <div className="event-slider" ref={containerRef}>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1.5}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    }
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                ref={swiperRef}
            >
                {events.map((event, index) => (
                    <SwiperSlide key={index}>
                        <div className="event-slide">
                            <div className="event-slide__year">{event.year}</div>
                            <div className="event-slide__description">{event.description}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default EventSlider;
