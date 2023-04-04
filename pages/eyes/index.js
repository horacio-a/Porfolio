import React from "react";
import Link from "next/link";
import Header from '../../componets/header';
import Head from "next/head";
const EyesPage = () => {


    return (
        <>
            <Head>
                <link rel="icon" href={'/imagenes/eyes/mascotaon.png'} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Horacio albornoz</title>

            </Head>
            <div className="conteiner-main" >
                <Header />
                <main>
                    <div className="conteiner-nombre">
                        <p>
                            Horacio
                        </p>
                        <p>
                            Albornoz
                        </p>
                        <p className="caption">
                            desarrollador full stack.
                        </p>
                    </div>
                    <div id="conteiner-logogrande">
                        <div className="conteiner-imagen">
                            <img src="/imagenes/eyes/mascotaon.png" alt="" className="imagen-on" />
                            <img src="/imagenes/eyes/mascota.png" alt="" className="imagen-off" />
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="conteiner-info">
                        <Link href="https://github.com/horacio-a">
                            <img src="/imagenes/eyes/github (2).png" alt="" /></Link>
                        <Link href="https://github.com/horacio-a">
                            <img src="/imagenes/eyes/linkedin (2).png" alt="" /></Link>
                        <Link href="imagenes/Curriculum Vitae Albornoz Horacio.pdf">
                            <img src="/imagenes/eyes/curriculum-vitae.png"
                                alt="" />
                        </Link>
                    </div>
                </footer>
            </div>
        </>


    )

}



export default EyesPage;