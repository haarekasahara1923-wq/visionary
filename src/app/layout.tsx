import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visionary Minds School, Pinto Park, Gwalior",
  description: "Official website of Visionary Minds School, Gayatri Vihar, Pinto Park, Gwalior (MP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

