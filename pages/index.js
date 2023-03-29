import React, { useRef, useState } from "react";
import { scroller } from "react-scroll";
import HeaderMain from "../componets/headermain";
import { Waypoint } from 'react-waypoint';
import Head from "next/head";
import Hero from "@/componets/main/hero";
import Project from "@/componets/main/project";
import Hability from "@/componets/main/hability";
import Contact from "@/componets/main/contact";
import MainFooter from "@/componets/main/MainFooter";


const Index = () => {

    const [TitlePage, setTitlePage] = useState('Horacio Albornoz')
    const [scrollItem, setScrollItem] = useState(0)



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
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>{TitlePage}</title>
            </Head>


            <Waypoint
                onEnter={() => { changebyscrotum(0); setTitlePage('Horacio Albornoz') }} />

            <HeaderMain Scrolltohabilidades={Scrolltohabilidades} ScrolltoContacto={ScrolltoContacto}
                ScrolltoFooter={ScrolltoFooter} ScrolltoInicio={ScrolltoInicio} scrollItem={scrollItem}
                setScrollItem={setScrollItem} ScrolltoProyect={ScrolltoProyect} />
            <Hero />

            <Waypoint
                onEnter={() => { changebyscrotum(1); setTitlePage('Mis Proyectos') }} />

            <Project />

            <Waypoint
                onEnter={() => { changebyscrotum(2); setTitlePage('Mis Habilidades') }} />

            <Hability />
            <Waypoint
                onEnter={() => { changebyscrotum(3); setTitlePage('Contacto') }} />
            <Contact />
            <Waypoint
                onEnter={() => { changebyscrotum(4); setTitlePage('Horacio Albornoz') }} />

            <MainFooter ScrolltoProyect={ScrolltoProyect} Scrolltohabilidades={Scrolltohabilidades} 
            ScrolltoContacto={ScrolltoContacto}  />


        </div>



    )

}



export default Index;