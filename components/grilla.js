import { useState, useEffect } from 'react'
import Thumbnail from './thumbnail.js'
import About from './about.js'
import Members from './members.js'
import Extras from './extras.js'
import Awards from './awards.js'
import Contact from './contact.js'
import Reel from './reel.js'

function Grilla ({
    items,
    selectProject,
    handleIcon,
    selected
}) {
    const extras = [
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-a.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-b.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-c.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-d.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-e.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-f.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-g.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-h.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-i.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-j.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-k.svg" },
        { nombre: "NOMBRE", apellido: "APELLIDO", img: "/face-l.svg" },
    ]
    const [tablet, setTablet] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [parsedItems, setParsedItems] = useState([...items.slice(1, items.length)])
    let pie = (parsedItems.length) / 3;
    pie = pie - parseInt(pie);
    pie = parseInt(pie * 100);
    pie = pie == 66 ? '3/4': pie == 33 ? '2/4' : '1/4';

    useEffect(() => {
        const items = parsedItems;

        if (window.matchMedia("(max-width: 1024px)").matches) {
            setTablet(true);
            setParsedItems(items.slice(1, items.length - 1));
        } else
        if (window.matchMedia("(max-width: 768px)").matches) {
            setMobile(true);
            setParsedItems(items.slice(1, items.length - 1));
        }
    }, []);

    return (
        <div id="Work" className="items-container">
            {
                parsedItems && parsedItems.map((item, i) => {
                    if (!item) return false;
                    return (
                        <Thumbnail
                            key={item.label}
                            item={item}
                            onClick={() => {
                                selectProject(item)
                            }}
                        />
                    )
                })
            }
            {/* FORD KA. T-REX */}
            <div className="redes">
                <h3 className="redes-title">FOR MORE PROJECTS MAKE<br/> SURE TO CHECK OUR <br/>VIMEO ACCOUNT.</h3>
                <div className="redes-container">
                    <a
                        className="red"
                        href="https://www.vimeo.com/bittanimation"
                        target="_blank"
                        tabIndex="0"
                    >
                        <img src="/vimeo.svg" className="red-icon" />
                    </a>
                    <img
                        src="/white-arrow.svg"
                        className="arrow-white"
                        onClick={handleIcon}
                        tabIndex="0"
                    />
                </div>
            </div>
            <Reel />
            <About handleIcon={handleIcon} />
            {/* <Members /> */}
            {/* <Extras extras={extras} /> */}
            <Awards handleIcon={handleIcon} />

            <Contact handleIcon={handleIcon} />
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
                    .red-icon:hover {
                        filter: invert(1);
                        background: #1A1918;
                    }
                    @media screen and (min-width: 1100px) {
                    }
                    .redes .red {
                        margin-right: 10px;
                    }
                    .redes {
                        min-height: calc(33vw / 1.8);
                        position: relative;
                        background: #1A1918;
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        padding-left: 10%;
                        grid-column: ${pie};
                    }
                    @media screen and (max-width: 1100px) {
                        .redes {
                            grid-column: 1;
                            height: 300px;
                            padding-left: 30px;
                        }
                    }
                    .redes .redes-title {
                        width: 400px;
                        max-width: 80%;
                        color: #EDE9E3;
                        font-family: 'Drunk';
                        font-size: 14px;
                        font-weight: normal;
                    }
                    .items-container {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(33vw, 1fr));
                        grid-gap: 0;
                    }
                    @media screen and (max-width: 1100px) {
                        .items-container {
                            grid-template-columns: 1fr;
                            display: flex;
                            flex-flow: column;
                            width: 100%;
                            margin: 0;
                            max-width: none;
                        }
                    }
                    @media screen and (max-width: 768px) {
                        .items-container {
                            display: flex;
                            flex-flow: column;
                            max-width: none;
                            width: 100%;
                        }

                    }
                `}
            </style>
        </div>

    )
}

export default Grilla;