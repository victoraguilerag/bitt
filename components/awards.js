import { useState, useEffect } from 'react'

function Awards ({ handleIcon }) {
    const [items, setItems] = useState([
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
            title: 'MILLONAIRE PLASTILINA MOSH',
            awards: [
                'Winner: UD International Film & Video Festival'
            ]
        },
        {
            title: 'FORDWIND',
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
                'Bronze: Cannes Adevertising Festival'
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
            title: 'BGH',
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
            title: 'Quilmes',
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
            title: 'FORD KA LITTER',
            awards: [
                'Silver Lapiz de Plata'
            ]
        },
        {
            title: 'VW VOYAGE MONKEY',
            awards: [
                'Winner: FIAP - Silver in Animation & VFX Category'
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
            columnFirst = items.slice(0, 6)
            columnSecond = items.slice(7,13)
            columnThird = items.slice(14, 18);
        
            setColumns([
                columnFirst,
                columnSecond,
                columnThird
            ])
            console.log(columns)
        }
    }, [])


    return (
        <div className="Awards">
            <h3>AWARDS</h3>
            <div className="items">
                {
                    columns && columns.map((items) => (
                        <div className="column">
                            {
                                items && items.map((item) => (
                                    <div className="item">
                                        <p className="title">{item.title}</p>
                                        {
                                            item && item.awards && item.awards.map((award) => (
                                                <p className="award">
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
                src="/arrow.svg"
                className="arrow"
                onClick={handleIcon}
            />
            <style jsx>
                {`
                    .arrow {
                        position: absolute;
                        right: 100px;
                    }
                    .Awards {
                        padding: 50px 100px 100px;
                        grid-column: 1/4;
                        width: 100vw;
                        background: #1A1918;
                        font-family: 'Drunk';
                        color: #EDE9E3;
                    }
                    .Awards h3 {
                        margin-top: 15px;
                        font-size: 40px;
                    }
                    .item .title {
                        font-family: 'Drunk';
                        font-weight: 400;
                        margin-bottom: 0;
                        margin-top: 17px;
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
                        max-height: 85vh;
                    }
                    @media screen and (max-width: 1100px) {
                        .Awards {
                            height: auto;
                            padding: 50px;
                        }
                        .items {
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
                `}
            </style>
        </div>
    )
}

export default Awards;