import React, { useState } from "react";
import Link from "next/link";
import HeaderSpace from "../../componets/headerSpace";
import Head from "next/head";
const SpacePageHabilidades = () => {

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
                <title>Mis Habilidades</title>
            </Head>
            <HeaderSpace cursorState={cursorState} />
            <div className="main-inicio">
                <div className="main-habilidades">
                    <div className="conteudo">
                        <div className="icon-habilidades">
                            <span className="tooltip">HTML</span>
                            <span><img alt=" " className="imagane-icon-habilidades html" src="/imagenes/space/ic-html.png"
                                height="1.5vh" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">CSS</span>
                            <span><img alt=" " className="imagane-icon-habilidades css" src="/imagenes/space/ic-css.png"
                                height="50%" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">bootstrap</span>
                            <span><img alt=" " className="imagane-icon-habilidades js" src="/imagenes/space/bootstrap.png"
                                height="50%" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">JavaScript</span>
                            <span><img alt=" " className="imagane-icon-habilidades bootstrap" src="/imagenes/space/ic-js.png"
                                height="50%" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">GIT</span>
                            <span><img alt=" " className="imagane-icon-habilidades git" src="/imagenes/space/ic-git.png"
                                height="50%" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">REACT.JS</span>
                            <span><img alt=" " className="imagane-icon-habilidades react" src="/imagenes/space/ic-react.png"
                                height="50%" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">nODE.JS</span>
                            <span><img alt=" " className="imagane-icon-habilidades nodejs"
                                src="/imagenes/space/nodejs.png" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">PYTHON</span>
                            <span><img alt=" " className="imagane-icon-habilidades python" src="/imagenes/space/python.png"
                                height="50%" /></span>
                        </div>
                        <div className="icon-habilidades">
                            <span className="tooltip">DJANGO</span>
                            <span><img alt=" " className="imagane-icon-habilidades django" src="/imagenes/space/django.jpg"
                                height="50%" /></span>
                        </div>

                    </div>
                    <svg id="reflector_quiensoy" width="223" height="215" viewBox="0 0 223 215" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 37">
                            <path id="Vector 19"
                                d="M96.5685 151.751L0 0H111.5H223L167.25 87.6071L126.431 151.751C119.477 162.679 103.523 162.679 96.5685 151.751Z"
                                fill="url(#paint0_linear_41_2)" />
                            <path id="Rectangle 14"
                                d="M37 200C37 186.193 48.1929 175 62 175H162C175.807 175 187 186.193 187 200V215H37V200Z"
                                fill="#1E1E1E" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_41_2" x1="112" y1="-1.1486e-08" x2="111.5" y2="175.214"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#380E64" />
                                <stop offset="0.766752" stop-color="#FFE02F" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="main-habilidades-movil">
                    <div className="conteudo">
                        <div className="row">
                            <img alt=" " className="imagane-icon-habilidades html" src="/imagenes/space/ic-html.png" />
                            <img alt=" " className="imagane-icon-habilidades css" src="/imagenes/space/ic-css.png" />
                        </div>
                        <div className="row">

                            <img alt=" " className="imagane-icon-habilidades bootstrap" src="/imagenes/space/ic-js.png" />
                            <img alt=" " className="imagane-icon-habilidades git" src="/imagenes/space/ic-git.png" />
                        </div>
                        <div className="row">

                            <img alt=" " className="imagane-icon-habilidades react" src="/imagenes/space/ic-react.png" />
                            <img alt=" " className="imagane-icon-habilidades nodejs" src="/imagenes/space/nodejs.png" />
                        </div>
                        <div className="row">

                            <img alt=" " className="imagane-icon-habilidades python" src="/imagenes/space/python.png" />
                            <img alt=" " className="imagane-icon-habilidades django" src="/imagenes/space/django.jpg" />
                        </div>
                    </div>
                    <svg id="reflector_quiensoy" width="223" height="215" viewBox="0 0 223 215" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 37">
                            <path id="Vector 19"
                                d="M96.5685 151.751L0 0H111.5H223L167.25 87.6071L126.431 151.751C119.477 162.679 103.523 162.679 96.5685 151.751Z"
                                fill="url(#paint0_linear_41_2)" />
                            <path id="Rectangle 14"
                                d="M37 200C37 186.193 48.1929 175 62 175H162C175.807 175 187 186.193 187 200V215H37V200Z"
                                fill="#1E1E1E" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_41_2" x1="112" y1="-1.1486e-08" x2="111.5" y2="175.214"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#380E64" />
                                <stop offset="0.766752" stop-color="#FFE02F" />
                            </linearGradient>
                        </defs>
                    </svg>
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
                    <div className="icon fabebook">
                        <span className="tooltip">Linkedin</span>
                        <span><img alt=" " src="/imagenes/space/linkedin.png" width="100%" /></span>
                    </div>
                    <div className="icon fabebook">
                        <span className="tooltip">curriculum vitae</span>
                        <span><img alt=" " src="/imagenes/space/cv.png" width="85%" /></span>
                    </div>
                    <div className="icon fabebook">
                        <span className="tooltip">github</span>
                        <span> <img alt=" " src="/imagenes/space/github.png" width="100%" /></span>
                    </div>

                </div>

            </div>


            <div className="footer-movil">
                <Link href="">
                    <img alt=" " src="/imagenes/space/linkedin.png" width="100%" />
                </Link>
                <Link href="">
                    <img alt=" " src="/imagenes/space/cv.png" width="85%" />
                </Link>
                <Link href="">
                    <img alt=" " src="/imagenes/space/github.png" width="100%" />

                </Link>

            </div>
        </div>


    )

}



export default SpacePageHabilidades;