import Link from "next/link";
import Head from "next/head";
import React from "react";
import AnimationScrollError from "@/componets/animaationScrollError";
export default function Custom404() {


    return (
        <>
            <Head >
                <title>No debeiras estar aqui</title>
            </Head>
            <main className="modernBackgroundPc">
                <div className="content">
                    <header className="modern" >
                        HORACIO
                    </header>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '93.5%', height: '100%' }}>
                        <div className="title404">NO DEBERIAS ESTAR AQUI</div>
                        <Link href="/" className="backBtn404">Volver</Link>
                    </div>

                </div>
                <div className="AutoScrollAnimation">
                    <AnimationScrollError />
                </div>
            </main>
            <main className="modernBackgroundMovil">
                <div className="content">
                    <header className="modern" >
                        HORACIO
                    </header>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '93.5%', height: '100%' }}>
                        <div className="title404">NO DEBERIAS ESTAR AQUI</div>
                        <Link href="/" className="backBtn404">Volver</Link>
                    </div>

                </div>

            </main>
        </>
    )
}