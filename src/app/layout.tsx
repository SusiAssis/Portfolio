import './global.css'
import { Sniglet } from 'next/font/google'

const sniglet = Sniglet({ subsets: ['latin'], weight:'400'})

export const metadata = {
  title: 'Susilane Assis',
  description: 'My portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={sniglet.className}>{children}</body>
    </html>
  )
}
