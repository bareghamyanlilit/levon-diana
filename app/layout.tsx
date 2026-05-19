import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Լևոն և Դիանա",
  description: "Լևոն և Դիանա",
  openGraph: {
    title: "Լևոնի և Դիանայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://levon-diana.vercel.app",
    siteName: "Լևոն և Դիանա",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
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
      <body
        className="m-auto max-w-md text-[#000000CC] bg-white"
        style={{ whiteSpace: "pre-line" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
