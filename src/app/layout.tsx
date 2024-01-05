import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner"
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="relative h-full">
        <main className="flex flex-col min-h-screen relative">
          <Providers >
          <Navbar/>
          <div className="flex-grow flex-1">{children}</div>
          </Providers>
          <Toaster position="top-center" richColors />
        </main>
      </body>
    </html>
  );
}
