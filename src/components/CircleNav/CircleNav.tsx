import React, { useEffect, useRef } from 'react';
import { TimePeriod } from '../../data';
import gsap from 'gsap';
import './CircleNav.scss';

interface Props {
    periods: TimePeriod[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const CircleNav: React.FC<Props> = ({ periods, activeIndex, setActiveIndex }) => {
    const circleRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const total = periods.length;
    // Start from -60 degrees (approx 10-11 o'clock position) for the first item
    const startAngle = -60; 
    const angleStep = 360 / total;

    useEffect(() => {
        if (circleRef.current) {
            // We want the active item to always end up at `startAngle`.
            // The item i is initially at `startAngle + i * angleStep`.
            // To bring item `activeIndex` to `startAngle`, we need to rotate the container by:
            // Rotation = startAngle - (startAngle + activeIndex * angleStep)
            //          = -activeIndex * angleStep
            
            // We want the active item to always be at `startAngle`.
            // Item `activeIndex` is initially at `startAngle + activeIndex * angleStep`.
            // So we rotate by `-activeIndex * angleStep`.
            
            const targetRotation = -activeIndex * angleStep;

            gsap.to(circleRef.current, {
                rotation: targetRotation,
                duration: 1,
                ease: "power2.out"
            });

            itemsRef.current.forEach((item, i) => {
                if (item) {
                    const angle = startAngle + i * angleStep;
                    gsap.to(item, {
                        rotation: -angle - targetRotation,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        }
    }, [activeIndex, angleStep]);

    return (
        <div className="circle-nav-container">
            <div className="circle-nav-bg"></div>
            <div className="circle-nav" ref={circleRef}>
                {periods.map((period, i) => {
                    const angle = startAngle + i * angleStep;
                    const radius = 265; // Radius of the circle
                    
                    return (
                        <div 
                            key={period.id}
                            className={`circle-nav__item-wrapper ${i === activeIndex ? 'active' : ''}`}
                            style={{ 
                                transform: `rotate(${angle}deg) translate(${radius}px)` 
                            }}
                        >
                            <div 
                                className="circle-nav__item"
                                ref={el => { itemsRef.current[i] = el; }}
                                onClick={() => setActiveIndex(i)}
                                style={{
                                    transform: `rotate(${-angle}deg)` // Initial counter-rotation
                                }}
                            >
                                <div className="circle-nav__dot">
                                    <span className="circle-nav__number">{i + 1}</span>
                                </div>
                                <span className={`circle-nav__title ${i === activeIndex ? 'visible' : ''}`}>
                                    {period.title}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CircleNav;
