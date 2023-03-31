import React, { useState, useEffect } from "react";
import Link from "next/link";




const Project = () => {
    const [itemProject, setItemProject] = useState(1)
    const dataProject = {
        1: {
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
            textPresen: 'Proyecto desarrollado como proyecto final para la UTN. Es un proyecto codeado 100% por mi desde cero, tanto el frontend, que se desarrollo con React.js como framework y con Bootstrap como ayuda para la estetica, como el backend que esta realizado con node.js y MYSQL. Proyecto desarrollado como proyecto final para la UTN. Es un proyecto codeado 100% por mi desde cero, tanto el frontend, que se desarrollo con React.js como framework y con Bootstrap como ayuda para la estetica, como el backend que esta realizado con node.js y MYSQL.',
        },
        2: {
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
            textPresen: 'Proyecto dessarrollado como proyecto final para el Curso de Coderhouse de Python y Django, ',
        },
        3: {
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
            textPresen: 'escribir',
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
            textPresen: '',
        },
        5: {
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
            textPresen: '',
        },
        6: {
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
            textPresen: 'terminar',
        },
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