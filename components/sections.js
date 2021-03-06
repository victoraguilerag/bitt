function Sections ({ active }) {
    const scrollTo = (target) => {
        const tag = document.getElementById(target)
        if (!tag) return false
        tag.scrollIntoView({
            block: "start",
            behavior: 'smooth',
        })
    }
    return (
        <div className={`sections ${active ? 'active' : ''}`}>
            <h3 className="section first" onClick={() => scrollTo('Work')}>
                WORKS
            </h3>
            <h3 className="section" onClick={() => scrollTo('Reel')}>REEL</h3>
            <h3 className="section" onClick={() => scrollTo('About')}>ABOUT</h3>
            <h3 className="section" onClick={() => scrollTo('Awards')}>AWARDS</h3>
            <h3 className="section" onClick={() => scrollTo('Contact')}>CONTACT</h3>

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
                        line-height: 1em;
                        margin-top: 5px;
                        margin-bottom: 0;
                    }
                    .sections h3.first {
                        margin-top: 20px;
                    }
                    .section a {
                        text-decoration: none;
                        color: #1A1918;
                    }
                    .section {
                        cursor: pointer;
                    }
                    @media screen and (max-width: 1100px) {
                        .sections {
                            top: 70px;
                        }
                    }
                    @media screen and (max-width: 768px) {
                        .sections {
                            position: initial;
                            height: 0;
                            overflow-y: hidden;
                            transition: 1s height ease;
                        }
                        .sections.active {
                            height: auto;
                            transition: 1s height ease;
                            margin-right: 30px;
                        }
                        .section {
                            font-size: 16px;
                            margin-top: 10px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Sections;