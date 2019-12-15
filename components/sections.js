import React from "React"

function Sections ({ active }) {
    return (
        <div className={`sections ${active ? 'active' : ''}`}>
            <h3 className="section first">WORK</h3>
            <h3 className="section">ABOUT</h3>
            <h3 className="section">CONTACT</h3>

            <style jsx>
                {`
                    .sections {
                        position: absolute;
                        right: -50%;
                        top: 70px;
                        text-align: right;
                        font-family: 'Drunk';
                        transition: right 2s ease;
                    }
                    .sections.active {
                        right: 32px;
                        transition: right 1s ease;
                    }
                    .sections h3 {
                        margin-top: 8px;
                        margin-bottom: 0;
                    }
                    .sections h3.first {
                        margin-top: 20px;
                    }
                `}
            </style>
        </div>
    )
}

export default Sections;