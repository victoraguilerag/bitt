import React from 'react'
import Thumbnail from './thumbnail.js'
import About from './about.js'
import Members from './members.js'
import Awards from './awards.js'
import Contact from './contact.js'

function Grilla ({
    items,
    selectProject,
    handleIcon,
    selected
}) {
    let pie = (items.length) / 3;
    pie = pie - parseInt(pie);
    pie = parseInt(pie * 100);
    pie = pie == 66 ? '3/4': pie == 33 ? '2/4' : '1/4';


    return (
        <div className="items-container">
            {
                items && items.map((item, i) => {
                    // if (i == 0) return false
                    // if (i == 1) return false
                    return (
                        <Thumbnail
                            item={item}
                            onClick={() => {
                                selectProject(i)
                            }}
                        />
                    )
                })
            }
            <div className="redes">
                <h3 className="redes-title">FOR MORE PROJECTS MAKE SURE TO CHECK OUR <br/>VIMEO ACCOUNT.</h3>
                <div className="redes-container">
                    <a
                        className="red"
                        href="https://www.vimeo.com"
                        target="_blank"
                    >
                        <img src="/vimeo.svg" className="red-icon" />
                    </a>
                    <img
                        src="/white-arrow.svg"
                        className="arrow-white"
                        onClick={handleIcon}
                    />
                </div>
            </div>
            <About />
            <Members />
            <Awards handleIcon={handleIcon} />
            <Contact />
            <style jsx>
                {`
                    .arrow-white {
                        position: absolute;
                        cursor: pointer;
                        bottom: 5px;
                        right: 0;
                    }
                    .redes-container {
                        position: relative;
                        max-width: 80%;
                    }
                    @media screen and (min-width: 1024px) {
                    }
                    .redes .red {
                        margin-right: 10px;
                    }
                    .redes {
                        min-height: calc(33vw / 1.8);
                        position: relative;
                        background: black;
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        padding-left: 10%;
                        grid-column: ${pie};
                    }
                    .redes .redes-title {
                        width: 400px;
                        max-width: 80%;
                        color: white;
                        font-family: 'Drunk';
                        font-size: 14px;
                        font-weight: normal;
                    }
                    .items-container {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(33vw, 1fr));
                        grid-gap: 0;
                    }
                `}
            </style>
        </div>

    )
}

export default Grilla;