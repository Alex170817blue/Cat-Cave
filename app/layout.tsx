import "./globals.css";
import { Archivo_Black, JetBrains_Mono } from "next/font/google";
import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCat from "@/components/GuideCat";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({children}) {
  return (
    <html lang="it">
      <body
        className={`${archivoBlack.variable} ${jetbrainsMono.variable} relative bg-black text-white font-mono`}
      >
        <GridBackground />
        <Header />
        {children}
        <Footer />
        <GuideCat/>
      </body>
    </html>
  );
}