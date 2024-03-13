import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "HORACIO DEV - Desarrollador Web Creativo",
  description:
    "Explora el mundo digital a través de mis ojos creativos. Soy Horacio, un apasionado desarrollador web, transformando ideas en experiencias cautivadoras. Descubre la fusión de código y creatividad en cada proyecto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.horacio-dev.com.ar/" />
      <meta
        property="og:title"
        content="HORACIO DEV - Desarrollador Web Creativo"
      />
      <meta
        property="og:description"
        content="Explora el mundo digital a través de mis ojos creativos. Soy Horacio, un apasionado desarrollador web, transformando ideas en experiencias cautivadoras. Descubre la fusión de código y creatividad en cada proyecto "
      />
      <meta
        property="og:image"
        content="https://res-console.cloudinary.com/dioe9ktns/media_explorer_thumbnails/0d7e8482bdbf6fc4575575dba6a22acb/detailed"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.horacio-dev.com.ar/" />
      <meta
        property="twitter:title"
        content="HORACIO DEV - Desarrollador Web Creativo"
      />
      <meta
        property="twitter:description"
        content="Explora el mundo digital a través de mis ojos creativos. Soy Horacio, un apasionado desarrollador web, transformando ideas en experiencias cautivadoras. Descubre la fusión de código y creatividad en cada proyecto "
      />
      <meta
        property="twitter:image"
        content="https://res-console.cloudinary.com/dioe9ktns/media_explorer_thumbnails/0d7e8482bdbf6fc4575575dba6a22acb/detailed"
      />
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
