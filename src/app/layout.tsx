import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "HaorGrix | Build. Automate. Optimize. Scale.",
  description: "Intelligent Systems & Digital Products for Modern Enterprises. AI, Software, Data & Growth solutions from Dhaka, Bangladesh.",
  openGraph: {
    title: "HaorGrix | Build. Automate. Optimize. Scale.",
    description: "Intelligent Systems & Digital Products for Modern Enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} ${jetbrains.variable} font-sans antialiased bg-art-midnight`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
