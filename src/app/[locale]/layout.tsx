import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Script from "next/script";
import image from "../../../public/def.png"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase:new URL("https://minima-mauve.vercel.app"),
  keywords:["web development","desarrollo web","diseño web",],
  title: "Minima",
  openGraph:{
    description: "Minima web studio",
    images: image.src
  },
  icons: {
    icon: "/favicon.png",
  },
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "en" | "es";
  };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R51DX82E18"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R51DX82E18');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black max-w-[200rem] h-auto`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
