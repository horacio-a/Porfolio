import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Waypoint } from "react-waypoint";



const Project = ({ setTitlePage, changebyscrotum }) => {
    const [itemProject, setItemProject] = useState(1)
    const dataProject = {
        6: {
            name: 'CRIPTOWORD',
            icon: '/imagenes/eyes/icon S.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/ic-react.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/Criptoword-front',
            linkWeb: 'https://criptoword.com.ar',
            textPresen: `Proyecto desarrollado como proyecto final para la UTN. Es un proyecto codeado 100% por mi desde cero, tanto el frontend, que se desarrollo con React.js como framework y con Bootstrap como ayuda para la estetica, como el backend que esta realizado con node.js y MYSQL. Proyecto desarrollado como proyecto final para la UTN.
            Es un proyecto codeado 100% por mi desde cero, tanto el frontend, que se desarrollo con React.js como framework y con Bootstrap como ayuda para la estetica, como el backend que esta realizado con node.js y MYSQL.`,
        },
        7: {
            name: 'Espacio bonhomia',
            icon: '/imagenes/space/BonhomiaLogo.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/python.png',
                '/imagenes/space/django.jpg  ',
            ],
            linkGithub: 'https://github.com/horacio-a/Espacio-bonhomia',
            linkWeb: 'http://horacio.pythonanywhere.com',
            textPresen: 'Proyecto dessarrollado como proyecto final para el Curso de Coderhouse de Python y Django, Con un Frontend y Backend desarrolado en django es una aplicacion que simula un ecommerce. ',
        },
        5: {
            name: 'Util Hub',
            icon: '/imagenes/space/512.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/html-5.png   ',
                '/imagenes/eyes/css-3.png    ',
                '/imagenes/eyes/js.png       ',
            ],
            linkGithub: 'https://github.com/horacio-a/calculadora-extencion',
            linkWeb: '"https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0',
            textPresen: `Util hub es una extensión de Google multifuncional que simplifica tus tareas diarias.
            Realiza cálculos matemáticos rápidos, controla el tiempo con un cronómetro preciso y descubre una variedad de herramientas útiles, desarollada con Javascript Vanila y publicada usando el developer dashboard de Google `,
        },
        4: {
            name: 'Chat Priv',
            icon: '/imagenes/eyes/Logo-chat-priv.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/socketio.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/Chat-en-tiempo-real',
            linkWeb: 'https://chatpriv.com.ar',
            textPresen: `Chat Priv es una página web donde quien ingrese tiene acceso a un chat en tiempo real,
            donde no se guarda ninguno de sus mensajes y puede comunicarse con otras personas, Está desarrollada en Node.js con Socket.io como librería principal encargada de enviar los mensajes.`,
        },
        3: {
            name: 'NextChange',
            icon: '/imagenes/eyes/nextchange.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/ic-react.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/Next-Change-Front',
            linkWeb: 'https://next-change.com.ar',
            textPresen: 'NextChange es un web de conversión de unidades, tiene la posibilidad de hacer la conversión en +150 monedas, tiene un frotend desarrollado en React.js y un Backend creado en Node.js, para los valores de las monedas utiliza currencyapi como API',
        },
        2: {
            name: 'WeTrust',
            icon: '/imagenes/main/logosWetrust.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/ic-react.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/WeTrust.git',
            linkWeb: 'https://wetrust.com.ar',
            textPresen: `WeTrust es mi proyecto web más complejo hasta el momento, es un e-commerce simulado donde el frontend está desarrollado con React.js, haciendo manejo de sesiones, estado de un carrito, manejo de stock, entre otras muchas cosas.
            El backend está desarrollado con node.js y con MySQL como base de datos, tiene integraciones con la API de mercado pago y posibilidad de hacer análisis del crecimiento de las ventas a través de gráficos proporcionados por Chart.js`
        },
        1: {
            name: 'MindfulMind',
            icon: '/imagenes/main/mindfulmindLogo.png',
            imgQty: '5',
            imgs: [
                '/imagenes/space/ic-react.png',
                '/imagenes/main/nextjs.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/MindfulMind',
            linkWeb: 'https://mindfulmind.com.ar',
            textPresen: `MindfulMind es una aplicación multiplataforma enfocada en productividad, como aplicación móvil está desarrollada en React Native con Expo, y como aplicación web desarrollada en next.js,
            para el funcionamiento la app usa como backend node.js, el proyecto también tiene una landing page desarrollada en Next.js donde podés descargar app o ir directamente a la app web.`
        }
    }

    const changeProject = (data) => {
        const limit = Object.keys(dataProject).length

        if (data === 'next') {
            if (itemProject < limit) {
                setItemProject(itemProject + 1)
            } else {
                setItemProject(1)
            }
        } else {
            if (itemProject > 1) {
                setItemProject(itemProject - 1)
            } else {
                setItemProject(limit)
            }
        }
    }
    return (
        <>
            <div className="titleProyecto" name='proyectos'>
                <div className="conteinerImgTitle">
                    <img alt=' ' src="/imagenes/main/titleProyecto.png" ></img>
                    <div className="textoAbsoluto">Mis Proyectos</div>
                </div>
            </div>
            <div className="paginaProyectos" >

                <div className="conteinerImgProject">
                    <img alt=' ' className="backProyect" src="/imagenes/main/fondoProyecto.png" ></img>
                    <div className="ConteinerAbsoluto">
                        <div className="ConteinerBack">
                            <div className="UnidadBack">
                                <img alt=' ' src="/imagenes/main/backFlecha.png" onClick={() => { changeProject('prev') }} ></img>
                            </div>
                        </div>
                        <Waypoint
                            onEnter={() => { changebyscrotum(1); setTitlePage('Mis Proyectos') }} />

                        <div className="conteinerData">
                            <div className="titleConteiner">{`${dataProject[itemProject].name}`}</div>
                            <img alt=' ' className="icon" src={dataProject[itemProject].icon} ></img>
                            <div className="titleConteiner2">Construida con</div>
                            <div className="conteinerImg">
                                {
                                    dataProject[itemProject].imgs.map(item => {
                                        return <img alt=' ' src={item} />
                                    })
                                }
                            </div>
                            <div className="titleConteiner2">Links</div>
                            <div className="conteinerLinks">
                                <Link href={dataProject[itemProject].linkGithub} className="buttonLink">LINK A GITHUB</Link>
                                <Link href={dataProject[itemProject].linkWeb} className="buttonLink">LINK A LA WEB</Link>
                            </div>
                        </div>
                        <div className="ConteinerPost">
                            <div className="UnidadPost">
                                <img alt=' ' src="/imagenes/main/post.png" onClick={() => { changeProject('next') }} ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conteinerDecripcion">
                    {dataProject[itemProject].textPresen}
                </div>
            </div>
            <div className="boxMain"></div>
        </>
    )
}

export default Project;