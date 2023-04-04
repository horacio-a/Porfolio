import React, { useState } from "react";
import Header from '../../componets/header';
import Head from "next/head";
const EyesPageQuiensoy = () => {

    return (
        <>
            <Head>
                <link rel="icon" href={'/imagenes/eyes/mascotaon.png'} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Quien soy</title>

            </Head>
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
                            <p className="text-presentacion">Hola, soy un programador con amplio conocimiento en diversas tecnologías, entre ellas React, Node.js, JavaScript, Python y Django. Me apasiona el desarrollo de software y tengo experiencia en el diseño, la implementación y el mantenimiento de aplicaciones web y móviles.    </p>
                            <p className="text-presentacion">En general, tengo habilidades en el desarrollo de aplicaciones con diferentes tecnologías, pero también tengo una comprensión sólida de los conceptos de programación y la resolución de problemas, lo que me permite adaptarme y aprender nuevas tecnologías y herramientas rápidamente.
                            </p>
                            <p className="text-presentacion">Estoy emocionado de trabajar en proyectos desafiantes y colaborar con otros desarrolladores para crear soluciones innovadoras y de alta calidad. ¡No dudes en contactarme si necesitas un programador con experiencia en estas tecnología
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>


    )

}



export default EyesPageQuiensoy;