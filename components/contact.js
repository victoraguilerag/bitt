import React from 'react'

function Contact ({ handleIcon }) {
    return (
        <div className="Contact">
            <h3 className="title">Contact</h3>
            <form className="form">
                <input type="text" className="input" placeholder="Name" name="Name" id="Name" />
                <input type="email" className="input" placeholder="Mail" name="Mail" id="Mail" />
                <input type="text" className="input" placeholder="Subject" name="Subject" id="Subject" />
                <textarea type="text" className="input big" placeholder="Message" name="Message" id="Message" />
                <input type="submit" className="submit" id="submit" name="submit" value="Submit" />
            </form>
            <div className="brand-footer">
                <img src="/footerlogo.svg" className="logo" />
                <div className="redes">
                    <a
                        className="red"
                        href="https://www.instagram.com"
                        target="_blank"
                    >
                        <img src="/instagram.svg" className="red-icon" />
                    </a>
                    <a
                        className="red"
                        href="https://www.vimeo.com"
                        target="_blank"
                    >
                        <img src="/vimeo.svg" className="red-icon" />
                    </a>
                    <a
                        className="red"
                        href="https://www.facebook.com"
                        target="_blank"
                    >
                        <img src="/facebook.svg" className="red-icon" />
                    </a>
                    <a
                        className="red"
                        href="https://www.behance.com"
                        target="_blank"
                    >
                        <img src="/behance.svg" className="red-icon" />
                    </a>
                </div>
                <img onClick={handleIcon} src="/white-arrow.svg" className="arrow" />
            </div>
            <style jsx>
                {`
                    .Contact {
                        width: 100vw;
                        background: #141313;
                        color: white;

                        padding-left: 100px;
                    }
                    .Contact .title {
                        font-size: 40px;
                        font-family: 'Drunk';
                        font-weight: 500px;
                        margin-top:
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
                        font-size: 24px;
                        font-family: 'TT';
                        padding-left: 18px;
                        color: #141313;
                    }
                    form .input.big {
                        height: 248px;
                        padding-top: 12px;
                        vertical-align: top;
                    }
                    form .submit {
                        border: none;
                        height: 50px;
                        background: #141313;
                        color: white;
                        border: white solid 1.5px;
                        font-size: 24px;
                        font-family: 'TT';
                        max-width: 155px;
                        font-size: 20px;
                        display: flex;
                        padding-left: 18px;
                    }
                    .brand-footer {
                        max-width: 90%;
                        position: relative;
                        display: flex;
                        margin-top: 57px;
                        margin-bottom: 100px;
                    }
                    .brand-footer .logo {
                        margin-right: 85px;
                    }
                    .brand-footer .arrow {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                    .brand-footer .red {
                        margin-right: 10px;
                    }
                `}
            </style>
        </div>
    )
}

export default Contact;