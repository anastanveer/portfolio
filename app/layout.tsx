import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { MobileRailEffects } from "@/components/animations/MobileRailEffects";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, siteJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = pageMetadata({
  title: "Anas Tanveer | Full-Stack Laravel Developer Dubai",
  description:
    "Dubai web problem solver for Laravel, WordPress, Shopify, dashboards, APIs, ecommerce, speed and SEO-ready business systems.",
  path: "/"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = siteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="gllYNE1pcbGLwfP2PMahnrbVB6fcVfM0x0gbbsiBSCg" />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')}catch(e){}"
          }}
        />
      </head>
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <JsonLd data={jsonLd} id="site-json-ld" />
        <Providers>
          <ScrollProgress />
          <CursorGlow />
          <MobileRailEffects />
          <div className="pointer-events-none fixed inset-0 -z-10 grid-bg animate-grid opacity-70" />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
