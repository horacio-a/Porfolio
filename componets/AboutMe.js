import Popover from 'react-tiny-popover'

const AboutMeContent = () => {

    return (

        <div className="conteinerAboutMe">
            <div className="conteinerInfo">
                Hola, soy un programador con amplia experiencia en tecnologias como React, Node.js, JavaScript, Python y Django.
                Me apasiona el desarrollo de aplicaciones web y moviles, incluyendo la creacion de interfaces interactivas y altamente responsivas en React, asi como la construccion de robustas APIs en Node.js
                con frameworks como Express y Nest.js. Tengo habilidades versatiles y una solida comprension de la programacion,
                lo que me permite aprender nuevas tecnologias rapidamente. Estoy emocionado por proyectos desafiantes y colaboraciones innovadoras con otros desarrolladores.
                Contactame si necesitas mis habilidades
            </div>
            <div className="conteinerHability">
                <img src="/aboutme.svg" className="imgAboutMe" />
                <div className="conteinerImgOver">
                    <div className="unitImgOver">
                        <img src="/expo.png" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/reactNative.svg" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/mysql.png" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/imagenes/space/python.png" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/imagenes/main/nextjs.png" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/imagenes/space/nodejs.png " />
                    </div>
                    <div className="unitImgOver">
                        <img src="/imagenes/space/django.jpg" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/imagenes/eyes/js.png" />
                    </div>
                    <div className="unitImgOver">
                        <img src="/imagenes/space/ic-git.png" />
                    </div>

                </div>

            </div>
        </div>

    )

}



export default AboutMeContent