import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xilie - Spotify Control for VS Code | Music in your IDE",
  description:
    "Control Spotify seamlessly within VS Code and compatible " +
    "IDEs. Browse playlists, search music, and manage playback without leaving your editor.",
  keywords: [
    "VS Code",
    "Spotify",
    "extension",
    "music",
    "IDE",
    "developer tools",
  ],
  authors: [
    { name: "David MANZI - d3fault", url: "https://github.com/DavidMANZi-093" },
  ],
  openGraph: {
    title: "Xilie - Spotify Control for VS Code",
    description:
      "Control Spotify seamlessly within VS Code and compatible IDEs.",
    type: "website",
    images: [""], // TODO: Add images,
    siteName: "Xilie - Spotify Control for VS Code",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xilie - Spotify Control for VS Code",
    description:
      "Control Spotify seamlessly within VS Code and compatible IDEs.",
    images: [""], // TODO: Add images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
