import { Geist, Geist_Mono } from "next/font/google";
import styles from "./globals.css";
import Header from "./components/navbar/Header.js";
import Footer from "./components/Footer.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Richard's Portfolio",
  description: "Portfolio containing some of the projects I have worked on inside and outside of my education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div>
          {children}
        </div>
        {/*<Footer />*/}
      </body>
    </html>
  );
}
