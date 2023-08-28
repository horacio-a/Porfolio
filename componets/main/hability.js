import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Waypoint } from "react-waypoint";


const Hability = ({ setTitlePage, changebyscrotum }) => {
    return (
        <>
            <div className="paginaHabilidades" name='habilidades'>

                <div className="titleHabilidades">

                    <div className="imgHabilidades">
                        <img alt=' ' src="/imagenes/main/blockHabilidades.png"></img>
                        <div className="TitleHabilidades">Mis Habilidades</div>
                    </div>

                </div>
                <div className="conteinerMainHabilides">
                    <div className="presenPerson">
                        <div>
                            Hola, soy un programador con amplio conocimiento en diversas tecnologías, entre ellas React, Node.js, JavaScript, Python y Django. Me apasiona el desarrollo de software y tengo experiencia en el diseño, la implementación y el mantenimiento de aplicaciones web y móviles.
                        </div>
                        <div>
                            En cuanto a React, he trabajado en proyectos que involucran la creación de interfaces de usuario interactivas y altamente responsivas, utilizando herramientas como Redux y Next.js para mejorar el rendimiento y la escalabilidad de las aplicaciones.                            </div>
                        <div>
                            Por otro lado, en Node.js, he desarrollado aplicaciones de backend y de servidor, utilizando frameworks como Express y Nest.js para construir APIs y servicios web robustos y escalables.
                        </div>
                        <Waypoint
                            onEnter={() => { changebyscrotum(2); setTitlePage('Mis Habilidades') }} />
                        <div>
                            En general, tengo habilidades en el desarrollo de aplicaciones con diferentes tecnologías, pero también tengo una comprensión sólida de los conceptos de programación y la resolución de problemas, lo que me permite adaptarme y aprender nuevas tecnologías y herramientas rápidamente.
                        </div>
                        <div>
                            Estoy emocionado de trabajar en proyectos desafiantes y colaborar con otros desarrolladores para crear soluciones innovadoras y de alta calidad. ¡No dudes en contactarme si necesitas un programador con experiencia en estas tecnología
                        </div>
                        <a href="/horacio albornoz cv español.pdf" download='horacio albornoz cv español.pdf' className="btnCv">
                            Descargar mi CV
                        </a>
                    </div>
                    <div className="HabilidadesBlocks">
                        <div className="rowMain">
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades4.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/space/nodejs.png " />
                            </div>
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades2.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/eyes/html-5.png " />

                            </div>
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades1.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/eyes/css-3.png  " />

                            </div>
                        </div>
                        <div className="rowMain">
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades1.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/eyes/js.png     " />

                            </div>
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades3.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/space/ic-react.png " />

                            </div>
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades2.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/space/ic-git.png " />

                            </div>
                        </div>
                        <div className="rowMain">
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades1.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/space/python.png " />

                            </div>
                            <div className="colunmMain">
                                <img alt=' ' className="imgBackHabilidades" src="/imagenes/main/blockHabilidades4.png" />
                                <img alt=' ' className="imgFrontHabilidades" src="/imagenes/space/django.jpg " />

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Hability;