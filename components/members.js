import { useState } from 'react'

function Members () {
    const handleIcon = () => {
        console.log('epa')
        // const video = document.getElementById('video')
        // console.log(video)
        // video.scrollIntoView({ behavior: 'smooth'})
        const Hero = document.getElementById('Hero')
        document.body.style.overflowY = 'scroll';
        Hero.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
    
        setTimeout(() => {
            const detalle = document.getElementById('detalle')
            console.log(detalle.scrollTop)
            detalle.scrollTop = 0
        }, 1000)
    }
    const [members, setMembers] = useState([
        {
            name: 'FRANCO BITTOLO',
            title: 'CEO. DIRECTOR',
            img: '/francobittolo.svg',
            resume: [
                'Majored in Fine Arts, Animator for Disney, Hanna & Barbera and Don Bluth from Jaime Diaz Studios, Animation Director for the most important animated feature films in Argentina. ',
                'In 2001 Franco created Bitt Animation, a production company considered one of the most important in Latin America regarding animation and vfx. Strategy consultant for Foosball, largest CG feature film producer in South America.'
            ],
        },
        {
            name: 'CRISTIAN MORALES',
            title: 'COO. DIRECTOR',
            img: '/cristianmorales.svg',
            resume: [
                'He took his first steps as 3D artists in Patagonik Film Group in 1999 working for several features films and animated series . He work as vfx supervisor for the most importante postproduction house in Argentina such asDynamo Post, Cinery, Mediabite among others and have done more than 1000 TV commercials, music videos and features films. In 2004 he joined Bitt as vfx supervisor. In 2007 he become COO of Bitt guiding and increasin the growth of the company together wit Franco Bittolo.'
            ],
        },
        {
            name: 'MARIANA MOTTA',
            title: 'COO. DIRECTOR',
            img: '/marianamotta.svg',
            resume: [
                'While she was studying Marketing in UCES, she came across one of the most recognized director of the advertising market and decided to worked with him while she continues her career. Mariana started working in Mania in 1995 as production coordinator Then she decided to joined the Argentinian team of Salado Films and helped to settle up their offices in the country. Also she worked in Rasti Films as Executive Producer. She joined Bitt in2004, collaborating to consolidate the company not only in the argentinian market but also in Mexico and Brasil.'
            ],
        },

    ])
    return (
        <div className="Members">
            {
                members && members.map((member, i) => (
                    <div className="member">
                        <img src={member.img} className="img" />
                        <div className="information">
                            <div className="name bold">{member.name}</div>
                            <div className="title bold">{member.title}</div>
                            <div className="resume">
                                {
                                    member.resume && member.resume.map(text => (
                                        <p className="resume-text">
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                            {
                                i == 2 && (
                                    <img onClick={handleIcon} className="arrow" src="/white-arrow.svg" />
                                )
                            }
                        </div>
                    </div>
                ))
            }
            <style jsx>
                {`
                    .Members {
                        background: #141313;
                        color: white;
                        grid-column: 1/4;
                        padding: 100px;
                    }
                    .name {
                        color: white;
                        font-size: 24px;
                    }
                    .title {
                        color: white;
                        font-size: 24px;
                    }
                    .resume {
                        color: white;
                        font-size: 24px;
                    }
                    .information {
                        color: white;
                        font-size: 24px;
                        margin-left: 22px;
                    }
                    .resume-text {
                        margin-top: 0;
                        width: 100%;
                    }
                    .arrow {
                        position: absolute;
                        right: -150px;
                    }
                    .member {
                        position: relative;
                        display: flex;
                        font-family: 'TT';
                        max-width: 90%;
                        font-weight: lighter;
                        margin-bottom: 20px;
                    }
                    .bold {
                        font-weight: 500;
                    }
                `}
            </style>
        </div>
    )
}

export default Members;