import React, { useState, useEffect } from "react";
import Link from "next/link";

const HeaderSpace = ({CursorChange, cursorState}) => {

    const [headerState, setHeaderState] = useState(false)

    const openHeader = () =>{
        if(headerState === false){
            setHeaderState(true)
        }else{
            setHeaderState(false)
        }
    }



    useEffect(() => {

        const tracker = document.querySelector(".tracker");
        const tracker2 = document.querySelector(".tracker2");


        document.body.addEventListener("mousemove", e => {
            tracker2.style.left = `${e.clientX}px`;
            tracker2.style.top = `${e.clientY}px`;
        });
        document.body.addEventListener("mousemove", e => {
            tracker.style.left = `${e.clientX}px`;
            tracker.style.top = `${e.clientY}px`;
        });

    }, [])




    return (
        <>
            <div className="planetas-back">
                <img src="/imagenes/space/marte.png" alt="" className="martes" />
                <img src="/imagenes/space/moon.png" alt="" className="moon" />
                <img src="/imagenes/space/planeta.png" alt="" className="planeta" />
            </div>
            <div className={`tracker ${cursorState[1] ? '' : 'hidden'}`}>
                <svg viewBox="0 0 482 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="241.5" cy="348" rx="88.5" ry="39" fill="#FF5023" />
                    <circle cx="241.5" cy="40" r="40" fill="#FF5023" />
                    <rect x="221.5" y="74" width="42" height="16" fill="#FF5023" />
                    <path
                        d="M121.728 198.5C139.538 158.541 184.695 123.5 241.75 123.5C298.893 123.5 344.268 158.589 362.197 198.5H361.946H361.286H360.63H359.979H359.333H358.691H358.054H357.422H356.794H356.171H355.552H354.937H354.328H353.722H353.121H352.525H351.933H351.345H350.762H350.183H349.608H349.038H348.472H347.91H347.353H346.799H346.25H345.706H345.165H344.628H344.096H343.568H343.044H342.524H342.008H341.496H340.988H340.484H339.984H339.488H338.996H338.508H338.024H337.544H337.067H336.595H336.126H335.661H335.2H334.742H334.289H333.839H333.393H332.95H332.511H332.076H331.645H331.217H330.793H330.372H329.955H329.541H329.131H328.724H328.321H327.922H327.525H327.133H326.743H326.357H325.975H325.595H325.219H324.847H324.477H324.111H323.748H323.388H323.032H322.679H322.329H321.982H321.638H321.297H320.96H320.625H320.294H319.965H319.64H319.317H318.998H318.681H318.368H318.057H317.749H317.444H317.142H316.843H316.547H316.253H315.962H315.674H315.389H315.106H314.827H314.549H314.275H314.003H313.734H313.467H313.203H312.942H312.683H312.426H312.172H311.921H311.672H311.425H311.181H310.94H310.7H310.464H310.229H309.997H309.767H309.539H309.314H309.091H308.87H308.651H308.435H308.221H308.009H307.799H307.591H307.385H307.181H306.98H306.78H306.583H306.387H306.194H306.002H305.813H305.625H305.439H305.255H305.073H304.893H304.715H304.538H304.363H304.19H304.019H303.849H303.682H303.516H303.351H303.188H303.027H302.868H302.71H302.553H302.398H302.245H302.093H301.943H301.794H301.647H301.501H301.357H301.214H301.072H300.932H300.793H300.655H300.519H300.384H300.25H300.117H299.986H299.856H299.727H299.599H299.472H299.347H299.222H299.099H298.977H298.856H298.736H298.616H298.498H298.381H298.265H298.15H298.035H297.922H297.809H297.697H297.587H297.476H297.367H297.259H297.151H297.044H296.938H296.832H296.727H296.623H296.519H296.416H296.314H296.212H296.111H296.01H295.91H295.81H295.711H295.613H295.514H295.416H295.319H295.222H295.125H295.029H294.933H294.837H294.742H294.647H294.552H294.458H294.363H294.269H294.175H294.081H293.987H293.894H293.8H293.707H293.614H293.52H293.427H293.334H293.24H293.147H293.054H292.96H292.866H292.773H292.679H292.585H292.491H292.396H292.302H292.207H292.112H292.017H291.921H291.825H291.729H291.632H291.535H291.438H291.34H291.242H291.143H291.044H290.945H290.845H290.744H290.643H290.541H290.439H290.336H290.232H290.128H290.023H289.918H289.812H289.705H289.597H289.489H289.38H289.27H289.159H289.047H288.935H288.821H288.707H288.592H288.476H288.359H288.241H288.122H288.002H287.881H287.759H287.636H287.511H287.386H287.26H287.132H287.003H286.873H286.742H286.61H286.476H286.341H286.205H286.067H285.929H285.788H285.647H285.504H285.36H285.214H285.067H284.918H284.768H284.617H284.464H284.309H284.153H283.995H283.836H283.675H283.512H283.348H283.182H283.015H282.845H282.674H282.502H282.327H282.151H281.973H281.793H281.611H281.427H281.242H281.054H280.865H280.674H280.48H280.285H280.088H279.889H279.687H279.484H279.279H279.071H278.861H278.65H278.436H278.22H278.001H277.781H277.558H277.333H277.106H276.876H276.644H276.41H276.173H275.934H275.693H275.449H275.203H274.955H274.704H274.45H274.194H273.935H273.674H273.41H273.144H272.875H272.604H272.33H272.053H271.773H271.491H271.206H270.919H270.628H270.335H270.039H269.74H269.438H269.134H268.827H268.516H268.203H267.887H267.568H267.246H266.921H266.593H266.262H265.928H265.591H265.25H264.907H264.56H264.211H263.858H263.502H263.143H262.78H262.415H262.046H261.673H261.298H260.919H260.537H260.151H259.762H259.37H258.974H258.575H258.172H257.766H257.357H256.944H256.527H256.107H255.683H255.255H254.824H254.39H253.951H253.51H253.064H252.615H252.161H251.705H251.244H250.78H250.311H249.839H249.363H248.884H248.4H247.912H247.421H246.926H246.426H245.923H245.416H244.904H244.389H243.869H243.346H242.818H242.286H241.75H241.213H240.679H240.146H239.615H239.086H238.56H238.035H237.513H236.992H236.474H235.957H235.443H234.93H234.42H233.912H233.405H232.901H232.398H231.897H231.399H230.902H230.407H229.914H229.424H228.935H228.447H227.962H227.479H226.998H226.518H226.04H225.565H225.091H224.619H224.148H223.68H223.213H222.749H222.286H221.824H221.365H220.907H220.452H219.998H219.545H219.095H218.646H218.199H217.754H217.31H216.869H216.429H215.99H215.554H215.119H214.685H214.254H213.824H213.396H212.969H212.544H212.121H211.699H211.279H210.861H210.444H210.029H209.615H209.203H208.793H208.384H207.977H207.571H207.167H206.764H206.363H205.964H205.566H205.169H204.774H204.381H203.989H203.598H203.209H202.822H202.436H202.051H201.668H201.287H200.906H200.528H200.15H199.774H199.4H199.027H198.655H198.285H197.916H197.548H197.182H196.817H196.453H196.091H195.73H195.371H195.013H194.656H194.3H193.946H193.593H193.241H192.891H192.542H192.194H191.848H191.502H191.158H190.815H190.474H190.133H189.794H189.456H189.119H188.784H188.449H188.116H187.784H187.453H187.123H186.795H186.467H186.141H185.816H185.492H185.169H184.847H184.526H184.206H183.888H183.57H183.254H182.938H182.624H182.311H181.999H181.687H181.377H181.068H180.76H180.453H180.146H179.841H179.537H179.234H178.932H178.63H178.33H178.031H177.732H177.435H177.138H176.842H176.547H176.254H175.961H175.668H175.377H175.087H174.797H174.509H174.221H173.934H173.648H173.363H173.078H172.795H172.512H172.23H171.948H171.668H171.388H171.109H170.831H170.554H170.277H170.001H169.726H169.451H169.178H168.905H168.632H168.361H168.09H167.819H167.55H167.281H167.013H166.745H166.478H166.212H165.946H165.681H165.417H165.153H164.889H164.627H164.365H164.103H163.842H163.582H163.322H163.063H162.804H162.546H162.288H162.031H161.775H161.519H161.263H161.008H160.753H160.499H160.245H159.992H159.74H159.487H159.235H158.984H158.733H158.482H158.232H157.982H157.733H157.484H157.235H156.987H156.739H156.492H156.245H155.998H155.752H155.505H155.26H155.014H154.769H154.524H154.28H154.035H153.791H153.547H153.304H153.061H152.818H152.575H152.333H152.09H151.848H151.607H151.365H151.124H150.882H150.641H150.401H150.16H149.919H149.679H149.439H149.199H148.959H148.719H148.479H148.24H148H147.761H147.522H147.283H147.043H146.804H146.565H146.327H146.088H145.849H145.61H145.371H145.133H144.894H144.655H144.416H144.178H143.939H143.7H143.461H143.222H142.983H142.744H142.505H142.266H142.027H141.788H141.548H141.309H141.069H140.83H140.59H140.35H140.11H139.87H139.629H139.389H139.148H138.907H138.666H138.425H138.184H137.942H137.7H137.458H137.216H136.974H136.731H136.488H136.245H136.001H135.757H135.513H135.269H135.025H134.78H134.535H134.289H134.043H133.797H133.551H133.304H133.057H132.809H132.561H132.313H132.064H131.816H131.566H131.316H131.066H130.816H130.565H130.313H130.061H129.809H129.556H129.303H129.049H128.795H128.54H128.285H128.03H127.774H127.517H127.26H127.002H126.744H126.485H126.226H125.966H125.706H125.445H125.184H124.921H124.659H124.396H124.132H123.867H123.602H123.336H123.07H122.803H122.535H122.267H121.998H121.729H121.728Z"
                        stroke="#BFE4F8" strokeWidth="73" />
                    <path
                        d="M382.52 235C243.535 235 320.003 235 241.835 235C163.667 235 163.204 235 101.574 235C101.574 171.27 163.667 109 241.835 109C320.003 109 382.52 171.27 382.52 235Z"
                        fill="#404076" />
                    <path d="M0 285C0 257.386 22.3858 235 50 235H432C459.614 235 482 257.386 482 285V316H0V285Z"
                        fill="#5A8BB0" />
                    <circle cx="88" cy="275" r="20" fill="#FF9811" />
                    <circle cx="165" cy="275" r="20" fill="#FF9811" />
                    <circle cx="242" cy="274" r="20" fill="#FF9811" />
                    <circle cx="319" cy="275" r="20" fill="#FF9811" />
                    <circle cx="396" cy="274" r="20" fill="#FF9811" />
                    <rect x="77" y="316" width="330" height="32" fill="#1E2E3B" />
                    <rect x="191" y="185" width="100" height="50" fill="#1E2E3B" />
                    <rect x="208" y="165" width="67.8674" height="68" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use transform="scale(0.00195312 0.00194932)" />
                        </pattern>
                    </defs>
                </svg>
            </div>


            <div className={`tracker2 ${cursorState[2] ? '' : 'hidden'}`}>
                <svg viewBox="0 0 482 387" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse cx="241.5" cy="348" rx="88.5" ry="39" fill="#4BFF00" />
                    <circle cx="241.5" cy="40" r="40" fill="#4BFF00" />
                    <rect x="221.5" y="74" width="42" height="16" fill="#4BFF00" />
                    <path
                        d="M121.728 198.5C139.538 158.541 184.695 123.5 241.75 123.5C298.893 123.5 344.268 158.589 362.197 198.5H361.946H361.286H360.63H359.979H359.333H358.691H358.054H357.422H356.794H356.171H355.552H354.937H354.328H353.722H353.121H352.525H351.933H351.345H350.762H350.183H349.608H349.038H348.472H347.91H347.353H346.799H346.25H345.706H345.165H344.628H344.096H343.568H343.044H342.524H342.008H341.496H340.988H340.484H339.984H339.488H338.996H338.508H338.024H337.544H337.067H336.595H336.126H335.661H335.2H334.742H334.289H333.839H333.393H332.95H332.511H332.076H331.645H331.217H330.793H330.372H329.955H329.541H329.131H328.724H328.321H327.922H327.525H327.133H326.743H326.357H325.975H325.595H325.219H324.847H324.477H324.111H323.748H323.388H323.032H322.679H322.329H321.982H321.638H321.297H320.96H320.625H320.294H319.965H319.64H319.317H318.998H318.681H318.368H318.057H317.749H317.444H317.142H316.843H316.547H316.253H315.962H315.674H315.389H315.106H314.827H314.549H314.275H314.003H313.734H313.467H313.203H312.942H312.683H312.426H312.172H311.921H311.672H311.425H311.181H310.94H310.7H310.464H310.229H309.997H309.767H309.539H309.314H309.091H308.87H308.651H308.435H308.221H308.009H307.799H307.591H307.385H307.181H306.98H306.78H306.583H306.387H306.194H306.002H305.813H305.625H305.439H305.255H305.073H304.893H304.715H304.538H304.363H304.19H304.019H303.849H303.682H303.516H303.351H303.188H303.027H302.868H302.71H302.553H302.398H302.245H302.093H301.943H301.794H301.647H301.501H301.357H301.214H301.072H300.932H300.793H300.655H300.519H300.384H300.25H300.117H299.986H299.856H299.727H299.599H299.472H299.347H299.222H299.099H298.977H298.856H298.736H298.616H298.498H298.381H298.265H298.15H298.035H297.922H297.809H297.697H297.587H297.476H297.367H297.259H297.151H297.044H296.938H296.832H296.727H296.623H296.519H296.416H296.314H296.212H296.111H296.01H295.91H295.81H295.711H295.613H295.514H295.416H295.319H295.222H295.125H295.029H294.933H294.837H294.742H294.647H294.552H294.458H294.363H294.269H294.175H294.081H293.987H293.894H293.8H293.707H293.614H293.52H293.427H293.334H293.24H293.147H293.054H292.96H292.866H292.773H292.679H292.585H292.491H292.396H292.302H292.207H292.112H292.017H291.921H291.825H291.729H291.632H291.535H291.438H291.34H291.242H291.143H291.044H290.945H290.845H290.744H290.643H290.541H290.439H290.336H290.232H290.128H290.023H289.918H289.812H289.705H289.597H289.489H289.38H289.27H289.159H289.047H288.935H288.821H288.707H288.592H288.476H288.359H288.241H288.122H288.002H287.881H287.759H287.636H287.511H287.386H287.26H287.132H287.003H286.873H286.742H286.61H286.476H286.341H286.205H286.067H285.929H285.788H285.647H285.504H285.36H285.214H285.067H284.918H284.768H284.617H284.464H284.309H284.153H283.995H283.836H283.675H283.512H283.348H283.182H283.015H282.845H282.674H282.502H282.327H282.151H281.973H281.793H281.611H281.427H281.242H281.054H280.865H280.674H280.48H280.285H280.088H279.889H279.687H279.484H279.279H279.071H278.861H278.65H278.436H278.22H278.001H277.781H277.558H277.333H277.106H276.876H276.644H276.41H276.173H275.934H275.693H275.449H275.203H274.955H274.704H274.45H274.194H273.935H273.674H273.41H273.144H272.875H272.604H272.33H272.053H271.773H271.491H271.206H270.919H270.628H270.335H270.039H269.74H269.438H269.134H268.827H268.516H268.203H267.887H267.568H267.246H266.921H266.593H266.262H265.928H265.591H265.25H264.907H264.56H264.211H263.858H263.502H263.143H262.78H262.415H262.046H261.673H261.298H260.919H260.537H260.151H259.762H259.37H258.974H258.575H258.172H257.766H257.357H256.944H256.527H256.107H255.683H255.255H254.824H254.39H253.951H253.51H253.064H252.615H252.161H251.705H251.244H250.78H250.311H249.839H249.363H248.884H248.4H247.912H247.421H246.926H246.426H245.923H245.416H244.904H244.389H243.869H243.346H242.818H242.286H241.75H241.213H240.679H240.146H239.615H239.086H238.56H238.035H237.513H236.992H236.474H235.957H235.443H234.93H234.42H233.912H233.405H232.901H232.398H231.897H231.399H230.902H230.407H229.914H229.424H228.935H228.447H227.962H227.479H226.998H226.518H226.04H225.565H225.091H224.619H224.148H223.68H223.213H222.749H222.286H221.824H221.365H220.907H220.452H219.998H219.545H219.095H218.646H218.199H217.754H217.31H216.869H216.429H215.99H215.554H215.119H214.685H214.254H213.824H213.396H212.969H212.544H212.121H211.699H211.279H210.861H210.444H210.029H209.615H209.203H208.793H208.384H207.977H207.571H207.167H206.764H206.363H205.964H205.566H205.169H204.774H204.381H203.989H203.598H203.209H202.822H202.436H202.051H201.668H201.287H200.906H200.528H200.15H199.774H199.4H199.027H198.655H198.285H197.916H197.548H197.182H196.817H196.453H196.091H195.73H195.371H195.013H194.656H194.3H193.946H193.593H193.241H192.891H192.542H192.194H191.848H191.502H191.158H190.815H190.474H190.133H189.794H189.456H189.119H188.784H188.449H188.116H187.784H187.453H187.123H186.795H186.467H186.141H185.816H185.492H185.169H184.847H184.526H184.206H183.888H183.57H183.254H182.938H182.624H182.311H181.999H181.687H181.377H181.068H180.76H180.453H180.146H179.841H179.537H179.234H178.932H178.63H178.33H178.031H177.732H177.435H177.138H176.842H176.547H176.254H175.961H175.668H175.377H175.087H174.797H174.509H174.221H173.934H173.648H173.363H173.078H172.795H172.512H172.23H171.948H171.668H171.388H171.109H170.831H170.554H170.277H170.001H169.726H169.451H169.178H168.905H168.632H168.361H168.09H167.819H167.55H167.281H167.013H166.745H166.478H166.212H165.946H165.681H165.417H165.153H164.889H164.627H164.365H164.103H163.842H163.582H163.322H163.063H162.804H162.546H162.288H162.031H161.775H161.519H161.263H161.008H160.753H160.499H160.245H159.992H159.74H159.487H159.235H158.984H158.733H158.482H158.232H157.982H157.733H157.484H157.235H156.987H156.739H156.492H156.245H155.998H155.752H155.505H155.26H155.014H154.769H154.524H154.28H154.035H153.791H153.547H153.304H153.061H152.818H152.575H152.333H152.09H151.848H151.607H151.365H151.124H150.882H150.641H150.401H150.16H149.919H149.679H149.439H149.199H148.959H148.719H148.479H148.24H148H147.761H147.522H147.283H147.043H146.804H146.565H146.327H146.088H145.849H145.61H145.371H145.133H144.894H144.655H144.416H144.178H143.939H143.7H143.461H143.222H142.983H142.744H142.505H142.266H142.027H141.788H141.548H141.309H141.069H140.83H140.59H140.35H140.11H139.87H139.629H139.389H139.148H138.907H138.666H138.425H138.184H137.942H137.7H137.458H137.216H136.974H136.731H136.488H136.245H136.001H135.757H135.513H135.269H135.025H134.78H134.535H134.289H134.043H133.797H133.551H133.304H133.057H132.809H132.561H132.313H132.064H131.816H131.566H131.316H131.066H130.816H130.565H130.313H130.061H129.809H129.556H129.303H129.049H128.795H128.54H128.285H128.03H127.774H127.517H127.26H127.002H126.744H126.485H126.226H125.966H125.706H125.445H125.184H124.921H124.659H124.396H124.132H123.867H123.602H123.336H123.07H122.803H122.535H122.267H121.998H121.729H121.728Z"
                        stroke="#BFE4F8" strokeWidth="73" />
                    <path
                        d="M382.52 235C243.535 235 320.003 235 241.835 235C163.667 235 163.204 235 101.574 235C101.574 171.27 163.667 109 241.835 109C320.003 109 382.52 171.27 382.52 235Z"
                        fill="#404076" />
                    <path d="M0 285C0 257.386 22.3858 235 50 235H432C459.614 235 482 257.386 482 285V316H0V285Z"
                        fill="#5A8BB0" />
                    <circle cx="88" cy="275" r="20" fill="#4BFF00" />
                    <circle cx="165" cy="275" r="20" fill="#4BFF00" />
                    <circle cx="242" cy="274" r="20" fill="#4BFF00" />
                    <circle cx="319" cy="275" r="20" fill="#4BFF00" />
                    <circle cx="396" cy="274" r="20" fill="#4BFF00" />
                    <rect x="77" y="316" width="330" height="32" fill="#1E2E3B" />
                    <rect x="191" y="185" width="100" height="50" fill="#1E2E3B" />
                    <rect x="208" y="165" width="67.8674" height="68" fill="url(#pattern0)" />

                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use transform="scale(0.00195312 0.00194932)" />
                    </pattern>
                </svg>
            </div>
            <header className="header" id="header-movil">


                <button className="button" onClick={()=>{
                    openHeader()
                }} >
                    MENU
                </button>

                <nav className={`nav ${headerState ? 'activo' : ''}`}  >
                    <div className="item">
                        <Link href="/space" className="a">
                            <p>Inicio</p>
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/space/quiensoy" className="a">
                            <p>Quien soy</p>
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/space/proyectos" className="a">
                            <p>Mis Proyectos</p>
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/space/habilidades" className="a">
                            <p>Mis habilidades</p>
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/space/contacto" className="a">
                            <p>contactame aqui</p>
                        </Link>
                    </div>
                    <div className="itemOpciones">
                        <Link href="/estilos/eyes" className="conteiner-selectmodo">Cambia el estilo</Link>

                        <Link href="/estilos/" className="conteiner-selectmodo">Change to English</Link>

                    </div>

                </nav>
            </header>
        </>

    )

}

export default HeaderSpace;