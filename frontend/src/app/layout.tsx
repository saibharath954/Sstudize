import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font=Rethink_Sans({
  weight:['400','500','600','700','800'],
  subsets:["latin"],
})

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
  description: "Sstudize website for students using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <div className='flex flex-col h-screen'>
          <ResponsiveNav />
          <main className='flex-1 p-4'>
            {children}
          </main>
          <footer className='bg-gray-800 text-white p-4 text-2xl'>
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
