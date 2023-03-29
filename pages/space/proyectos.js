import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeaderSpace from "../../componets/headerSpace";
import Head from "next/head";
const SpacePageProyectos = () => {

    
    const [slide, setSlide] = useState(0)
    const [slideNum, setSlideNum] = useState(0)
    const changeSlide = (type) => {
        console.log(slideNum, slide)
        if (type === 'up') {
            if (slide !== slideNum) {
                let newNum = slide + 1
                setSlide(newNum)
            } else {
                setSlide(0)
            }

        } else {
            if (slide === 0) {
                setSlide(slideNum)
            } else {
                let newNum = slide - 1
                setSlide(newNum)
            }

        }
    }
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

    useEffect(() => {
        let cantidadSlides = document.getElementsByClassName('slider-slide').length
        setSlideNum(cantidadSlides - 1)
    }, [])
    return (
        <div className="pageSpace">
                        <Head>
                <link rel="icon" href={'/imagenes/space/alienlogo.png'} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Mis Proyectos</title>
            </Head>
            <HeaderSpace cursorState={cursorState} />
            <div className="main-inicio">
                <div className="main-proyecto">
                    <section id="seccion12" className="section">
                        <div className="slider">
                            <div className="slider-slides">
                                <div className={`slider-slide ${slide === 0 ? 'active' : ''} `} >
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Criptoword</div>
                                            <div><img alt=" " src="/imagenes/space/icon S.png" width="25%" /></div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">HTML</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades html"
                                                        src="/imagenes/space/ic-html.png" height="1.5vh" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">CSS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades css"
                                                        src="/imagenes/space/ic-css.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">JavaScript</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/ic-js.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">REACT.JS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades react"
                                                        src="/imagenes/space/ic-react.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">nODE.JS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades nodejs"
                                                        src="/imagenes/space/nodejs.png" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://github.com/horacio-a/Criptoword-front">Link
                                                    a github</Link>
                                                <Link className="button-proyecto" target="_blank" href="http://criptoword.com.ar">Link a la
                                                    web</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`slider-slide ${slide === 1 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Espacio bonhomia</div>
                                            <div><img alt=" " src="/imagenes/space/BonhomiaLogo.png" width="25%" /></div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">HTML</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades html"
                                                        src="/imagenes/space/ic-html.png" height="1.5vh" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">CSS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades css"
                                                        src="/imagenes/space/ic-css.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">JavaScript</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/ic-js.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">PYTHON</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades python"
                                                        src="/imagenes/space/python.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">DJANGO</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades django"
                                                        src="/imagenes/space/django.jpg" height="50%" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://github.com/horacio-a/Espacio-bonhomia">Link
                                                    a github</Link>
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://espacio-bonhomia.herokuapp.com">Link a la
                                                    web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`slider-slide ${slide === 2 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Util Hub</div>
                                            <div><img alt=" " src="/imagenes/space/512.png" width="25%" /></div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">HTML</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades html"
                                                        src="/imagenes/space/ic-html.png" height="1.5vh" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">CSS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades css"
                                                        src="/imagenes/space/ic-css.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">JavaScript</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/ic-js.png" height="50%" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://github.com/horacio-a/calculadora-extencion">Link a github</Link>
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0">Link
                                                    a la web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`slider-slide ${slide === 3 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Chat Priv</div>
                                            <div><img alt=" " src="/imagenes/space/Logo-chat-priv.png" width="25%" />
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">HTML</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades html"
                                                        src="/imagenes/space/ic-html.png" height="1.5vh" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">CSS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades css"
                                                        src="/imagenes/space/ic-css.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">JavaScript</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/ic-js.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">Socket.Io</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/socketio.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">nODE.JS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades nodejs"
                                                        src="/imagenes/space/nodejs.png" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://chat-priv.herokuapp.com">Link a github</Link>
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://github.com/horacio-a/Chat-en-tiempo-real">Link a la web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`slider-slide ${slide === 4 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">NextChange</div>
                                            <div><img alt=" " src="/imagenes/space/nextchange.png" width="25%" />
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">HTML</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades html"
                                                        src="/imagenes/space/ic-html.png" height="1.5vh" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">CSS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades css"
                                                        src="/imagenes/space/ic-css.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">JavaScript</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/ic-js.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">React.js</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades bootstrap"
                                                        src="/imagenes/space/ic-react.png" height="50%" /></span>
                                                </div>
                                                <div className="icon-habilidades">
                                                    <span className="tooltip">nODE.JS</span>
                                                    <span><img alt=" " className="imagane-icon-habilidades nodejs"
                                                        src="/imagenes/space/nodejs.png" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://github.com/horacio-a/Next-Change-Front">Link a github</Link>
                                                <Link className="button-proyecto" target="_blank"
                                                    href="https://next-change.herokuapp.com">Link a la web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="slider-btns">
                                <div className="prev button-carrosel" onClick={() => {
                                    changeSlide('down')
                                }}  >
                                    &lt;</div>
                                <div className="next button-carrosel" onClick={() => {
                                    changeSlide('up')
                                }} >&gt;</div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="main-proyecto-movil">
                    <section id="seccion12" className="section">
                        <img alt=" " className="prev-movil button-carrosel" onClick={() => {
                            changeSlide('down')
                        }} src="/imagenes/space/arriba.png" height="25vh" />

                        <div className="slider">
                            <div className="slider-slides">
                                <div className={`slider-slide-movil ${slide === 0 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto" style={{ margin: '1vh' }}>
                                            <div className="titulo-proyecto"> Criptoword</div>
                                            <div><img alt=" " src="/imagenes/space/icon S.png" width="25%" /></div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/ic-html.png" />
                                                <img alt=" " className="imagane-icon-habilidades css"
                                                    src="/imagenes/space/ic-css.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/ic-js.png" />
                                            </div>

                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades react"
                                                    src="/imagenes/space/ic-react.png" />
                                                <img alt=" " className="imagane-icon-habilidades nodejs"
                                                    src="/imagenes/space/nodejs.png" />
                                            </div>


                                        </div>
                                        <div className="conteiner-main-proyecto links">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" href="https://github.com/horacio-a/Criptoword-front">Link
                                                    a github</Link>
                                                <Link className="button-proyecto" href="http://criptoword.com.ar">Link a la web</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`slider-slide-movil ${slide === 1 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto" style={{ margin: '1vh' }}>
                                            <div className="titulo-proyecto">Espacio bonhomia</div>
                                            <div><img alt=" " src="/imagenes/space/BonhomiaLogo.png" width="25%" /></div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/ic-html.png" />
                                                <img alt=" " className="imagane-icon-habilidades css"
                                                    src="/imagenes/space/ic-css.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/ic-js.png" />
                                            </div>

                                            <div className="tecnologias-construccion">

                                                <img alt=" " className="imagane-icon-habilidades python"
                                                    src="/imagenes/space/python.png" />
                                                <img alt=" " className="imagane-icon-habilidades django"
                                                    src="/imagenes/space/django.jpg" />

                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto links">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto" href="https://github.com/horacio-a/Espacio-bonhomia">Link
                                                    a github</Link>
                                                <Link className="button-proyecto" href="https://espacio-bonhomia.herokuapp.com">Link a la
                                                    web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`slider-slide-movil ${slide === 2 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto" style={{ margin: '1vh' }}>
                                            <div className="titulo-proyecto">Util Hub</div>
                                            <div><img alt=" " src="/imagenes/space/512.png" width="25%" /></div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/ic-html.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/ic-js.png" />
                                                <img alt=" " className="imagane-icon-habilidades css"
                                                    src="/imagenes/space/ic-css.png" />
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto links">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto"
                                                    href="https://github.com/horacio-a/calculadora-extencion">Link a github</Link>
                                                <Link className="button-proyecto"
                                                    href="https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0">Link
                                                    a la web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`slider-slide-movil ${slide === 3 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto" style={{ margin: '1vh' }}>
                                            <div className="titulo-proyecto">Chat priv</div>
                                            <div><img alt=" " src="/imagenes/space/Logo-chat-priv.png" width="25%" />
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/ic-html.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/ic-js.png" />
                                                <img alt=" " className="imagane-icon-habilidades css"
                                                    src="/imagenes/space/ic-css.png" />
                                            </div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/socketio.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/nodejs.png" />

                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto links">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto"
                                                    href="https://github.com/horacio-a/Chat-en-tiempo-real">Link a github</Link>
                                                <Link className="button-proyecto" href="https://chat-priv.herokuapp.com">Link a la web</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`slider-slide-movil ${slide === 4 ? 'active' : ''} `}>
                                    <div className="proyecto1">
                                        <div className="conteiner-main-proyecto" style={{ margin: '1vh' }}>
                                            <div className="titulo-proyecto">NextChange</div>
                                            <div><img alt=" " src="/imagenes/space/nextchange.png" width="25%" />
                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto">
                                            <div className="titulo-proyecto"> Construida con</div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/ic-html.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/ic-js.png" />
                                                <img alt=" " className="imagane-icon-habilidades css"
                                                    src="/imagenes/space/ic-css.png" />
                                            </div>
                                            <div className="tecnologias-construccion">
                                                <img alt=" " className="imagane-icon-habilidades html"
                                                    src="/imagenes/space/ic-react.png" />
                                                <img alt=" " className="imagane-icon-habilidades bootstrap"
                                                    src="/imagenes/space/nodejs.png" />

                                            </div>
                                        </div>
                                        <div className="conteiner-main-proyecto links">
                                            <div className="titulo-proyecto">Links</div>
                                            <div className="conteiner-button-proyecto">
                                                <Link className="button-proyecto"
                                                    href="https://github.com/horacio-a/Next-Change-Front">Link a github</Link>
                                                <Link className="button-proyecto" href="https://next-change.herokuapp.com">Link a la
                                                    web</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img alt=" " className="next-movil button-carrosel" onClick={() => {
                            changeSlide('up')
                        }} src="/imagenes/space/abajo.png" height="25vh" />

                    </section>

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



export default SpacePageProyectos;