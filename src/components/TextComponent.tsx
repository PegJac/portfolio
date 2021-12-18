import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faCheck, faSearch, faBug } from '@fortawesome/free-solid-svg-icons'

export const TextComponent = () => {
    return (
        <div id="textComponent" >
            <section>
                <span>
                    <FontAwesomeIcon id="icon" icon={faBug} />
                    Front end developer
                </span>
                <br />
                <br />
                <span>
                    <FontAwesomeIcon id="icon" icon={faMapPin} />
                    Medieinstitutet, Stockholm
                </span>
                <br />
                <br />
                <span>
                    <FontAwesomeIcon id="icon" icon={faCheck} />
                    Examen maj 2022
                </span>
                <br />
                <br />
                <span>
                    <FontAwesomeIcon id="icon" icon={faSearch} />
                    Praktik 24 januari - 13 maj
                </span>
            </section>
        </div>
    )
}