import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';
import { Waypoint } from "react-waypoint";

const Contact = ({ setTitlePage, changebyscrotum }) => {

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
        toast.dismiss();
        const Enviar = comprobarFormulario()
        const ToastLoading = toast.loading('Loading...');

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
                const ToastSuccess = toast.success('The message was sent');
                console.log(response.text);
            }, function (error) {
                toast.dismiss(ToastLoading);
                const ToastError = toast.error('Error');
                console.log(error.text);
            });
            name.current.value = ''
            email.current.value = ''
            text.current.value = ''

        } else {
            toast.dismiss(ToastLoading);
            toast.error('Complete all fields');
            console.log('no enviar')
        }

    }

    return (
        <>

            <div className="paginaConctacto" name='Contacto'>

                <div className="conteinerMainContanto">
                    <div className="titleContacto">Talk to me whenever you want</div>

                    <div className="subtitleContacto">your message never bothers</div>
                    <Waypoint
                        onEnter={() => { changebyscrotum(3); setTitlePage('Contact') }} />
                    <div className="conteinerInputContacto" >
                        <div className="rowContacto doble">
                            <div className="UnitInput">
                                <label className="contacto">Your name</label>
                                <input type={'text'} className='inputContacto' placeholder="Enter your name" ref={name} />
                            </div>
                            <div className="UnitInput">
                                <label className="contacto" >Your Email Address</label>
                                <input type={'text'} className='inputContacto' ref={email} placeholder="Enter your Email" />
                            </div>
                        </div>
                        <div className="rowContacto">
                            <div className="unitTextarea">
                                <label className="contacto" >Your message</label>
                                <textarea className="textareaContacto" ref={text} placeholder="Write your message"></textarea>
                            </div>

                        </div>

                        <div className="buttonSend" onClick={() => { enviarEmail() }}>Send to</div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact;