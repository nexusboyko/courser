'use client';
import React, { useEffect, useState } from 'react'
import Collapsible from './Collapsible';
import { DirectoryType } from '@/types/types';

// TODO: Local storage for found dirs + Redux state?

const Directory = () => {
  const [dir, setDir] = useState<DirectoryType>({} as DirectoryType);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function clear() {
    setUrl("")
  }

  useEffect(() => {
    clear()
    setUrl('')
  }, [])

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }, [error]);

  const runCourserOnSourceURL = async (sourceURL: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/courser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: sourceURL,
        })
      })

      return res.json()
    } catch (error: Error | any) {
      console.error(error);

    } finally {
      setLoading(false)
      setUrl("");
    }
  }

  return (
    <>
      {
        error && (
          <p className='text-center text-sm text-error m-5'>Error fetching directory: {error}</p>
        )
      }

      <div className="flex w-[45%] justify-center items-center m-5">
        <input type="text" className='input w-[85%] input-bordered text-center' name="URL" 
            placeholder={loading ? 'Crawling...' : 'Copy the URL you\'d like to crawl here!'} id="url" value={url} onChange={(e) => setUrl(e.target.value)} />

      </div>

      <div className="flex gap-2">
        <button className='btn btn-md btn-outline btn-secondary' onClick={async () => {
          // FIXME: Error handling
          const source = url;
          setUrl("Crawling...");
          setDir(await runCourserOnSourceURL(source));
        }} disabled={loading}>Crawl</button>

        <button className='btn btn-md btn-outline btn-primary'>Cancel</button>
      </div>

      <Collapsible dir={dir} />

      {/* <p className='m-5 fade-up'>{loading ? 'Loading...' : ''}</p> */}
    </>
  )
}

export default Directory