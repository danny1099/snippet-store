import type { Metadata } from 'next'
import '@/globals.css'

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Home | Snippet Store",
  description: "Store all your snippets for all languages",
};