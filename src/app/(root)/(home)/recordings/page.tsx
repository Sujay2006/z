import React from 'react'
import CallList from '@/components/CallList'

const Recordings = () => {
  return (
    <section className='flex flex-col text-white gap-10 size-full'>
      <h1 className='text-3xl font-bold'>
        Recording
      </h1>
      <CallList type='recordings'/>
    </section>
  )
}

export default Recordings
