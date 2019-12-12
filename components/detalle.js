import React from 'react'

function Detalle ({
    active,
    selected,
}) {

    const handleIcon = () => {
        // const video = document.getElementById('video')
        // console.log(video)
        // video.scrollIntoView({ behavior: 'smooth'})
        const Hero = document.getElementById('Hero')
        Hero.scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            const detalle = document.getElementById('detalle')
            console.log(detalle.scrollTop)
            detalle.scrollTop = 0
        }, 1000)


        // detalle.scrollTop = 0

    }

    return (
        <div id="detalle" className={`Detalle ${active ? 'active':''}`}>
            {
                selected && selected.img && (
                    <React.Fragment>
                        <img id="video" className="video" src={`/${selected.img}.jpg`} />
                        <img onClick={handleIcon} className="play-icon" src="/play-icon.svg" />
                    </React.Fragment>
                )
            }


            {
                selected && selected.miembros && (
                    <div className="information">
                    <h2 className="title">{selected.nombre}</h2>
                        <div className="list">
                                {
                                    selected && selected.miembros && selected.miembros.map(miembro => (
                                        <div className="item">
                                            <div className="label">{miembro.label}</div>
                                            <div className="value">{miembro.value}</div>
                                        </div>
                                    ))
                                }
                        </div>
                        <img onClick={handleIcon} className="arrow" width="50" src="/arrow.svg" />
                    </div>
                )
            }

            <style jsx>
                {`
                    .arrow {
                        position: absolute;
                        right: 100px;
                        bottom: 48px;
                        cursor: pointer;
                    }
                    .information {
                        position: relative;
                        font-family: 'Drunk';
                        font-size: 20px;
                        font-weight: bold;
                        padding-left: 100px;
                        padding-top: 48px;
                        padding-bottom: 48px;
                    }
                    .information h2 {
                        font-size: 20px;
                        width: 140px;
                    }
                    .information .item {
                        display: flex;
                        font-size: 16px;
                        font-weight: normal;
                    }
                    .information .item .label {
                        color: #A7A19A;
                        width: 320px;
                    }
                    .information .item .value {
                        font-weight: normal;
                    }
                    .Detalle {
                        position: absolute;
                        top: 100%;
                        max-width: 100%;
                        width: 100vw;
                        max-height: 100vh;
                        overflow-y: scroll;
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