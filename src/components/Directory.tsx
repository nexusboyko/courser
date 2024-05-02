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
    }
  }

  return (
    <>
      {
        error && (
          <p className='text-center text-sm text-error m-5'>Error fetching directory: {error}</p>
        )
      }
      <input type="text" className='input input-bordered w-[45%] text-center' name="URL" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />

      <div className="flex">
        <button className='btn btn-sm btn-primary' onClick={async () => {
          // FIXME: Error handling
          setDir(await runCourserOnSourceURL(url))
        }} disabled={loading}>Crawl</button>

        <button className='btn btn-sm btn-warning'>Cancel</button>
      </div>

      <p className='m-5'>{loading ? 'Loading...' : ''}</p>

      <Collapsible dir={dir} />
    </>
  )
}

export default Directory