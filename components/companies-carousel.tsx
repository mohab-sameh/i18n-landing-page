'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const LOGOS = [
  {
    src: '/placeholder.svg',
    alt: 'Company 1',
    width: 120,
    height: 40
  },
  {
    src: '/placeholder.svg',
    alt: 'Company 2',
    width: 120,
    height: 40
  },
  {
    src: '/placeholder.svg',
    alt: 'Company 3',
    width: 120,
    height: 40
  },
  {
    src: '/placeholder.svg',
    alt: 'Company 4',
    width: 120,
    height: 40
  }
]

export function CompaniesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    const scrollerContent = Array.from(scrollerInnerRef.current.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="w-full max-w-[1000px] px-6 py-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs text-center sm:text-left">
            <h2 className="text-lg font-medium text-white">
              Optimized for open-source and trusted by thousands of progressive software teams.
            </h2>
          </div>
          <div
            ref={scrollerRef}
            className="w-full max-w-[600px] mask-gradient scroller"
          >
            <div
              ref={scrollerInnerRef}
              className="flex w-max gap-8 py-4"
            >
              {LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className="flex w-[120px] items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </div>
  )
}

