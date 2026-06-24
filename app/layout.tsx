import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Navaneeth K Unni | Panacea Homoeo Clinic",
  description:
    "Experience the gentle healing power of classical homoeopathy with Dr. Navaneeth K Unni at Panacea Homoeo Clinic. 4 decades of legacy, 3 branches in Kerala.",
  keywords: "homoeopathy, homeo, homeo doctor, homeo doctor thrissur, homeo clinic thrissur, homoeo doctor, natural medicine, holistic healing, Dr. Navaneeth K Unni, Panacea Homoeo Clinic, classical homoeopathy",
  openGraph: {
    title: "Dr. Navaneeth K Unni | Panacea Homoeo Clinic",
    description: "Gentle healing through the science of classical homoeopathy with 4 decades of legacy.",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
