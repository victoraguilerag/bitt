import React from "react"

function Extras ({ extras }) {
    return (
        <div className="Extras">
            <div className="extras-container">
                {
                    extras && extras.map(extra => {
                        return (
                            <div className="extra">
                                <img className="img" src={extra.img} />
                                <div className="nombre">
                                    {extra.nombre} <br/> {extra.apellido}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>
                {`
                    .Extras {
                        width: 100%;
                        background: #EDE9E3;
                        display: flex;
                        justitfy-content: flex-start;

                    }
                    .extra {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        position: relative;
                        cursor: pointer
                    }
                    .extra .img {
                        width: 100%;
                    }
                    .extra .nombre {
                        position: absolute;
                        bottom: 10%;
                        text-align: center;
                        font-family: "Drunk";
                        font-size: 20px;
                        font-weight: 400;
                    }
                    .extras-container {
                        max-width: 50vw;
                        margin-left: 30px;
                        margin-top: 55px;
                        margin-bottom: 55px;
                        display: grid;
                        grid-gap: 40px;
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                    @media screen and (max-width: 768px) {
                        .extras-container {
                            max-width: none;
                            width: calc(100% - 60px);
                            grid-template-columns: 1fr 1fr;
                        }
                        .extra .nombre {
                            font-size: 14px;
                        }
                    } 
                `}
            </style>
        </div>
    )
}

export default Extras;