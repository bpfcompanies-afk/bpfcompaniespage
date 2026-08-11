import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppBtn from "../components/WhatsAppBtn";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'BpfCompanies', // Ejemplo: TechSolutions | Desarrollo Web Rápido
  description: 'Ayudamos a empresas a escalar con tecnología...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppBtn />
        <Footer/>
        </body>
    </html>
  )
}
