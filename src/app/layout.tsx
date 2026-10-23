
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homayoun Khoshi | Software Developer",
  description:
    "Portfolio of Homayoun Khoshi, Full Stack Developer and Computing Science student at Simon Fraser University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0b1120] text-slate-100">
        {children}
      </body>
    </html>
  );
}
