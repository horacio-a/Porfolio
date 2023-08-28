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
                        <div className="TitleHabilidades">My Skills</div>
                    </div>

                </div>
                <div className="conteinerMainHabilides">
                    <div className="presenPerson">
                        <div>
                            Hi, I am a programmer with extensive knowledge in various technologies including React, Node.js, JavaScript, Python and Django. I am passionate about software development and have experience in designing, implementing and maintaining web and mobile applications.
                        </div>
                        <div>
                            Regarding React, I have worked on projects creating interactive and highly responsive user interfaces, using tools such as Redux and Next.js to improve the performance and scalability of applications
                        </div>
                        <div>
                            On the other hand, in Node.js, I have developed backend and server-side applications, using frameworks such as Express and Nest.js to build robust and scalable APIs and web services.
                        </div>
                        <Waypoint
                            onEnter={() => { changebyscrotum(2); setTitlePage('My Skills') }} />
                        <div>
                            In general, I have skills in developing applications with different technologies, but I also have a solid understanding of programming concepts and problem solving, which allows me to adapt and learn new technologies and tools quickly.
                        </div>
                        <div>
                            I am excited to work on challenging projects and collaborate with other developers to create innovative and high quality solutions. Do not hesitate to contact me if you need a programmer with experience in these technologies.
                        </div>
                        <a href="/horacio albornoz cv english.pdf" download='horacio albornoz cv english.pdf' className="btnCv">
                            Download my CV
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