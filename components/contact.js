import React from 'react'

function Contact ({ handleIcon }) {
    return (
        <div id="Contact" className="Contact">
            <h3 className="title">CONTACT</h3>
            <h4 className="label">For Jobs or General Inquiries please use this form.</h4>
            <form action="https://formspree.io/xrgpjllv" method="POST" className="form">
                <input type="text" className="input" placeholder="Name" name="Name" id="Name" />
                <input type="email" className="input" placeholder="Mail" name="Mail" id="Mail" />
                <input type="text" className="input" placeholder="Subject" name="Subject" id="Subject" />
                <textarea type="text" className="input big" placeholder="Message" name="Message" id="Message" />
                <input type="submit" className="submit" id="submit" name="submit" value="SUBMIT" />
            </form>
            <div className="brand-footer">
                <img src="/footerlogo.svg" className="logo" />
                <div className="redes">
                    <a
                        className="red first"
                        href="https://www.instagram.com/bittanimation/"
                        target="_blank"
                    >
                        <img src="/instagram.svg" className="red-icon" />
                    </a>
                    <a
                        className="red"
                        href="https://vimeo.com/bittanimation"
                        target="_blank"
                    >
                        <img src="/vimeo.svg" className="red-icon" />
                    </a>
                    <a
                        className="red"
                        href="https://www.facebook.com/bittanimation"
                        target="_blank"
                    >
                        <img src="/facebook.svg" className="red-icon" />
                    </a>
                </div>
            </div>
            <img
                src="/arrow.svg"
                className="arrow"
                tabIndex="0"
                onClick={handleIcon}
            />
            <style jsx>
                {`
                    .Contact {
                        width: 90vw;
                        background: #EDE9E3;
                        color: #141313;
                        padding: 5vw;
                        position: relative;
                    }
                    .Contact .title {
                        font-size: 2.2em;
                        font-family: 'Drunk';
                        font-weight: 500;
                        margin-bottom: 0;
                        margin-top: 0;
                    }
                    form {
                        display: flex;
                        flex-flow: column;
                        max-width: 600px;
                    }
                    form .input {
                        height: 50px;
                        border: none;
                        box-shadow: none;
                        margin-bottom: 10px;
                        font-size: 1em;
                        font-family: 'TT';
                        padding-left: 18px;
                        background: #B3AFA8;
                        color: black;
                    }
                    form .input::placeholder,
                    form .input::-ms-input-placeholder,
                    form .input::-ms-input-placegolder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: black;
                        opacity: 1; /* Firefox */
                    }

                    form .input.big {
                        height: 248px;
                        padding-top: 12px;
                        vertical-align: top;
                    }
                    form .submit {
                        border: none;
                        height: 50px;
                        background: #EDE9E3;
                        color: #141313;
                        border: #141313 solid 1.5px;
                        font-size: 20px;
                        font-family: 'Drunk';
                        max-width: 155px;
                        display: flex;
                        padding-left: 18px;
                        font-weight: 400;
                        cursor: pointer;
                    }
                    form .submit:hover {
                        color: #EDE9E3;
                        background: #141313;
                        border: #141313 solid 1.5px;
                    }
                    .brand-footer {
                        max-width: 90%;
                        position: relative;
                        display: flex;
                        margin-top: 57px;
                        margin-bottom: 100px;
                        filter: invert(1);
                    }
                    .brand-footer .logo {
                        margin-right: 262px;
                    }
                    .arrow {
                        position: absolute;
                        right: 5vw;
                        cursor: pointer;
                    }
                    .brand-footer .red {
                        margin-left: 10px;
                    }
                    .brand-footer .red-icon {
                        max-height: 6vh;
                        max-width: 6vh;
                    }
                    .red-icon:hover {
                        filter: invert(1);
                        background: #1A1918;
                    }
                    .label {
                        font-size: 1em;
                        margin-bottom: 20px;
                        margin-top: 0;
                        font-family: 'TT';
                        color: #B3AFA8;
                        font-weight: 400;
                    }
                    .brand-footer .logo {
                        max-height: 6vh;
                    }
                    @media screen and (max-width:1100px) {
                        .Contact .title {
                            margin-top: 0;
                        }
                    }
                    @media screen and (max-width: 768px) {
                        .input {
                            width: calc(100vw - 90px);
                        }
                        .brand-footer .logo {
                            margin-right: 95px;
                        }
                        .brand-footer .logo {
                            max-width: 165px;
                            margin-bottom: 32px;
                        }
                        .brand-footer {
                            flex-flow: column;
                        }
                        .redes .red.first {
                            margin-left: 0px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Contact;