import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom-Clone",
  description: "Video Calling website",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout:{
          logoImageUrl: '/icons/yoom-logo.svg',
          socialButtonsVariant: 'iconButton'
        },
        variables: {
          colorBackground: '#1c1f2e',
          colorPrimary:'#0E78F9',
          colorText: '#fff',
          colorInputText:'#fff',
          colorInputBackground:'#252a41'
        }
      }}>
      <body className={`${inter.className}, bg-dark-2`}>
        {children}
        <Toaster />
      </body>
      </ClerkProvider>
    </html>
  );
}
