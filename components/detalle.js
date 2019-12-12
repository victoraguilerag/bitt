import React from 'react'

function Detalle ({
    active,
    selected,
}) {
    const handleIcon = () => {
        const Hero = document.getElementById('Hero')
        Hero.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div id="detalle" className={`Detalle ${active ? 'active':''}`}>
            <img className="video" src={`/${selected.img}.jpg`} />
            <img onClick={handleIcon} className="play-icon" src="/play-icon.svg" />

            <div className="information">
            </div>
            <style jsx>
                {`
                    .Detalle {
                        position: absolute;
                        top: 100%;
                        max-width: 100%;
                        width: 100vw
                    }
                    .Detalle .video {
                        width: 100%;
                    }
                    .Detalle .play-icon {
                        position: absolute;
                        width: 10%;
                        height: 10%;
                        top: 45%;
                        left: 45%;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}

export default Detalle;