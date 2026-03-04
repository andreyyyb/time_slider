import React, { useState, useRef, useEffect } from 'react';
import { timePeriods } from '../../data';
import CircleNav from '../CircleNav/CircleNav';
import EventSlider from '../EventSlider/EventSlider';
import gsap from 'gsap';
import './TimeBlock.scss';

const TimeBlock: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const activePeriod = timePeriods[activeIndex];
    const startYearRef = useRef<HTMLSpanElement>(null);
    const endYearRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (startYearRef.current && endYearRef.current) {
            const startObj = { val: timePeriods[prevIndex].startYear };
            const endObj = { val: timePeriods[prevIndex].endYear };

            gsap.to(startObj, {
                val: activePeriod.startYear,
                duration: 1,
                onUpdate: () => {
                    if (startYearRef.current) startYearRef.current.textContent = Math.round(startObj.val).toString();
                }
            });

            gsap.to(endObj, {
                val: activePeriod.endYear,
                duration: 1,
                onUpdate: () => {
                    if (endYearRef.current) endYearRef.current.textContent = Math.round(endObj.val).toString();
                }
            });
        }
        setPrevIndex(activeIndex);
    }, [activeIndex]);

    return (
        <div className="time-block">
            <div className="time-block__container">
                <h2 className="time-block__title">Исторические<br/>даты</h2>
                
                <div className="time-block__years">
                    <span ref={startYearRef} className="time-block__year time-block__year--start">
                        {activePeriod.startYear}
                    </span>
                    <span ref={endYearRef} className="time-block__year time-block__year--end">
                        {activePeriod.endYear}
                    </span>
                </div>

                <CircleNav 
                    periods={timePeriods} 
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex} 
                />

                <div className="time-block__controls-mobile">
                     <div className="time-block__pagination">
                        0{activeIndex + 1}/0{timePeriods.length}
                    </div>
                    <div className="time-block__buttons">
                        <button 
                            className="time-block__btn"
                            disabled={activeIndex === 0}
                            onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                        >
                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2"/>
                            </svg>
                        </button>
                        <button 
                            className="time-block__btn"
                            disabled={activeIndex === timePeriods.length - 1}
                            onClick={() => setActiveIndex(prev => Math.min(timePeriods.length - 1, prev + 1))}
                        >
                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <EventSlider events={activePeriod.events} activeIndex={activeIndex} />
                
                <div className="time-block__controls">
                    <div className="time-block__pagination">
                        0{activeIndex + 1}/0{timePeriods.length}
                    </div>
                    <div className="time-block__buttons">
                        <button 
                            className="time-block__btn"
                            disabled={activeIndex === 0}
                            onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                        >
                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2"/>
                            </svg>
                        </button>
                        <button 
                            className="time-block__btn"
                            disabled={activeIndex === timePeriods.length - 1}
                            onClick={() => setActiveIndex(prev => Math.min(timePeriods.length - 1, prev + 1))}
                        >
                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeBlock;
