import type { Metadata } from "next";
import CustomThemeProvider from '@/app/components/ThemeProvider';
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio Analytics App",
  description: "Created by Keelan Donovan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
