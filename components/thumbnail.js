import { useState, useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'
{/* <video width="320" height="240" controls>
    <source src={`/${item.img}.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
</video> */}
function Thumbnail (props) {
    const [player, setPlayer] = useState(false);
    const videoPlayer = useRef()
    const {
        item,
        onClick
    } = props;
    
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
    }, [])

    // <video ref={videoPlayer} className="video-js">
    //     <source src={`/${item.img}.mp4`} type="video/mp4" />
    // </video>

    return (
        <div className="thumbnail" onClick={onClick}>
           <img src={`/${item.img}.jpg`} className="img" />
            <style jsx>
                {`
                    .thumbnail {
                        cursor: pointer;
                        width: auto;
                        height: calc(33vw / 1.8);
                        display: block;
                        /* max-width: 230px; */
                        /* max-height: 95px; */
                        /* width: auto; */
                        overflow: hidden;
                    }
                    .thumbnail:hover {
                        box-shadow: 0 0 6px rgba(0,0,0,.4);
                    }
                    .img {
                        width: 100%;
                        height: auto;

                    }
                `}
            </style>
        </div>
    )
}

export default Thumbnail