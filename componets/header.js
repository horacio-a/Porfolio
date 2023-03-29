import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {

    const [headerActive, setHeaderActive] = useState(false)
    const [logoState, setlogoState] = useState(false)
    const [opacity, setOpacity] = useState({
        me: true,
        contact: true,
        hability: true,
        project: true
    })

    const opacity100 = () => {
        setOpacity({
            me: true,
            contact: true,
            hability: true,
            project: true
        })
    }

    const changeOpacity = (type) => {
        switch (type) {
            case 'me':
                setOpacity({
                    me: true,
                    contact: false,
                    hability: false,
                    project: false
                })
                break;
            case 'contact':
                setOpacity({
                    me: false,
                    contact: true,
                    hability: false,
                    project: false
                })
                break;
            case 'hability':
                setOpacity({
                    me: false,
                    contact: false,
                    hability: true,
                    project: false
                })
                break;
            case 'project':
                setOpacity({
                    me: false,
                    contact: false,
                    hability: false,
                    project: true
                })
                break;
            default:
                break;
        }
    }

    const activeLogo = () => {
        setlogoState(true)
    }

    const desactiveLogo = () => {
        setlogoState(false)
    }


    useEffect(() => {
        document.querySelector('body').addEventListener('mousemove', eyeball);


        function eyeball(event) {

            const eye = document.querySelectorAll('.eye');

            eye.forEach(function (eye) {
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rotation = (radian * (180 / Math.PI) * -1) + 270;
                eye.style.transform = "rotate(" + rotation + "deg) "
            });

        }
    }, [])





    return (
        <>
            <header id="header-pc">
                <div className="conteiner-idioma">
                    <div className="conteiner-selectidioma" id="Ingles">
                        <Link href="" className="texto-idioma">En</Link>
                    </div>
                    <div className="conteiner-selectidioma" id="Español">
                        <Link href=' ' className="texto-idioma">Es</Link>
                    </div>
                </div>
                <Link href="/eyes/quiensoy" className={`conteiner-quiensoy ${opacity.me ? 'active' : 'desactive'} `}
                    onMouseEnter={() => { activeLogo(); changeOpacity('me'); }} onMouseLeave={() => { desactiveLogo(); opacity100(); }}
                >
                    <p>
                        Quien
                    </p>
                    <p className="red">
                        soy
                    </p>
                </Link>
                <Link href="/eyes/proyectos" className={`conteiner-proyectos ${opacity.project ? 'active' : 'desactive'} `}
                    onMouseEnter={() => { activeLogo(); changeOpacity('project'); }} onMouseLeave={() => { desactiveLogo(); opacity100(); }}>
                    <p id="test">
                        Mis
                    </p>
                    <p id="test" className="red">
                        proyectos
                    </p>
                </Link>
                <Link href="/eyes" className="conteiner-logo" id="conteiner-logo">
                    <img src="/imagenes/eyes/ojoon.png" alt="" className={`ojohover ${logoState ? 'active' : 'desactive'} `} />
                    <img src="/imagenes/eyes/backojo.png" alt="" className={`ojosigue ${logoState ? 'desactive' : 'active'} `} name='este es' />
                    <div className="box">
                        <div className={`eye ${logoState ? 'desactive' : 'active'} `} id="eye"></div>
                    </div>
                </Link>
                <Link href="/eyes/habilidades" className={`conteiner-habilidades ${opacity.hability ? 'active' : 'desactive'} `}
                    onMouseEnter={() => { activeLogo(); changeOpacity('hability'); }} onMouseLeave={() => { desactiveLogo(); opacity100(); }}>
                    <p>
                        Mis
                    </p>
                    <p className="red text-right">
                        habilidades
                    </p>
                </Link>
                <Link href="/eyes/contacto" className={`conteiner-contacto-eye ${opacity.contact ? 'active' : 'desactive'} `}
                    onMouseEnter={() => { activeLogo(); changeOpacity('contact'); }} onMouseLeave={() => { desactiveLogo(); opacity100(); }}>
                    <p>
                        Contactame
                    </p>
                    <p className="red text-right">
                        aqui
                    </p>
                </Link>
                <div className="conteiner-modo" id="conteiner-modo">
                    <div className="conteiner-selectmodo">
                        <Link href="/estilos/eyes">
                            <img src="/imagenes/eyes/paleta-de-color.png" alt=""
                                style={{ width: '75%' }} />
                        </Link>
                    </div>
                </div>
            </header>
            <header className="header-movil-eyes" id="header-movil">
                <h1 className="h1">
                    <Link href="#" className="a"></Link>
                </h1>

                <button className="button" id="button" onClick={() => {
                    if (headerActive === false) {
                        setHeaderActive(true)
                    } else {
                        setHeaderActive(false)
                    }
                }}>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

                <nav className={`nav-eyes ${headerActive ? 'activo' : ''}`} id="nav">
                    <div className="item-eyes">
                        <Link href="/eyes/quiensoy" className="a">
                            <p className="primeraParte">Quien</p>
                            <p className="segundaParte">soy</p>
                        </Link>
                    </div>
                    <div className="item-eyes">
                        <Link href="/eyes/proyectos" className="a">
                            <p className="primeraParte">Mis</p>
                            <p className="segundaParte">Proyectos</p>
                        </Link>
                    </div>
                    <div className="item-eyes">
                        <Link href="/eyes/habilidades" className="a">
                            <p className="primeraParte">Mis</p>
                            <p className="segundaParte">habilidades</p>
                        </Link>
                    </div>
                    <div className="item-eyes">
                        <Link href="/eyes/contacto" className="a">
                            <p className="primeraParte">contactame</p>
                            <p className="segundaParte">aqui</p>
                        </Link>
                    </div>
                    <div className="itemOpciones-eyes">
                        <Link href=" " className="conteiner-idioma"> En </Link>
                        <Link href=" " className="conteiner-idioma"> Es </Link>
                        <Link href="/estilos/eyes" className="conteiner-selectmodo">Cambia el estilo</Link>

                    </div>

                </nav>
            </header>
        </>

    )

}

export default Header;