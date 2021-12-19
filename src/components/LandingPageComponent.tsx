import React, { useEffect, useState } from 'react'
import Rellax from "rellax"

import glossDesktop from './../assets/images/glossDesktop.png'
import glossMobile from '../assets/images/glossMobile.png'
import htmlMobile from '../assets/images/htmlMobile.png'
import htmlDesktop from '../assets/images/htmlDesktop.png'
import restaurantMobile from '../assets/images/restaurantMobile.png'
import restaurantDesktop from '../assets/images/restaurantDesktop.png'

interface ILandingPageComponent {
    textIsVisable: boolean;
}

export const LandingPageComponent = (props: ILandingPageComponent) => {
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        new Rellax(".mobile", {
            speed: 3,
            center: false,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, []);

    const copyEmail = () => {
        console.log("copied")
        navigator.clipboard.writeText("peggy.jacobson@outlook.com")
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }

    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="landingPageComponent">
            <header className={props.textIsVisable ? "light" : ""}>
                <h1 onClick={scroll} id="name">Peggy</h1>
                <nav>
                    <p><a href="https://github.com/PegJac" target="_blank" rel="noreferrer">github</a></p>
                    <p><a href="https://www.linkedin.com/in/peggy-jacobson-b30890173/" target="_blank" rel="noreferrer">linkedin</a></p>
                    <p onClick={copyEmail}>{isCopied ? "copied" : "email"}</p>
                </nav>
            </header>
            <div id="imageContainer">
                <a href="https://late-night-brunch.netlify.app/" target="_blank" rel="noreferrer" id={"restDesk"} className={"image"}>
                    <img src={restaurantDesktop} alt="img" />
                </a>

                <a href="https://late-night-brunch.netlify.app/" target="_blank" rel="noreferrer" id={"restMob"} className={"image mobile"}>
                    <img src={restaurantMobile} alt="img" />
                </a>

                <a href="https://pegjac.github.io/HTML-CSS-Assignment-2/main.html" target="_blank" rel="noreferrer" id={"htmlDesk"} className={"image"}>
                    <img src={htmlDesktop} alt="img" />
                </a>

                <a href="https://pegjac.github.io/HTML-CSS-Assignment-2/main.html" target="_blank" rel="noreferrer" id={"htmlMob"} className={"image mobile"}>
                    <img src={htmlMobile} alt="img" />
                </a>

                <a href="https://pegjac.github.io/gloss/" target="_blank" rel="noreferrer" id={"glossDesk"} className={"image"}>
                    <img src={glossDesktop} alt="img" />
                </a>

                <a href="https://pegjac.github.io/gloss/" target="_blank" rel="noreferrer" id={"glossMob"} className={"image mobile"}>
                    <img src={glossMobile} alt="img" />
                </a>
            </div>
        </div>
    );
}