import React, { useEffect, useState } from 'react'
import Rellax from "rellax"

import glossDesktop from './../assets/images/glossDesktop.png'
import glossMobile from '../assets/images/glossMobile.png'
import htmlMobile from '../assets/images/htmlMobile.png'
import htmlDesktop from '../assets/images/htmlDesktop.png'
import restaurantMobile from '../assets/images/restaurantMobile.png'
import restaurantDesktop from '../assets/images/restaurantDesktop.png'
import webshopMobile from '../assets/images/webshopMobile.png'
import webshopDesktop from '../assets/images/webshopDesktop.png'

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
                    <p><a href="https://github.com/PegJac" target="_blank">github</a></p>
                    <p><a href="https://www.linkedin.com/in/peggy-jacobson-b30890173/" target="_blank">linkedin</a></p>
                    <p onClick={copyEmail}>{isCopied ? "copied" : "email"}</p>
                </nav>
            </header>
            <div id="imageContainer">
                <a href="https://late-night-brunch.netlify.app/" target="_blank" id={"restDesk"} className={"image"}>
                    <img src={restaurantDesktop} alt="img" />
                </a>

                <a href="https://late-night-brunch.netlify.app/" target="_blank" id={"restMob"} className={"image mobile"}>
                    <img src={restaurantMobile} alt="img" />
                </a>

                <a href="https://pegjac.github.io/HTML-CSS-Assignment-2/main.html" target="_blank" id={"htmlDesk"} className={"image"}>
                    <img src={htmlDesktop} alt="img" />
                </a>

                <a href="https://pegjac.github.io/HTML-CSS-Assignment-2/main.html" target="_blank" id={"htmlMob"} className={"image mobile"}>
                    <img src={htmlMobile} alt="img" />
                </a>

                <a href="https://pegjac.github.io/gloss/" target="_blank" id={"glossDesk"} className={"image"}>
                    <img src={glossDesktop} alt="img" />
                </a>

                <a href="https://pegjac.github.io/gloss/" target="_blank" id={"glossMob"} className={"image mobile"}>
                    <img src={glossMobile} alt="img" />
                </a>
            </div>
        </div>
    );
}



{/* <img src={webshopMobile} id={"img" + 6} className={"image mobile"} alt="img" />
<img src={webshopDesktop} id={"img" + 7} className={"image"} alt="img" />
 */}


/* import reactImg from './assets/prototypes/react_image.png'
import uxImg from './assets/prototypes/ux_image.png'
import webShopImg from './assets/prototypes/js_webshop_image.png'
import todoImg from './assets/prototypes/js_todo_image.png'
import htmlCss from './assets/prototypes/html_css_image.png' */




/* const images = [glossMobile, glossDesktop, htmlMobile, htmlDesktop,
    restaurantMobile, restaurantDesktop, webshopMobile, webshopDesktop]
 */
/* const imageArray = images.map((img, i) => {
    return (<img src={img} id={"img" + i} class={"image rellax"} data-rellax-speed={i} alt="img" />)
}) */

/* const prototypes = [reactImg, uxImg, webShopImg, todoImg, htmlCss]
const prototypeArray = prototypes.map((img, i) => {
  return (<img src={img} id={i + 1} alt="img" />)
}) */