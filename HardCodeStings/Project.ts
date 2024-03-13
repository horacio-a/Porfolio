type Project = {
    name: string;
    Stack: string[];
    linkGithub: string;
    linkWeb: string;
    textPresen: string;
};

type LanguageProject = {
    [key: string]: Project;
};

type ProjectData = {
    Es: LanguageProject;
    En: LanguageProject;
};


export const ProjectText:ProjectData = {
    Es: {
        LGP: {
            name: 'Le grand Patron',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'disable',
            linkWeb: 'https://www.legrandpatron.com.ar',
            textPresen: `Solución web en conjunto con DESE estudio, página web desarrollada react.js que integra la API de Google OAuth, con un backend desarrollador en node.js que integra la API de Google calendar.`
        },
        MFM: {
            name: 'MindfulMind',
            Stack: [
                'React Native',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/MindfulMind',
            linkWeb: 'https://mindfulmind.com.ar',
            textPresen: `MindfulMind es una aplicación multiplataforma enfocada en productividad, como aplicación móvil está desarrollada en React Native con Expo, y como aplicación web desarrollada en next.js,
        para el funcionamiento la app usa como backend node.js, el proyecto también tiene una landing page desarrollada en Next.js donde podés descargar app o ir directamente a la app web.`
        },
        WT: {
            name: 'WeTrust',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/WeTrust.git',
            linkWeb: 'https://wetrust.com.ar',
            textPresen: `
        WeTrust es mi proyecto web más avanzado hasta ahora, un e-commerce simulado que utiliza React.js en el frontend para gestionar sesiones, carritos, inventario y más. El backend se basa en node.js y MySQL, con integración de la API de Mercado Pago y capacidad para analizar el crecimiento de las ventas con gráficos de Chart.js.`
        },
        NC: {
            name: 'NextChange',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/Next-Change-Front',
            linkWeb: 'https://next-change.com.ar',
            textPresen: 'NextChange es un web de conversión de unidades, tiene la posibilidad de hacer la conversión en +150 monedas, tiene un frotend desarrollado en React.js y un Backend creado en Node.js, para los valores de las monedas utiliza currencyapi como API',
        },
        CP: {
            name: 'Chat Priv',
            Stack: [
                'Socket.io',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/Chat-en-tiempo-real',
            linkWeb: 'https://chatpriv.com.ar',
            textPresen: `Chat Priv es una página web donde quien ingrese tiene acceso a un chat en tiempo real,
        donde no se guarda ninguno de sus mensajes y puede comunicarse con otras personas, Está desarrollada en Node.js con Socket.io como librería principal encargada de enviar los mensajes.`,
        },
        UH: {
            name: 'Util Hub',
            Stack: [
                'Javascript',
                
            ],
            linkGithub: 'https://github.com/horacio-a/calculadora-extencion',
            linkWeb: 'https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0',
            textPresen: `Util hub es una extensión de Google multifuncional que simplifica tus tareas diarias.
        Realiza cálculos matemáticos rápidos, controla el tiempo con un cronómetro preciso y descubre una variedad de herramientas útiles, desarollada con Javascript Vanila y publicada usando el developer dashboard de Google `,
        },
        CW: {
            name: 'CriptoWord',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/Criptoword-front',
            linkWeb: 'https://criptoword.com.ar',
            textPresen: `Proyecto desarrollado como proyecto final para la UTN. Es un proyecto codeado 100% por mi desde cero, tanto el frontend, que se desarrollo con React.js como framework y con Bootstrap como ayuda para la estetica, como el backend que esta realizado con node.js y MYSQL.`,
        },
        EB: {
            name: 'Espacio bonhomia',
                 Stack: [
                'Python',
                'Django'
            ],
            linkGithub: 'https://github.com/horacio-a/Espacio-bonhomia',
            linkWeb: 'http://horacio.pythonanywhere.com',
            textPresen: 'Proyecto dessarrollado como proyecto final para el Curso de Coderhouse de Python y Django, Con un Frontend y Backend desarrolado en django es una aplicacion que simula un ecommerce. ',
        },
    },
    En: {
        LGP: {
            name: 'Le grand Patron',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'disable',
            linkWeb: 'https://www.legrandpatron.com.ar',
            textPresen: `Web solution in conjunction with DESE estudio, web page developed react.js that integrates the Google OAuth API, with a backend developer in node.js that integrates the Google calendar API.`
        },
        MFM: {
            name: 'MindfulMind',
            Stack: [
                'React Native',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/MindfulMind',
            linkWeb: 'https://mindfulmind.com.ar',
            textPresen: `MindfulMind is a multiplatform application focused on productivity, as a mobile application is developed in React Native with Expo, and as a web application developed in next.js,
            the app uses node.js as backend, the project also has a landing page developed in Next.js where you can download the app or go directly to the web app.`
        },
        WT: {
            name: 'WeTrust',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/WeTrust.git',
            linkWeb: 'https://wetrust.com.ar',
            textPresen: `WeTrust is my most advanced web project so far, a mock e-commerce using React.js on the frontend to manage sessions, carts, inventory and more. The backend is based on node.js and MySQL, with Mercado Pago API integration and ability to analyze sales growth with Chart.js charts.`
        },
        NC: {
            name: 'NextChange',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/Next-Change-Front',
            linkWeb: 'https://next-change.com.ar',
            textPresen: 'NextChange is a web of unit conversion, it has the possibility to make the conversion in +150 currencies, it has a frotend developed in React.js and a Backend created in Node.js, for the currency values it uses currencyapi as API.',
        },
        CP: {
            name: 'Chat Priv',
            Stack: [
                'Socket.io',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/Chat-en-tiempo-real',
            linkWeb: 'https://chatpriv.com.ar',
            textPresen: `Chat Priv is a web page where whoever enters has access to a chat in real time, It is developed in Node.js with Socket.io as the main library in charge of sending messages.`,
        },
        UH: {
            name: 'Util Hub',
            Stack: [
                'Javascript',
                
            ],
            linkGithub: 'https://github.com/horacio-a/calculadora-extencion',
            linkWeb: 'https://chrome.google.com/webstore/detail/calculadora/bejdbiknjfcgcllbcfgamogcefnojoak?hl=es&authuser=0',
            textPresen: `Util hub is a multifunctional Google extension that simplifies your daily tasks. Perform quick math calculations, keep track of time with an accurate stopwatch and discover a variety of useful tools, developed with Javascript Vanila and published using Google's developer dashboard. `,
        },
        CW: {
            name: 'CriptoWord',
            Stack: [
                'React.js',
                'Node.js'
            ],
            linkGithub: 'https://github.com/horacio-a/Criptoword-front',
            linkWeb: 'https://criptoword.com.ar',
            textPresen: `Project developed as a final project for the UTN. It is a project coded 100% by me from scratch, both the frontend, which was developed with React.js as framework and Bootstrap as an aid for aesthetics, and the backend that is made with node.js and MYSQL.`,
        },
        EB: {
            name: 'Espacio bonhomia',
            Stack: [
                'Python',
                'Django'
            ],
            linkGithub: 'https://github.com/horacio-a/Espacio-bonhomia',
            linkWeb: 'http://horacio.pythonanywhere.com',
            textPresen: 'Project developed as a final project for the Coderhouse Course of Python and Django, with a Frontend and Backend developed in django is an application that simulates an ecommerce. ',
        },
    }
}