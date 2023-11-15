import { Navbar } from '@/components/ui/Navbar/Navbar';
import ReduxProvider from '@/redux/ReduxProvider';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';


const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next eCommerce',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={mulish.className}>
        <MantineProvider>
          <ReduxProvider>
            <Navbar />
            <div className='container max-w-7xl mx-auto px-[2rem]'>
              {children}
            </div>
          </ReduxProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
