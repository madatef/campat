import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "CAMPAT | camping & hiking",
  description: "A camping and travelling app demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hide-scrollbar m-0 p-0">

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
