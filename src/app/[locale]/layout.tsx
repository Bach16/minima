import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minima",
  description: "Minima web studio",
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
      <body className={`${inter.className} bg-black max-w-[200rem] h-auto`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
