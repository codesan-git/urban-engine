import { Providers } from '@/components/client/Providers/Providers.client';
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en' suppressHydrationWarning className='px-16 py-8'>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}