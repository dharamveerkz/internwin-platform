import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "InternWin – Win Your Career",
    template: "%s | InternWin",
  },
  description: "Verified internships with industry projects, mentor guidance, and ABC Bank credits. Build your career with confidence.",
  metadataBase: new URL("https://internwin.com"),
  keywords: ["internships", "career", "certificates", "skills", "placements"],
  authors: [{ name: "InternWin Platform" }],
  creator: "InternWin",
  publisher: "InternWin Platform",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://internwin.com",
    title: "InternWin – Win Your Career",
    description: "Hands-on internships. Verified certificates. Real career outcomes.",
    siteName: "InternWin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InternWin Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InternWin – Win Your Career",
    description: "Hands-on internships. Verified certificates. Real career outcomes.",
    images: ["/og-image.jpg"],
    creator: "@internwin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} font-dm antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
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