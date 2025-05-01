import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/common/footer";
import Navbar from "@/components/common/navbar";



export const metadata: Metadata = {
  title: "Techmasters Community",
  description: "Hackathon Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
