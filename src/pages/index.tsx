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

const dir : DirectoryType = {
  "courses.cs.washington.edu": {
    "url": "https://courses.cs.washington.edu/"
  },
  "courses": {
    "url": "https://courses.cs.washington.edu/courses/",
    "cse333": {
      "url": "https://courses.cs.washington.edu/courses/cse333/",
      "24sp": {
        "url": "https://courses.cs.washington.edu/courses/cse333/24sp/",
        "calendar": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/",
          "calendar.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar.html/"
          },
          "subscribe.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/subscribe.html/"
          },
          "calendar.html#": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/calendar/calendar.html#/"
          }
        },
        "syllabus.html": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/syllabus.html/"
        },
        "staff.html": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/staff.html/"
        },
        "lectures": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/",
          "01-intro-c.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c.pdf/"
          },
          "01-intro-c-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code//"
            },
            "args.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/args.c/"
            },
            "args.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/args.c.html/"
            },
            "sum_badorder.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_badorder.c/"
            },
            "sum_badorder.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_badorder.c.html/"
            },
            "sum_betterorder.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_betterorder.c/"
            },
            "sum_betterorder.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_betterorder.c.html/"
            },
            "sum_declared.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_declared.c/"
            },
            "sum_declared.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sum_declared.c.html/"
            },
            "sumnum.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumnum.c/"
            },
            "sumnum.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumnum.c.html/"
            },
            "sumstore.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumstore.c/"
            },
            "sumstore.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/01-intro-c-code/sumstore.c.html/"
            }
          },
          "02-c-arrays.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays.pdf/"
          },
          "02-c-arrays-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code//"
            },
            "arraysum.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/arraysum.c/"
            },
            "arraysum.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/arraysum.c.html/"
            },
            "buggy_copyarray.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/buggy_copyarray.c/"
            },
            "buggy_copyarray.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/buggy_copyarray.c.html/"
            },
            "copyarray.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/copyarray.c/"
            },
            "copyarray.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/copyarray.c.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/extra-problems//"
              }
            },
            "outparam.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/outparam.c/"
            },
            "outparam.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/outparam.c.html/"
            },
            "pointy.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/pointy.c/"
            },
            "pointy.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/pointy.c.html/"
            },
            "stack.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/stack.c/"
            },
            "stack.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/stack.c.html/"
            },
            "vla.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/vla.c/"
            },
            "vla.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/02-c-arrays-code/vla.c.html/"
            }
          },
          "03-c-pointers.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers.pdf/"
          },
          "03-c-pointers-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code//"
            },
            "boxarrow.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow.c/"
            },
            "boxarrow.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow.c.html/"
            },
            "boxarrow2.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow2.c/"
            },
            "boxarrow2.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/boxarrow2.c.html/"
            },
            "brokenswap.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/brokenswap.c/"
            },
            "brokenswap.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/brokenswap.c.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems//"
              },
              "extra1.pdf": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra1.pdf/"
              },
              "extra2.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra2.c/"
              },
              "extra2.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra2.c.html/"
              },
              "extra3.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra3.c/"
              },
              "extra3.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra3.c.html/"
              },
              "extra4.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra4.c/"
              },
              "extra4.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/extra-problems/extra4.c.html/"
              }
            },
            "map.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/map.c/"
            },
            "map.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/map.c.html/"
            },
            "pointerarithmetic.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/pointerarithmetic.c/"
            },
            "pointerarithmetic.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/pointerarithmetic.c.html/"
            },
            "swap.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/swap.c/"
            },
            "swap.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/03-c-pointers-code/swap.c.html/"
            }
          },
          "04-c-heap-structs.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs.pdf/"
          },
          "04-c-heap-structs": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs//"
            },
            "arraycopy.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/arraycopy.c/"
            },
            "arraycopy.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/arraycopy.c.html/"
            },
            "complexstruct.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/complexstruct.c/"
            },
            "complexstruct.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/complexstruct.c.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems//"
              },
              "extra1.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra1.c/"
              },
              "extra1.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra1.c.html/"
              },
              "extra2.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra2.c/"
              },
              "extra2.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/extra-problems/extra2.c.html/"
              }
            },
            "leaky.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/leaky.c/"
            },
            "leaky.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/leaky.c.html/"
            },
            "memcorrupt.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/memcorrupt.c/"
            },
            "memcorrupt.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/memcorrupt.c.html/"
            },
            "segfault.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/segfault.c/"
            },
            "segfault.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/segfault.c.html/"
            },
            "simplestruct.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/simplestruct.c/"
            },
            "simplestruct.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/simplestruct.c.html/"
            },
            "structarg.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structarg.c/"
            },
            "structarg.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structarg.c.html/"
            },
            "structassign.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structassign.c/"
            },
            "structassign.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/04-c-heap-structs/structassign.c.html/"
            }
          },
          "05-c-modules.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules.pdf/"
          },
          "05-c-modules-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code//"
            },
            "cpp_example.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.c/"
            },
            "cpp_example.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.c.html/"
            },
            "cpp_example.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.h/"
            },
            "cpp_example.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/cpp_example.h.html/"
            },
            "example_ll_customer.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/example_ll_customer.c/"
            },
            "example_ll_customer.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/example_ll_customer.c.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems//"
              },
              "extra1": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/",
                "": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1//"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/Makefile/"
                },
                "example_ll_customer.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_customer.c/"
                },
                "example_ll_customer.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_customer.c.html/"
                },
                "example_ll_of_ll.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_of_ll.c/"
                },
                "example_ll_of_ll.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/example_ll_of_ll.c.html/"
                },
                "ll.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.c/"
                },
                "ll.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.c.html/"
                },
                "ll.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.h/"
                },
                "ll.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra1/ll.h.html/"
                }
              },
              "extra2": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/",
                "": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2//"
                },
                "bst.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.c/"
                },
                "bst.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.c.html/"
                },
                "bst.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.h/"
                },
                "bst.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/bst.h.html/"
                },
                "test_bst.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/test_bst.c/"
                },
                "test_bst.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra2/test_bst.c.html/"
                }
              },
              "extra3": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/",
                "": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3//"
                },
                "complex.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.c/"
                },
                "complex.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.c.html/"
                },
                "complex.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.h/"
                },
                "complex.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/complex.h.html/"
                },
                "test_complex.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/test_complex.c/"
                },
                "test_complex.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/extra-problems/extra3/test_complex.c.html/"
                }
              }
            },
            "ll.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.c/"
            },
            "ll.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.c.html/"
            },
            "ll.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.h/"
            },
            "ll.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/ll.h.html/"
            },
            "magic.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/magic.c/"
            },
            "magic.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/magic.c.html/"
            },
            "manual_list.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list.c/"
            },
            "manual_list.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list.c.html/"
            },
            "manual_list_void.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list_void.c/"
            },
            "manual_list_void.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/manual_list_void.c.html/"
            },
            "push_list.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list.c/"
            },
            "push_list.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list.c.html/"
            },
            "push_list2.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list2.c/"
            },
            "push_list2.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list2.c.html/"
            },
            "push_list3.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list3.c/"
            },
            "push_list3.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/05-c-modules-code/push_list3.c.html/"
            }
          },
          "06-c-details.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details.pdf/"
          },
          "06-c-details-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code//"
            },
            "condcomp.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/condcomp.c/"
            },
            "condcomp.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/condcomp.c.html/"
            },
            "external_linkage": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage//"
              },
              "bar.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/bar.c/"
              },
              "bar.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/bar.c.html/"
              },
              "foo.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/foo.c/"
              },
              "foo.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_linkage/foo.c.html/"
              }
            },
            "external_static_functions": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions//"
              },
              "bar.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/bar.c/"
              },
              "bar.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/bar.c.html/"
              },
              "main.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/main.c/"
              },
              "main.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/external_static_functions/main.c.html/"
              }
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems//"
              },
              "extra1.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems/extra1.c/"
              },
              "extra1.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/extra-problems/extra1.c.html/"
              }
            },
            "ifdef.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/ifdef.c/"
            },
            "ifdef.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/ifdef.c.html/"
            },
            "include_problem": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem//"
              },
              "foo.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/foo.c/"
              },
              "foo.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/foo.c.html/"
              },
              "pair.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/pair.h/"
              },
              "pair.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/pair.h.html/"
              },
              "util.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/util.h/"
              },
              "util.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_problem/util.h.html/"
              }
            },
            "include_solution": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution//"
              },
              "foo.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/foo.c/"
              },
              "foo.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/foo.c.html/"
              },
              "pair.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/pair.h/"
              },
              "pair.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/pair.h.html/"
              },
              "util.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/util.h/"
              },
              "util.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/include_solution/util.h.html/"
              }
            },
            "internal_linkage": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage//"
              },
              "bar.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/bar.c/"
              },
              "bar.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/bar.c.html/"
              },
              "foo.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/foo.c/"
              },
              "foo.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/internal_linkage/foo.c.html/"
              }
            },
            "static_extent.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/static_extent.c/"
            },
            "static_extent.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/06-c-details-code/static_extent.c.html/"
            }
          },
          "07-c-make.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make.pdf/"
          },
          "07-c-make-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code//"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems//"
              },
              "extra1": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/",
                "": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1//"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/Makefile/"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/Makefile.html/"
                },
                "example_ll_customer.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/example_ll_customer.c/"
                },
                "example_ll_customer.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/example_ll_customer.c.html/"
                },
                "ll.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.c/"
                },
                "ll.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.c.html/"
                },
                "ll.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.h/"
                },
                "ll.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/extra-problems/extra1/ll.h.html/"
                }
              }
            },
            "talk": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk//"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/Makefile/"
              },
              "Makefile.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/Makefile.html/"
              },
              "main.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/main.c/"
              },
              "main.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/main.c.html/"
              },
              "shout.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.c/"
              },
              "shout.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.c.html/"
              },
              "shout.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.h/"
              },
              "shout.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/shout.h.html/"
              },
              "speak.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.c/"
              },
              "speak.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.c.html/"
              },
              "speak.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.h/"
              },
              "speak.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/07-c-make-code/talk/speak.h.html/"
              }
            }
          },
          "08-io+syscalls.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls.pdf/"
          },
          "08-io+syscalls-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code//"
            },
            "cp-example.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code/cp-example.c/"
            },
            "cp-example.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/08-io+syscalls-code/cp-example.c.html/"
            }
          },
          "09-posix.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix.pdf/"
          },
          "09-posix-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code//"
            },
            "readN.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code/readN.c/"
            },
            "readN.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/09-posix-code/readN.c.html/"
            }
          },
          "10-c++-intro.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro.pdf/"
          },
          "10-c++-intro-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/Makefile/"
            },
            "Makefile.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/Makefile.html/"
            },
            "concat.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/concat.cc/"
            },
            "concat.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/concat.cc.html/"
            },
            "echo.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echo.cc/"
            },
            "echo.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echo.cc.html/"
            },
            "echonum.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echonum.cc/"
            },
            "echonum.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/echonum.cc.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/extra-problems//"
              }
            },
            "helloworld.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.c/"
            },
            "helloworld.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.c.html/"
            },
            "helloworld.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.cc/"
            },
            "helloworld.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld.cc.html/"
            },
            "helloworld2.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld2.cc/"
            },
            "helloworld2.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld2.cc.html/"
            },
            "helloworld3.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld3.cc/"
            },
            "helloworld3.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/helloworld3.cc.html/"
            },
            "manip.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/manip.cc/"
            },
            "manip.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/manip.cc.html/"
            },
            "msg.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/msg.cc/"
            },
            "msg.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/10-c++-intro-code/msg.cc.html/"
            }
          },
          "11-c++-refs-const-classes.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes.pdf/"
          },
          "11-c++-refs-const-classes-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Makefile/"
            },
            "Point.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.cc/"
            },
            "Point.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.cc.html/"
            },
            "Point.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.h/"
            },
            "Point.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/Point.h.html/"
            },
            "brokenpassbyrefconst.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/brokenpassbyrefconst.cc/"
            },
            "brokenpassbyrefconst.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/brokenpassbyrefconst.cc.html/"
            },
            "constmadness.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/constmadness.cc/"
            },
            "constmadness.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/constmadness.cc.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/extra-problems//"
              }
            },
            "passbyreference.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/passbyreference.cc/"
            },
            "passbyreference.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/passbyreference.cc.html/"
            },
            "pointer.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/pointer.cc/"
            },
            "pointer.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/pointer.cc.html/"
            },
            "reference.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/reference.cc/"
            },
            "reference.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/reference.cc.html/"
            },
            "styleguide.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/styleguide.cc/"
            },
            "styleguide.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/styleguide.cc.html/"
            },
            "test.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/test.cc/"
            },
            "test.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/test.cc.html/"
            },
            "usepoint.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/usepoint.cc/"
            },
            "usepoint.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/11-c++-refs-const-classes-code/usepoint.cc.html/"
            }
          },
          "12-c++-ctr-insanity.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity.pdf/"
          },
          "12-c++-ctr-insanity-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Makefile/"
            },
            "Point.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.cc/"
            },
            "Point.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.cc.html/"
            },
            "Point.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.h/"
            },
            "Point.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Point.h.html/"
            },
            "SimplePoint": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint/"
            },
            "SimplePoint.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.cc/"
            },
            "SimplePoint.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.cc.html/"
            },
            "SimplePoint.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.h/"
            },
            "SimplePoint.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/SimplePoint.h.html/"
            },
            "Triangle.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.cc/"
            },
            "Triangle.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.cc.html/"
            },
            "Triangle.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.h/"
            },
            "Triangle.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/Triangle.h.html/"
            },
            "complex_example": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example//"
              },
              "Complex.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.cc/"
              },
              "Complex.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.cc.html/"
              },
              "Complex.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.h/"
              },
              "Complex.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Complex.h.html/"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Makefile/"
              },
              "Makefile.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/Makefile.html/"
              },
              "testcomplex.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/testcomplex.cc/"
              },
              "testcomplex.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/complex_example/testcomplex.cc.html/"
              }
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/extra-problems//"
              }
            },
            "test": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/test/"
            },
            "test.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/test.cc/"
            },
            "test.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/12-c++-ctr-insanity-code/test.cc.html/"
            }
          },
          "13-c++-details+heap.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap.pdf/"
          },
          "13-c++-details+heap-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Makefile/"
            },
            "Point.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.cc/"
            },
            "Point.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.cc.html/"
            },
            "Point.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.h/"
            },
            "Point.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point.h.html/"
            },
            "Point_2011.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.cc/"
            },
            "Point_2011.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.cc.html/"
            },
            "Point_2011.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.h/"
            },
            "Point_2011.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/Point_2011.h.html/"
            },
            "arrays.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/arrays.cc/"
            },
            "arrays.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/arrays.cc.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/extra-problems//"
              }
            },
            "heappoint.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/heappoint.cc/"
            },
            "heappoint.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/heappoint.cc.html/"
            },
            "sanepoint.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint.cc/"
            },
            "sanepoint.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint.cc.html/"
            },
            "sanepoint_2011.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint_2011.cc/"
            },
            "sanepoint_2011.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/sanepoint_2011.cc.html/"
            },
            "str": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str//"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Makefile/"
              },
              "Str.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.cc/"
              },
              "Str.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.cc.html/"
              },
              "Str.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.h/"
              },
              "Str.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/Str.h.html/"
              },
              "strtest.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/strtest.cc/"
              },
              "strtest.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/13-c++-details+heap-code/str/strtest.cc.html/"
              }
            }
          },
          "14-c++-templates.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates.pdf/"
          },
          "14-c++-templates-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Makefile/"
            },
            "Pair.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.cc/"
            },
            "Pair.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.cc.html/"
            },
            "Pair.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.h/"
            },
            "Pair.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/Pair.h.html/"
            },
            "compare_problem": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem//"
              },
              "compare.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.cc/"
              },
              "compare.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.cc.html/"
              },
              "compare.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.h/"
              },
              "compare.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/compare.h.html/"
              },
              "main.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/main.cc/"
              },
              "main.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_problem/main.cc.html/"
              }
            },
            "compare_soln_one": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one//"
              },
              "compare.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/compare.h/"
              },
              "compare.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/compare.h.html/"
              },
              "main.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/main.cc/"
              },
              "main.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_one/main.cc.html/"
              }
            },
            "compare_soln_two": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two//"
              },
              "compare.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.cc/"
              },
              "compare.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.cc.html/"
              },
              "compare.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.h/"
              },
              "compare.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/compare.h.html/"
              },
              "main.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/main.cc/"
              },
              "main.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/compare_soln_two/main.cc.html/"
              }
            },
            "functiontemplate.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate.cc/"
            },
            "functiontemplate.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate.cc.html/"
            },
            "functiontemplate_infer.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate_infer.cc/"
            },
            "functiontemplate_infer.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/functiontemplate_infer.cc.html/"
            },
            "usepair.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/usepair.cc/"
            },
            "usepair.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/usepair.cc.html/"
            },
            "valuetemplate.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/valuetemplate.cc/"
            },
            "valuetemplate.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/14-c++-templates-code/valuetemplate.cc.html/"
            }
          },
          "15-c++-STL.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL.pdf/"
          },
          "15-c++-STL-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Makefile/"
            },
            "Tracer.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.cc/"
            },
            "Tracer.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.cc.html/"
            },
            "Tracer.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.h/"
            },
            "Tracer.h.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/Tracer.h.html/"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems//"
              },
              "extra1.cc": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra1.cc/"
              },
              "extra1.cc.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra1.cc.html/"
              },
              "extra2": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/",
                "": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2//"
                },
                "GetWord.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.cc/"
                },
                "GetWord.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.cc.html/"
                },
                "GetWord.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.h/"
                },
                "GetWord.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/GetWord.h.html/"
                },
                "Histogram.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.cc/"
                },
                "Histogram.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.cc.html/"
                },
                "Histogram.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.h/"
                },
                "Histogram.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Histogram.h.html/"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Makefile/"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/Makefile.html/"
                },
                "extra2.cc": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/extra2.cc/"
                },
                "extra2.cc.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/extra-problems/extra2/extra2.cc.html/"
                }
              }
            },
            "listexample.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/listexample.cc/"
            },
            "listexample.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/listexample.cc.html/"
            },
            "mapexample.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/mapexample.cc/"
            },
            "mapexample.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/mapexample.cc.html/"
            },
            "test.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/test.cc/"
            },
            "test.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/test.cc.html/"
            },
            "vectoralgos.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoralgos.cc/"
            },
            "vectoralgos.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoralgos.cc.html/"
            },
            "vectorcap.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorcap.cc/"
            },
            "vectorcap.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorcap.cc.html/"
            },
            "vectorfun.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorfun.cc/"
            },
            "vectorfun.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectorfun.cc.html/"
            },
            "vectoriterator.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator.cc/"
            },
            "vectoriterator.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator.cc.html/"
            },
            "vectoriterator_2011.cc": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator_2011.cc/"
            },
            "vectoriterator_2011.cc.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/15-c++-STL-code/vectoriterator_2011.cc.html/"
            }
          },
          "": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures//"
          },
          "extra-problems": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/extra-problems/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/extra-problems//"
            }
          },
          "talk": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/talk/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/talk//"
            }
          },
          "arraycopy.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/arraycopy.c/"
          },
          "arraycopy.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/arraycopy.c.html/"
          },
          "complexstruct.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/complexstruct.c/"
          },
          "complexstruct.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/complexstruct.c.html/"
          },
          "leaky.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/leaky.c/"
          },
          "leaky.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/leaky.c.html/"
          },
          "memcorrupt.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/memcorrupt.c/"
          },
          "memcorrupt.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/memcorrupt.c.html/"
          },
          "segfault.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/segfault.c/"
          },
          "segfault.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/segfault.c.html/"
          },
          "simplestruct.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/simplestruct.c/"
          },
          "simplestruct.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/simplestruct.c.html/"
          },
          "structarg.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/structarg.c/"
          },
          "structarg.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/structarg.c.html/"
          },
          "structassign.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/structassign.c/"
          },
          "structassign.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/structassign.c.html/"
          },
          "boxarrow.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/boxarrow.c/"
          },
          "boxarrow.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/boxarrow.c.html/"
          },
          "boxarrow2.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/boxarrow2.c/"
          },
          "boxarrow2.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/boxarrow2.c.html/"
          },
          "brokenswap.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/brokenswap.c/"
          },
          "brokenswap.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/brokenswap.c.html/"
          },
          "map.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/map.c/"
          },
          "map.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/map.c.html/"
          },
          "pointerarithmetic.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/pointerarithmetic.c/"
          },
          "pointerarithmetic.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/pointerarithmetic.c.html/"
          },
          "swap.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/swap.c/"
          },
          "swap.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/swap.c.html/"
          },
          "Makefile": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Makefile/"
          },
          "Point.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point.cc/"
          },
          "Point.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point.cc.html/"
          },
          "Point.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point.h/"
          },
          "Point.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point.h.html/"
          },
          "Point_2011.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point_2011.cc/"
          },
          "Point_2011.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point_2011.cc.html/"
          },
          "Point_2011.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point_2011.h/"
          },
          "Point_2011.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Point_2011.h.html/"
          },
          "arrays.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/arrays.cc/"
          },
          "arrays.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/arrays.cc.html/"
          },
          "heappoint.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/heappoint.cc/"
          },
          "heappoint.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/heappoint.cc.html/"
          },
          "sanepoint.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sanepoint.cc/"
          },
          "sanepoint.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sanepoint.cc.html/"
          },
          "sanepoint_2011.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sanepoint_2011.cc/"
          },
          "sanepoint_2011.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sanepoint_2011.cc.html/"
          },
          "str": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/str/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/str//"
            }
          },
          "Makefile.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Makefile.html/"
          },
          "concat.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/concat.cc/"
          },
          "concat.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/concat.cc.html/"
          },
          "echo.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/echo.cc/"
          },
          "echo.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/echo.cc.html/"
          },
          "echonum.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/echonum.cc/"
          },
          "echonum.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/echonum.cc.html/"
          },
          "helloworld.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld.c/"
          },
          "helloworld.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld.c.html/"
          },
          "helloworld.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld.cc/"
          },
          "helloworld.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld.cc.html/"
          },
          "helloworld2.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld2.cc/"
          },
          "helloworld2.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld2.cc.html/"
          },
          "helloworld3.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld3.cc/"
          },
          "helloworld3.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/helloworld3.cc.html/"
          },
          "manip.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/manip.cc/"
          },
          "manip.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/manip.cc.html/"
          },
          "msg.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/msg.cc/"
          },
          "msg.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/msg.cc.html/"
          },
          "condcomp.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/condcomp.c/"
          },
          "condcomp.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/condcomp.c.html/"
          },
          "external_linkage": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/external_linkage/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/external_linkage//"
            }
          },
          "external_static_functions": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/external_static_functions/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/external_static_functions//"
            }
          },
          "ifdef.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/ifdef.c/"
          },
          "ifdef.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/ifdef.c.html/"
          },
          "include_problem": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/include_problem/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/include_problem//"
            }
          },
          "include_solution": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/include_solution/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/include_solution//"
            }
          },
          "internal_linkage": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/internal_linkage/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/internal_linkage//"
            }
          },
          "static_extent.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/static_extent.c/"
          },
          "static_extent.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/static_extent.c.html/"
          },
          "Tracer.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Tracer.cc/"
          },
          "Tracer.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Tracer.cc.html/"
          },
          "Tracer.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Tracer.h/"
          },
          "Tracer.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Tracer.h.html/"
          },
          "listexample.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/listexample.cc/"
          },
          "listexample.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/listexample.cc.html/"
          },
          "mapexample.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/mapexample.cc/"
          },
          "mapexample.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/mapexample.cc.html/"
          },
          "test.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/test.cc/"
          },
          "test.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/test.cc.html/"
          },
          "vectoralgos.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectoralgos.cc/"
          },
          "vectoralgos.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectoralgos.cc.html/"
          },
          "vectorcap.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectorcap.cc/"
          },
          "vectorcap.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectorcap.cc.html/"
          },
          "vectorfun.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectorfun.cc/"
          },
          "vectorfun.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectorfun.cc.html/"
          },
          "vectoriterator.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectoriterator.cc/"
          },
          "vectoriterator.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectoriterator.cc.html/"
          },
          "vectoriterator_2011.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectoriterator_2011.cc/"
          },
          "vectoriterator_2011.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vectoriterator_2011.cc.html/"
          },
          "cpp_example.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/cpp_example.c/"
          },
          "cpp_example.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/cpp_example.c.html/"
          },
          "cpp_example.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/cpp_example.h/"
          },
          "cpp_example.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/cpp_example.h.html/"
          },
          "example_ll_customer.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/example_ll_customer.c/"
          },
          "example_ll_customer.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/example_ll_customer.c.html/"
          },
          "ll.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/ll.c/"
          },
          "ll.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/ll.c.html/"
          },
          "ll.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/ll.h/"
          },
          "ll.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/ll.h.html/"
          },
          "magic.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/magic.c/"
          },
          "magic.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/magic.c.html/"
          },
          "manual_list.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/manual_list.c/"
          },
          "manual_list.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/manual_list.c.html/"
          },
          "manual_list_void.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/manual_list_void.c/"
          },
          "manual_list_void.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/manual_list_void.c.html/"
          },
          "push_list.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/push_list.c/"
          },
          "push_list.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/push_list.c.html/"
          },
          "push_list2.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/push_list2.c/"
          },
          "push_list2.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/push_list2.c.html/"
          },
          "push_list3.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/push_list3.c/"
          },
          "push_list3.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/push_list3.c.html/"
          },
          "brokenpassbyrefconst.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/brokenpassbyrefconst.cc/"
          },
          "brokenpassbyrefconst.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/brokenpassbyrefconst.cc.html/"
          },
          "constmadness.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/constmadness.cc/"
          },
          "constmadness.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/constmadness.cc.html/"
          },
          "passbyreference.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/passbyreference.cc/"
          },
          "passbyreference.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/passbyreference.cc.html/"
          },
          "pointer.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/pointer.cc/"
          },
          "pointer.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/pointer.cc.html/"
          },
          "reference.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/reference.cc/"
          },
          "reference.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/reference.cc.html/"
          },
          "styleguide.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/styleguide.cc/"
          },
          "styleguide.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/styleguide.cc.html/"
          },
          "usepoint.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/usepoint.cc/"
          },
          "usepoint.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/usepoint.cc.html/"
          },
          "SimplePoint": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/SimplePoint/"
          },
          "SimplePoint.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/SimplePoint.cc/"
          },
          "SimplePoint.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/SimplePoint.cc.html/"
          },
          "SimplePoint.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/SimplePoint.h/"
          },
          "SimplePoint.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/SimplePoint.h.html/"
          },
          "Triangle.cc": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Triangle.cc/"
          },
          "Triangle.cc.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Triangle.cc.html/"
          },
          "Triangle.h": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Triangle.h/"
          },
          "Triangle.h.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/Triangle.h.html/"
          },
          "complex_example": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/complex_example/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/complex_example//"
            }
          },
          "test": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/test/"
          },
          "arraysum.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/arraysum.c/"
          },
          "arraysum.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/arraysum.c.html/"
          },
          "buggy_copyarray.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/buggy_copyarray.c/"
          },
          "buggy_copyarray.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/buggy_copyarray.c.html/"
          },
          "copyarray.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/copyarray.c/"
          },
          "copyarray.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/copyarray.c.html/"
          },
          "outparam.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/outparam.c/"
          },
          "outparam.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/outparam.c.html/"
          },
          "pointy.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/pointy.c/"
          },
          "pointy.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/pointy.c.html/"
          },
          "stack.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/stack.c/"
          },
          "stack.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/stack.c.html/"
          },
          "vla.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vla.c/"
          },
          "vla.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/vla.c.html/"
          },
          "args.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/args.c/"
          },
          "args.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/args.c.html/"
          },
          "sum_badorder.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sum_badorder.c/"
          },
          "sum_badorder.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sum_badorder.c.html/"
          },
          "sum_betterorder.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sum_betterorder.c/"
          },
          "sum_betterorder.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sum_betterorder.c.html/"
          },
          "sum_declared.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sum_declared.c/"
          },
          "sum_declared.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sum_declared.c.html/"
          },
          "sumnum.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sumnum.c/"
          },
          "sumnum.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sumnum.c.html/"
          },
          "sumstore.c": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sumstore.c/"
          },
          "sumstore.c.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/lectures/sumstore.c.html/"
          }
        },
        "exercises": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/",
          "ex00.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex00.html/"
          },
          "ex01.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex01.html/"
          },
          "ex02.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex02.html/"
          },
          "ex03.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex03.html/"
          },
          "ex04.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex04.html/"
          },
          "ex05.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex05.html/"
          },
          "ex06.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex06.html/"
          },
          "ex07.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex07.html/"
          },
          "ex08.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex08.html/"
          },
          "ex08_5.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex08_5.html/"
          },
          "ex09.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex09.html/"
          },
          "ex10.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex10.html/"
          },
          "ex14_5.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/exercises/ex14_5.html/"
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
          "sec01-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec01-slides.pdf/"
          },
          "sec01-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec01-worksheet.pdf/"
          },
          "sec01-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec01-worksheet-soln.pdf/"
          },
          "sec02-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-slides.pdf/"
          },
          "sec02-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-worksheet.pdf/"
          },
          "sec02-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-worksheet-soln.pdf/"
          },
          "sec02-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code//"
            },
            "reverse.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse.c/"
            },
            "reverse.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse.c.html/"
            },
            "reverse_soln.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse_soln.c/"
            },
            "reverse_soln.c.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec02-code/reverse_soln.c.html/"
            }
          },
          "sec03-24sp-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-24sp-slides.pdf/"
          },
          "sec03-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-worksheet.pdf/"
          },
          "sec03-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-worksheet-soln.pdf/"
          },
          "sec03-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code//"
            },
            "Makefile": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/Makefile/"
            },
            "fib.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/fib.c/"
            },
            "fib.h": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/fib.h/"
            },
            "main.c": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-code/main.c/"
            }
          },
          "sec04-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-slides.pdf/"
          },
          "sec04-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-worksheet.pdf/"
          },
          "sec04-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-worksheet-soln.pdf/"
          },
          "": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections//"
          },
          "sec03-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec03-slides.pdf/"
          },
          "sec04-c-make-code": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/",
            "": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code//"
            },
            "extra-problems": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems//"
              },
              "extra1": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/",
                "": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1//"
                },
                "Makefile": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/Makefile/"
                },
                "Makefile.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/Makefile.html/"
                },
                "example_ll_customer.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/example_ll_customer.c/"
                },
                "example_ll_customer.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/example_ll_customer.c.html/"
                },
                "ll.c": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.c/"
                },
                "ll.c.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.c.html/"
                },
                "ll.h": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.h/"
                },
                "ll.h.html": {
                  "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/extra-problems/extra1/ll.h.html/"
                }
              }
            },
            "talk": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/",
              "": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk//"
              },
              "Makefile": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/Makefile/"
              },
              "Makefile.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/Makefile.html/"
              },
              "main.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/main.c/"
              },
              "main.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/main.c.html/"
              },
              "shout.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.c/"
              },
              "shout.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.c.html/"
              },
              "shout.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.h/"
              },
              "shout.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/shout.h.html/"
              },
              "speak.c": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.c/"
              },
              "speak.c.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.c.html/"
              },
              "speak.h": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.h/"
              },
              "speak.h.html": {
                "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make-code/talk/speak.h.html/"
              }
            }
          },
          "sec04-c-make.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec04-c-make.pdf/"
          },
          "sec05-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec05-slides.pdf/"
          },
          "sec05-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec05-worksheet-soln.pdf/"
          },
          "sec05-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec05-worksheet.pdf/"
          },
          "sec07-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07-slides.pdf/"
          },
          "sec07-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07-worksheet-soln.pdf/"
          },
          "sec07-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07-worksheet.pdf/"
          },
          "sec07.idx": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec07.idx/"
          },
          "sec08-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec08-slides.pdf/"
          },
          "sec08-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec08-worksheet-soln.pdf/"
          },
          "sec08-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec08-worksheet.pdf/"
          },
          "sec09-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec09-slides.pdf/"
          },
          "sec09-worksheet-soln.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec09-worksheet-soln.pdf/"
          },
          "sec09-worksheet.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec09-worksheet.pdf/"
          },
          "sec10-slides.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/sections/sec10-slides.pdf/"
          }
        },
        "hw": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/",
          "hw0": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw0/",
            "hw0.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw0/hw0.html/"
            }
          },
          "hw1": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/",
            "hw1.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw1/hw1.html/"
            }
          },
          "hw2": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/",
            "hw2.html": {
              "url": "https://courses.cs.washington.edu/courses/cse333/24sp/hw/hw2/hw2.html/"
            }
          }
        },
        "resources.html": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources.html/"
        },
        "resources": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/",
          "VSCode.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/VSCode.pdf/"
          },
          "SCP.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/SCP.pdf/"
          },
          "vimcheatsheet.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/vimcheatsheet.html/"
          },
          "vimrc.txt": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/vimrc.txt/"
          },
          "git_tutorial.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html/"
          },
          "cpplint.py": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/cpplint.py/"
          },
          "cpplint-usage.html": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/cpplint-usage.html/"
          },
          "gdb-refcard.pdf": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/gdb-refcard.pdf/"
          },
          "git_tutorial.html#git-setup": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html#git-setup/"
          },
          "git_tutorial.html#git-workflow": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html#git-workflow/"
          },
          "git_tutorial.html#updating-repo": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html#updating-repo/"
          },
          "git_tutorial.html#recovery": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html#recovery/"
          },
          "git_tutorial.html#tags": {
            "url": "https://courses.cs.washington.edu/courses/cse333/24sp/resources/git_tutorial.html#tags/"
          }
        },
        "": {
          "url": "https://courses.cs.washington.edu/courses/cse333/24sp//"
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