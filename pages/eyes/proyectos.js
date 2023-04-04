import React, { useState } from "react";
import Link from "next/link";
import Header from '../../componets/header';
import Head from "next/head";
const EyesPageProyectos = () => {

    const [ProyState, setProyState] = useState({
        inicio: true,
        tecnologia: false,
        links: false
    })

    const [MovilProyect, setMovilProyect] = useState({
        Criptoword: false,
        Bonhomia: false,
        util: false,
        chat: false,
        change: false
    })

    const openProyect = (event) => {
        ViewInicio()
        switch (event) {
            case 'Criptoword':
                if (MovilProyect[event] === false) {
                    setMovilProyect({
                        Criptoword: true,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: false
                    })
                } else {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: false
                    })
                }
                break;
            case 'Bonhomia':
                if (MovilProyect[event] === false) {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: true,
                        util: false,
                        chat: false,
                        change: false
                    })
                } else {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: false
                    })
                }
                break;
            case 'util':
                if (MovilProyect[event] === false) {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: true,
                        chat: false,
                        change: false
                    })
                } else {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: false
                    })
                }
                break;
            case 'chat':
                if (MovilProyect[event] === false) {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: true,
                        change: false
                    })
                } else {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: false
                    })
                }
                break;
            case 'change':
                if (MovilProyect[event] === false) {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: true
                    })
                } else {
                    setMovilProyect({
                        Criptoword: false,
                        Bonhomia: false,
                        util: false,
                        chat: false,
                        change: false
                    })
                }
                break;
            default:
                break;
        }
    }




    function ViewTecnologias() {
        setProyState({
            ...ProyState,
            inicio: false,
            tecnologia: true,
            links: false
        })
    }



    function ViewInicio() {
        setProyState({
            ...ProyState,
            inicio: true,
            tecnologia: false,
            links: false
        })
    }


    function ViewLinks() {
        setProyState({
            ...ProyState,
            inicio: false,
            tecnologia: false,
            links: true
        })

    }


    return (
        <>
        <Head>
            <link rel="icon" href={'/imagenes/eyes/mascotaon.png'} />
            <meta name="description" content="Porfolio de horacio Albornoz" />
            <title>Mis Proyectos</title>

        </Head>
            <div className="conteiner-main" >
                <Header />
                <main className="main-proyecto-pc mainStyle">
                    <div className="conteiner-misproyectos">
                        <div className="center-flex-j">
                            <div className="bloque-tecnologia pointer">
                                <div className="titulo-tecnologia">
                                    Mis Proyectos
                                </div>
                                <div className="space-around-flex-j">
                                    <div className="bloque-tecnologia-unidad" onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="/imagenes/eyes/icon S.png" width="100%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    CriptoWord
                                                </div>
                                                <div className="conjunto-botones">
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewTecnologias()
                                                        }}>
                                                        Construida en...
                                                    </button>
                                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord2"
                                                        onClick={() => {
                                                            ViewLinks()
                                                        }}>
                                                        Ver el Proyecto
                                                    </button>


                                                    <Link href="https://github.com/horacio-a/Criptoword-front" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                                        id="boton-CriptoWord4" classname='displayNone'>github</Link>

                                                    <Link href="http://criptoword.com.ar" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord5"
                                                        classname='displayNone'>ver en la web</Link>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                                        <div className="miniboton-proyectos"> HTML</div>
                                                        <div className="miniboton-proyectos"> CSS</div>
                                                    </div>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                                        <div className="miniboton-proyectos"> REACT.JS</div>
                                                        <div className="miniboton-proyectos"> NODE.JS</div>
                                                    </div>


                                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                                        classname='displayNone' onClick={() => {
                                                            ViewInicio()
                                                        }}> Volver</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloque-tecnologia-unidad " onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="/imagenes/eyes/BonhomiaLogo.png" width="100%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    Espacio bonhomia
                                                </div>
                                                <div className="conjunto-botones">
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewTecnologias()
                                                        }}>
                                                        Construida en...
                                                    </button>
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewLinks()
                                                        }}>
                                                        Ver el Proyecto
                                                    </button>


                                                    <Link href="https://github.com/horacio-a/Espacio-bonhomia" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                                        id="boton-e-commerce4" classname='displayNone'>github</Link>

                                                    <Link href="https://espacio-bonhomia.herokuapp.com" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                                        id="boton-e-commerce5" classname='displayNone'>ver
                                                        en la web</Link>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} id="botones-e-commerce1">
                                                        <div className="miniboton-proyectos"> HTML</div>
                                                        <div className="miniboton-proyectos"> CSS</div>
                                                    </div>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} id="botones-e-commerce2">
                                                        <div className="miniboton-proyectos"> PYTHON</div>
                                                        <div className="miniboton-proyectos"> DJANGO</div>
                                                    </div>


                                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                                        classname='displayNone' onClick={() => {
                                                            ViewInicio()
                                                        }}> Volver</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloque-tecnologia-unidad " onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="/imagenes/eyes/512.png" width="100%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    Util Hub
                                                </div>
                                                <div className="conjunto-botones">
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewTecnologias()
                                                        }}>
                                                        Construida en...
                                                    </button>
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewLinks()
                                                        }}>
                                                        Ver el Proyecto
                                                    </button>


                                                    <Link href="https://github.com/horacio-a/calculadora-extencion" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                                        id="botonCalculadora4" classname='displayNone'>github</Link>

                                                    <Link href="https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0"
                                                        className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} classname='displayNone'>ver
                                                        en la web</Link>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                                        <div className="miniboton-proyectos"> HTML</div>
                                                        <div className="miniboton-proyectos"> CSS</div>
                                                    </div>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                                        <div className="miniboton-proyectos">Javascript</div>
                                                        <div className="miniboton-proyectos"></div>
                                                    </div>


                                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                                        classname='displayNone' onClick={() => {
                                                            ViewInicio()
                                                        }}> Volver</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloque-tecnologia-unidad " onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="/imagenes/eyes/Logo-chat-priv.png" width="100%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    Chat Priv
                                                </div>
                                                <div className="conjunto-botones">
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewTecnologias()
                                                        }}>
                                                        Construida en...
                                                    </button>
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewLinks()
                                                        }}>
                                                        Ver el Proyecto
                                                    </button>


                                                    <Link href="" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer `}>github</Link>

                                                    <Link href="https://chat-priv.herokuapp.com" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer `} >
                                                        ver en la web</Link>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                                        <div className="miniboton-proyectos"> HTML</div>
                                                        <div className="miniboton-proyectos"> CSS</div>
                                                    </div>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                                        <div className="miniboton-proyectos">Node.js</div>
                                                        <div className="miniboton-proyectos">Socket.io</div>
                                                    </div>

                                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                                        classname='displayNone' onClick={() => {
                                                            ViewInicio()
                                                        }}> Volver</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-around-flex-j">
                                    <div className="bloque-tecnologia-unidad " onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="" width="75%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    Proximamente
                                                </div>
                                                <div className="conjunto-botones">
                                                    <Link href="" className="boton-proyectos">
                                                    </Link>
                                                    <Link href="" className="boton-proyectos">
                                                    </Link>
                                                    <Link href="" className="boton-proyectos">
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloque-tecnologia-unidad " onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="/imagenes/eyes/nextchange.png" width="100%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    NextChange
                                                </div>
                                                <div className="conjunto-botones">
                                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewTecnologias()
                                                        }}>
                                                        Construida en...
                                                    </button>
                                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1"
                                                        onClick={() => {
                                                            ViewLinks()
                                                        }}>
                                                        Ver el Proyecto
                                                    </button>



                                                    <Link href="https://github.com/horacio-a/Next-Change-Front" target="_blank"
                                                        className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer `}>github</Link>

                                                    <Link href="https://next-change.herokuapp.com" target="_blank" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer `}>ver
                                                        en la web</Link>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                                        <div className="miniboton-proyectos"> HTML</div>
                                                        <div className="miniboton-proyectos"> CSS</div>
                                                    </div>

                                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                                        <div className="miniboton-proyectos">Node.js</div>
                                                        <div className="miniboton-proyectos">React.js</div>
                                                    </div>

                                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer displayNone`}
                                                        onClick={() => {
                                                            ViewInicio()
                                                        }}> Volver</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloque-tecnologia-unidad " onMouseLeave={() => {
                                        ViewInicio()
                                    }}>
                                        <div className="view view-tenth center-flex-j center-flex-ai">
                                            <img alt='/' src="" width="75%" />
                                            <div className="mask">
                                                <div className="titulo-mask">
                                                    Proximamente
                                                </div>
                                                <div className="conjunto-botones">
                                                    <Link href="" className="boton-proyectos">

                                                    </Link>
                                                    <Link href="" className="boton-proyectos">

                                                    </Link>
                                                    <Link href="" className="boton-proyectos">

                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <main className="main-proyecto-movil">
                    <div className="conteiner-proyectos" id="background-proyectos">
                        <div className="titulo-proyecto-eye">
                            Mis Proyectos
                        </div>
                        <div className="bloque-proyecto" >
                            <div className={`detalles ${MovilProyect.Criptoword ? 'abrirdetalles' : ''}`} id="detalle-criptoword">
                                <div className="titulo-mask">
                                    CriptoWord
                                </div>
                                <div className="conjunto-botones">
                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1-movil"
                                        onClick={() => {
                                            ViewTecnologias()
                                        }}>
                                        Construida en...
                                    </button>
                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord2-movil"
                                        onClick={() => {
                                            ViewLinks()
                                        }}>
                                        Ver el Proyecto
                                    </button>
                                    <Link href="https://github.com/horacio-a/Criptoword-front" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                    >github</Link>
                                    <Link href="http://criptoword.com.ar" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                    >ver en la web</Link>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}  >
                                        <div className="miniboton-proyectos"> HTML</div>
                                        <div className="miniboton-proyectos"> CSS</div>
                                    </div>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}  >
                                        <div className="miniboton-proyectos"> REACT.JS</div>
                                        <div className="miniboton-proyectos"> NODE.JS</div>
                                    </div>

                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewInicio()
                                        }} > Volver</div>
                                </div>
                            </div>
                            <img alt='/' src="/imagenes/eyes/icon S.png" height="100%" name='' id="icons-criptoword" className={` ${MovilProyect.Criptoword ? 'abriricons' : ''}`}
                                onClick={() => {
                                    openProyect('Criptoword')
                                }} />

                        </div>

                        <div className="bloque-proyecto">
                            <div className={`detalles ${MovilProyect.Bonhomia ? 'abrirdetalles' : ''}`} id="detalle-bonhomia">
                                <div className="titulo-mask titlemovilProyecto" style={{ 'fontSize': '1.5vh' }}>
                                    Espacio-Bonhomia
                                </div>
                                <div className="conjunto-botones">
                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="botonEcommerce1Movil"
                                        onClick={() => {
                                            ViewTecnologias()
                                        }}>
                                        Construida en...
                                    </button>
                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="botonEcommerce2Movil"
                                        onClick={() => {
                                            ViewLinks()
                                        }}>
                                        Ver el Proyecto
                                    </button>
                                    <Link href="https://github.com/horacio-a/Espacio-bonhomia" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}
                                    >github</Link>
                                    <Link href="https://espacio-bonhomia.herokuapp.com" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}>ver en la web</Link>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                        <div className="miniboton-proyectos"> HTML</div>
                                        <div className="miniboton-proyectos"> CSS</div>
                                    </div>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                        <div className="miniboton-proyectos"> PYTHON</div>
                                        <div className="miniboton-proyectos"> DJANGO</div>
                                    </div>

                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewInicio()
                                        }}> Volver</div>
                                </div>
                            </div>
                            <img alt='/' src="/imagenes/eyes/BonhomiaLogo.png" height="100%" id="icon-bonhomia" onClick={() => {
                                openProyect('Bonhomia')
                            }} className={` ${MovilProyect.Bonhomia ? 'abriricons' : ''}`} />
                        </div>

                        <div className="bloque-proyecto" >
                            <div className={`detalles ${MovilProyect.util ? 'abrirdetalles' : ''}`} id="detalle-calculadora">
                                <div className="titulo-mask titlemovilProyecto" >
                                    Util hub

                                </div>
                                <div className="conjunto-botones">
                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewTecnologias()
                                        }}>
                                        Construida en...
                                    </button>
                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewLinks()
                                        }} >
                                        Ver el Proyecto
                                    </button>
                                    <Link href="https://github.com/horacio-a/calculadora-extencion" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} id="botonCalculadora4Movil"
                                    >github</Link>
                                    <Link href="https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} id="botonCalculadora5Movil"
                                    >ver en la web</Link>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                        <div className="miniboton-proyectos"> HTML</div>
                                        <div className="miniboton-proyectos"> CSS</div>
                                    </div>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `} >
                                        <div className="miniboton-proyectos"> JS</div>
                                        <div className="miniboton-proyectos"></div>
                                    </div>

                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewInicio()
                                        }} > Volver</div>
                                </div>
                            </div>
                            <img alt='/' src="/imagenes/eyes/512.png" height="100%" id="icon-calculadora" onClick={() => {
                                openProyect('util')
                            }} className={` ${MovilProyect.util ? 'abriricons' : ''}`} />
                        </div>

                        <div className="bloque-proyecto" >
                            <div className={`detalles ${MovilProyect.chat ? 'abrirdetalles' : ''}`} id="detalle-Chat">
                                <div className="titulo-mask titlemovilProyecto" >
                                    Chat Priv
                                </div>
                                <div className="conjunto-botones">
                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewTecnologias()
                                        }}>
                                        Construida en...
                                    </button>
                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`}
                                        onClick={() => {
                                            ViewLinks()
                                        }}>
                                        Ver el Proyecto
                                    </button>
                                    <Link href="https://github.com/horacio-a/Chat-en-tiempo-real" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} >github</Link>
                                    <Link href=" https://chat-priv.herokuapp.com" target="_blank" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} >ver en la web</Link>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                        <div className="miniboton-proyectos"> HTML</div>
                                        <div className="miniboton-proyectos"> CSS</div>
                                    </div>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                        <div className="miniboton-proyectos"> node.js</div>
                                        <div className="miniboton-proyectos"> Socket.io </div>
                                    </div>

                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`} onClick={() => {
                                        ViewInicio()
                                    }} > Volver</div>
                                </div>
                            </div>
                            <img alt='/' src="/imagenes/eyes/Logo-chat-priv.png" height="100%" onClick={() => {
                                openProyect('chat')
                            }} id="icon-Chat" className={` ${MovilProyect.chat ? 'abriricons' : ''}`} />
                        </div>

                        <div className="bloque-proyecto" >
                            <div className={`detalles ${MovilProyect.change ? 'abrirdetalles' : ''}`} id="detalleNextChange">
                                <div className="titulo-mask titlemovilProyecto" >
                                    Next Change
                                </div>
                                <div className="conjunto-botones">
                                    <button type="button" className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1-movil"
                                        onClick={() => {
                                            ViewTecnologias()
                                        }}>
                                        Construida en...
                                    </button>
                                    <button className={`boton-proyectos ${ProyState.inicio ? 'active' : 'desactive'} pointer`} id="boton-CriptoWord1-movil"
                                        onClick={() => {
                                            ViewLinks()
                                        }}>
                                        Ver el Proyecto
                                    </button>
                                    <Link href="https://github.com/horacio-a/Next-Change-Front" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`}>github</Link>
                                    <Link href="https://next-change.herokuapp.com" className={`linksProyectos ${ProyState.links ? 'active' : 'desactive'} pointer`} >ver en la web</Link>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                        <div className="miniboton-proyectos"> HTML</div>
                                        <div className="miniboton-proyectos"> CSS</div>
                                    </div>
                                    <div className={`estructurabotones ${ProyState.tecnologia ? 'active' : 'desactive'} `}>
                                        <div className="miniboton-proyectos"> node.js</div>
                                        <div className="miniboton-proyectos"> React.js </div>
                                    </div>

                                    <div className={`miniboton-proyectos ${!ProyState.inicio ? 'active' : 'desactive'} pointer`} onClick={() => {
                                        ViewInicio()
                                    }}> Volver</div>
                                </div>
                            </div>
                            <img alt='/' src="/imagenes/eyes/nextchange.png" height="100%" onClick={() => {
                                openProyect('change')
                            }} id="icon-NextChange" className={` ${MovilProyect.change ? 'abriricons' : ''}`} />
                        </div>

                    </div>
                </main>
            </div>
        </>


    )

}



export default EyesPageProyectos;