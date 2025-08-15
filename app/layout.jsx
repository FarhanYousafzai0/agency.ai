import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Manrope
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can include any weights you need
});

export const metadata = {
  title: "Agency.ai",
  description: "AI-powered automation, chatbots, and smart business solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} ${manrope.variable} antialiased`}
      >
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
