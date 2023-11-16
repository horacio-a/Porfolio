import { useEffect, useState } from "react"
import AnimationScrollContact from "../animationScrollContact"

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com'

import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';

const ContactMovil = () => {
    const [scrollPosition, setScrollPosition] = useState(0)


    useEffect(() => {
        function handleScroll() {
            setScrollPosition((window.scrollY * 0.23))
        }

        window.addEventListener("scroll", handleScroll);
    }, [])
    const copyEmailNotify = () => toast.success('Email copiado al portapapeles', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const copyDiscordNotify = () => toast.success('Discord copiado al portapapeles', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


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
        const id = toast.loading("Enviado...")
        if (Enviar === true) {
            let templateParams = {
                user_name: name.current.value,
                user_email: email.current.value,
                message: text.current.value,
                page_name: 'Porfolio'
            };
            try {
                emailjs.send(
                    process.env.NEXT_PUBLIC_APP_SERVICE,
                    process.env.NEXT_PUBLIC_APP_TEMPLATE,
                    templateParams,
                    process.env.NEXT_PUBLIC_APP_APIPUBLIC

                ).then(function (response) {
                    toast.update(id, { render: "Enviado", type: "success", isLoading: false, autoClose: 3000 });
                    console.log(response.text);
                }, function (error) {
                    toast.update(id, { render: "error al enviar", type: "error", isLoading: false, autoClose: 3000 });
                    console.log(error.text);
                });
                name.current.value = ''
                email.current.value = ''
                text.current.value = ''
            } catch (error) {
                toast.update(id, { render: "error al enviar", type: "error", isLoading: false, autoClose: 3000 });
            }


        } else {
            toast.update(id, { render: "Por favor termina de completar el formulario", type: "error", isLoading: false, autoClose: 3000 });

        }

    }

    return (
        <>
            <div className="titleProject">
                <AnimationScrollContact animationNumContact={scrollPosition} />
            </div>

            <div style={{ width: '100%', height: '90vh', backgroundColor: '#000' }}>
                <div className="conteinerForm">
                    <input placeholder="Tu nombre" className="inputForm" ref={name} />
                    <input placeholder="tu email" className="inputForm" ref={email} />
                    <textarea placeholder="tu mensaje" className="inputForm" style={{ height: '30%', resize: 'none' }} ref={text} />
                    <div className="btnContact" onClick={() => { enviarEmail() }}>
                        Enviar
                    </div>
                </div>
                <div className="fastContactConteiner">
                    <div className="fastContact">
                        <CopyToClipboard text={'horacioalbornoz'}>
                            <a onClick={copyDiscordNotify}>MI DISCORD</a>
                        </CopyToClipboard>
                        <CopyToClipboard text={'horaciomatiasalbornoz@gmail.com'}>
                            <a onClick={copyEmailNotify}>MI EMAIL</a>
                        </CopyToClipboard>

                        <a href='https://www.linkedin.com/in/horacio-albornoz-82606923a/' target='blank'>MI LINKEND</a>
                        <a href='https://github.com/horacio-a' target='blank'>mi github</a>

                    </div>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                />
            </div>


        </>

    )

}



export default ContactMovil