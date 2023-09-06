import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AnimationScrollError from "@/componets/animaationScrollError";
export default function Custom404() {


    return (
        <>
            <Head >
                <link rel="icon" href="\imagenes\main\darkS.png" />

                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Elegí un estilo</title>
            </Head>
            <main className="modernBackground">
                <div className="content">
                    <header className="modern" >
                        HORACIO
                    </header>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <div className="title404">NO DEBERIAS ESTAR AQUI</div>
                        <a href="/" className="backBtn404">Volver</a>
                    </div>

                </div>
                <div className="AutoScrollAnimation">
                    <AnimationScrollError />
                </div>
            </main>
        </>
    )
}