import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "كالوري بوست | Calorie Boost",
  description: "تهتم بتوفير كل ما هو مفيد للجسم وذو قيمة غذائية عالية - عسل، مكسرات، شوفان، ومنتجات عضوية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="ar"
      className={`${tajawal.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
