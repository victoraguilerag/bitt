import { useState, useEffect } from 'react'

function Awards ({ handleIcon }) {
    const [items, setItems] = useState([
        {
            title: 'MILLIONAIRE PLASTILINA MOSH',
            awards: [
                'Winner: UD International Film & Video Festival Award to Creative Excellence'
            ]
        },
        {
            title: 'FORD ROASTER',
            awards: [
                'Winner: Lapiz de Oro',
                'Finalist: NY Festival',
                'Silver: Diente de Plata Circulo de Creativos',
                'Silver: FIAP'
            ]
        },
        {
            title: 'FORD WIND',
            awards: [
                'Finalist: NY Festival',
            ]
        },
        {
            title: 'VOLKSWAGEN SURAN FISHDOG',
            awards: [
                'Winner: Gold Lion Cannes Advertising Festival',
                'Winner: San Sebastian Palm de Oro',
                'Winner: Grand Prix Ojo de Iberoamérica',
                'Winner: Ciclope Festival Gold - Character Design',
                'Winner: Ciclope Festival Gold - VFX',
                'Bronze: Ciclope Festival Bronze - Animation',
                'Silver: FIAP'
            ]
        },
        {
            title: 'SIGNIA PLAYSTATION',
            awards: [
                'Finalist: Cannes Advertising Festival',
            ]
        },
        {
            title: 'AXE QUAKE',
            awards: [
                'Bronze: Cannes Advertising Festival'
            ]
        },
        {
            title: 'RENAULT BALLOONS',
            awards: [
                'Silver: San Sebastian Palm de Plata'
            ]
        },
        {
            title: 'QUILMES GOLD',
            awards: [
                'Winner: Lapiz de Oro'
            ]
        },
        {
            title: 'AYUDIN SAUSAGEFLAN',
            awards: [
                'Finalist: Cannes Advertising Festival',
                'Mention: Círculo de Creativos',
            ]
        },
        {
            title: 'BGH SUMMER HATERS',
            awards: [
                'Winner: Sol de Oro Festival Iberoamericano',
                'Silver: Cannes Advertising Festival',
                'Bronze: Lápiz de Bronze'
            ]
        },
        {
            title: 'QUILMES FOR EXPORT',
            awards: [
                'Silver: Lapiz de Plata'
            ]
        },
        {
            title: 'QUILMES HISTORY OF FRIENDSHIP',
            awards: [
                'Winner: Sol de Oro Festival Iberoamericano',
                'Bronze: Circulo de Creativos'
            ]
        },
        {
            title: 'NEXTEL PARROTS',
            awards: [
                'Winner: Sol de Oro Festival Iberoamericano'
            ]
        },
        {
            title: 'GOT MILK',
            awards: [
                'Winner: FIAP - Gold in VFX Category',
                'Bronze: FIAP - Bronze in Kraft Category',
                'Bronze: FIAP - Bronze in Campaign Category',
                'Silver: Cannes Advertising Festival',
                'Silver: Sol de Plata Festival Iberoamericano',
                'Bronze: Wave de Rio'
            ]
        },
        {
            title: 'GOT MILK CARS',
            awards: [
                'Finalist: Cannes Advertising Festival',
            ]
        },
        {
            title: 'LA CAMPAGNOLA ROSTER',
            awards: [
                'Winner: Lapiz de Oro'
            ]
        },
        {
            title: 'IECO HERENCIA',
            awards: [
                'Finalist: Cannes Advertising Festival'
            ]
        },
        {
            title: 'FORD KA LITTERS',
            awards: [
                'Silver Lapiz de Plata'
            ]
        },
        {
            title: 'VW VOYAGE MONKEY',
            awards: [
                'Winner: FIAP - Silver in Animation & VFX Category'
            ]
        },
        {
            title: 'NIVEA MEN PIONEERS',
            awards: [
                'Winner: Grand Prix Diente 2019',
                'Winner: Diente - Gold in VFX Category'
            ]
        },
        {
            title: 'NAJWA NIMRI LENTO',
            awards: [
                'Winner: Sol de Oro Festival Iberoamericano in VFX',
                'Mención: Diente'
            ]
        },
        {
            title: 'FORD KA T REX',
            awards: [
                'Winner: Diente - Gold in VFX Category',
                'Silver: Ciclope Latino Festival  - VFX'
            ]
        },
        {
            title: 'BURGER KING COLORADOS',
            awards: [
                'Winner: Diente - Gold in TV 45”',
            ]
        },
        {
            title: 'COCA-COLA MARTA TERMINATOR',
            awards: [
                'Silver: Diente - Silver in VFX Category',
                'Mencion: Campaña hasta 45”'
            ]
        },
        {
            title: 'COCA-COLA ACCEPTING SANTA',
            awards: [
                'Silver: Diente - Silver in TV 60”',
                'Silver: Diente - Silver  in Campaña mas de 45”'
            ]
        },
        {
            title: 'COCA-COLA FRASES',
            awards: [
                'Bronze: Diente - Bronze in TV 60”',
            ]
        },
        {
            title: 'POWERADE MANIFIESTO',
            awards: [
                'Mencion: Diente - Mencion en VFX Category',
            ]
        }
    ])
    const [columns, setColumns] = useState(false);

    useEffect(() => {
    let columns, columnFirst, columnSecond, columnThird

        if (window && window.matchMedia("(max-width: 1100px").matches) {
            columnFirst = items.slice(0,9);
            columnSecond = items.slice(10, 18);
            setColumns([
                columnFirst,
                columnSecond,
            ])
        } else {
            columnFirst = items.slice(0, 9)
            columnSecond = items.slice(10,18)
            columnThird = items.slice(19, 27);
        
            setColumns([
                columnFirst,
                columnSecond,
                columnThird
            ])
        }
    }, [])


    return (
        <div id="Awards" className="Awards">
            <h3>AWARDS</h3>
            <div className="items">
                {
                    columns && columns.map((items, i) => (
                        <div className="column" key={i}>
                            {
                                items && items.map((item, i) => (
                                    <div id={item.awards[0] + item.title + i} key={item.title + item.awards[0] + i} className="item" key={item.label}>
                                        <p className="title">{item.title}</p>
                                        {
                                            item && item.awards && item.awards.map((award) => (
                                                <p key={award} className="award">
                                                    {award}
                                                </p>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <img
                src="/awards-full.svg"
                className="awards-logos"
            />
            <img
                src="/white-arrow.svg"
                className="arrow"
                onClick={handleIcon}
            />
            <style jsx>
                {`
                    .arrow {
                        position: absolute;
                        right: 5vw;
                        cursor: pointer;
                        margin-top: 84px;
                    }
                    .Awards {
                        padding: 5vw;
                        grid-column: 1/4;
                        width: 95vw;
                        background: #1A1918;
                        font-family: 'Drunk';
                        color: #EDE9E3;
                    }
                    .Awards h3 {
                        margin-top: 15px;
                        font-size: 2.2em;
                    }
                    .item .title {
                        font-family: 'Drunk';
                        font-weight: 400;
                        margin-bottom: 0;
                        margin-top: 20px;
                        max-width: 300px;
                    }
                    .item .award {
                        font-family: 'TT';
                        font-weight: 400;
                        margin-top: 0;  
                        margin-bottom: 0;
                    }
                    .items {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        max-height: none;
                    }
                    .awards-logos {
                        margin-top: 50px;
                        width: 80vw;
                        max-width: 900px;
                    }
                    .column {
                        padding-right: 2vw;
                    }
                    @media screen and (max-width: 1100px) {
                        .Awards {
                            height: auto;
                            padding: 5vw;
                        }
                        .items {
                            grid-template-columns: 1fr 1fr;
                            height: auto;
                            max-height: none;
                        }
                        .column:last-child {
                            margin-left: 22px;
                        }
                        .column {
                            width: 326px;
                        }
                    }
                    @media screen and (max-width: 768px) {
                    .Awards {
                        position: relative;
                        padding: 5vw;
                    }
                    .items {
                            display: grid;
                            grid-template-columns: 1fr;
                            max-height: auto;
                        }
                    .column:last-child {
                            margin-left: 0px;
                        }
                    .arrow {
                        right: 36px;
                        bottom: 28px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Awards;