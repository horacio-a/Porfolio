import React, { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import HeaderMain from "../componets/componetsEn/headermain";
import { Waypoint } from 'react-waypoint';
import Head from "next/head";
import Hero from "@/componets/componetsEn/hero";
import Project from "@/componets/componetsEn/project";
import Hability from "@/componets/componetsEn/hability";
import Contact from "@/componets/componetsEn/contact";
import MainFooter from "@/componets/componetsEn/MainFooter";
import { Toaster } from "react-hot-toast";


const Index = () => {

    const [TitlePage, setTitlePage] = useState('Horacio Albornoz')
    const [scrollItem, setScrollItem] = useState(0)

    useEffect(() => {
        ScrolltoInicio()
    }, [])

    const changebyscrotum = (data) => {
        setScrollItem(data)
    }



    const ScrolltoProyect = () => {
        scroller.scrollTo('proyectos', {
            duration: 500,
            delay: 50,
            smooth: true,
            offset: -50
        })
    }
    const ScrolltoInicio = () => {
        scroller.scrollTo('inicio', {
            duration: 500,
            delay: 50,
            smooth: true,
            offset: -50
        })
    }
    const Scrolltohabilidades = () => {
        scroller.scrollTo('habilidades', {
            duration: 500,
            delay: 50,
            smooth: true,
            offset: 5
        })
    }
    const ScrolltoContacto = () => {
        scroller.scrollTo('Contacto', {
            duration: 500,
            delay: 50,
            smooth: true,
            offset: 0
        })
    }
    const ScrolltoFooter = () => {
        scroller.scrollTo('Footer', {
            duration: 500,
            delay: 50,
            smooth: true,
            offset: 5
        })
    }


    return (
        <div className="FondoWhite">
            <Head>
                <link rel="icon" href="\imagenes\main\darkS.png" />
                <meta name="description" content="Horacio Albornoz portfolio" />
                <title>{TitlePage}</title>
            </Head>


            <Waypoint
                onEnter={() => { changebyscrotum(0); setTitlePage('Horacio Albornoz') }} />

            <HeaderMain Scrolltohabilidades={Scrolltohabilidades} ScrolltoContacto={ScrolltoContacto}
                ScrolltoFooter={ScrolltoFooter} ScrolltoInicio={ScrolltoInicio} scrollItem={scrollItem}
                setScrollItem={setScrollItem} ScrolltoProyect={ScrolltoProyect} />
            <Hero />


            <Project changebyscrotum={changebyscrotum} setTitlePage={setTitlePage} />



            <Hability changebyscrotum={changebyscrotum} setTitlePage={setTitlePage} />




            <Contact changebyscrotum={changebyscrotum} setTitlePage={setTitlePage} />


            <MainFooter ScrolltoProyect={ScrolltoProyect} Scrolltohabilidades={Scrolltohabilidades}
                ScrolltoContacto={ScrolltoContacto} changebyscrotum={changebyscrotum} setTitlePage={setTitlePage} />
            <Toaster
                toastOptions={{
                    className: 'fontGotham'
                }} />

        </div>



    )

}



export default Index;