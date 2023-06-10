import './globals.css'

export const metadata = {
  title: 'StarRail info',
  description: 'Visualizar as informações do perfil do usuario e seus principais personagens a partir do seu ID de jogador.',
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
