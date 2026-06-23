import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Navaneeth K Unni | Panecea Homeo Clinic",
  description:
    "Experience the gentle healing power of classical homeopathy with Dr. Navaneeth K Unni at Panecea Homeo Clinic. 4 decades of legacy, 3 branches in Kerala.",
  keywords: "homeopathy, homeo doctor, natural medicine, holistic healing, Dr. Navaneeth K Unni, Panecea Homeo Clinic, classical homeopathy",
  openGraph: {
    title: "Dr. Navaneeth K Unni | Panecea Homeo Clinic",
    description: "Gentle healing through the science of classical homeopathy with 4 decades of legacy.",
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
