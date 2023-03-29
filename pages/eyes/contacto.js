import React from "react";
import Link from "next/link";
import Header from '../../componets/header';
const EyesPageContacto = () => {

    return (
        <>
            <div className="conteiner-main" >
                <Header />
                <div id="main-contacto-pc">
                    <div className="centerContact" >
                        <div className="conteiner-otros">
                            <div className="titulo-contacto">
                                Contacto Rapido
                            </div>
                            <div className="barra"></div>
                            <div className="texto-contacto">
                                <p>Telefon: +54 299 5707123</p>
                                <p>Email: horaciomatiasalbornoz@gmail.com</p>
                                <p>linkedin:
                                    <Link href=""> horacio Albornoz</Link>
                                </p>
                                <p>Discord:
                                    <Link href=""> horacio Albornoz</Link>
                                </p>
                                <p> facebook
                                    <Link href=""> horacio Albornoz
                                    </Link>
                                </p>
                            </div>
                            <div className="titulo-contacto">
                                Mis Capacidades
                            </div>
                            <div className="barra"></div>
                            <div className="texto-contacto">
                                <p>github:
                                    <Link href=""> horacio-a</Link>
                                </p>
                                <p>CV:
                                    <Link href="">Click aqui</Link>
                                </p>
                                <p> linkedin
                                    <Link href=""> horacio Albornoz
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="conteiner-ojocontac">
                            <img src="/imagenes/eyes/mascotaon.png" alt="" style={{width:'100%'}} />
                        </div>
                        <div className="conteiner-formulario">
                            <div className="container ">
                                <div className="titulo-contacto">
                                    Dejame un mensaje
                                </div>

                                <form action="/eyes/contacto/" className="eyes" method="POST">
                                    <input type="email" placeholder="Email" className="form-pc" name="email" />
                                    <input type="text" placeholder="Nombre" className="form-pc" name="name" />
                                    <input type="text" placeholder="Asunto" className="form-pc" name="subject" />
                                    <textarea placeholder="Mensaje" className="form-pc" name="message"></textarea>
                                    <input type="submit" className="contactoBtn"></input>
                                </form>


                            </div>

                        </div>
                    </div>

                </div>
                <main id="main-contacto-movil">
                    <div className='form-enviar'>
                        <div className="titulo-contacto">Enviar un Mensaje</div>
                        <div className="container">
                            <form action="/eyes/contacto/"className="eyes" method="POST">
                                <input type="email" placeholder="Email" className="form-movil" name="email" />
                                <input type="text" placeholder="Nombre" className="form-movil" name="name" />
                                <input type="text" placeholder="Asunto" className="form-movil" name="subject" />
                                <textarea placeholder="Mensaje" className="texto-form-movil" name="message"></textarea>
                                <input type="submit" className="boton-movil-contacto"></input>

                            </form>


                        </div>
                    </div>  
                    <div className="contacto-movil">
                        <div className="titulo-contacto">Contacto Rapido</div>
                        <p>Telefono: 299 570-7123 </p>
                        <p>Email: Horacio</p>
                        <p>linkedin: Horacio</p>
                        <p>Discord: Horacio</p>
                    </div>
                </main>


            </div>
        </>


    )

}



export default EyesPageContacto;