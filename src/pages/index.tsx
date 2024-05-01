import React from 'react'
import Image from 'next/image'
import Directory from '@/components/Directory'

interface DirectoryType {
  url?: string;
  [directoryName: string]: DirectoryType | File | string | undefined;
}

interface File {
  url: string;
}

const dir: DirectoryType = {
  "courses.cs.washington.edu": {
    "url": "https://courses.cs.washington.edu/",
    "courses": {
      "url": "https://courses.cs.washington.edu/courses/",
      "cse333": {
        "url": "https://courses.cs.washington.edu/courses/cse333/",
        "24sp": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/",
          "calendar": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/",
            "calendar.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar.html"
            },
            "subscribe.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/subscribe.html"
            },
            "sectionlist.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sectionlist.html"
            },
            "lecturelist.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lecturelist.html"
            },
            "lablist.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lablist.html"
            },
            "inputFiles": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/",
              "sections.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/sections.ini"
              },
              "schedule.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/schedule.ini"
              },
              "others.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/others.ini"
              },
              "ohs.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/ohs.ini"
              },
              "lectures.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/lectures.ini"
              },
              "labs.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/labs.ini"
              },
              "hws.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/hws.ini"
              },
              "holidays.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/holidays.ini"
              },
              "exams.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/exams.ini"
              },
              "config.ini": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/inputFiles/config.ini"
              }
            },
            "sections": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/",
              "sec05-worksheet-soln.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec05-worksheet-soln.pdf"
              },
              "sec05-worksheet.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec05-worksheet.pdf"
              },
              "sec05-slides.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec05-slides.pdf"
              },
              "sec04-worksheet-soln.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec04-worksheet-soln.pdf"
              },
              "sec04-worksheet.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec04-worksheet.pdf"
              },
              "sec04-slides.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec04-slides.pdf"
              },
              "sec03-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec03-code/"
              },
              "sec03-worksheet-soln.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec03-worksheet-soln.pdf"
              },
              "sec03-worksheet.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec03-worksheet.pdf"
              },
              "sec03-24sp-slides.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec03-24sp-slides.pdf"
              },
              "sec02-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec02-code/"
              },
              "sec02-worksheet-soln.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec02-worksheet-soln.pdf"
              },
              "sec02-worksheet.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec02-worksheet.pdf"
              },
              "sec02-slides.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec02-slides.pdf"
              },
              "sec01-worksheet-soln.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec01-worksheet-soln.pdf"
              },
              "sec01-worksheet.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec01-worksheet.pdf"
              },
              "sec01-slides.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/sections/sec01-slides.pdf"
              }
            },
            "lectures": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/",
              "28-wrapup.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/28-wrapup.pdf"
              },
              "30-syscalls-files-notes.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/30-syscalls-files-notes.pdf"
              },
              "27-processes-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/27-processes-code/"
              },
              "27-processes.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/27-processes.pdf"
              },
              "26-threads-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/26-threads-code/"
              },
              "26-threads.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/26-threads.pdf"
              },
              "25-concurrency.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/25-concurrency.pdf"
              },
              "24-http-demos.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/24-http-demos.pdf"
              },
              "24-http.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/24-http.pdf"
              },
              "23-network-server-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/23-network-server-code/"
              },
              "23-network-server.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/23-network-server.pdf"
              },
              "22-network-client-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/22-network-client-code/"
              },
              "22-network-client.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/22-network-client.pdf"
              },
              "21-network-dns-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/21-network-dns-code/"
              },
              "21-network-dns.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/21-network-dns.pdf"
              },
              "20-network-intro.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/20-network-intro.pdf"
              },
              "19-c++-casts-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/19-c++-casts-code/"
              },
              "19-c++-casts.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/19-c++-casts.pdf"
              },
              "18-c++-inheritance-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/18-c++-inheritance-code/"
              },
              "18-c++-inheritance.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/18-c++-inheritance.pdf"
              },
              "17-refs-review-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/17-refs-review-code/"
              },
              "17-refs-review.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/17-refs-review.pdf"
              },
              "17-c++-inheritance.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/17-c++-inheritance.pdf"
              },
              "16-c++-smartptr-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/16-c++-smartptr-code/"
              },
              "16-c++-smartptr.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/16-c++-smartptr.pdf"
              },
              "15-c++-STL-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/15-c++-STL-code/"
              },
              "15-c++-STL.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/15-c++-STL.pdf"
              },
              "14-c++-templates-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/14-c++-templates-code/"
              },
              "14-c++-templates.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/14-c++-templates.pdf"
              },
              "13-c++-details+heap-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/13-c++-details+heap-code/"
              },
              "13-c++-details+heap.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/13-c++-details+heap.pdf"
              },
              "12-c++-ctr-insanity-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/12-c++-ctr-insanity-code/"
              },
              "12-c++-ctr-insanity.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/12-c++-ctr-insanity.pdf"
              },
              "11-c++-refs-const-classes-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/11-c++-refs-const-classes-code/"
              },
              "11-c++-refs-const-classes.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/11-c++-refs-const-classes.pdf"
              },
              "10-c++-intro-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/10-c++-intro-code/"
              },
              "10-c++-intro.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/10-c++-intro.pdf"
              },
              "09-posix-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/09-posix-code/"
              },
              "09-posix.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/09-posix.pdf"
              },
              "08-io+syscalls-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/08-io+syscalls-code/"
              },
              "08-io+syscalls.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/08-io+syscalls.pdf"
              },
              "07-c-make-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/07-c-make-code/"
              },
              "07-c-make.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/07-c-make.pdf"
              },
              "06-c-details-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/06-c-details-code/"
              },
              "06-c-details.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/06-c-details.pdf"
              },
              "05-c-modules-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/05-c-modules-code/"
              },
              "05-c-modules.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/05-c-modules.pdf"
              },
              "04-c-heap-structs": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/04-c-heap-structs/"
              },
              "04-c-heap-structs.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/04-c-heap-structs.pdf"
              },
              "03-c-pointers-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/03-c-pointers-code/"
              },
              "03-c-pointers.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/03-c-pointers.pdf"
              },
              "02-c-arrays-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/02-c-arrays-code/"
              },
              "02-c-arrays.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/02-c-arrays.pdf"
              },
              "01-intro-c-code": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/01-intro-c-code/"
              },
              "01-intro-c.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/lectures/01-intro-c.pdf"
              }
            },
            "exercises": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/",
              "ex14_5.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex14_5.html"
              },
              "ex12.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex12.html"
              },
              "ex11.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex11.html"
              },
              "ex10.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex10.html"
              },
              "ex09.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex09.html"
              },
              "ex08_5.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex08_5.html"
              },
              "ex08.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex08.html"
              },
              "ex07.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex07.html"
              },
              "ex06.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex06.html"
              },
              "ex05.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex05.html"
              },
              "ex04.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex04.html"
              },
              "ex03.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex03.html"
              },
              "ex02.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex02.html"
              },
              "ex01.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex01.html"
              },
              "ex00.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/exercises/ex00.html"
              }
            },
            "csenetid": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/csenetid/",
              "solns": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/csenetid/solns/"
              }
            },
            "hw": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/",
              "hw4": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw4/",
                "hw4.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw4/hw4.html"
                }
              },
              "hw3": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw3/",
                "hw3.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw3/hw3.html"
                }
              },
              "hw2": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw2/",
                "hw2.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw2/hw2.html"
                }
              },
              "hw1": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw1/",
                "hw1.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw1/hw1.html"
                }
              },
              "hw0": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw0/",
                "hw0.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hw/hw0/hw0.html"
                }
              }
            },
            "hwlist.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/hwlist.html"
            },
            "htmlTemplates": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/",
              "sectionlist.template": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/sectionlist.template"
              },
              "subscribe.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/subscribe.html"
              },
              "lecturelist.template": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/lecturelist.template"
              },
              "lablist.template": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/lablist.template"
              },
              "hwlist.template": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/hwlist.template"
              },
              "calendar.template": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/htmlTemplates/calendar.template"
              }
            },
            "calstyle.css": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calstyle.css"
            },
            "calendar-section-AF.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-section-AF.ics"
            },
            "calendar-section-AE.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-section-AE.ics"
            },
            "calendar-section-AD.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-section-AD.ics"
            },
            "calendar-section-AC.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-section-AC.ics"
            },
            "calendar-section-AB.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-section-AB.ics"
            },
            "calendar-section-AA.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-section-AA.ics"
            },
            "calendar-oh.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-oh.ics"
            },
            "calendar-lecture-A.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-lecture-A.ics"
            },
            "calendar-lab-Exercises.ics": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar-lab-Exercises.ics"
            }
          },
          "hw": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/",
            "hw3": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/",
              "hw3.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/hw3.html"
              },
              "hw3-transcript.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/hw3-transcript.html"
              },
              "hw3-indexfile.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/hw3-indexfile.png"
              },
              "hw3-index.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/hw3-index.png"
              },
              "hw3-doctable.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/hw3-doctable.png"
              },
              "hw3-docidtable.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw3/hw3-docidtable.png"
              }
            },
            "hw4": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw4/",
              "hw4_arch_3.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw4/hw4_arch_3.png"
              },
              "hw4_arch_2.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw4/hw4_arch_2.png"
              },
              "hw4_arch_1.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw4/hw4_arch_1.png"
              },
              "hw4.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw4/hw4.html"
              }
            },
            "hw2": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/",
              "hw2_wordpos_table.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/hw2_wordpos_table.png"
              },
              "hw2_transcript.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/hw2_transcript.html"
              },
              "hw2_inverted_index.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/hw2_inverted_index.png"
              },
              "hw2_doctable.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/hw2_doctable.png"
              },
              "hw2.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/hw2.html"
              }
            },
            "hw1": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/",
              "hw1.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/hw1.html"
              },
              "hw1-hash-table.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/hw1-hash-table.png"
              },
              "hw1-doubly-linked-list.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/hw1-doubly-linked-list.png"
              },
              "hw1-dll-overview.png": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/hw1-dll-overview.png"
              }
            },
            "hw0": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw0/",
              "hw0.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw0/hw0.html"
              }
            }
          },
          "resources": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/",
            "git_tutorial.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html"
            },
            "vimrc.txt": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/vimrc.txt"
            },
            "vimcheatsheet.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/vimcheatsheet.html"
            },
            "syllabus.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/syllabus.html"
            },
            "integrity.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/integrity.html"
            },
            "gdb-refcard.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/gdb-refcard.pdf"
            },
            "cpplint.py": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/cpplint.py"
            },
            "cpplint-usage.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/cpplint-usage.html"
            },
            "VSCode.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/VSCode.pdf"
            },
            "SCP.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/SCP.pdf"
            }
          },
          "exercises": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/",
            "ex14_5.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex14_5.html"
            },
            "ex12.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex12.html"
            },
            "ex11.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex11.html"
            },
            "ex10.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex10.html"
            },
            "ex09.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex09.html"
            },
            "ex08_5_files": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex08_5_files/",
              "ex08_5.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex08_5_files/ex08_5.cc"
              }
            },
            "ex08_5.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex08_5.html"
            },
            "ex08.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex08.html"
            },
            "ex07.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex07.html"
            },
            "ex06.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex06.html"
            },
            "ex05.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex05.html"
            },
            "ex04.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex04.html"
            },
            "ex03.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex03.html"
            },
            "ex02.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex02.html"
            },
            "ex01.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex01.html"
            },
            "ex00.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex00.html"
            }
          },
          "lectures": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/",
            "17-c++-inheritance.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/17-c++-inheritance.pdf"
            },
            "27-processes-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/",
              "threadlatency.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/threadlatency.cc.html"
              },
              "threadlatency.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/threadlatency.cc"
              },
              "searchserver_processes": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/",
                "searchserver.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/searchserver.cc.html"
                },
                "searchserver.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/searchserver.cc"
                },
                "libhw3": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/",
                  "libhw3.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/libhw3.a"
                  },
                  "fileindexwriter.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/fileindexwriter.h"
                  },
                  "fileindexutil.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/fileindexutil.h"
                  },
                  "QueryProcessor.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/QueryProcessor.h"
                  },
                  "IndexTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/IndexTableReader.h"
                  },
                  "HashTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/HashTableReader.h"
                  },
                  "FileIndexReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/FileIndexReader.h"
                  },
                  "DocTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/DocTableReader.h"
                  },
                  "DocIDTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw3/DocIDTableReader.h"
                  }
                },
                "libhw2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw2/",
                  "memindex.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw2/memindex.h"
                  },
                  "libhw2.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw2/libhw2.a"
                  },
                  "fileparser.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw2/fileparser.h"
                  },
                  "filecrawler.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw2/filecrawler.h"
                  },
                  "doctable.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw2/doctable.h"
                  }
                },
                "libhw1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw1/",
                  "libhw1.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw1/libhw1.a"
                  },
                  "LinkedList.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw1/LinkedList.h"
                  },
                  "HashTable_priv.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw1/HashTable_priv.h"
                  },
                  "HashTable.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw1/HashTable.h"
                  },
                  "Assert333.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/libhw1/Assert333.h"
                  }
                },
                "SocketUtils.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/SocketUtils.h"
                },
                "SocketUtils.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/SocketUtils.cc"
                },
                "SocketLineReader.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/SocketLineReader.h"
                },
                "SocketLineReader.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/SocketLineReader.cc"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/searchserver_processes/Makefile/"
                }
              },
              "forklatency.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/forklatency.cc.html"
              },
              "forklatency.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/forklatency.cc"
              },
              "fork_example.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/fork_example.cc.html"
              },
              "fork_example.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/fork_example.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/27-processes-code/Makefile/"
              }
            },
            "26-threads-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/",
              "thread_example.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/thread_example.cc.html"
              },
              "thread_example.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/thread_example.cc"
              },
              "searchserver_threads": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/",
                "searchserver.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/searchserver.cc.html"
                },
                "searchserver.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/searchserver.cc"
                },
                "libhw3": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/",
                  "libhw3.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/libhw3.a"
                  },
                  "fileindexwriter.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/fileindexwriter.h"
                  },
                  "fileindexutil.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/fileindexutil.h"
                  },
                  "QueryProcessor.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/QueryProcessor.h"
                  },
                  "IndexTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/IndexTableReader.h"
                  },
                  "HashTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/HashTableReader.h"
                  },
                  "FileIndexReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/FileIndexReader.h"
                  },
                  "DocTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/DocTableReader.h"
                  },
                  "DocIDTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw3/DocIDTableReader.h"
                  }
                },
                "libhw2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw2/",
                  "memindex.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw2/memindex.h"
                  },
                  "libhw2.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw2/libhw2.a"
                  },
                  "fileparser.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw2/fileparser.h"
                  },
                  "filecrawler.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw2/filecrawler.h"
                  },
                  "doctable.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw2/doctable.h"
                  }
                },
                "libhw1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw1/",
                  "libhw1.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw1/libhw1.a"
                  },
                  "LinkedList.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw1/LinkedList.h"
                  },
                  "HashTable_priv.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw1/HashTable_priv.h"
                  },
                  "HashTable.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw1/HashTable.h"
                  },
                  "Assert333.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/libhw1/Assert333.h"
                  }
                },
                "SocketUtils.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/SocketUtils.h"
                },
                "SocketUtils.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/SocketUtils.cc"
                },
                "SocketLineReader.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/SocketLineReader.h"
                },
                "SocketLineReader.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/SocketLineReader.cc"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_threads/Makefile/"
                }
              },
              "searchserver_sequential": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/",
                "searchserver.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/searchserver.cc.html"
                },
                "searchserver.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/searchserver.cc"
                },
                "libhw3": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/",
                  "libhw3.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/libhw3.a"
                  },
                  "fileindexwriter.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/fileindexwriter.h"
                  },
                  "fileindexutil.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/fileindexutil.h"
                  },
                  "QueryProcessor.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/QueryProcessor.h"
                  },
                  "IndexTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/IndexTableReader.h"
                  },
                  "HashTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/HashTableReader.h"
                  },
                  "FileIndexReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/FileIndexReader.h"
                  },
                  "DocTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/DocTableReader.h"
                  },
                  "DocIDTableReader.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw3/DocIDTableReader.h"
                  }
                },
                "libhw2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw2/",
                  "memindex.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw2/memindex.h"
                  },
                  "libhw2.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw2/libhw2.a"
                  },
                  "fileparser.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw2/fileparser.h"
                  },
                  "filecrawler.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw2/filecrawler.h"
                  },
                  "doctable.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw2/doctable.h"
                  }
                },
                "libhw1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw1/",
                  "libhw1.a": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw1/libhw1.a"
                  },
                  "LinkedList.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw1/LinkedList.h"
                  },
                  "HashTable_priv.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw1/HashTable_priv.h"
                  },
                  "HashTable.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw1/HashTable.h"
                  },
                  "Assert333.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/libhw1/Assert333.h"
                  }
                },
                "SocketUtils.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/SocketUtils.h"
                },
                "SocketUtils.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/SocketUtils.cc"
                },
                "SocketLineReader.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/SocketLineReader.h"
                },
                "SocketLineReader.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/SocketLineReader.cc"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/searchserver_sequential/Makefile/"
                }
              },
              "nolock_example.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/nolock_example.cc.html"
              },
              "nolock_example.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/nolock_example.cc"
              },
              "lock_example.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/lock_example.cc.html"
              },
              "lock_example.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/lock_example.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/26-threads-code/Makefile/"
              }
            },
            "19-c++-casts-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/",
              "test.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/test.cc.html"
              },
              "test.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/test.cc"
              },
              "staticcast.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/staticcast.cc.html"
              },
              "staticcast.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/staticcast.cc"
              },
              "slicing.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/slicing.cc.html"
              },
              "slicing.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/slicing.cc"
              },
              "mixed.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/mixed.cc.html"
              },
              "mixed.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/mixed.cc"
              },
              "goodctor.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/goodctor.cc.html"
              },
              "goodctor.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/goodctor.cc"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/",
                "extra2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/",
                  "extra2.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/extra2.cc.html"
                  },
                  "extra2.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/extra2.cc"
                  },
                  "ShapeWrapper.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/ShapeWrapper.h.html"
                  },
                  "ShapeWrapper.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/ShapeWrapper.h"
                  },
                  "ShapeWrapper.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/ShapeWrapper.cc.html"
                  },
                  "ShapeWrapper.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/ShapeWrapper.cc"
                  },
                  "Makefile.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/Makefile.html"
                  },
                  "Makefile": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra2/Makefile/"
                  }
                },
                "extra1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/",
                  "extra1.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/extra1.cc.html"
                  },
                  "extra1.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/extra1.cc"
                  },
                  "Triangle.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Triangle.h.html"
                  },
                  "Triangle.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Triangle.h"
                  },
                  "Triangle.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Triangle.cc.html"
                  },
                  "Triangle.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Triangle.cc"
                  },
                  "Square.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Square.h.html"
                  },
                  "Square.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Square.h"
                  },
                  "Square.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Square.cc.html"
                  },
                  "Square.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Square.cc"
                  },
                  "Shape.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Shape.h.html"
                  },
                  "Shape.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Shape.h"
                  },
                  "Shape.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Shape.cc.html"
                  },
                  "Shape.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Shape.cc"
                  },
                  "Makefile.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Makefile.html"
                  },
                  "Makefile": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Makefile/"
                  },
                  "Circle.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Circle.h.html"
                  },
                  "Circle.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Circle.h"
                  },
                  "Circle.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Circle.cc.html"
                  },
                  "Circle.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/extra-problems/extra1/Circle.cc"
                  }
                }
              },
              "dynamiccast.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/dynamiccast.cc.html"
              },
              "dynamiccast.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/dynamiccast.cc"
              },
              "constcast.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/constcast.cc.html"
              },
              "constcast.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/constcast.cc"
              },
              "baddtor.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/baddtor.cc.html"
              },
              "baddtor.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/baddtor.cc"
              },
              "badctor.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/badctor.cc.html"
              },
              "badctor.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/19-c++-casts-code/badctor.cc"
              }
            },
            "18-c++-inheritance-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/",
              "vtable.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/vtable.cc.html"
              },
              "vtable.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/vtable.cc"
              },
              "initial-design": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/",
                "useassets.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/useassets.cc.html"
                },
                "useassets.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/useassets.cc"
                },
                "Stock.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Stock.h.html"
                },
                "Stock.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Stock.h"
                },
                "Stock.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Stock.cc.html"
                },
                "Stock.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Stock.cc"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Makefile/"
                },
                "DividendStock.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/DividendStock.h.html"
                },
                "DividendStock.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/DividendStock.h"
                },
                "DividendStock.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/DividendStock.cc.html"
                },
                "DividendStock.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/DividendStock.cc"
                },
                "Cash.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Cash.h.html"
                },
                "Cash.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Cash.h"
                },
                "Cash.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Cash.cc.html"
                },
                "Cash.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/initial-design/Cash.cc"
                }
              },
              "inherit-design": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/",
                "useassets.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/useassets.cc.html"
                },
                "useassets.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/useassets.cc"
                },
                "Stock.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/Stock.h.html"
                },
                "Stock.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/Stock.h"
                },
                "Stock.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/Stock.cc.html"
                },
                "Stock.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/Stock.cc"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/Makefile/"
                },
                "DividendStock.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/DividendStock.h.html"
                },
                "DividendStock.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/DividendStock.h"
                },
                "DividendStock.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/DividendStock.cc.html"
                },
                "DividendStock.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/18-c++-inheritance-code/inherit-design/DividendStock.cc"
                }
              }
            },
            "16-c++-smartptr.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr.pdf"
            },
            "16-c++-smartptr-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/",
              "weakcycle.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/weakcycle.cc.html"
              },
              "weakcycle.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/weakcycle.cc"
              },
              "weakcycle": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/weakcycle/"
              },
              "usingweak.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/usingweak.cc.html"
              },
              "usingweak.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/usingweak.cc"
              },
              "usingweak": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/usingweak/"
              },
              "uniquevecsort.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquevecsort.cc.html"
              },
              "uniquevecsort.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquevecsort.cc"
              },
              "uniquevecsort": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquevecsort/"
              },
              "uniquevec.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquevec.cc.html"
              },
              "uniquevec.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquevec.cc"
              },
              "uniquemap.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquemap.cc.html"
              },
              "uniquemap.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquemap.cc"
              },
              "uniquemap": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquemap/"
              },
              "uniquefail.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquefail.cc.html"
              },
              "uniquefail.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/uniquefail.cc"
              },
              "unique5.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique5.cc.html"
              },
              "unique5.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique5.cc"
              },
              "unique5": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique5/"
              },
              "unique4.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique4.cc.html"
              },
              "unique4.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique4.cc"
              },
              "unique4": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique4/"
              },
              "unique3.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique3.cc.html"
              },
              "unique3.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique3.cc"
              },
              "unique3": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique3/"
              },
              "unique2.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique2.cc.html"
              },
              "unique2.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique2.cc"
              },
              "unique2": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique2/"
              },
              "unique1.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique1.cc.html"
              },
              "unique1.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique1.cc"
              },
              "unique1": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/unique1/"
              },
              "toyptr": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/",
                "usetoy.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/usetoy.cc.html"
                },
                "usetoy.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/usetoy.cc"
                },
                "usetoy": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/usetoy/"
                },
                "ToyPtr.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/ToyPtr.h.html"
                },
                "ToyPtr.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/ToyPtr.h"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/Makefile.html"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/toyptr/Makefile/"
                }
              },
              "strongcycle.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/strongcycle.cc.html"
              },
              "strongcycle.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/strongcycle.cc"
              },
              "strongcycle": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/strongcycle/"
              },
              "sharedvec.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedvec.cc.html"
              },
              "sharedvec.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedvec.cc"
              },
              "sharedvec": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedvec/"
              },
              "sharedexample.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedexample.cc.html"
              },
              "sharedexample.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedexample.cc"
              },
              "sharedexample": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedexample/"
              },
              "sharedbug.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedbug.cc.html"
              },
              "sharedbug.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedbug.cc"
              },
              "sharedbug": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/sharedbug/"
              },
              "movesemantics.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/movesemantics.cc.html"
              },
              "movesemantics.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/movesemantics.cc"
              },
              "movesemantics": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/movesemantics/"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/",
                "extra1.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/extra1.cc.html"
                },
                "extra1.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/extra1.cc"
                },
                "Triple.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/Triple.h.html"
                },
                "Triple.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/Triple.h"
                },
                "ToyPtr.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/ToyPtr.h.html"
                },
                "ToyPtr.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/ToyPtr.h"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/extra-problems/Makefile/"
                }
              },
              "copysemantics.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/copysemantics.cc.html"
              },
              "copysemantics.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/copysemantics.cc"
              },
              "copysemantics": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/copysemantics/"
              },
              "animals.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/animals.cc.html"
              },
              "animals.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/animals.cc"
              },
              "animals": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/animals/"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/16-c++-smartptr-code/Makefile/"
              }
            },
            "15-c++-STL.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL.pdf"
            },
            "15-c++-STL-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/",
              "vectoriterator_2011.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator_2011.cc.html"
              },
              "vectoriterator_2011.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator_2011.cc"
              },
              "vectoriterator.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator.cc.html"
              },
              "vectoriterator.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator.cc"
              },
              "vectorfun.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorfun.cc.html"
              },
              "vectorfun.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorfun.cc"
              },
              "vectorcap.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorcap.cc.html"
              },
              "vectorcap.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorcap.cc"
              },
              "vectoralgos.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoralgos.cc.html"
              },
              "vectoralgos.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoralgos.cc"
              },
              "test.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/test.cc.html"
              },
              "test.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/test.cc"
              },
              "mapexample.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/mapexample.cc.html"
              },
              "mapexample.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/mapexample.cc"
              },
              "listexample.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/listexample.cc.html"
              },
              "listexample.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/listexample.cc"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/",
                "extra2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/",
                  "extra2.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/extra2.cc.html"
                  },
                  "extra2.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/extra2.cc"
                  },
                  "Makefile.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Makefile.html"
                  },
                  "Makefile": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Makefile/"
                  },
                  "Histogram.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.h.html"
                  },
                  "Histogram.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.h"
                  },
                  "Histogram.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.cc.html"
                  },
                  "Histogram.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.cc"
                  },
                  "GetWord.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.h.html"
                  },
                  "GetWord.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.h"
                  },
                  "GetWord.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.cc.html"
                  },
                  "GetWord.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.cc"
                  }
                },
                "extra1.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra1.cc.html"
                },
                "extra1.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra1.cc"
                }
              },
              "Tracer.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.h.html"
              },
              "Tracer.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.h"
              },
              "Tracer.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.cc.html"
              },
              "Tracer.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Makefile/"
              }
            },
            "14-c++-templates.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates.pdf"
            },
            "14-c++-templates-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/",
              "valuetemplate.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/valuetemplate.cc.html"
              },
              "valuetemplate.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/valuetemplate.cc"
              },
              "usepair.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/usepair.cc.html"
              },
              "usepair.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/usepair.cc"
              },
              "functiontemplate_infer.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate_infer.cc.html"
              },
              "functiontemplate_infer.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate_infer.cc"
              },
              "functiontemplate.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate.cc.html"
              },
              "functiontemplate.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate.cc"
              },
              "compare_soln_two": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/",
                "main.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/main.cc.html"
                },
                "main.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/main.cc"
                },
                "compare.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.h.html"
                },
                "compare.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.h"
                },
                "compare.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.cc.html"
                },
                "compare.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.cc"
                }
              },
              "compare_soln_one": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/",
                "main.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/main.cc.html"
                },
                "main.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/main.cc"
                },
                "compare.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/compare.h.html"
                },
                "compare.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/compare.h"
                }
              },
              "compare_problem": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/",
                "main.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/main.cc.html"
                },
                "main.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/main.cc"
                },
                "compare.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.h.html"
                },
                "compare.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.h"
                },
                "compare.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.cc.html"
                },
                "compare.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.cc"
                }
              },
              "Pair.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.h.html"
              },
              "Pair.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.h"
              },
              "Pair.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.cc.html"
              },
              "Pair.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Makefile/"
              }
            },
            "13-c++-details+heap.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap.pdf"
            },
            "13-c++-details+heap-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/",
              "str": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/",
                "strtest.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/strtest.cc.html"
                },
                "strtest.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/strtest.cc"
                },
                "Str.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.h.html"
                },
                "Str.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.h"
                },
                "Str.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.cc.html"
                },
                "Str.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.cc"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Makefile/"
                }
              },
              "sanepoint_2011.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint_2011.cc.html"
              },
              "sanepoint_2011.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint_2011.cc"
              },
              "sanepoint.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint.cc.html"
              },
              "sanepoint.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint.cc"
              },
              "heappoint.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/heappoint.cc.html"
              },
              "heappoint.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/heappoint.cc"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/extra-problems/",
                "extra1.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/extra-problems/extra1.cc.html"
                },
                "extra1.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/extra-problems/extra1.cc"
                }
              },
              "arrays.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/arrays.cc.html"
              },
              "arrays.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/arrays.cc"
              },
              "Point_2011.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.h.html"
              },
              "Point_2011.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.h"
              },
              "Point_2011.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.cc.html"
              },
              "Point_2011.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.cc"
              },
              "Point.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.h.html"
              },
              "Point.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.h"
              },
              "Point.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.cc.html"
              },
              "Point.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Makefile/"
              }
            },
            "12-c++-ctr-insanity.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity.pdf"
            },
            "12-c++-ctr-insanity-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/",
              "test.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/test.cc.html"
              },
              "test.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/test.cc"
              },
              "test": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/test/"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/",
                "extra2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/",
                  "extra2.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/extra2.cc.html"
                  },
                  "extra2.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/extra2.cc"
                  },
                  "GetWord.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/GetWord.h.html"
                  },
                  "GetWord.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/GetWord.h"
                  },
                  "GetWord.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/GetWord.cc.html"
                  },
                  "GetWord.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra2/GetWord.cc"
                  }
                },
                "extra1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/",
                  "extra1.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/extra1.cc.html"
                  },
                  "extra1.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/extra1.cc"
                  },
                  "ThreeDPoint.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/ThreeDPoint.h.html"
                  },
                  "ThreeDPoint.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/ThreeDPoint.h"
                  },
                  "ThreeDPoint.cc.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/ThreeDPoint.cc.html"
                  },
                  "ThreeDPoint.cc": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/extra1/ThreeDPoint.cc"
                  }
                }
              },
              "complex_example": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/",
                "testcomplex.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/testcomplex.cc.html"
                },
                "testcomplex.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/testcomplex.cc"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Makefile.html"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Makefile/"
                },
                "Complex.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.h.html"
                },
                "Complex.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.h"
                },
                "Complex.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.cc.html"
                },
                "Complex.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.cc"
                }
              },
              "Triangle.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.h.html"
              },
              "Triangle.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.h"
              },
              "Triangle.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.cc.html"
              },
              "Triangle.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.cc"
              },
              "SimplePoint.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.h.html"
              },
              "SimplePoint.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.h"
              },
              "SimplePoint.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.cc.html"
              },
              "SimplePoint.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.cc"
              },
              "SimplePoint": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint/"
              },
              "Point.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.h.html"
              },
              "Point.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.h"
              },
              "Point.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.cc.html"
              },
              "Point.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Makefile/"
              }
            },
            "11-c++-refs-const-classes.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes.pdf"
            },
            "11-c++-refs-const-classes-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/",
              "usepoint.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/usepoint.cc.html"
              },
              "usepoint.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/usepoint.cc"
              },
              "test.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/test.cc.html"
              },
              "test.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/test.cc"
              },
              "styleguide.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/styleguide.cc.html"
              },
              "styleguide.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/styleguide.cc"
              },
              "reference.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/reference.cc.html"
              },
              "reference.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/reference.cc"
              },
              "pointer.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/pointer.cc.html"
              },
              "pointer.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/pointer.cc"
              },
              "passbyreference.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/passbyreference.cc.html"
              },
              "passbyreference.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/passbyreference.cc"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/",
                "exercise2.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/exercise2.cc.html"
                },
                "exercise2.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/exercise2.cc"
                },
                "exercise1.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/exercise1.cc.html"
                },
                "exercise1.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/exercise1.cc"
                },
                "ThreeDPoint.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDPoint.h.html"
                },
                "ThreeDPoint.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDPoint.h"
                },
                "ThreeDPoint.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDPoint.cc.html"
                },
                "ThreeDPoint.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDPoint.cc"
                },
                "ThreeDBox.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDBox.h.html"
                },
                "ThreeDBox.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDBox.h"
                },
                "ThreeDBox.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDBox.cc.html"
                },
                "ThreeDBox.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/ThreeDBox.cc"
                }
              },
              "constmadness.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/constmadness.cc.html"
              },
              "constmadness.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/constmadness.cc"
              },
              "brokenpassbyrefconst.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/brokenpassbyrefconst.cc.html"
              },
              "brokenpassbyrefconst.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/brokenpassbyrefconst.cc"
              },
              "Point.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.h.html"
              },
              "Point.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.h"
              },
              "Point.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.cc.html"
              },
              "Point.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.cc"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Makefile/"
              }
            },
            "10-c++-intro.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro.pdf"
            },
            "10-c++-intro-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/",
              "msg.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/msg.cc.html"
              },
              "msg.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/msg.cc"
              },
              "manip.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/manip.cc.html"
              },
              "manip.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/manip.cc"
              },
              "helloworld3.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld3.cc.html"
              },
              "helloworld3.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld3.cc"
              },
              "helloworld2.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld2.cc.html"
              },
              "helloworld2.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld2.cc"
              },
              "helloworld.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.cc.html"
              },
              "helloworld.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.cc"
              },
              "helloworld.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.c.html"
              },
              "helloworld.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.c"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/extra-problems/",
                "extra1.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/extra-problems/extra1.cc.html"
                },
                "extra1.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/extra-problems/extra1.cc"
                }
              },
              "echonum.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echonum.cc.html"
              },
              "echonum.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echonum.cc"
              },
              "echo.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echo.cc.html"
              },
              "echo.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echo.cc"
              },
              "concat.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/concat.cc.html"
              },
              "concat.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/concat.cc"
              },
              "Makefile.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/Makefile.html"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/Makefile/"
              }
            },
            "09-posix.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix.pdf"
            },
            "09-posix-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code/",
              "readN.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code/readN.c.html"
              },
              "readN.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code/readN.c"
              }
            },
            "08-io+syscalls.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls.pdf"
            },
            "08-io+syscalls-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code/",
              "cp-example.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code/cp-example.c.html"
              },
              "cp-example.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code/cp-example.c"
              }
            },
            "07-c-make.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make.pdf"
            },
            "07-c-make-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/",
              "talk": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/",
                "speak.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.h.html"
                },
                "speak.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.h"
                },
                "speak.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.c.html"
                },
                "speak.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.c"
                },
                "shout.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.h.html"
                },
                "shout.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.h"
                },
                "shout.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.c.html"
                },
                "shout.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.c"
                },
                "main.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/main.c.html"
                },
                "main.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/main.c"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/Makefile.html"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/Makefile/"
                }
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/",
                "extra1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/",
                  "ll.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.h.html"
                  },
                  "ll.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.h"
                  },
                  "ll.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.c.html"
                  },
                  "ll.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.c"
                  },
                  "example_ll_customer.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/example_ll_customer.c.html"
                  },
                  "example_ll_customer.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/example_ll_customer.c"
                  },
                  "Makefile.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/Makefile.html"
                  },
                  "Makefile": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/Makefile/"
                  }
                }
              }
            },
            "06-c-details.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details.pdf"
            },
            "06-c-details-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/",
              "static_extent.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/static_extent.c.html"
              },
              "static_extent.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/static_extent.c"
              },
              "internal_linkage": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/",
                "foo.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/foo.c.html"
                },
                "foo.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/foo.c"
                },
                "bar.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/bar.c.html"
                },
                "bar.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/bar.c"
                }
              },
              "include_solution": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/",
                "util.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/util.h.html"
                },
                "util.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/util.h"
                },
                "pair.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/pair.h.html"
                },
                "pair.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/pair.h"
                },
                "foo.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/foo.c.html"
                },
                "foo.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/foo.c"
                }
              },
              "include_problem": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/",
                "util.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/util.h.html"
                },
                "util.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/util.h"
                },
                "pair.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/pair.h.html"
                },
                "pair.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/pair.h"
                },
                "foo.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/foo.c.html"
                },
                "foo.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/foo.c"
                }
              },
              "ifdef.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/ifdef.c.html"
              },
              "ifdef.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/ifdef.c"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems/",
                "extra1.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems/extra1.c.html"
                },
                "extra1.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems/extra1.c"
                }
              },
              "external_static_functions": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/",
                "main.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/main.c.html"
                },
                "main.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/main.c"
                },
                "bar.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/bar.c.html"
                },
                "bar.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/bar.c"
                }
              },
              "external_linkage": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/",
                "foo.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/foo.c.html"
                },
                "foo.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/foo.c"
                },
                "bar.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/bar.c.html"
                },
                "bar.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/bar.c"
                }
              },
              "condcomp.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/condcomp.c.html"
              },
              "condcomp.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/condcomp.c"
              }
            },
            "05-c-modules.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules.pdf"
            },
            "05-c-modules-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/",
              "push_list3.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list3.c.html"
              },
              "push_list3.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list3.c"
              },
              "push_list2.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list2.c.html"
              },
              "push_list2.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list2.c"
              },
              "push_list.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list.c.html"
              },
              "push_list.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list.c"
              },
              "manual_list_void.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list_void.c.html"
              },
              "manual_list_void.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list_void.c"
              },
              "manual_list.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list.c.html"
              },
              "manual_list.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list.c"
              },
              "magic.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/magic.c.html"
              },
              "magic.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/magic.c"
              },
              "ll.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.h.html"
              },
              "ll.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.h"
              },
              "ll.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.c.html"
              },
              "ll.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.c"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/",
                "extra3": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/",
                  "test_complex.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/test_complex.c.html"
                  },
                  "test_complex.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/test_complex.c"
                  },
                  "complex.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.h.html"
                  },
                  "complex.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.h"
                  },
                  "complex.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.c.html"
                  },
                  "complex.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.c"
                  }
                },
                "extra2": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/",
                  "test_bst.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/test_bst.c.html"
                  },
                  "test_bst.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/test_bst.c"
                  },
                  "bst.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.h.html"
                  },
                  "bst.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.h"
                  },
                  "bst.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.c.html"
                  },
                  "bst.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.c"
                  }
                },
                "extra1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/",
                  "ll.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.h.html"
                  },
                  "ll.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.h"
                  },
                  "ll.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.c.html"
                  },
                  "ll.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.c"
                  },
                  "example_ll_of_ll.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_of_ll.c.html"
                  },
                  "example_ll_of_ll.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_of_ll.c"
                  },
                  "example_ll_customer.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_customer.c.html"
                  },
                  "example_ll_customer.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_customer.c"
                  },
                  "Makefile": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/Makefile/"
                  }
                }
              },
              "example_ll_customer.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/example_ll_customer.c.html"
              },
              "example_ll_customer.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/example_ll_customer.c"
              },
              "cpp_example.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.h.html"
              },
              "cpp_example.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.h"
              },
              "cpp_example.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.c.html"
              },
              "cpp_example.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.c"
              }
            },
            "04-c-heap-structs": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/",
              "structassign.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structassign.c.html"
              },
              "structassign.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structassign.c"
              },
              "structarg.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structarg.c.html"
              },
              "structarg.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structarg.c"
              },
              "simplestruct.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/simplestruct.c.html"
              },
              "simplestruct.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/simplestruct.c"
              },
              "segfault.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/segfault.c.html"
              },
              "segfault.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/segfault.c"
              },
              "memcorrupt.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/memcorrupt.c.html"
              },
              "memcorrupt.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/memcorrupt.c"
              },
              "leaky.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/leaky.c.html"
              },
              "leaky.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/leaky.c"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/",
                "extra2.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra2.c.html"
                },
                "extra2.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra2.c"
                },
                "extra1.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra1.c.html"
                },
                "extra1.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra1.c"
                }
              },
              "complexstruct.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/complexstruct.c.html"
              },
              "complexstruct.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/complexstruct.c"
              },
              "arraycopy.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/arraycopy.c.html"
              },
              "arraycopy.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/arraycopy.c"
              }
            },
            "04-c-heap-structs.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs.pdf"
            },
            "03-c-pointers.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers.pdf"
            },
            "03-c-pointers-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/",
              "swap.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/swap.c.html"
              },
              "swap.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/swap.c"
              },
              "pointerarithmetic.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/pointerarithmetic.c.html"
              },
              "pointerarithmetic.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/pointerarithmetic.c"
              },
              "map.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/map.c.html"
              },
              "map.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/map.c"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/",
                "extra4.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra4.c.html"
                },
                "extra4.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra4.c"
                },
                "extra3.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra3.c.html"
                },
                "extra3.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra3.c"
                },
                "extra2.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra2.c.html"
                },
                "extra2.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra2.c"
                },
                "extra1.pdf": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra1.pdf"
                }
              },
              "brokenswap.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/brokenswap.c.html"
              },
              "brokenswap.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/brokenswap.c"
              },
              "boxarrow2.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow2.c.html"
              },
              "boxarrow2.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow2.c"
              },
              "boxarrow.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow.c.html"
              },
              "boxarrow.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow.c"
              }
            },
            "02-c-arrays.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays.pdf"
            },
            "02-c-arrays-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/",
              "vla.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/vla.c.html"
              },
              "vla.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/vla.c"
              },
              "stack.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/stack.c.html"
              },
              "stack.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/stack.c"
              },
              "pointy.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/pointy.c.html"
              },
              "pointy.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/pointy.c"
              },
              "outparam.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/outparam.c.html"
              },
              "outparam.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/outparam.c"
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems/",
                "extra2.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems/extra2.c.html"
                },
                "extra2.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems/extra2.c"
                },
                "extra1.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems/extra1.c.html"
                },
                "extra1.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems/extra1.c"
                }
              },
              "copyarray.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/copyarray.c.html"
              },
              "copyarray.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/copyarray.c"
              },
              "buggy_copyarray.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/buggy_copyarray.c.html"
              },
              "buggy_copyarray.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/buggy_copyarray.c"
              },
              "arraysum.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/arraysum.c.html"
              },
              "arraysum.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/arraysum.c"
              }
            },
            "01-intro-c.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c.pdf"
            },
            "01-intro-c-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/",
              "sumstore.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumstore.c.html"
              },
              "sumstore.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumstore.c"
              },
              "sumnum.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumnum.c.html"
              },
              "sumnum.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumnum.c"
              },
              "sum_declared.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_declared.c.html"
              },
              "sum_declared.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_declared.c"
              },
              "sum_betterorder.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_betterorder.c.html"
              },
              "sum_betterorder.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_betterorder.c"
              },
              "sum_badorder.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_badorder.c.html"
              },
              "sum_badorder.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_badorder.c"
              },
              "args.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/args.c.html"
              },
              "args.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/args.c"
              }
            }
          },
          "csenetid": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/csenetid/",
            "solns": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/csenetid/solns/"
            }
          },
          "sections": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/",
            "sec05-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec05-worksheet-soln.pdf"
            },
            "sec10-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec10-slides.pdf"
            },
            "sec09-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec09-worksheet.pdf"
            },
            "sec09-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec09-worksheet-soln.pdf"
            },
            "sec09-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec09-slides.pdf"
            },
            "sec08-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec08-worksheet.pdf"
            },
            "sec08-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec08-worksheet-soln.pdf"
            },
            "sec08-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec08-slides.pdf"
            },
            "sec07.idx": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07.idx"
            },
            "sec07-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07-worksheet.pdf"
            },
            "sec07-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07-worksheet-soln.pdf"
            },
            "sec07-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07-slides.pdf"
            },
            "sec05-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec05-worksheet.pdf"
            },
            "sec05-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec05-slides.pdf"
            },
            "sec04-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-worksheet.pdf"
            },
            "sec04-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-worksheet-soln.pdf"
            },
            "sec04-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-slides.pdf"
            },
            "sec04-c-make.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make.pdf"
            },
            "sec04-c-make-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/",
              "talk": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/",
                "speak.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.h.html"
                },
                "speak.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.h"
                },
                "speak.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.c.html"
                },
                "speak.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.c"
                },
                "shout.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.h.html"
                },
                "shout.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.h"
                },
                "shout.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.c.html"
                },
                "shout.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.c"
                },
                "main.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/main.c.html"
                },
                "main.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/main.c"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/Makefile.html"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/Makefile/"
                }
              },
              "extra-problems": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/",
                "extra1": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/",
                  "ll.h.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.h.html"
                  },
                  "ll.h": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.h"
                  },
                  "ll.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.c.html"
                  },
                  "ll.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.c"
                  },
                  "example_ll_customer.c.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/example_ll_customer.c.html"
                  },
                  "example_ll_customer.c": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/example_ll_customer.c"
                  },
                  "Makefile.html": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/Makefile.html"
                  },
                  "Makefile": {
                    "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/Makefile/"
                  }
                }
              }
            },
            "sec03-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-worksheet.pdf"
            },
            "sec03-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-worksheet-soln.pdf"
            },
            "sec03-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-slides.pdf"
            },
            "sec03-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/",
              "main.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/main.c"
              },
              "fib.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/fib.h"
              },
              "fib.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/fib.c"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/Makefile/"
              }
            },
            "sec03-24sp-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-24sp-slides.pdf"
            },
            "sec02-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-worksheet.pdf"
            },
            "sec02-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-worksheet-soln.pdf"
            },
            "sec02-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-slides.pdf"
            },
            "sec02-code": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/",
              "reverse_soln.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse_soln.c.html"
              },
              "reverse_soln.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse_soln.c"
              },
              "reverse.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse.c.html"
              },
              "reverse.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse.c"
              }
            },
            "sec01-worksheet.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec01-worksheet.pdf"
            },
            "sec01-worksheet-soln.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec01-worksheet-soln.pdf"
            },
            "sec01-slides.pdf": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec01-slides.pdf"
            }
          },
          "syllabus.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/syllabus.html"
          },
          "resources.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources.html"
          },
          "staff.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/staff.html"
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