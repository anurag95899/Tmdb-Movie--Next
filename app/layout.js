"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import {Provider} from 'react-redux'
import {store} from '@/store/store'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <Provider store={store} >
        <Navbar/>
        {children}
        </Provider>
        </body>
    </html>
  )
}
