import React from 'react'
import { DirectoryType } from '@/types/types';


const Collapsible = (dir: DirectoryType) => {
  const renderDirectory = (directory: DirectoryType, indentLevel: number): JSX.Element[] => {
    const renderedItems: JSX.Element[] = [];

    for (const key in directory) {
        const item = directory[key];

        if (typeof item === 'object') {
            const isFile = Object.keys(item).filter(key => key !== 'url').length === 0;

            renderedItems.push(
                isFile ? (
                  <li key={key}>
                    {/* link to FILE */}
                    {'📄'}<a href={item.url} target='_blank'>{key}</a>
                  </li>
                ) : (
                  <li className='section' key={key}>
                    <input type="checkbox" className='folder-checkbox' id={key} />
                    {/* link to DIRECTORY */}
                    {' 📂'}<a href={item.url} target='_blank' className='italic opacity-50'>{key}</a>
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

  const top = Object.keys(dir)[0];
  const collapsible = renderDirectory(dir[top] as DirectoryType, 0);

  return (
    <div className='m-4 w-[45%] h-[55%] overflow-scroll'>
      <ul className='h-fit tree text-xl rounded-xl'>
        {collapsible.length === 0 ? <li className='text-center'>...</li> : collapsible}
      </ul>
    </div>
  )
}

export default Collapsible;