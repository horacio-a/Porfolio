interface Es {
    Introduction: string;
    Tecnologia: {
      name: string;
      color: string;
      textColor: string;
      Img: string;
      size: string;
    }[];
  }
  
  interface En {
    Introduction: string;
    Tecnologia: {
      name: string;
      color: string;
      textColor: string;
      Img: string;
      size: string;
    }[];
  }
  interface ObjetoPrincipal {
    Es: Es;
    En: En;
  }


export const MeText:ObjetoPrincipal = {
  Es: {
    Introduction:
      "Hola, soy un programador con experiencia en tecnologías como React, Node.js y JavaScript. Me especializo en el desarrollo de aplicaciones web y móviles, creando interfaces interactivas en React y APIs robustas en Node.js. Soy versátil y rápido aprendiendo nuevas tecnologías. ¡Contáctame para proyectos desafiantes y colaboraciones innovadoras!",
      Tecnologia: [
        {name:"React.js", color:'#3e8ed0', textColor: '#fff',Img: 'imgs/tecnologias/React-icon.svg', size: '50%'},
        {name:"Next.js", color:'black', textColor: '#fff',  Img: 'imgs/tecnologias/logo-vercel-svgrepo-com.svg', size: '25%'},
        {name:"Node.js", color:'#3c873a', textColor: '#fff', Img: 'imgs/tecnologias/nodejs-icon.svg', size: '50%'},
        {name:"React Native", color:'#3e8ed0', textColor: '#fff', Img: 'imgs/tecnologias/React-icon.svg', size: '50%'},
        {name:"Git", color:'#413000', textColor: '#fff', Img: 'imgs/tecnologias/Git_icon.svg', size: '50%'},
        {name:"Javascript", color:'#f7df1e', textColor: '#000', Img: 'imgs/tecnologias/Unofficial_JavaScript_logo_2.svg', size: '50%'},
        {name:"Tailwind", color:'#161D2D', textColor: '#fff', Img: 'imgs/tecnologias/Tailwind_CSS_Logo.svg', size: '50%'},
        {name:"Python", color:'white', textColor: '#000', Img: 'imgs/tecnologias/Python-logo-notext.svg', size: '50%'},
        {name:"Mysql", color:'white', textColor: '#000', Img: 'imgs/tecnologias/msql.svg', size: '50%'},
        {name:"NoSql", color:'white', textColor: '#000', Img: 'imgs/tecnologias/firebase.svg', size: '50%'},
      ],
  },
  En: {
    Introduction: `Hi, I'm a programmer with experience in technologies like React, Node.js and JavaScript. I specialize in web and mobile application development, creating interactive interfaces in React and robust APIs in Node.js. I'm versatile and quick to learn new technologies - contact me for challenging projects and innovative collaborations!`,
    Tecnologia: [
      {name:"React.js", color:'#3e8ed0', textColor: '#fff',Img: 'imgs/tecnologias/React-icon.svg', size: '50%'},
      {name:"Next.js", color:'black', textColor: '#fff',  Img: 'imgs/tecnologias/logo-vercel-svgrepo-com.svg', size: '35%'},
      {name:"Node.js", color:'#3c873a', textColor: '#fff', Img: 'imgs/tecnologias/nodejs-icon.svg', size: '50%'},
      {name:"React Native", color:'#3e8ed0', textColor: '#fff', Img: 'imgs/tecnologias/React-icon.svg', size: '40%'},
      {name:"Git", color:'#413000', textColor: '#fff', Img: 'imgs/tecnologias/Git_icon.svg', size: '60%'},
      {name:"Javascript", color:'#f7df1e', textColor: '#000', Img: 'imgs/tecnologias/Unofficial_JavaScript_logo_2.svg', size: '50%'},
      {name:"Tailwind", color:'#161D2D', textColor: '#fff', Img: 'imgs/tecnologias/Tailwind_CSS_Logo.svg', size: '30%'},
      {name:"Python", color:'white', textColor: '#000', Img: 'imgs/tecnologias/Python-logo-notext.svg', size: '60%'},
      {name:"Mysql", color:'white', textColor: '#000', Img: 'imgs/tecnologias/msql.svg', size: '75%'},
      {name:"NoSql", color:'white', textColor: '#000', Img: 'imgs/tecnologias/firebase.svg', size: '50%'},
    ],
  },
};
