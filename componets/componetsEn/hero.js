import React, { useState, useEffect } from "react";
import Link from "next/link";




const Hero = () => {
    return (
        <>
            <div className="Title1Main" name='inicio'>
                <img alt=' ' src="/imagenes/main/back.png" className="imgBack" />
                <div className="textoMain">
                    <div className="textTitle1Small">Full Stack </div>
                    <div className="textTitle1Big">Developer.</div>
                </div>
            </div>
            <div className="InicioMovil">
                <img alt=' ' src="/imagenes/main/MovilFondo.png" className="imgBack" />
                <div className="textoMain">
                    <div className="textTitle1Small">Full Stack </div>
                    <div className="textTitle1Big">Developer.</div>
                </div>
            </div>

            <div className="boxMain"></div>
        </>
    )
}

export default Hero;