import './globals.css'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'], variable: '--font-fancy' })

export const metadata = {
  title: 'EduAi Summarizer',
  description: 'Smart summarizing with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  )
}
