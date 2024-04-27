import React, { useEffect, useState } from 'react'


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

const Dropdown = (dir: DirectoryType) => {
  const renderDirectory = (directory: DirectoryType, indentLevel: number): JSX.Element[] => {
    const renderedItems: JSX.Element[] = [];
    const indent = '__'.repeat(indentLevel);

    for (const key in directory) {
        const item = directory[key];

        if (typeof item === 'object') {
            const isFile = Object.keys(item).filter(key => key !== 'url').length === 0;

            renderedItems.push(
                // <div key={key}>
                //     <div>
                //         {indent}{isFile ? 'file' : 'dir'} {key}: {item.url}
                //     </div>
                //     {renderDirectory(item as DirectoryType, indentLevel + 1)}
                // </div>

                isFile ? (
                  <li key={key}>
                    {`<file>`} {key}: {item.url}
                  </li>
                ) : (
                  <li>
                    {`<dir>`} {key}: {item.url}
                    <ul>
                      {renderDirectory(item as DirectoryType, indentLevel + 1)}
                    </ul>
                  </li>
                )
            );
        }
    }

    return renderedItems;
  };

  return (
    <>
      <ul className='w-fit overflow-scroll directory-list'>
        {renderDirectory(dir, 0)}
      </ul>
    </>
  )
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
    setUrl("https://courses.cs.washington.edu/courses/cse333/24sp/")
  }, [])

  return (
    <>
      <div>Directory</div>

      <Dropdown dir={props.dir} />

      <p>{crawled ? url : ''}</p>

      <input type="text" className='input input-bordered w-[45%] text-center' name="URL" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      
      <div className='flex gap-2 m-5'>
        <button className='btn btn-sm btn-primary' onClick={async () => {
          setCrawled(true)
          // crawl

        }}>Crawl</button>

        <button className={`btn btn-sm ${!crawled ? 'btn-disabled' : 'btn-primary'}`} onClick={() => {
          if(crawled) {
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