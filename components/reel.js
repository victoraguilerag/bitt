import React from "react"

function Reel () {
    const id = "267613699"
    return (
        <div id="Reel" className="Reel">
            <iframe
                id="reel-video"
                className="reel-iframe"
                title="reel"
                src={`https://player.vimeo.com/video/${id}?quality=1080p&autopause=0&background=0`}
                frameborder="0"
                allow="fullscreen"
                allowfullscreen
            />
            <style jsx>
                {`
                    .Reel {
                        height: 100vh;
                        grid-column: 1/4;
                        position: relative;
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                    }
                   #reel-video {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                   } 
                `}
            </style>
        </div>
    )
}

export default Reel;