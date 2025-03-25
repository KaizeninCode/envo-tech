import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "Envo Technologies",
  description:
    "A leading Technology and Engineering firm in the global south that provides integrated solutions in water, environment and renewable energy. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-manrope">
        <div className="relative z-20">
          <Navbar />
          <MobileNav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
