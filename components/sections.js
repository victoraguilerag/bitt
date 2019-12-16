function Sections ({ active }) {
    const scrollTo = (target) => {
        const tag = document.getElementById(target)
        tag.scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <div className={`sections ${active ? 'active' : ''}`}>
            <h3 className="section first" onClick={() => scrollTo('Work')}>
                WORK
            </h3>
            <h3 className="section" onClick={() => scrollTo('About')}>ABOUT</h3>
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
                        margin-top: 8px;
                        margin-bottom: 0;
                    }
                    .sections h3.first {
                        margin-top: 20px;
                    }
                    .section a {
                        text-decoration: none;
                        color: black;
                    }
                    .section {
                        cursor: pointer;
                    }
                    @media screen and (max-width: 1100px) {
                        .sections {
                            top: 105px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Sections;