import { Toaster } from "react-hot-toast";
import { font } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          <Toaster />
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
