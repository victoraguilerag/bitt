import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import '../components/fonts.css'
import lottie from 'lottie-web'
import * as animationData from '../public/burger-animation-lottie.json'
import Detalle from '../components/detalle'
function Home () {
  const brands = [
    {
      label: 'ford',
      img: 'FORD_T-REX',
      nombre: 'FORD KA T-REX',
      miembros: [
        { label: 'DIRECTOR', value: 'Nicolás Kasakoff' },        
        { label: 'CLIENT', value: 'FORD ARGENTINA' },
        { label: 'AGENCY', value: 'GTB ARGENTINA'},
        { label: 'PROD. COMPANY', value: 'LANDIA'},
        { label: 'YEAR', value: '2018'}
      ]
    },
    {
      label: 'Coca Cola',
      img: "COCA-COLA_TERMINATOR",
      nombre: 'M.A.R.T.A TERMINATOR',
      miembros: [
        { label: 'DIRECTOR', value: 'Felipe Gomez Aparicio' },        
        { label: 'CLIENT', value: 'Coca Cola' },
        { label: 'AGENCY', value: 'Grey Argentina'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2019'}
      ]
    },
    {
      label: 'NIVEA MEN',
      img: "NIVEA_PIONEERSOFSENSIBILITY",
      nombre: 'PIONEERS OF SENSIBILITY',
      miembros: [
        { label: 'DIRECTOR', value: 'Nico Perez Veiga' },        
        { label: 'CLIENT', value: 'BEIERSDORF' },
        { label: 'AGENCY', value: 'FCB Mexico'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2019'}
      ]
    },
    {
      label: 'POWERADE MANIFIESTO',
      img: "POWERADE_MANIFESTO",
      nombre: 'MONITO',
      miembros: [
        { label: 'DIRECTOR', value: 'Santi Elías' },        
        { label: 'CLIENT', value: 'Volkswagen Argentina' },
        { label: 'AGENCY', value: 'Kepel y Mata'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2016'}
      ]
    },
    {
      label: 'NESCAFÉ',
      img: "NESCAFE_CUERDAS",
      nombre: 'CUERDAS',
      miembros: [
        { label: 'DIRECTOR', value: 'Andy Fogwill' },        
        { label: 'CLIENT', value: 'Nestle' },
        { label: 'AGENCY', value: 'Marcel'},
        { label: 'PROD. COMPANY', value: 'LANDIA'},
        { label: 'YEAR', value: '2017'}
      ]
    },
    {
      label: 'TOYOTA',
      img: "TOYOTA_CHOOSETHETOUGHESTFIELD",
      nombre: 'CHOOSE THE TOUGHEST FIELD',
      miembros: [
        { label: 'DIRECTOR', value: 'Jonnny Mass' },        
        { label: 'CLIENT', value: 'Toyota' },
        { label: 'AGENCY', value: 'Conil'},
        { label: 'PROD. COMPANY', value: 'Mssngpeces'},
        { label: 'YEAR', value: '2019'}
      ]
    },
    {
      label: 'Palacio de Hierro',
      img: "PALACIODEHIERRO_CHRISTMAS",
      nombre: 'CHRISTMAS',
      miembros: [
        { label: 'DIRECTOR', value: 'Jonathan Gurvit' },        
        { label: 'CLIENT', value: 'El Palacio de Hierro' },
        { label: 'AGENCY', value: 'Teran TBWA'},
        { label: 'PROD. COMPANY', value: 'MadreFoca'},
        { label: 'YEAR', value: '2019'}
      ]
    },
    {
      label: 'La Campagnola',
      img: "CAMPAGNOLA_GALLO",
      nombre: 'Gallo',
      miembros: [
        { label: 'DIRECTOR', value: 'Pablo Fusco' },        
        { label: 'CLIENT', value: 'Arcor' },
        { label: 'AGENCY', value: 'Kepel & Mata'},
        { label: 'PROD. COMPANY', value: 'Pank!'},
        { label: 'YEAR', value: '2015'}
      ]
    },
    {
      label: 'GCBA',
      img: "GCBA_SAPO",
      nombre: 'SAPO',
      miembros: [
        { label: 'DIRECTOR', value: 'Diego Kaplan' },        
        { label: 'CLIENT', value: 'GCBA' },
        { label: 'AGENCY', value: 'Savaglio'},
        { label: 'PROD. COMPANY', value: 'Oruga Films'},
        { label: 'YEAR', value: '2019'}
      ]
    },
    {
      label: 'Manzanada',
      img: "MANZANADA_SENTIDOS",
      nombre: 'Sentidos',
      miembros: [
        { label: 'DIRECTOR', value: 'Bitt Animation' },        
        { label: 'CLIENT', value: 'Pepsico' },
        { label: 'AGENCY', value: 'BBDO Mexico'},
        { label: 'PROD. COMPANY', value: 'Bitt Animation'},
        { label: 'YEAR', value: '2017'}
      ]
    },
    {
      label: 'Fritos',
      img: "FRITOS_HERO",
      nombre: 'Hero',
      miembros: [
        { label: 'DIRECTOR', value: 'Bitt Animation - Can Can Club'},        
        { label: 'CLIENT', value: 'Pepsico' },
        { label: 'AGENCY', value: 'BBDO Mexico'},
        { label: 'PROD. COMPANY', value: 'Bitt Animation'},
        { label: 'YEAR', value: '2019'}
      ]
    },
    {
      label: 'Domestos',
      img: "DOMESTOS_BATHROOMBLITZ",
      nombre: 'Bathroom Blitz',
      miembros: [
        { label: 'DIRECTOR', value: 'Russell Appleford' },        
        { label: 'CLIENT', value: '' },
        { label: 'AGENCY', value: 'DLKW Lowe'},
        { label: 'PROD. COMPANY', value: 'Mill+ London'},
        { label: 'YEAR', value: '2015'}
      ]
    },
    {
      label: 'Orbit',
      img: "ORBIT_EATDRINKANDCHEW",
      nombre: 'EAT, DRINK AND CHEW',
      miembros: [
        { label: 'DIRECTOR', value: 'The Mill+' },        
        { label: 'CLIENT', value: 'Wrigleys India' },
        { label: 'AGENCY', value: 'DDB Mudra Group'},
        { label: 'PROD. COMPANY', value: 'The mill+'},
        { label: 'YEAR', value: '2018'}
      ]
    },
    {
      label: 'CATSUP Del Monte',
      img: "BITT_06",
      nombre: 'Catapulta',
      miembros: [
        { label: 'DIRECTOR', value: 'Bitt Animation' },        
        { label: 'CLIENT', value: 'Con Agra' },
        { label: 'AGENCY', value: 'BBDO MEX'},
        { label: 'PROD. COMPANY', value: 'Bitt Animation'},
        { label: 'YEAR', value: '2019'}
      ]
    },
  ]
  const animationContainer = useRef(null)
  const animationDirection = useRef('forward');
  const animation = useRef(null)
  const [animationState, setAnimationState] = useState(false) 
  const [items, setItems] = useState(brands);
  const [selected, setSeleccted] = useState(items[0])
  const [active, setActive] = useState(0);
  const [timer, setTimer] = useState(false)
  useEffect(() => {
    console.log(animationContainer)
    console.log('animationContainer')
    animation.current = lottie.loadAnimation({
      container: animationContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/burger-animation-lottie.json' // the path to the animation json
    });
    console.log(animation.current)
    const Hero = document.getElementById('Hero')
    Hero.scrollIntoView()
    setTimeout(() => {
      animation.current.addEventListener('enterFrame', e => {
        debugger
        if (e.currentTime >= 27 && animationDirection.current !== 'back') {
          animationDirection.current = 'back'
          animation.current.pause();
        } else if (e.currentTime < 25 && animationDirection.current !== 'forward') {
          animationDirection.current = 'forward'
          animation.current.pause();
        }
      })
    }, 2000)
  }, [])
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   if (active == 15) return setActive(0)
    //   const increment = active + 1;
    //   setActive(increment);
    // }, 3000)
    // setTimer(timer)
  }, [active])

  const handleItem = i => {
    setSeleccted(items[i]);
    const video = document.getElementById('video');
    video.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const handleHover = i => {
    window.clearTimeout(timer)
    setActive(i)
  }
  const handleAnimation = () => {
    animation.current.play()
  }
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="Home">
      <Head>
        <title>Home</title>
        <style>
          {
            `
            `
          }
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="Hero" className="Hero">
        <div ref={animationContainer} onClick={handleAnimation} className="animation">

        </div>
        <div className="video-container">
          <div className="water-mark">
            <img src="/water-mark.svg" />
          </div>
        </div>
        <div className="menu">
          {
            brands.map((item, i) => (
              <div
                className={`item ${active == i ? 'active': ''}`}
                onMouseEnter={() => handleHover(i)}
                onClick={() => handleItem(i)}
              >
                {item.label.toUpperCase()}
              </div>
            ))
          }
        </div>
      </div>
      <Detalle selected={selected} />

      <style jsx global>
        {`

          @font-face {
            font-family: "Drunk";
            src: url("/DrukWide-Medium.otf");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "Drunk";
            src: url("/DrukWide-Bold.otf");
            font-weight: bold;
            font-style: normal;
          }
          @font-face {
            font-family: "TT";
            src: url("/TT-Hoves-ExtraLight.otf");
            font-weight: lighter;
            font-style: normal;
          }
          @font-face {
            font-family: "TT";
            src: url("/TT-Hoves-Medium.otf");
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
      <style jsx>
        {`
          :global(body) {
            margin: 0;
            overflow-y: hidden;
          }
          .Hero {
            background: #ECE6DE;
            height: 100vh;
            display: grid;
            grid-template-columns: 50% 50%;
            justify-content: center;
            align-items: center;
          }
          .video-container {
            justify-self: flex-end;
            background: url(${`/${items[active].img}.jpg`});
            background-position: center;
            background-size: cover;
            margin: 30px;
            height: 880px;
            width: 880px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding-bottom: 28px;
          }
          @media screen and (max-width: 1600px) {
            .video-container {
              width: 40vw;
              height: 40vw;
              
            }

            .video-container .water-mark img {
              display: flex;
              width: 80%;
              margin: 0 auto;
            }
          }
          .menu {
            height: 880px;
            display: flex;
            flex-flow: column;
            justify-content: flex-end;
          }
          .menu .item {
            height: 40px;
            font-size: 40px;
            font-weight: bold;
            font-family: Drunk;
            cursor: pointer;
            color: #A7A19A;
          }
          .menu .item.active {
            color: #141313;
          }
          @media screen and (max-width: 1600px) {
            .menu {
              height: 42vw;
            }
            .menu .item {
              height: 20px;
              font-size: 20px;
            }
          }
          .animation {
            display: flex;
            position: absolute;
            background: white;
            top: 50px;
            right: 5vw;
            width: 50px;
            height: 50px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Home;

{/* <div className="Detalle"></div>
<div className="Listado">
  <div className="item">Item</div>
  <div className="pie">Pie</div>
</div> */}