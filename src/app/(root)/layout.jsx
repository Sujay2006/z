import React,{ReactNode} from 'react'
import StreamVideoProvider from '../../../provders/StreamClientProvider'

const RootLayout = ({children}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
