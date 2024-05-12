import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from 'analytics'
import Script from 'next/script';
// @ts-ignore
import googleAnalytics from '@analytics/google-analytics'
import { Metadata } from "next";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juliana García",
  description: "End-to-end developer",
};

const analytics = Analytics({
  app: 'juliana-garcia',
  plugins: [
    googleAnalytics({
      trackingId: `${process.env.NEXT_PUBLIC_GA_ID}`,
      instanceName: 'julianagarcia.vercel.app'
    })
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  analytics.page()
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
    </>
  );
}
