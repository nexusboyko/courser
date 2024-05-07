import React from 'react'
import Image from 'next/image'
import Directory from '@/components/Directory'

export default function Page() {
  return (
    <>
      <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <Image src="/courserSVG.svg" alt="courser" width={100} height={100} className='' />

        <h1 className='text-6xl mb-2 text-[#8B99D6] font-semibold'>courser</h1>
        <p className='text-2xl text-[#8B99D6] mb-3'>Organize your courses, find what you need.</p>

        <Directory />

      </div>
    </>
  )
}