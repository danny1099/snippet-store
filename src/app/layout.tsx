import type { Metadata } from "next";
import "@/globals.css";

interface Props extends Children {
  params: { lang: string }
} 

export default function RootLayout({ children, params: { lang } }: Readonly<Props>) {
  return (
    <html lang={lang}>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Home | Snippet Store",
  description: "Store all your snippets for all languages",
};