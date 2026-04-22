export const metadata = {
  title: 'GoodValues',
  description: 'Rate companies based on ethics and trust'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
