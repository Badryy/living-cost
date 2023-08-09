// import global style
import '../styles/globals.css'
// pages/_app.js
import { Inter, Manrope, Poppins } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export const manrope = Manrope({ subsets: ['latin'] })
export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}