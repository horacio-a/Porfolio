import React, { useState, useEffect } from "react";
import Link from "next/link";



const MainFooter = ({ ScrolltoProyect,Scrolltohabilidades, ScrolltoContacto}) => {
    return (
        <>
            <div className="paginaFooter" name='Footer'>

                <div className="conteinerMainFooter">
                    <div className="infoFooter">
                        <div className="conctRapido">
                            <div className="titleContact">Contacto rápido</div>
                            <div className="dataContact">Horaciomatiasalbornoz@gmail.com</div>
                            <div className="dataContact">Horacio albornoz#0900 (discord)</div>
                        </div>
                        <div className="linksFooter">
                            <div onClick={() => { ScrolltoProyect() }} className='UnitLinksFooter'>Mis Proyectos</div>
                            <div onClick={() => { Scrolltohabilidades() }} className='UnitLinksFooter'>Mis habilidades</div>
                            <div onClick={() => { ScrolltoContacto() }} className='UnitLinksFooter'>Contáctame</div>
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