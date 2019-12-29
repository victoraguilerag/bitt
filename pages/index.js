import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import '../components/fonts.css'
import lottie from 'lottie-web'
import * as animationData from '../public/burger-animation-lottie.json'
import Detalle from '../components/detalle'
import Grilla from '../components/grilla'
import Sections from '../components/sections'
import Vimeo from '@vimeo/player'
function Home () {
  const brands = [
    {
      label: 'REEL',
       img: "BITT-REEL",
       nombre: 'BITT REEL',
       miembros: [
       { label: 'DIRECTOR', value: 'Bitt Animation' },        
       { label: 'CLIENT', value: 'Bitt Animation' },
       { label: 'AGENCY', value: 'Bitt Animation'},
       { label: 'PROD. COMPANY', value: 'Bitt Animation'},
       { label: 'YEAR', value: '2019'}
       ],
         video: "267613699",
         videothumb: "381058163",
         videosquare: "381057593",
    },
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
      ],
      video: "296648062",
      videothumb: "381058274",
      videosquare: "381057737",

    },
    {
      label: 'Coca-Cola',
      img: "COCA-COLA_TERMINATOR",
      nombre: 'M.A.R.T.A TERMINATOR',
      miembros: [
        { label: 'DIRECTOR', value: 'Felipe Gomez Aparicio' },        
        { label: 'CLIENT', value: 'Coca Cola' },
        { label: 'AGENCY', value: 'Grey Argentina'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2019'}
      ],
      video: "377153093",
      videothumb: "381058232",
      videosquare: "381057702",
    },
    {
      label: 'NIVEA',
      img: "NIVEA_PIONEERSOFSENSIBILITY",
      nombre: 'PIONEERS OF SENSIBILITY',
      miembros: [
        { label: 'DIRECTOR', value: 'Nico Perez Veiga' },        
        { label: 'CLIENT', value: 'BEIERSDORF' },
        { label: 'AGENCY', value: 'FCB Mexico'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2019'}
      ],
      video: "377153466",
      videothumb: "381058423",
      videosquare: "381057948",
    },
    {
      label: 'POWERADE',
      img: "POWERADE_MANIFESTO",
      nombre: 'MANIFIESTO',
      miembros: [
        { label: 'DIRECTOR', value: 'Nico Perez Veiga' },        
        { label: 'CLIENT', value: 'Powerade' },
        { label: 'AGENCY', value: 'David Agency'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2019'}
      ],
      video: "377153977",
      videothumb: "381058529",
      videosquare: "381058529",
    },
    {
      label: 'VOLKSWAGEN',
      img: "VOLKSWAGEN_MONITO",
      nombre: 'MONITO',
      miembros: [
        { label: 'DIRECTOR', value: 'Santi Elías' },        
        { label: 'CLIENT', value: 'Volkswagen Argentina' },
        { label: 'AGENCY', value: 'Kepel y Mata'},
        { label: 'PROD. COMPANY', value: 'Primo'},
        { label: 'YEAR', value: '2016'}
      ],
      video: "196440067",
      videothumb: "381058576",
      videosquare: "381058050",
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
      ],
      video: "280999698",
      videothumb: "381058389",
      videosquare: "381057913",
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
      ],
      video: "377154373",
      videothumb: "381058546",
      videosquare: "381058022",
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
      ],
      video: "377642328",
      videothumb: "381058510",
      videosquare: "381057997",
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
      ],
      video: "192136233",
      videothumb: "381058197",
      videosquare: "381057669",
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
      ],
      video: "191811252",
      videothumb: "381058317",
      videosquare: "381057787",
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
      ],
      video: "377153242",
      videothumb: "381058369",
      videosquare: "381057881",
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
      ],
      video: "267843690",
      videothumb: "381058306",
      videosquare: "381057763",
    },
    {
      label: 'DOMESTOS',
      img: "DOMESTOS_BATHROOMBLITZ",
      nombre: 'Bathroom Blitz',
      miembros: [
        { label: 'DIRECTOR', value: 'Russell Appleford' },        
        { label: 'CLIENT', value: 'SC JOHNSON'},
        { label: 'AGENCY', value: 'DLKW Lowe'},
        { label: 'PROD. COMPANY', value: 'Mill+ London'},
        { label: 'YEAR', value: '2015'}
      ],
      video: "152621594",
      videothumb: "381058250",
      videosquare: "381057713",
    },
    {
      label: 'GOT MILK',
      img: "GOTMILK_BATTLE",
      nombre: 'BATTLE OF POSITIVISM',
      miembros: [
        { label: 'DIRECTOR', value: 'Armando Bo' },        
        { label: 'CLIENT', value: 'Got Milk' },
        { label: 'AGENCY', value: 'Grupo Gallegos'},
        { label: 'PROD. COMPANY', value: 'Rebolución'},
        { label: 'YEAR', value: '2019'}
      ],
      video: "191811264",
      videothumb: "381058338",
      videosquare: "381057824",
    },
    {
      label: 'ORBIT',
      img: "ORBIT_EATDRINKANDCHEW",
      nombre: 'EAT, DRINK AND CHEW',
      miembros: [
        { label: 'DIRECTOR', value: 'The Mill+' },        
        { label: 'CLIENT', value: 'Wrigleys India' },
        { label: 'AGENCY', value: 'DDB Mudra Group'},
        { label: 'PROD. COMPANY', value: 'The mill+'},
        { label: 'YEAR', value: '2018'}
      ],
      video: "377161041",
      videothumb: "381058485",
      videosquare: "381057976",
    },
    {
      label: 'CATSUP',
      img: "CATSUP_CATAPULTA",
      nombre: 'CATAPULTA',
      miembros: [
        { label: 'DIRECTOR', value: 'Bitt Animation' },        
        { label: 'CLIENT', value: 'Con Agra' },
        { label: 'AGENCY', value: 'BBDO MEX'},
        { label: 'PROD. COMPANY', value: 'Bitt Animation'},
        { label: 'YEAR', value: '2019'}
      ],
      video: "191811253",
      videothumb: "381058216",
      videosquare: "381057684",
    },
  ]
  const animationContainer = useRef(null)
  const secondAnimationContainer = useRef(null)
  const animationDirection = useRef('forward');
  const animation = useRef(null)
  const secondAnimation = useRef(null)
  const [animationState, setAnimationState] = useState(false);
  const [activeSections, setActiveSections] = useState(false);
  const [items, setItems] = useState(brands);
  const [selected, setSelected] = useState(false)
  const [active, setActive] = useState(0);
  const [timer, setTimer] = useState(false)
  const [iframes, setIframes] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [grillaLoaded, setGrillaLoaded] = useState(false)
  const [mobile, setMobile] = useState(false)


  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: animationContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/burger-animation-lottie.json' // the path to the animation json
    });

    secondAnimation.current = lottie.loadAnimation({
      container: secondAnimationContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/burger-animation-lottie.json' // the path to the animation json
    });

    setTimeout(() => {
      animation.current.addEventListener('enterFrame', e => {
        if (e.currentTime >= 27 && animationDirection.current !== 'back') {
          animationDirection.current = 'back'
          animation.current.pause();
        } else if (e.currentTime < 25 && animationDirection.current !== 'forward') {
          animationDirection.current = 'forward'
          animation.current.pause();
        }
      })
    }, 2000)

    setTimeout(() => {
      const Hero = document.getElementById('Hero')
      document.body.style.overflowY = 'scroll';
      Hero.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      const images = []
      for (let i = 0; i < items.length; i++) {
        images[i] = new Image()
        images[i].src = items[i]
      }
    }, 1000)

    setTimeout(() => {
      setIframes(true)
    }, 5000)
    setGrillaLoaded(true)

    if (window && window.matchMedia('(max-width: 1024px)').matches) {
      setMobile(true);
    }
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
    if (items) {
      const selItem = items[items.indexOf(i)]
      if (selItem == selected) {
        const video = document.getElementById('video');
        if (!video) return false
        video.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })  
      }
      setSelected(selItem);
    }
  }
  
  useEffect(() => {
    if (selected) {
      const video = document.getElementById('video');
      if (!video) return false
      document.body.style.overflowY = 'hidden';
      video.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })  
    }
  }, [selected])

  const handleHover = i => {
    window.clearTimeout(timer)
    setActive(i)
  }

  const handleAnimation = () => {
    animation.current.play();
    setActiveSections(!activeSections);
  }
  const handleSecondAnimation = () => {
    secondAnimation.current.play();
  }

  const handleIcon = () => {
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
        detalle.scrollTop = 0
    }, 1000)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleLoad = (e) => {
    const player = new Vimeo(e.target)
    player.play()
    setLoaded(true);
  }

  return (
    <div className="Home">
      <Head>
        <title>Bitt</title>
        <style>
          {
            `
            `
          }
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="Hero" className="Hero">
        <div className={`preloader ${loaded ? "": "active"}`}>
          <div ref={secondAnimationContainer} className="preloader-animation" />
        </div>
        <div ref={animationContainer} onClick={handleAnimation} className="animation">
        </div>
        <Sections active={activeSections} />
        <div className="Hero-content">
          <div className="video-container">
            {
              items && items.map((item, i) => {
                if (mobile && i !== 0) return false;
                return (
                  <iframe
                    id={item.label}
                    className="home"
                    className={`home ${items[active].label == item.label ? "encendido" : "apagado"}`}
                    title={item.label}
                    src={`https://player.vimeo.com/video/${item.videosquare}?autoplay=1&loop=1&autopause=0&background=1`}
                    width="880"
                    height="880"
                    frameborder="0"
                    autoplay
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    onLoad={i == 0 ? e => handleLoad(e) : false}
                  />
                )
              }) 
            }
            <div className="water-mark">
              <img src="/bitt-logo.svg" />
            </div>
          </div>
          <div className="menu">
            {
              brands.map((item, i) => {
                if (item.label == "REEL") return (<div />)
                return (
                  <div
                    key={item.label}
                    className={`item ${active == i ? 'active': ''}`}
                    onMouseEnter={() => handleHover(i)}
                    onClick={() => handleItem(i)}
                  >
                    {item.label.toUpperCase()}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Detalle selected={selected} items={items} selectProject={handleItem} />
      {
        !selected && grillaLoaded && (
          <Grilla items={items} handleIcon={handleIcon} selectProject={handleItem} />
        )
      }
      <style jsx global>
        {`

          @font-face {
            font-family: "Drunk";
            src: local("system"), url("/DrukWide-Medium.otf");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Drunk";
            src: local("system"), url("/DrukWide-Bold.otf");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "TT";
            src: local("system"), url("/TT-Hoves-ExtraLight.otf");
            font-weight: lighter;
            font-style: 400;
            font-display: swap;
          }
          @font-face {
            font-family: "TT";
            src: local("system"), url("/TT-Hoves-Medium.otf");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
      <style jsx>
        {`
          .preloader {
            opacity: 0;
            transition: 1s opacity ease;
            position: fixed;
            background: white;
            width: 100%;
            height: 100%;
            z-index: 50;
            display: flex;
            justify-content: center;
            align-items: center;
            display: none;
          }
          .preloader.active {
            position: fixed;
            background: white;
            width: 100%;
            height: 100%;
            z-index: 50;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s opacity ease;
            opacity: 1;
          }
          .preloader-animation {
            width: 40px;
          } 
          @media screen and (max-width: 1024px) {
            #Work::first-child {
              display:none;
            }
          }
          :global(iframe.home) {
            width: 181%;
            height: 100%;
            position: absolute;
            max-width: none;
          }
          :global(iframe.home.apagado) {
            display: none;
          }
          :global(iframe.home.encendido) {
            display: flex;
          }
          :global(iframe.home#POWERADE) {
            width: 200%;
          }
          :global(iframe.home#REEL) {
            max-width: 100%;
            height: 100%;
          }
          
          :global(body) {
            margin: 0;
            overflow-x: hidden;
            background: #ECE6DE;
          }
          .Hero {
            background: #ECE6DE;
            height: 100vh;
            overflow-x: 'hidden';
            max-width: 100vw;
          }
          .Hero-content {
            display: flex;
            justify-content: flex-start;
          }
          .video-container {
            justify-self: flex-end;
            background: #1A1918;
            background-position: center;
            background-size: cover;
            margin: 30px;
            height: calc(100vh - 60px);
            width: calc(100vh - 60px);
            display: flex;
            justify-content: center;
            align-items: flex-end;
            overflow: hidden;
            position: relative;
          }

          .water-mark {
            width: 94%;
            height: auto;
            margin-bottom: 2%;
            z-index: 10;
          }
          .menu {
            height: calc(100vh - 40px);
            display: flex;
            flex-flow: column;
            justify-content: flex-end;
            align-self: flex-end;
            margin-bottom: 30px;
          }
          .menu .item {
            height: 40px;
            font-size: 40px;
            font-weight: bold;
            font-family: 'Drunk';
            cursor: pointer;
            color: #A7A19A;
            margin-top: 0px;
          }
          .menu .item.active {
            color: #141313;
          }
          @media screen and (max-width: 1600px) {
            .menu {
            }
            .menu .item {
              height: 24px;
              font-size: 24px;
              line-height: 24px;
              margin-top: 0px;
            }
          }
          .animation {
            display: flex;
            position: absolute;
            background: white;
            top: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            background: #EDE9E3;
          }
          @media screen and (max-width: 1100px) {
            .Hero {
              height: auto;
            }
            .video-container {
              width: 570px;
              height: 570px;
              margin-top: 5vh;
            }
            .menu {
              display: none;
            }
            .animation {
              width: 50px;
              height: 50px;
            }
          }
          @media screen and (max-width: 768px) {
            .Hero {
              display: flex;
              flex-flow: column;
            }
            .animation {
              position: inherit;
              align-self: flex-end;
              margin-right: 30px;
              margin-top: 30px;
              width: 12vw;
              height: 12vw;
            }
            .video-container {
              margin-top: 10px !important;
              margin-bottom: 30px;
              height: calc(100vw - 60px);
              width: calc(100vw - 60px);
            }
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


/*
{
  iframes && items && items[active] && items[active].video && (
    <iframe
      id={items[active].label}
      className="home"
      title={items[active].label}
      src={`https://player.vimeo.com/video/${items[active].videosquare}?autoplay=1&loop=1&autopause=0&background=1`}
      width="880"
      height="880"
      frameborder="0"
      autoplay
      allow="autoplay; fullscreen"
      allowfullscreen
      onLoad={e => handleLoad(e)}
    />
  )
}
*/