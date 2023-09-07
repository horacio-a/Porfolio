import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import AnimationScrollDev from "@/componets/animaationScrollDev";
import AnimationScrollProject from "@/componets/animationScrollProject";
import AnimationScrollAboutMe from "@/componets/animationScrollAboutMe";
import AnimationScrollContact from "@/componets/animationScrollContact";
import ProjectContent from "@/componets/project";
import AboutMeContent from "@/componets/AboutMe";
import ContactContent from "@/componets/contact";
import { isMobile } from 'react-device-detect';

const Index = () => {
    console.log(isMobile)

    const [TitlePage, setTitlePage] = useState('Horacio Albornoz')
    const [scrollItem, setScrollItem] = useState(0)

    const [Project, setProject] = useState(false);
    const [animationNumProject, setanimationNumProject] = useState(0);
    const [storeIntervalProject, setStoreIntervalProject] = useState();

    const increaseAnimationNumProject = () => {
        setanimationNumProject((animationNumProject) => animationNumProject + 0.05);
        if (animationNumProject > 5000) setanimationNumProject((animationNumProject) => 0);
    };

    const onMouseOverProject = () => {
        clearInterval(storeIntervalProject);
        setStoreIntervalProject(setInterval(increaseAnimationNumProject, 1));
    };


    const [aboutMe, setaboutMe] = useState(false);
    const [animationNumaboutMe, setanimationNumaboutMe] = useState(0);
    const [storeIntervalaboutMe, setStoreIntervalaboutMe] = useState();

    const increaseAnimationNumaboutMe = () => {
        setanimationNumaboutMe((animationNumaboutMe) => animationNumaboutMe + 0.05);
        if (animationNumaboutMe > 5000) setanimationNumaboutMe((animationNumaboutMe) => 0);
    };

    const onMouseOveraboutMe = () => {
        clearInterval(storeIntervalaboutMe);
        setStoreIntervalaboutMe(setInterval(increaseAnimationNumaboutMe, 1));
    };



    const [Contact, setContact] = useState(false);
    const [animationNumContact, setanimationNumContact] = useState(0);
    const [storeIntervalContact, setStoreIntervalContact] = useState();

    const increaseAnimationNumContact = () => {
        setanimationNumContact((animationNumContact) => animationNumContact + 0.05);
        if (animationNumContact > 5000) setanimationNumContact((animationNumContact) => 0);
    };

    const onMouseOverContact = () => {
        clearInterval(storeIntervalContact);
        setStoreIntervalContact(setInterval(increaseAnimationNumContact, 1));
    };


    return (
        <main className="modernBackground">
            <Head>
                <link rel="icon" href="Logo.png" />
                <meta name="description" content="Porfolio de horacio Albornoz" />
                <title>{TitlePage}</title>
            </Head>


            <div className="content">
                <header className="modern" style={Project ? { border: 'none' } : (aboutMe ? { border: 'none' } : (Contact ? { border: 'none' } : {}))}>
                    HORACIO
                </header>
                <div className={`conteinerMainProject ${Project ? 'Open' : ''} ${aboutMe ? 'Desactive' : ''} ${Contact ? 'Desactive' : ''}`}>
                    <div className={`conteinerProject ${Project ? 'Open' : ''} ${aboutMe ? 'Desactive' : ''} ${Contact ? 'Desactive' : ''}`}
                        onMouseOver={
                            () => {
                                if (!isMobile) {
                                    Project ? () => { clearInterval(storeIntervalProject); } : onMouseOverProject()
                                }
                            }}
                        onMouseOut={() => {
                            if (!isMobile) {
                                if (animationNumProject > 7500) setanimationNumProject((animationNumProject) => 0);
                                clearInterval(storeIntervalProject);
                            }
                        }}
                        onClick={() => {
                            if (!isMobile) {
                                setProject(true)
                            } else {
                                setProject(true)
                                onMouseOverProject()
                            }
                        }}
                    >
                        <div className="titleProject">
                            <AnimationScrollProject animationNumProject={animationNumProject} />
                        </div>
                    </div>
                    <div className={`ProjectContent ${Project ? 'Open' : ''}`}>
                        <div className="btnBack">
                            <div className="TextBtnBack" onClick={() => {
                                if (!isMobile) {
                                    setProject(false)
                                } else {
                                    setProject(false)
                                    clearInterval(storeIntervalProject);
                                }
                            }}>VOLVER</div>
                        </div>
                        <ProjectContent />

                    </div>
                </div>

                <div className={`conteinerMainProject ${Project ? 'Desactive' : ''} ${aboutMe ? 'Open' : ''} ${Contact ? 'Desactive' : ''}`}>

                    <div className={`conteinerProject ${Project ? 'Desactive' : ''} ${aboutMe ? 'Open' : ''} ${Contact ? 'Desactive' : ''}`}>
                        <div className="titleProject"
                            onMouseOver={
                                () => {
                                    if (!isMobile) {
                                        aboutMe ? () => { clearInterval(storeIntervalaboutMe); } : onMouseOveraboutMe()
                                    }
                                }
                            }
                            onMouseOut={() => {
                                if (!isMobile) {
                                    if (animationNumaboutMe > 7500) setanimationNumaboutMe((animationNumaboutMe) => 0);
                                    clearInterval(storeIntervalaboutMe);
                                }
                            }}
                            onClick={() => {
                                if (!isMobile) {
                                    setaboutMe(true)
                                } else {
                                    setaboutMe(true)
                                    onMouseOveraboutMe()
                                }
                            }}
                        >
                            <AnimationScrollAboutMe animationNumaboutMe={animationNumaboutMe} />
                        </div>
                    </div>
                    <div className={`ProjectContent ${aboutMe ? 'Open' : ''}`}>
                        <div className="btnBack">
                            <div className="TextBtnBack"
                                onClick={() => {
                                    if (!isMobile) {
                                        setaboutMe(false)
                                    } else {
                                        setaboutMe(false)
                                        clearInterval(storeIntervalaboutMe);
                                    }
                                }}
                            >VOLVER</div>
                        </div>
                        <AboutMeContent />
                    </div>
                </div>
                <div className={`conteinerMainProject ${Project ? 'Desactive' : ''} ${aboutMe ? 'Desactive' : ''} ${Contact ? 'Open' : ''}`}>

                    <div className={`conteinerProject ${Project ? 'Desactive' : ''} ${aboutMe ? 'Desactive' : ''} ${Contact ? 'Open' : ''}`}>
                        <div className="titleProject"
                            onMouseOver={
                                () => {
                                    if (!isMobile) {
                                        Contact ? () => { clearInterval(storeIntervalContact); } : onMouseOverContact()
                                    }
                                }
                            }
                            onMouseOut={() => {
                                if (!isMobile) {
                                    if (animationNumContact > 7500) setanimationNumContact((animationNumContact) => 0);
                                    clearInterval(storeIntervalContact);
                                }
                            }}
                            onClick={() => {
                                if (!isMobile) {
                                    setContact(true)
                                } else {
                                    setContact(true)
                                    onMouseOverContact()
                                }
                            }}
                        >
                            <AnimationScrollContact animationNumContact={animationNumContact} />
                        </div>
                    </div>
                    <div className={`ProjectContent ${Contact ? 'Open' : ''}`}>
                        <div className="btnBack">
                            <div className="TextBtnBack"
                                onClick={() => {
                                    if (!isMobile) {
                                        setContact(false)
                                    } else {
                                        setContact(false)
                                        clearInterval(storeIntervalContact);
                                    }
                                }}>VOLVER</div>
                        </div>
                        <ContactContent />
                    </div>
                </div>

            </div>
            <div className="AutoScrollAnimation">
                <AnimationScrollDev />
            </div>
        </main>



    )

}



export default Index;