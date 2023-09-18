const ProjectContent = () => {
    const dataProject = [
        {
            name: 'MindfulMind',
            type: 'APLICACION MULTIPLATAFORMA',
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
        },
        {
            name: 'WeTrust',
            type: 'pagina web',
            icon: '/imagenes/main/logosWetrust.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/ic-react.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/WeTrust.git',
            linkWeb: 'https://wetrust.com.ar',
            textPresen: `
            WeTrust es mi proyecto web más avanzado hasta ahora, un e-commerce simulado que utiliza React.js en el frontend para gestionar sesiones, carritos, inventario y más. El backend se basa en node.js y MySQL, con integración de la API de Mercado Pago y capacidad para analizar el crecimiento de las ventas con gráficos de Chart.js.`
        },
        {
            name: 'NextChange',
            type: 'pagina web',
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
        {
            name: 'Chat Priv',
            type: 'pagina web',

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
        {
            name: 'Util Hub',
            type: 'Extencion de chrome',

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
        {
            name: 'CRIPTOWORD',
            type: 'pagina web',

            icon: '/imagenes/eyes/icon S.png',
            imgQty: '5',
            imgs: [
                '/imagenes/eyes/js.png       ',
                '/imagenes/space/ic-react.png',
                '/imagenes/space/nodejs.png  ',
            ],
            linkGithub: 'https://github.com/horacio-a/Criptoword-front',
            linkWeb: 'https://criptoword.com.ar',
            textPresen: `Proyecto desarrollado como proyecto final para la UTN. Es un proyecto codeado 100% por mi desde cero, tanto el frontend, que se desarrollo con React.js como framework y con Bootstrap como ayuda para la estetica, como el backend que esta realizado con node.js y MYSQL.`,
        },
        {
            name: 'Espacio bonhomia',
            type: 'pagina web',

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
    ]
    return (

        <div className="ScrollProject" >
            {
                dataProject.map(item => {
                    return (
                        <div className="Project">
                            <div className="conteinerName">
                                <div className="Title">{item.name}</div>
                                <img className="img" src={`${item.icon}`} />
                                <div className="description">{item.type}</div>
                            </div>
                            <div className="conteinerBuild">
                                <div className="Title">Construido con</div>
                                <div className="ContinerImgs">
                                    {item.imgs.map(img => {
                                        return (
                                            <img src={`${img}`} className="img"></img>
                                        )
                                    })}

                                </div>
                            </div>
                            <div className="conteinerDecription">
                                <div className="Title">DESCRIPCION</div>
                                <div className="Description">{item.textPresen}</div>
                            </div>
                            <div className="conteinerBtns">
                                <a href={`${item.linkGithub}`} target='blank' className="btn">GITHUB</a>
                                <a href={`${item.linkWeb}`} target='blank' className="btn">WEB</a>
                            </div>
                        </div>
                    )
                })
            }


        </div>

    )

}


export default ProjectContent