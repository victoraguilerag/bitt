import React from " React";

function VideoShow () {
    return (
        <div className="video-container">
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
                allowFullScreen
                onLoad={e => handleLoad(e)}
                />
            )
            }
            <div className="water-mark">
                <div className="text">LARSEA</div>
            </div>
        </div>
        <style jsx>
            {`{
                .water-mark .text {
                  font-family: 'Drunk';
                  font-size: 91px;
                  position: ABSOLUTE;
                  bottom: 0;
                  color: #ece9e3;
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
            `}
        </style>
    );
};