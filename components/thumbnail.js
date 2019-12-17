import { useState, useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'
import Vimeo from '@vimeo/player'
{/* <video width="320" height="240" controls>
    <source src={`/${item.img}.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
</video> */}
function Thumbnail (props) {
    const [active, setActive] = useState(false)
    const [player, setPlayer] = useState(false);
    const videoPlayer = useRef()
    const {
        item,
        onClick
    } = props;

    const iframe = useRef()
    
    useEffect(() => {
        // setPlayer(
        //     videojs(videoPlayer.current, props, function onPlayerReady() {
        //     console.log('onPlayerReady', this)
        // }))
        // return () => {
        //     if (player) {
        //         player.dispose();
        //     }
        // }
        setTimeout(() => {
            var event = new Event('click');

            videoPlayer.current.dispatchEvent(event)
        },100)
    }, [])
    const handleIn = () => {
        console.log('hey')
        if (!active) {
            setActive(true);
            const player = new Vimeo(iframe.current)
            player.play()
        }
    }
    const handleOut = () => {
        console.log('out')
        if (active) {
            setActive(false);
            const player = new Vimeo(iframe.current)
            player.pause()
        }
    }
    const handleLoad = () => {
        console.log('loaded')
        const player = new Vimeo(iframe.current)
        setTimeout(() => {
            player.pause()
        }, 1000)
    }
    return (
        <div
            ref={videoPlayer}
            id={`thumbnail-${item.label}`}
            className="thumbnail"
            onClick={onClick}
            onMouseEnter={handleIn}
            onMouseLeave={handleOut}
        >
            <img src={`/${item.img}.jpg`} className="img" />
            <iframe
                ref={iframe}
                id={item.label}
                className="thumbnail-video"
                src={`https://player.vimeo.com/video/${item.videothumb}?autoplay=1&loop=1&autopause=1&background=1`}
                width="360"
                height="180"
                frameborder="0"
                allowfullscreen
                allow="autoplay"
                onLoad={handleLoad}
            />


            <div className="information">
                <div className="title">{item.nombre.toUpperCase()}.</div>
                <div className="label">{item.label.toUpperCase()}</div>
            </div>


            <style jsx>
                {`
                    :global(iframe.thumbnail-video) {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        top: inherit;
                        height: 100%;
                        cursor: pointer !important;
                    }
                    @media screen and (max-width: 1024px) {
                        :global(iframe.thumbnail-video) {
                            width: 100%;
                            top: 0;
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
                    @media screen and (max-width: 1100px) {
                        .thumbnail {
                            width: 570px;
                            height: auto;
                            box-shadow: none;
                            margin-left: 30px;
                            padding: 0;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        .thumbnail {
                            width: calc(100vw - 75px);
                            margin-left: 30px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Thumbnail