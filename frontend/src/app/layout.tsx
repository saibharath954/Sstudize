import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
//  subsets: ["latin"],
//});

export const metadata: Metadata = {
  title: "Sstudize",
  description: "Sstudize website for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="flex flex-col h-screen">
          <ResponsiveNav />
          <main className="anitialised flex-1 p-4">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
