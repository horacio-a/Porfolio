import React, { useState } from "react";
import Header from '../../componets/header';
const EyesPageQuiensoy = () => {

    return (
        <>
            <div className="conteiner-main" >
                <Header />
                <main className="centrar">
                    <div id="conteiner-logogrande">
                        <img src="/imagenes/eyes/mascotaon.png" alt="" className="imagen-on" />
                        <img src="/imagenes/eyes/mascota.png" alt="" className="imagen-off" />

                    </div>
                    <div className="conteiner-presentacion">
                        <div className="prueba">
                            <p className="titulo-presentacion">Como soy</p>
                            <p className="text-presentacion">Soy Horacio Albornoz un programador, altamente proactivo con
                                ganas de aprender cosas nuevas,
                                siempre 100% respetuoso, con buenas habilidades interpersonales y con bastante capacidad de
                                manejar la frustración.
                            </p>
                            <p className="text-presentacion"> Si me pidieran describirme como programador diría que soy alguien con
                                capacidades
                                lógicas muy
                                entrenadas, con entendimiento de tecnologías como, HTML, CSS, JavaScript, React.js,
                                Node.js,
                                Python y Django, entre otras.</p>
                            <p className="text-presentacion">
                                También tengo experiencias usando aplicaciones como Figma, Excel, Word y power bi.
                                Además de
                                esto tengo conocimientos de contabilidad.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>


    )

}



export default EyesPageQuiensoy;