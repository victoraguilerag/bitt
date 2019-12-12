import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import '../components/fonts.css'
import lottie from 'lottie-web'
import * as animationData from '../public/burger-animation-lottie.json'
import Detalle from '../components/Detalle'
function Home () {
  const brands = [
    {label: 'ford',img: 'BITT_01',},
    {label: 'volkswagen', img: "BITT_02"},
    {label: 'coca-cola', img: "BITT_03"},
    {label: 'nescafe', img: "BITT_04"},
    {label: 'manzanada', img: "BITT_05"},
    {label: 'axion', img: "BITT_06"},
    {label: 'catsup', img: "BITT_07"},
    {label: 'banco de bosques', img: "BITT_08"},
    {label: 'dralion', img: "BITT_09"},
    {label: 'elite', img: "BITT_10"},
    {label: 'fritos', img: "BITT_01"},
    {label: 'gcba', img: "BITT_02"},
    {label: 'got milk', img: "BITT_03"},
    {label: 'nivea', img: "BITT_04"},
    {label: 'powerade', img: "BITT_05"},
    {label: 'villavicencio', img: "BITT_06"},
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
    const detalle = document.getElementById('detalle');
    detalle.scrollIntoView({
      behavior: 'smooth'
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
            margin: 50px;
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
              height: 40vw;
            }
            .menu .item {
              height: 16px;
              font-size: 16px;
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