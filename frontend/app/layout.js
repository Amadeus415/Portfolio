import './globals.css'

export const metadata = {
  title: 'Amadeus Colenbrander - Portfolio',
  description: 'Portfolio of Amadeus Colenbrander',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}