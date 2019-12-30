import { useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web'
import * as animationData from '../public/burger-animation-lottie.json'

function About ({}) {
    const animationContainer = useRef();
    const animation = useRef(null);
    const slider = useRef(null);
    const arrow = useRef(null);
    const arrowLeft = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(0)
    useEffect(() => {
        animation.current = lottie.loadAnimation({
            container: animationContainer.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: '/burger-animation-lottie.json' // the path to the animation json
        });

        setTimeout(() => {
            const sliderInterval = setInterval(() => {
                if (!slider || !slider.current || slider.current.scrollLeft) return false;
                console.log(slider.current);
                console.log(slider.current.scrollTo);
                console.log(slider.current.scrollLeft);
                slider.current.scrollTo(slider.current.scrollLeft + 1, 0)
            }, 250)
        }, 3000)
    }, [])
    useEffect(() => {
        slider.current.scrollLeft = sliderPosition * slider.current.clientWidth;
    }, [sliderPosition])
    const handleNext = (i) => {
        console.log(i)
        if (sliderPosition == 1) return false
        setSliderPosition(sliderPosition + 1)
    }
    const handlePrevious = (i) => {
        console.log(i)
        if (sliderPosition == 0) return false
        setSliderPosition(sliderPosition - 1)
    }
    return (
        <div id="About" className="About">
            <div className="information">
                <div className="logo-container">
                <img src="/iso-con-r.svg" className="bittlogoR" />
                </div>
                <p className="text">
                    First established in 2001, Bitt is one of the most renowned post-production companies both locally and internationally with a focus on 3D and 2D animation, as well as on visual FX for commercials, series, feature films and all contents.
                </p>
                <p className="text bold">
                    Driven by creative ideas executed professionally, with the main objective in meeting the needs of our clients. 
                </p>
                <p className="text">
                    We work jointly with the most important directors, agencies and brands, with whom we start working collaboratively from the very beginning of each project, our premise being the achievement of excellence within the established timeline.
                </p>
                <p className="text">
                    Our reputation relies on a world-class human and artistic team, which contributes to providing a second to none service to our clients by offering first quality solutions, technical excellence and efficient quotations.
                </p>
                <p className="text bold">
                    Our high level of commitment, creativity, vision, inspiration and professionalism has been recognized by the most important international festivals and it has contributed to making Bitt what it is today.
                </p>
            </div>
            <div className="slider-container">
                <img src="/arrow-slider.svg" ref={arrowLeft} className={`arrow-slider-left ${sliderPosition == 1 ? "active":""}`} onClick={handlePrevious}></img>
                <div className="image slider" ref={slider}>
                    <img src="/slide-1.png" className="image"></img>
                    <img src="/slide-2.png" className="image"></img>
                </div>
                <img src="/arrow-slider.svg" ref={arrow} className={`arrow-slider ${sliderPosition == 0 ? "active":""}`} onClick={handleNext}></img>
            </div>
            <style jsx>
                {`
                    .arrow-slider {
                        position: absolute;
                        right: 8px;
                        width: 20px;
                        top: calc(50% - 10px);
                        filter: invert(1);
                        cursor: pointer;
                        display: none;
                    }
                    .arrow-slider-left {
                        position: absolute;
                        left: 8px;
                        width: 20px;
                        top: calc(50% - 10px);
                        filter: invert(1);
                        cursor: pointer;
                        transform: rotate(180deg);
                        display: none;
                    }
                    .slider-container {
                        position: relative;
                        width: auto; 
                    }
                    .slider {
                        display: flex;
                        max-width: calc(100vw - 60px);
                        overflow-x: scroll;
                    }
                    .slider .image {
                        margin-top: 0;
                    }
                    .arrow-slider.active {
                        display: block;
                    }
                    .arrow-slider-left.active {
                        display: block;
                    }
                    .About {
                        grid-column: 1/4;
                        background: #ECE6DE;
                        display: flex;
                        padding-top: 5vw;
                        padding-bottom: 5vw;
                        width: 90vw;
                       margin: 0 auto;
                    }
                    .information, .image {
                        width: 100%;
                    }
                    .information {
                        margin-right: 38px;
                    }
                    .bittlogoR {
                        width: 350px;
                        height: auto;
                    }
                    .text {
                        font-family: 'TT';
                        line-height: 1.2em;
                        font-size: 1.1em;
                        margin-top: 16px;
                        margin-bottom: 0;
                        text-align: justify;
                    }
                    .logo-container {
                        position: relative;
                    }
                    .image {
                        background: transparent;
                        height: auto;
                    }
                    .bold {
                        font-weight: 500;
                    }
                    @media screen and (max-width: 1200px) {
                        .About {
                            flex-flow: column;
                            width: 50vw;
                            margin-left: 30px;
                            padding-bottom: 72px;
                        }
                        .About .text {
                            font-size: 1em;
                        }
                        .image {
                            width: 100%;
                            margin-top: 40px;
                        }
                        .information {
                            max-width: 570px;
                            width: 100%;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        .About {
                            width: calc(100vw - 60px);
                            margin: 0;
                            padding: 30px;
                        }
                        .image {
                            width: calc(100vw - 60px);
                            height: auto;
                        }
                        .information {
                            margin-right: 0px;
                        }
                        .text {width: 100%;}
                        .bittlogoR {
                            width: 250px;
                            height: auto;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default About;