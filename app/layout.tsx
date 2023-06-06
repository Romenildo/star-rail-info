import './globals.css'

export const metadata = {
  title: 'StarRail info',
  description: 'honkai star rail informações',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
