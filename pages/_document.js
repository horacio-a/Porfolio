import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <title>HORACIO DEV - Desarrollador Web Creativo</title>
      <link rel="icon" href="Logo.png" />

      <meta name="title" content="HORACIO DEV - Desarrollador Web Creativo" />
      <meta name="description" content="Explora el mundo digital a través de mis ojos creativos. Soy Horacio, un apasionado desarrollador web, transformando ideas en experiencias cautivadoras. Descubre la fusión de código y creatividad en cada proyecto " />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.horacio-dev.com.ar/" />
      <meta property="og:title" content="HORACIO DEV - Desarrollador Web Creativo" />
      <meta property="og:description" content="Explora el mundo digital a través de mis ojos creativos. Soy Horacio, un apasionado desarrollador web, transformando ideas en experiencias cautivadoras. Descubre la fusión de código y creatividad en cada proyecto " />
      <meta property="og:image" content="https://res-console.cloudinary.com/dioe9ktns/media_explorer_thumbnails/0d7e8482bdbf6fc4575575dba6a22acb/detailed" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.horacio-dev.com.ar/" />
      <meta property="twitter:title" content="HORACIO DEV - Desarrollador Web Creativo" />
      <meta property="twitter:description" content="Explora el mundo digital a través de mis ojos creativos. Soy Horacio, un apasionado desarrollador web, transformando ideas en experiencias cautivadoras. Descubre la fusión de código y creatividad en cada proyecto " />
      <meta property="twitter:image" content="https://res-console.cloudinary.com/dioe9ktns/media_explorer_thumbnails/0d7e8482bdbf6fc4575575dba6a22acb/detailed" />

      <body data-np-watching="1" data-np-autofill-form-type="other" data-np-checked="1">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
