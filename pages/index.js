import { useState, useEffect } from 'react';
import Head from 'next/head';
import '../components/fonts.css'
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
  const [items, setItems] = useState(brands);
  const [active, setActive] = useState(0);
  const [timer, setTimer] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(active)
      console.log(items)
      if (active == 15) return setActive(0)
      const increment = active + 1;
      setActive(increment);
    }, 10000)
    setTimer(timer)
  }, [active])

  const handleHover = i => {
    window.clearTimeout(timer)
    setActive(i)
  } 
  console.log(items[active])
  return (
    <div className="Home">
      <Head>
        <title>Home</title>
        <style>
          {
            `
              @font-face {
                font-family: "Drunk";
                src: url("/DrukWide-Bold.otf")
                    format("otf");
                font-weight: bold;
                font-style: normal;
              }
              @font-face {
                font-family: "Drunk";
                src: url("/DrukWide-Medium.otf")
                    format("otf");
                font-weight: normal;
                font-style: normal;
              }
              @font-face {
                font-family: "TT";
                src: url("/TT-Hoves-ExtraLight.otf")
                    format("otf");
                font-weight: lighter;
                font-style: normal;
              }
              @font-face {
                font-family: "TT";
                src: url("/TT-Hoves-Medium.otf")
                    format("normal");
                font-weight: normal;
                font-style: normal;
              }
            `
          }
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="Hero">
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
              >
                {item.label.toUpperCase()}
              </div>
            ))
          }
        </div>
      </div>


      <style jsx>
        {`
          :global(body) {
            margin: 0;
          }
          .Hero {
            background: #ECE6DE;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
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
            cursor: pointer;
            color: #A7A19A;
          }
          .menu .item.active {
            color: #141313;
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