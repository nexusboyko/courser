import React from 'react'
import Image from 'next/image'
import Directory from '@/components/Directory'
import { DirectoryType } from '@/types/types'

export default function Page() {
  return (
    <>
      <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <Image src="/courserSVG.svg" alt="courser" width={100} height={100} />

        <h1 className='text-6xl text-[#8B99D6] font-bold'>courser</h1>

        <Directory />

      </div>
    </>
  )
}