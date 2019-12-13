import React from 'react'

function Thumbnail ({ item, onClick }) {
    return (
        <div className="thumbnail" onClick={onClick}>
            <style jsx>
                {`
                    .thumbnail {
                        cursor: pointer;
                        width: auto;
                        height: 360px;
                        background: url("/${item.img}.jpg");
                        background-size: cover;
                        background-position: center;
                    }
                    .thumbnail:hover {
                        box-shadow: 0 0 6px rgba(0,0,0,.4);
                    }
                `}
            </style>
        </div>
    )
}

export default Thumbnail