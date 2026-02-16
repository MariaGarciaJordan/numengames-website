import type { Metadata } from "next";
import "./globals.css";

import { Geist, Libre_Baskerville } from "next/font/google";

import { ThemeProvider } from "@/context/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-heading"
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Numen Games",
  description: "Transforming work into a creative adventure"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geist.variable} ${baskerville.variable}`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
