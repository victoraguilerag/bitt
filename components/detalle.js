import React from 'react'
import Thumbnail from '../components/thumbnail'
import Grilla from '../components/grilla'

function Detalle ({
    active,
    selected,
    items,
    handleItem,
    selectProject
}) {
    const handleIcon = () => {
        // const video = document.getElementById('video')
        // console.log(video)
        // video.scrollIntoView({ behavior: 'smooth'})
        setTimeout(() => {
            const Hero = document.getElementById('Hero')
            Hero.scrollIntoView({ behavior: 'smooth', block: 'start' })    
        }, 0);
        setTimeout(() => {
            selectProject(false)
            document.body.style.overflowY = 'scroll';
            const detalle = document.getElementById('detalle')
            detalle.scrollTop = 0

        }, 700);
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
                    <h2 className="title">{selected.nombre.toUpperCase()}</h2>
                        <div className="list">
                                {
                                    selected && selected.miembros && selected.miembros.map(miembro => (
                                        <div className="item">
                                            <div className="label">{miembro.label.toUpperCase()}</div>
                                            <div className="value">{miembro.value.toUpperCase()}</div>
                                        </div>
                                    ))
                                }
                        </div>
                        <img onClick={handleIcon} className="arrow" width="50" src="/arrow.svg" />
                    </div>
                )
            }
            {
                selected && (
                    <Grilla selected={selected} items={items} selectProject={selectProject} handleIcon={handleIcon} />
                )
            }
            <style jsx>
                {`
                    :global(iframe.big) {
                        position: absolute;
                        width: 100%;
                        max-width: none;
                        top: -9px;
                        height: 100%;
                        z-index: 2;
                    }
                    :global(#player) {
                        max-width: none;
                        height: 100%;
                    }
                    .arrow-white {
                        position: absolute;
                        bottom: 24px;
                        right: 32px;
                        cursor: pointer;
                    }
                    @media screen and (min-width: 1100px) {
                        .arrow-white {
                            bottom: 64px;
                        }
                    }
                    .redes .red {
                        margin-right: 10px;
                    }
                    .redes {
                        position: relative;
                        background: black;
                        display: flex;
                        flex-flow: column;
                        justify-content: space-around;
                        padding-left: 16px;
                    }
                    .redes .redes-title {
                        width: 400px;
                        color: white;
                        font-family: 'Drunk';
                        font-size: 14px;
                        font-weight: normal;
                    }
                    .items-container {
                        display: grid;
                        grid-template-columns: repeat(3, 33.33%);
                    }
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
                    @media screen and (max-width: 1024px) {
                        .information {
                            padding-left: 30px;
                        }
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
                        display: flex;
                        flex-flow: column;
                        background: #ECE6DE;
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