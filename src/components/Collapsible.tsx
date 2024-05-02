import React from 'react'


interface DirectoryType {
  url?: string;
  [directoryName: string]: DirectoryType | File | string | undefined;
}

interface File {
  url: string;
}

const Collapsible = (dir: DirectoryType) => {
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
                    {/* {`<file>`} {key}: {item.url} */}
                    <a href={item.url} target='_blank'>{key}</a>
                  </li>
                ) : (
                  <li className='section'>
                    {/* {`<dir>`} {key}: {item.url} */}
                    <input type="checkbox" id={key} />
                    <label htmlFor={key}>📂 {key}</label>
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
    <div className='m-4 w-[45%] h-[45%] overflow-scroll'>
      <ul className='h-fit tree text-xl'>
        {renderDirectory(dir, 0)}
      </ul>
    </div>
  )
}

export default Collapsible;