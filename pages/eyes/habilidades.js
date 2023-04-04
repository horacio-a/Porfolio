import React from "react";
import Link from "next/link";
import Header from '../../componets/header';
import Head from "next/head";
const EyesPageHabilidades = () => {

    return (
        <>
            <Head>
                <link rel="icon" href={'/imagenes/eyes/mascotaon.png'} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Mis habilidades</title>

            </Head>
            <div className="conteiner-main" >
                <Header />
                <div className="centerProyect">
                    <div className="conteiner-misproyectos">
                        <div className="center-flex-j">
                            <div className="bloque-tecnologia">
                                <div className="titulo-tecnologia">
                                    Las tecnologias que manejo
                                </div>
                                <div className="space-around-flex-j">
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/html-5.png" width="75%" />
                                    </div>
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/css-3.png" width="75%" />
                                    </div>
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/js.png" width="75%" />
                                    </div>
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/bootstrap.png" width="75%" />
                                    </div>
                                </div>

                                <div className="space-around-flex-j">
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/physics.png" width="75%" />
                                    </div>
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/nodejs.png" width="75%" />
                                    </div>
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/python.png" width="75%" />
                                    </div>
                                    <div className="bloque-tecnologia-unidad ">
                                        <img alt="" src="/imagenes/eyes/django.jpg" width="85%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>


    )

}



export default EyesPageHabilidades;