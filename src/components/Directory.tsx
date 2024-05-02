'use client';
import React, { useEffect, useState } from 'react'
import Collapsible from './Collapsible';


interface DirectoryType {
  url?: string;
  [directoryName: string]: DirectoryType | File | string | undefined;
}

interface File {
  url: string;
}

interface DirectoryProps {
  dir: DirectoryType
}

export const requestDirectory = async (url: string) => {
  try {
    // const res = await 
    // return res

    console.log(url)

  } catch (error) {
    console.error('Error fetching directory:', error)

    throw error
  }
}

const Directory = (props: DirectoryProps) => {
  const [url, setUrl] = useState<string>("")
  const [crawled, setCrawled] = useState<boolean>(false)

  function clear() {
    setUrl("")
    setCrawled(false)
  }

  useEffect(() => {
    clear()
    setUrl('')
  }, [])

  return (
    <>
      <div>Directory</div>

      <Collapsible dir={props.dir} />

      <p>{crawled ? url : ''}</p>

      <input type="text" className='input input-bordered w-[45%] text-center' name="URL" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />

      <div className='flex gap-2 m-5'>
        <button className='btn btn-sm btn-primary' onClick={async () => {
          setCrawled(true)
          // crawl

        }}>Crawl</button>

        <button className={`btn btn-sm ${!crawled ? 'btn-disabled' : 'btn-primary'}`} onClick={() => {
          if (crawled) {
            // re-crawl

          } else {
            alert('Nothing to retry! Crawl first.')
          }
        }}>Retry</button>

        <button className='btn btn-sm btn-error' onClick={() => clear()}>Clear</button>
      </div>
    </>
  )
}

export default Directory