import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: '500'
})

export const metadata = {
  title: 'Note Taker',
  description: 'Note Taker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
