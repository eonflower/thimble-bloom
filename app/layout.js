import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Thimble Bloom Threads',
    description: 'Homemade clothing made with love and care.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
        </body>
        </html>
    )
}