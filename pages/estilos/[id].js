import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Estilos = () => {
    const [logoState, setlogoState] = useState(false)
    useEffect(() => {
        document.querySelector('body').addEventListener('mousemove', eyeball);
        function eyeball(event) {
            const eye = document.querySelectorAll('.eye');
            eye.forEach(function (eye) {
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rotation = (radian * (180 / Math.PI) * -1) + 270;
                eye.style.transform = "rotate(" + rotation + "deg) "
            });

        }
    }, [])

    const router = useRouter()
    const pages = router.query.id
    const [imgIcon, setImgIcon] = useState('')
    useEffect(() => {
        if (pages === 'main') {
            setImgIcon('/imagenes/main/darkS.png')
        }
        if (pages === 'space') {
            setImgIcon('/imagenes/space/alienlogo.png')
        }
        if (pages === 'eyes') {
            setImgIcon('/imagenes/eyes/mascotaon.png')
        }
    }, [pages])

    return (

        <>
            <Head>
                <link rel="icon" href={imgIcon} />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>Elegí un estilo</title>
            </Head>
            <div className={`hubMain ${pages === 'main' ? 'active main' : ''}`}>
                <div className="conteinerImg">
                    <Link className="imgLogo" href={'/'}>
                        <img src="/imagenes/main/whiteL.png" />
                    </Link>
                </div>
                <div className="titleHubMain">
                    <div className="BigTitle">¿No te gusto mi porfolio?</div>
                    <div className="SmallTitle">Elegí un estilo distinto</div>
                </div>
                <div className="conteinerLinksHub">
                    <Link href={'/eyes'} className='conteinerUnit'>
                        <img src="\imagenes\main\mascota.png" />
                    </Link>
                    <Link href={'/space'} className='conteinerUnit'>
                        <img src="\imagenes\main\spaceMascota.png" />
                    </Link>
                </div>
            </div>
            <div className={`hubMain ${pages === 'space' ? 'active space' : ''}`}>
                <div className="conteinerImg">
                    <img src="/imagenes/main/whiteL.png" />
                </div>
                <div className="titleHubMain">
                    <div className="BigTitle">¿No te gusto mi porfolio?</div>
                    <div className="SmallTitle">Elegí un estilo distinto</div>
                </div>
                <div className="conteinerLinksHub">
                    <Link href={'/eyes'} className='conteinerUnit'>
                        <img src="\imagenes\main\mascota.png" />
                    </Link>
                    <Link href={'/'} className='conteinerUnit'>
                        <img src="\imagenes\main\darkS.png" />
                    </Link>
                </div>
            </div>
            <div className={`hubMain ${pages === 'eyes' ? 'active eyes' : ''}`}>
                <header id="header-eyes">
                    <div href="/eyes" className="conteiner-logo" id="conteiner-logo">
                        <img src="/imagenes/eyes/ojoon.png" alt="" className={`ojohover ${logoState ? 'active' : 'desactive'} `} />
                        <img src="/imagenes/eyes/backojo.png" alt="" className={`ojosigue ${logoState ? 'desactive' : 'active'} `} name='este es' />
                        <div className="box">
                            <div className={`eye ${logoState ? 'desactive' : 'active'} `} id="eye"></div>
                        </div>
                    </div>
                </header>
                <div className="titleHubMain">
                    <div className="BigTitle eyes">¿No te gusto mi porfolio?</div>
                    <div className="SmallTitle eyes">Elegí un estilo distinto</div>
                </div>
                <div className="conteinerLinksHub">
                    <Link href={'/space'} className='conteinerUnit'>
                        <img src="\imagenes\main\spaceMascota.png" />
                    </Link>
                    <Link href={'/'} className='conteinerUnit'>
                        <img src="\imagenes\main\darkS.png" />
                    </Link>
                </div>
            </div>
        </>
    )

}



export default Estilos;