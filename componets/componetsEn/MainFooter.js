import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Waypoint } from "react-waypoint";


const MainFooter = ({ ScrolltoProyect, Scrolltohabilidades, ScrolltoContacto, setTitlePage, changebyscrotum }) => {
    return (
        <>
            <div className="paginaFooter" name='Footer'>

                <div className="conteinerMainFooter">
                    <div className="infoFooter">
                        <div className="conctRapido">
                            <div className="titleContact">Quick contact</div>
                            <Waypoint
                                onEnter={() => { changebyscrotum(4); setTitlePage('Horacio Albornoz') }} />
                            <div className="dataContact">Horaciomatiasalbornoz@gmail.com</div>
                            <div className="dataContact">horacioalbornoz (Discord)</div>
                            <a href="https://www.linkedin.com/in/horacio-albornoz-82606923a/" target="blank" className="dataContact">Horacio Albornoz (Linkedin)</a>
                        </div>
                        <div className="linksFooter">
                            <div onClick={() => { ScrolltoProyect() }} className='UnitLinksFooter'>My Projects</div>
                            <div onClick={() => { Scrolltohabilidades() }} className='UnitLinksFooter'>My skills</div>
                            <div onClick={() => { ScrolltoContacto() }} className='UnitLinksFooter'>Contact me at</div>
                        </div>
                    </div>
                    <div className="conteinerImgFooter">
                        <img src="imagenes\main\whiteXL.png" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainFooter;