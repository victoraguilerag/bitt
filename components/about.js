import { useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web'
import * as animationData from '../public/burger-animation-lottie.json'

function About ({ handleIcon }) {
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
            }, 250)
        }, 3000)
    }, [])
    useEffect(() => {
        // console.log(slider.current)
        // slider.current.classList.add("fade")
        // slider.current.scrollLeft = sliderPosition * slider.current.clientWidth;
        // setTimeout(() => {
        //     slider.current.classList.remove("fade");
        // }, 200)
    }, [sliderPosition])
    const handleNext = (i) => {
        console.log(i)
        if (sliderPosition == 5) return false
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
                <img src="/arrow-slider.svg" ref={arrowLeft} className={`arrow-slider-left ${sliderPosition > 0 ? "active":""} ${sliderPosition === 5 ? "black":""}`} onClick={handlePrevious}></img>
                <div className="image slider" ref={slider}>
                    {
                        <img src={`/bitt-slide-${sliderPosition + 1}.png`} width="200" className="image"></img>
                    }
                </div>
                <img src="/arrow-slider.svg" ref={arrow} className={`arrow-slider ${sliderPosition < 5 ? "active":""}`} onClick={handleNext}></img>
            </div>
            <img
                src="/arrow.svg"
                className="arrow"
                tabIndex="0"
                onClick={handleIcon}
            />
            <style jsx>
                {`
                    #About {
                        position: relative;
                    }
                    .arrow {
                        position: absolute;
                        right: -41vw;
                        cursor: pointer;
                        bottom: 10vh;
                    }
                    @media screen and (min-width: 1200px) {
                        .arrow {
                            bottom: 2vh;
                            right: 0;
                        }
                    } 
                    .arrow-slider {
                        position: absolute;
                        right: 8px;
                        width: 20px;
                        top: calc(50% - 10px);
                        filter: invert(1);
                        cursor: pointer;
                        display: none;
                        opacity: 0;
                    }
                    .arrow-slider-left.black {
                        filter: none;
                        opacity: 0;
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
                        opacity: 0;
                    }
                    .slider-container {
                        max-height: 1080px;
                        width: auto;
                        position: relative;
                        width: auto;
                        height: fit-content;
                        height: 100%;
                    }
                    .slider-container .image.slider {
                        overflow: hidden;
                        max-width: 1080px;
                        opacity: 1;
                        transition: .1s ease opacity;
                    }
                    @keyframes fadeAnimation {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    .slider {
                        display: flex;
                        overflow-x: scroll;
                    }
                    .slider .image {
                        margin-top: 0;
                        max-height: 100%;
                        height: 100%;
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
                        width: 300px;
                        height: auto;
                    }
                    .text {
                        font-family: 'TT';
                        line-height: 1em;
                        font-size: 1em;
                        margin-top: 16px;
                        margin-bottom: 0;
                        text-align: justify;
                        opacity: .7;
                        font-weight: 300;
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