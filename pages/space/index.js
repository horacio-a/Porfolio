import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeaderSpace from '../../componets/headerSpace';
import Head from "next/head";
const SpacePage = () => {

    const [cursorState, setCursorState] = useState({
        1: true,
        2: false
    })


    const CursorActive = () => {
        setCursorState({
            1: false,
            2: true
        })

    }

    const CursorDesactive = () => {
        setCursorState({
            1: true,
            2: false
        })

    }

    return (
        <div className="pageSpace">
            <Head>
                <link rel="icon" href={'/imagenes/space/alienlogo.png'} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Horacio Albornoz</title>
            </Head>
            <HeaderSpace cursorState={cursorState} />
            <div className="main-inicio">
                <div className="main-nombre">
                    <p>Horacio</p>
                    <p>Albornoz</p>
                    <p id="SpanID"></p>
                    <div className="epilogo">desarrollador full stack</div>
                </div>
                <div className="main-menu">
                    <div className="wrapper-row">
                        <div className="icon fabebook">
                            <span className="tooltip">Change to English</span>
                            <span>
                                <Link className="menu-item" href="/space/en">
                                    <img src="/imagenes/space/idioma.png" alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="icon fabebook"
                            onMouseEnter={() => {
                                CursorActive()
                            }}
                            onMouseLeave={() => {
                                CursorDesactive()
                            }}
                        >
                            <span className="tooltip">Quien soy</span>
                            <span>
                                <Link className="menu-item" href="/space/quiensoy">
                                    <img src="/imagenes/space/aboutme.png" alt="" />

                                </Link>
                            </span>
                        </div>
                        <div className="icon fabebook"
                            onMouseEnter={() => {
                                CursorActive()
                            }}
                            onMouseLeave={() => {
                                CursorDesactive()
                            }}
                        >
                            <span className="tooltip">Mis proyectos</span>
                            <span>
                                <Link className="menu-item" href="/space/proyectos">
                                    <img src="/imagenes/space/proyectos.png" alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="icon fabebook"
                            onMouseEnter={() => {
                                CursorActive()
                            }}
                            onMouseLeave={() => {
                                CursorDesactive()
                            }}
                        >
                            <span className="tooltip">Inicio</span>
                            <span>
                                <Link className="menu-item" href="/space">
                                    <img src="/imagenes/space/inicio.png" alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="icon fabebook"
                            onMouseEnter={() => {
                                CursorActive()
                            }}
                            onMouseLeave={() => {
                                CursorDesactive()
                            }}
                        >
                            <span className="tooltip">Mis Habilidades</span>
                            <span>
                                <Link className="menu-item" href="/space/habilidades">
                                    <img src="/imagenes/space/habilidades.png" alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="icon fabebook"
                            onMouseEnter={() => {
                                CursorActive()
                            }}
                            onMouseLeave={() => {
                                CursorDesactive()
                            }}
                        >
                            <span className="tooltip">Contactame</span>
                            <span>
                                <Link className="menu-item" href="/space/contacto">
                                    <img src="/imagenes/space/Contacto.png" alt="" />

                                </Link>
                            </span>
                        </div>
                        <div className="icon fabebook"
                            onMouseEnter={() => {
                                CursorActive()
                            }}
                            onMouseLeave={() => {
                                CursorDesactive()
                            }}
                        >
                            <span className="tooltip">Cambia el estilo</span>
                            <span>
                                <Link className="menu-item" href="/estilos/space">
                                    <img src="/imagenes/space/circulo-de-color.png" alt="" />

                                </Link>
                            </span>
                        </div>

                    </div>

                </div>


            </div>
            <div className="footer">
                <div className="wrapper">
                    <div className="icon linkedin"
                        onMouseEnter={() => {
                            CursorActive()
                        }}
                        onMouseLeave={() => {
                            CursorDesactive()
                        }}
                    >
                        <span className="tooltip">Linkedin</span>
                        <span><img src="/imagenes/space/linkedin.png" alt="" width="100%" /></span>
                    </div>
                    <div className="icon fabebook"
                        onMouseEnter={() => {
                            CursorActive()
                        }}
                        onMouseLeave={() => {
                            CursorDesactive()
                        }}
                    >
                        <span className="tooltip">curriculum vitae</span>
                        <span><img src="/imagenes/space/cv.png" alt="" width="85%" /></span>
                    </div>
                    <div className="icon fabebook"
                        onMouseEnter={() => {
                            CursorActive()
                        }}
                        onMouseLeave={() => {
                            CursorDesactive()
                        }}
                    >
                        <span className="tooltip">github</span>
                        <span> <img src="/imagenes/space/github.png" alt="" width="100%" /></span>
                    </div>

                </div>


            </div>

            <div className="footer-movil">
                <Link href="">
                    <img src="/imagenes/space/linkedin.png" alt="" width="100%" />
                </Link>
                <Link href="">
                    <img src="/imagenes/space/cv.png" alt="" width="85%" />
                </Link>
                <Link href="">
                    <img src="/imagenes/space/github.png" alt="" width="100%" />

                </Link>

            </div>


        </div>


    )

}



export default SpacePage;