import React, { useState } from "react";
import Link from "next/link";

const HeaderMain = ({ scrollItem, setScrollItem, ScrolltoProyect, ScrolltoInicio, Scrolltohabilidades, ScrolltoFooter, ScrolltoContacto }) => {

    const [headerState, setHeaderState] = useState(false)

    const changeStateHeader = () => {
        if (headerState === false) {
            setHeaderState(true)
        } else {
            setHeaderState(false)
        }
    }

    return (
        <>
            <div className="headerMain">
                <img className="logo" src="/imagenes/main/whiteL.png" alt=" " />
                <div className="contiener1">
                    <div className="lineaMenuScroll">
                        <div className={`menuMain ${headerState ? 'active' : ''}`}>
                            <div id="hamburger" onClick={() => { changeStateHeader() }}>
                                <button className={`${headerState ? 'active' : ''}`} >
                                    <div className="top-line"></div>
                                    <div className="middle-line"></div>
                                    <div className="bottom-line"></div>
                                </button>
                            </div>
                            <div className={`nav ${headerState ? 'active ' : ''}`}>
                                <div className="Link">
                                    <div onClick={() => { ScrolltoProyect() }} className='textLink'>Mis Proyectos</div>
                                </div>
                                <div className="Link">
                                    <div onClick={() => { Scrolltohabilidades() }} className='textLink'>Mis habilidades</div>
                                </div>
                                <div className="Link">
                                    <div className='textLink' onClick={() => { ScrolltoContacto() }}>Contáctame</div>
                                </div>
                                <div className='dualLink'>
                                    <Link href={'/en'} className='textLink'>Change to English</Link>
                                    <Link href={'/estilos/main'} className='textLink'>No me gusta el porfolio</Link>
                                </div>
                            </div>
                        </div>
                        <div className="scrollMenu">
                            <img className="triangulo" src={`${scrollItem === 0 ? '/imagenes/main/triangulo.png' : '/imagenes/main/trianguloOff.png'}`}
                                onClick={() => { ScrolltoInicio() }} alt=' ' />
                            <img className="triangulo" src={`${scrollItem === 1 ? '/imagenes/main/triangulo.png' : '/imagenes/main/trianguloOff.png'}`}
                                onClick={() => { ScrolltoProyect() }} alt=' ' />
                            <img className="triangulo" src={`${scrollItem === 2 ? '/imagenes/main/triangulo.png' : '/imagenes/main/trianguloOff.png'}`}
                                onClick={() => { Scrolltohabilidades() }} alt=' ' />
                            <img className="triangulo" src={`${scrollItem === 3 ? '/imagenes/main/triangulo.png' : '/imagenes/main/trianguloOff.png'}`}
                                onClick={() => { ScrolltoContacto() }} alt=' ' />
                            <img className="triangulo" src={`${scrollItem === 4 ? '/imagenes/main/triangulo.png' : '/imagenes/main/trianguloOff.png'}`}
                                onClick={() => { ScrolltoFooter() }} alt=' ' />

                        </div>
                    </div>
                </div>

            </div>
        </>

    )

}

export default HeaderMain;