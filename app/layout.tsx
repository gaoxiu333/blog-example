import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.css';

import { PageHeader } from "@/components/PageHeader";
import { Providers } from "@/components/Provider";
import { PageFooter } from "@/components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Example",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <PageHeader className="sticky top-0" />
            <main className="flex-1">{children}</main>
            <PageFooter className="flex-none" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
