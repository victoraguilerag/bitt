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
            if (iframe && iframe.current && iframe.current.id == "REEL") {
                setLoaded(true)
                setActive(true);
                return player.play();
            }
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
            <img src={`/${item.img}.jpeg`} className={`img ${loaded ? "active":""}`} />
            {
                !mobile && (
                    <iframe
                        ref={iframe}
                        id={item.label}
                        title={item.label}
                        className={`thumbnail-video ${active ? "active":""}`}
                        src={`https://player.vimeo.com/video/${item.videothumb}?autoplay=1&loop=1&autopause=1&background=1`}
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
                <div className="title">{item.nombre.toUpperCase()}.</div>
                <div className="label">{item.label.toUpperCase()}</div>
            </div>


            <style jsx>
                {`
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
                    .information {
                        display: flex;
                    }
                    .title {
                        font-family: 'Drunk';
                        font-weight: 400;
                        font-size: 17px;
                    }
                    .label {
                        font-family: 'Drunk';
                        color: #B3AFA8;
                        margin-bottom: 20px;
                        margin-left: 8px;
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
                    }
                    @media screen and (max-width: 768px) {
                        .thumbnail {
                            width: calc(100vw - 60px);
                            margin-left: 30px;
                            margin-bottom: 24px;
                        }
                        .thumbnail:nth-child(even) .information {
                            justify-content: flex-end;
                        }
                        .label {
                            font-size: 12px;
                            margin-bottom: 0;
                        }
                        .title {
                            font-size: 10px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Thumbnail