'use client'
import './globals.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/layout/layout.scss';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Go CRM</title>
      </head>
      <body className={inter.className}>
        <RecoilRoot >
          <PrimeReactProvider>
            <LayoutProvider>
              {children}
            </LayoutProvider>
          </PrimeReactProvider>
        </RecoilRoot>
      </body>
    </html>
  )
}
