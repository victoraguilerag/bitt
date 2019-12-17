import { useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web'
import * as animationData from '../public/burger-animation-lottie.json'

function About ({}) {
    const animationContainer = useRef();
    const animation = useRef(null);
    useEffect(() => {
        animation.current = lottie.loadAnimation({
            container: animationContainer.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: '/burger-animation-lottie.json' // the path to the animation json
        });
    }, [])
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
            <div className="image">
                <img src="/slide-1.png" className="image"></img>
            </div>
            <style jsx>
                {`
                    .About {
                        grid-column: 1/4;
                        background: #ECE6DE;
                        display: flex;
                        padding-top: 100px;
                        padding-bottom: 100px;
                        width: calc(100% - 200px);
                       margin: 0 auto;
                    }
                    .information, .image {
                        width: 100%;
                    }
                    .information {
                        margin-right: 38px;
                    }
                    .bittlogoR {
                        width: 15vw;
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
                        background: lightgray;
                        max-width: 880px;
                        height: auto;
                    }
                    .bold {
                        font-weight: 500;
                    }
                    @media screen and (max-width: 1100px) {
                        .About {
                            flex-flow: column;
                            width: 570px;
                            margin-left: 30px;
                            padding-bottom: 72px;
                        }
                        .image {
                            width: 570px;
                            height: 570px;
                            margin-top: 40px;
                        }
                        .bittlogoR {
                            height: 200px;
                            width: 200px;
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
                        }
                        .information {
                            margin-right: 0px;
                        }
                        .text {width: 100%;}
                    }
                `}
            </style>
        </div>
    )
}

export default About;