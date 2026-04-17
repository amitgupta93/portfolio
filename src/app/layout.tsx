import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium 3D Developer Portfolio",
  description: "A futuristic 3D portfolio experience built with Next.js, Three.js, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-neon-blue selection:text-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "neon", "cyberpunk"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
