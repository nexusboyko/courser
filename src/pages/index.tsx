import React from 'react'
import Image from 'next/image'
import Directory from '@/components/Directory'
import { DirectoryType } from '@/types/types'

// using "courser5.js" 
const dir : DirectoryType = {
  "courses.cs.washington.edu": {
    "url": "https://courses.cs.washington.edu/",
    "courses": {
      "url": "https://courses.cs.washington.edu/courses/",
      "cse473": {
        "url": "https://courses.cs.washington.edu/courses/cse473/",
        "24sp": {
          "url": "https://courses.cs.washington.edu/courses/cse473/24sp/",
          "assignments": {
            "url": "https://courses.cs.washington.edu/courses/cse473/24sp/assignments/",
            "index.html": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/assignments/index.html"
            },
            "resources": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/assignments/resources/"
            }
          },
          "uwnetid": {
            "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/",
            "projectdesc": {
              "0": {
                "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/0/",
                "files": {
                  "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/0/files/",
                  "python_basics.zip": {
                    "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/0/files/python_basics.zip"
                  },
                  "tutorial.zip": {
                    "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/0/files/tutorial.zip"
                  }
                }
              },
              "1": {
                "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/1/"
              },
              "2": {
                "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/2/"
              },
              "3": {
                "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/3/"
              },
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/projectdesc/"
            },
            "homeworks": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/homeworks/",
              "hw2-csp.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/homeworks/hw2-csp.pdf"
              },
              "homework1.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/homeworks/homework1.pdf"
              }
            },
            "473Lecture17.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture17.pdf"
            },
            "473Lecture16.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture16.pdf"
            },
            "473Lecture15.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture15.pdf"
            },
            "473Lecture13-2.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture13-2.pdf"
            },
            "473Lecture13.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture13.pdf"
            },
            "473Lecture12.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture12.pdf"
            },
            "473Lecture11.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture11.pdf"
            },
            "473Lecture10.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture10.pdf"
            },
            "473Lecture9.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture9.pdf"
            },
            "473Lecture8.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture8.pdf"
            },
            "473Lecture5.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture5.pdf"
            },
            "473Lecture4-2.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture4-2.pdf"
            },
            "473Lecture4.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture4.pdf"
            },
            "473Lecture3.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture3.pdf"
            },
            "473Lecture2.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture2.pdf"
            },
            "473Lecture1.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/uwnetid/473Lecture1.pdf"
            }
          },
          "schedule": {
            "url": "https://courses.cs.washington.edu/courses/cse473/24sp/schedule/",
            "index.hmtl": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/schedule/index.hmtl"
            }
          },
          "resource": {
            "url": "https://courses.cs.washington.edu/courses/cse473/24sp/resource/",
            "index.html": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/resource/index.html"
            }
          },
          "resources": {
            "url": "https://courses.cs.washington.edu/courses/cse473/24sp/resources/",
            "resources": {
              "url": "https://courses.cs.washington.edu/courses/cse473/24sp/resources/resources/"
            }
          }
        }
      }
    }
  }
}

export default function Page() {
  return (
    <>
      <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <Image src="/courserSVG.svg" alt="courser" width={100} height={100} />

        <h1 className='text-6xl text-[#8B99D6] font-bold'>courser</h1>

        <Directory dir={dir}/>

      </div>
    </>
  )
}