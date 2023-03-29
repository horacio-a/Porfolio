import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

    const name = useRef()
    const email = useRef()
    const text = useRef()
    const comprobarFormulario = () => {
        if (name.current.value !== '' && email.current.value !== '' && text.current.value !== '') {
            return true
        } else {
            return false
        }
    }

    const enviarEmail = () => {
        const ToastLoading = toast.loading('Loading...');
        const Enviar = comprobarFormulario()
        if (Enviar === true) {
            let templateParams = {
                user_name: name.current.value,
                user_email: email.current.value,
                message: text.current.value,
                page_name: 'Porfolio'
            };
            emailjs.send(
                process.env.NEXT_PUBLIC_APP_SERVICE,
                process.env.NEXT_PUBLIC_APP_TEMPLATE,
                templateParams,
                process.env.NEXT_PUBLIC_APP_APIPUBLIC

            ).then(function (response) {
                toast.dismiss(ToastLoading);
                toast.success('El mensaje fue enviado');
                console.log(response.text);
            }, function (error) {
                toast.dismiss(ToastLoading);
                toast.error('Error');
                console.log(error.text);
            });
            name.current.value = ''
            email.current.value = ''
            text.current.value = ''

        } else {
            toast.dismiss(ToastLoading);
            toast.error('Complete todos los campos');
            console.log('no enviar')
        }

    }

    return (
        <>
            <div className="paginaConctacto" name='Contacto'>

                <div className="conteinerMainContanto">
                    <div className="titleContacto">Háblame cuando quieras</div>

                    <div className="subtitleContacto">tu mensaje nunca molesta</div>
                    <div className="conteinerInputContacto" >
                        <div className="rowContacto doble">
                            <div className="UnitInput">
                                <label className="contacto">Tu nombre</label>
                                <input type={'text'} className='inputContacto' placeholder="Ingresa tu nombre" ref={name}></input>
                            </div>
                            <div className="UnitInput">
                                <label className="contacto" >Tu Email</label>
                                <input type={'text'} className='inputContacto' ref={email} placeholder="Ingresa tu Email"></input>
                            </div>
                        </div>
                        <div className="rowContacto">
                            <div className="unitTextarea">
                                <label className="contacto" >Tu mensaje</label>
                                <textarea className="textareaContacto" ref={text} placeholder="Escribe tu mensaje"></textarea>
                            </div>

                        </div>

                        <div className="buttonSend" onClick={() => { enviarEmail() }}>Enviar</div>

                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    className: 'fontGotham'
                }} />
        </>
    )
}

export default Contact;