import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";  
import Container from "./container";
import { ReduxProvider } from "@/redux/provider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className}`} style={{ margin: 0 }}>
        <ReduxProvider>
      <Header/>
      <main>
        <Container>
            {children}
        </Container>
      </main>
      <Footer /> 
      </ReduxProvider>
      </body>
    </html>
  );
}
