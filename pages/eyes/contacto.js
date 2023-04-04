import React, { useRef } from "react";
import Link from "next/link";
import Header from '../../componets/header';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com'
import Head from "next/head";

const EyesPageContacto = () => {
    const form = useRef('')
    const formMovil = useRef('')


    const comprobarEstado = () => {
        if (form.current.user_name.value !== '' && form.current.subject.value !== '' && form.current.user_email.value !== '' && form.current.message.value !== '') {
            return true
        } else {
            return false

        }
    }

    const comprobarEstadoMovil = () => {
        if (formMovil.current.user_name.value !== '' && formMovil.current.subject.value !== '' && formMovil.current.user_email.value !== '' && formMovil.current.message.value !== '') {
            return true
        } else {
            return false

        }
    }


    const SubmitContacto = async () => {
        toast.dismiss();

        const ToastLoading = toast.loading('Loading...');


        const Enviar = comprobarEstado()

        if (Enviar === true) {

            emailjs.sendForm(
                process.env.NEXT_PUBLIC_APP_SERVICE,
                process.env.NEXT_PUBLIC_APP_TEMPLATE,
                form.current,
                process.env.NEXT_PUBLIC_APP_APIPUBLIC

            ).then((result) => {
                toast.dismiss(ToastLoading);
                toast.success('El mensaje fue enviado');
                console.log(result.text);
            }, (error) => {
                toast.dismiss(ToastLoading);
                toast.error('Error');
                console.log(error.text);
            });

            form.current.user_name.value = ''
            form.current.subject.value = ''
            form.current.user_email.value = ''
            form.current.message.value = ''
        } else {
            toast.dismiss(ToastLoading);
            toast.error('Complete todos los campos');
            console.log('no enviar')
        }


    }

    const SubmitContactoMovil = async () => {
        toast.dismiss();

        const ToastLoading = toast.loading('Loading...');


        const Enviar = comprobarEstadoMovil()

        if (Enviar === true) {

            emailjs.sendForm(
                process.env.NEXT_PUBLIC_APP_SERVICE,
                process.env.NEXT_PUBLIC_APP_TEMPLATE,
                formMovil.current,
                process.env.NEXT_PUBLIC_APP_APIPUBLIC
            ).then((result) => {
                toast.dismiss(ToastLoading);
                toast.success('El mensaje fue enviado');
                console.log(result.text);
            }, (error) => {
                toast.dismiss(ToastLoading);
                toast.error('Error');
                console.log(error.text);
            });

            formMovil.current.user_name.value = ''
            formMovil.current.subject.value = ''
            formMovil.current.user_email.value = ''
            formMovil.current.message.value = ''
        } else {
            toast.dismiss(ToastLoading);
            toast.error('Complete todos los campos');
            console.log('no enviar')
        }


    }

    return (
        <>
            <Head>
                <link rel="icon" href={'/imagenes/eyes/mascotaon.png'} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Contacto</title>

            </Head>
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
                            <img src="/imagenes/eyes/mascotaon.png" alt="" style={{ width: '100%' }} />
                        </div>
                        <div className="conteiner-formulario">
                            <div className="container ">
                                <div className="titulo-contacto">
                                    Dejame un mensaje
                                </div>

                                <form className="eyes" ref={form}>
                                    <input type="email" placeholder="Email" className="form-pc" name="user_email" />
                                    <input type="text" placeholder="Nombre" className="form-pc" name="user_name" />
                                    <input type="text" placeholder="Asunto" className="form-pc" name="subject" />
                                    <textarea placeholder="Mensaje" className="form-pc" name="message"></textarea>
                                    <div onClick={() => { SubmitContacto() }} className="contactoBtn">Enviar</div>
                                </form>


                            </div>

                        </div>
                    </div>

                </div>
                <main id="main-contacto-movil">
                    <div className='form-enviar'>
                        <div className="titulo-contacto">Enviar un Mensaje</div>
                        <div className="container">
                            <form className="eyes" ref={formMovil}>
                                <input type="email" placeholder="Email" className="form-movil" name="user_email" />
                                <input type="text" placeholder="Nombre" className="form-movil" name="user_name" />
                                <input type="text" placeholder="Asunto" className="form-movil" name="subject" />
                                <textarea placeholder="Mensaje" className="texto-form-movil" name="message"></textarea>
                                <div onClick={() => { SubmitContactoMovil() }} className="boton-movil-contacto">Enviar</div>

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

                <Toaster />
            </div>
        </>


    )

}



export default EyesPageContacto;