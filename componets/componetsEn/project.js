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
            textPresen: `Project developed as a final project for the UTN. It is a project coded 100% by me from scratch, both the frontend, which was developed with React.js as framework and Bootstrap as an aid for aesthetics, and the backend that is made with node.js and MYSQL. Project developed as a final project for the UTN. It is a project coded 100% by me from scratch, both the frontend, which was developed with React.js as framework and Bootstrap as an aid for aesthetics, and the backend that is made with node.js and MYSQL.`,
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
            textPresen: 'Project developed as a final project for the Coderhouse Course of Python and Django, with a Frontend and Backend developed in django is an application that simulates an ecommerce.',
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
            textPresen: `Util hub is a multifunctional Google extension that simplifies your daily tasks. Perform quick math calculations, keep track of time with an accurate stopwatch and discover a variety of useful tools, developed with Javascript Vanila and published using Google's developer dashboard.`,
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
            textPresen: `Chat Priv is a web page where whoever enters has access to a chat in real time,
            It is developed in Node.js with Socket.io as the main library in charge of sending messages.`,
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
            textPresen: 'NextChange is a web of unit conversion, it has the possibility to make the conversion in +150 currencies, it has a frotend developed in React.js and a Backend created in Node.js, for the currency values it uses currencyapi as API.',
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
            textPresen: `WeTrust is my most complex web project so far, it is a simulated e-commerce where the frontend is developed with React.js, doing session management, cart status, stock management, among many other things.
            The backend is developed with node.js and MySQL as a database, it has integrations with the Mercado Pago API and the possibility of analyzing sales growth through charts provided by Chart.js.`
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
            textPresen: `MindfulMind is a multiplatform application focused on productivity, as a mobile application is developed in React Native with Expo, and as a web application developed in next.js,
            the app uses node.js as backend, the project also has a landing page developed in Next.js where you can download the app or go directly to the web app.`
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
                    <div className="textoAbsoluto">My Projects</div>
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
                            onEnter={() => { changebyscrotum(1); setTitlePage('My Projects') }} />

                        <div className="conteinerData">
                            <div className="titleConteiner">{`${dataProject[itemProject].name}`}</div>
                            <img alt=' ' className="icon" src={dataProject[itemProject].icon} ></img>
                            <div className="titleConteiner2">Built with</div>
                            <div className="conteinerImg">
                                {
                                    dataProject[itemProject].imgs.map(item => {
                                        return <img alt=' ' src={item} />
                                    })
                                }
                            </div>
                            <div className="titleConteiner2">Links</div>
                            <div className="conteinerLinks">
                                <Link href={dataProject[itemProject].linkGithub} className="buttonLink">LINK TO GITHUB</Link>
                                <Link href={dataProject[itemProject].linkWeb} className="buttonLink">LINK TO WEB</Link>
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