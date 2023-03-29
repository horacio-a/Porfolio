import React, { useState } from "react";
import Link from "next/link";
import HeaderSpace from "../../componets/headerSpace";
import Head from "next/head";
const SpacePageContacto = () => {
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
                <title>Contacto</title>
            </Head>
            <HeaderSpace cursorState={cursorState} />
            <div className="main-inicio">
                <div className="main-nombre">
                    <div className="conteinerContacto">
                        <form action="/space/contacto/" method="POST" >
                            <input type="email" placeholder="Email" className="hover" name="email" autocomplete="off" />
                            <input type="text" placeholder="Nombre" className="hover" name="name" autocomplete="off" />
                            <input type="text" placeholder="Asunto" className="hover" name="subject" autocomplete="off" />
                            <textarea placeholder="Mensaje" className="hover" name="message" ></textarea>
                            <input type="submit" className="hover button"></input>
                            <p></p>
                        </form>

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
                        <span><img src="/imagenes/space/linkedin.png" alt="" width="100%" /></span>
                    </div>
                    <div className="icon fabebook">
                        <span className="tooltip">curriculum vitae</span>
                        <span><img src="/imagenes/space/cv.png" alt="" width="85%" /></span>
                    </div>
                    <div className="icon fabebook">
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



export default SpacePageContacto;