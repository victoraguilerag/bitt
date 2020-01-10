import { useState, useEffect, useRef } from 'react'
import Vimeo from '@vimeo/player'
function Thumbnail (props) {
    const [active, setActive] = useState(false)
    const [player, setPlayer] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [mobile, setMobile] = useState(false)
    const videoPlayer = useRef()
    const {
        item,
        onClick
    } = props;

    const iframe = useRef()
    
    useEffect(() => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setMobile(true);
        } else {

        }

    }, [])
    const handleIn = () => {
        if (mobile) return false

        if (!active && !mobile) {
            const reel  = document.getElementById("REEL")
            if (reel && reel.classList &&reel.classList.contains("active")) {
                const REELPlayer = new Vimeo(reel)
                REELPlayer.pause()
            }
            setActive(true);
            const player = new Vimeo(iframe.current)
            player.play()
        }
    }
    const handleOut = () => {
        if (active) {
            setActive(false);
            const player = new Vimeo(iframe.current)
            player.pause()
        }
    }
    const handleLoad = () => {
        if (mobile) return false;
        const player = new Vimeo(iframe.current)
        setTimeout(() => {
            console.log("pause")
            player.pause()
        }, 1000)
    }
    return (
        <div
            ref={videoPlayer}
            id={"thumbnail-"+item.label}
            className="thumbnail"
            onClick={onClick}
            onMouseEnter={handleIn}
            onMouseLeave={handleOut}
        >
            <div className="shadow" />
            <div className="thumbnail-title">{item.label.toUpperCase()}</div>
            <div className="thumbnail-nombre">{item.nombre}</div>
            <img src={`/${item.img}.jpeg`} className={`img ${loaded ? "active":""}`} />
            {
                !mobile && (
                    <iframe
                        ref={iframe}
                        id={item.label}
                        title={item.label}
                        className={`thumbnail-video ${active ? "active":""}`}
                        src={`https://player.vimeo.com/video/${item.videothumb}?autoplay=1&loop=1&autopause=1&background=1&quality=360p`}
                        width="360"
                        height="180"
                        frameborder="0"
                        allowfullscreen
                        allow="autoplay"
                        onLoad={handleLoad}
                    />
                )
            }
            <div className="information">
                <div className="label">{item.label.toUpperCase()}</div>
                <div className="title">{item.nombre.toUpperCase()}</div>
            </div>


            <style jsx>
                {`
                    .thumbnail-title {
                        font-family: "Drunk";
                        position: absolute;
                        z-index: 2;
                        color: white;
                        bottom: 28px;
                        left: 8px;
                        color: #A7A19A;
                        z-index: 2;
                        opacity: 0;
                    }
                    .thumbnail-nombre {
                        font-family: "Drunk";
                        position: absolute;
                        z-index: 2;
                        color: white;
                        bottom: 8px;
                        left: 8px;
                        color: #b8b2ab;
                        opacity: .8;
                        z-index: 2;
                        opacity: 0;
                    }
                    .preloader {
                        
                    }
                    :global(iframe.thumbnail-video) {
                        position: absolute;
                        left: -2%;
                        top: 0;
                        width: 103%;
                        top: inherit;
                        height: 104%;
                        cursor: pointer !important;
                        pointer-events: none;
                    }
                    @media screen and (max-width: 1100px) {
                        :global(iframe.thumbnail-video) {
                            width: 100%;
                            top: 0;
                            height: 88%;
                            left: 0;
                        }
                        #thumbnail-REEL {
                            display: none;
                        }

                    }

                    @media screen and (max-width: 768px) {
                        :global(iframe.thumbnail-video) {
                            width: 100%;
                            top: -3px;
                            height: 88%;
                            left: 0;
                        }
                    }
                    :global(#player) {
                        position: absolute;
                        left: -20%;
                        top: -10%;
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                        max-width: none;
                        cursor: pointer;
                    }
                    .thumbnail {
                        cursor: pointer;
                    }
                    .thumbnail:hover .shadow {
                        position: absolute;
                        background: rgba(0,0,0,1);
                        opacity: .6;
                        width: 100%;
                        height: 100%;
                        transition: 1s ease linear;
                        z-index: 2;
                    }
                    .thumbnail:hover .thumbnail-title {
                        opacity: 1;
                    }
                    .thumbnail:hover .thumbnail-nombre {
                        opacity: 1;
                    }
                    .information {
                        display: flex;
                    }
                    .title {
                        font-family: 'Drunk';
                        font-weight: 400;
                        font-size: 17px;
                        margin-left: 4px;
                        color: #B3AFA8;
                    }
                    .label {
                        font-family: 'Drunk';
                        margin-bottom: 20px;
                        margin-left: 0px;
                    }
                    .thumbnail {
                        position: relative;
                        cursor: pointer;
                        width: auto;
                        height: calc(33vw / 1.8);
                        display: block;
                        /* max-width: 230px; */
                        /* max-height: 95px; */
                        /* width: auto; */
                        overflow: hidden;
                    }

                    .img {
                        width: 100%;
                        height: auto;

                    }
                    .img.active {
                        visibility: hidden;
                    }
                    @media screen and (max-width: 1100px) {
                        .thumbnail {
                            width: 570px;
                            height: auto;
                            box-shadow: none;
                            margin-left: 30px;
                            padding: 0;
                        }
                        .thumbnail .shadow {
                            display: none;
                        }
                        .thumbnail-nombre {
                            display: none;
                        }
                        .thumbnail-title {
                            display: none;
                        }
                    }
                    @media screen and (max-width: 768px) {
                        .thumbnail {
                            width: calc(100vw - 60px);
                            margin-left: 30px;
                            margin-bottom: 24px;
                        }
                        .label {
                            font-size: 11px;
                            margin-bottom: 0;
                        }
                        .title {
                            font-size: 11px;
                            margin-bottom: 0;
                        }

                    }
                `}
            </style>
        </div>
    )
}

export default Thumbnail