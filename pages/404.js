import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Custom404() {


    return (
        <>
            <Head >
                <link rel="icon" href="\imagenes\main\darkS.png" />

                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Elegí un estilo</title>
            </Head>
            <main className={`errorPage`}>
                <div className="conteinerImg">
                    <Link className="imgLogo" href={'/'}>
                        <img src="/imagenes/main/whiteL.png" />
                    </Link>
                </div>
                <div className="conteinerTxt">
                    <div className="BigTitle">EEHH...</div>
                    <div className="SmallTitle">Creo que no tendrías que estar aquí</div>
                    <Link href={'/'} className="bntBack">
                        Volver
                    </Link>
                </div>

            </main>
        </>
    )
}