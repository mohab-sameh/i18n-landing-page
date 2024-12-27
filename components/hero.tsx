import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CompaniesCarousel } from './companies-carousel'

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-[75%_75%] transition-transform duration-300 ease-out group-hover:rotate-[20deg]"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-6 py-32">
        <div className="space-y-8 text-center">
          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            The platform for automating i18n code changes.
          </h1>
          <p className="mx-auto max-w-[42rem] text-lg text-zinc-400 sm:text-xl">
            Transform your codebase for internationalization with Codemod's automation platform, 
            removing hardcoded strings and adopting i18n SDKs in minutes.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 group" asChild>
            <Link href="/get-started" className="flex items-center">
              Start Automating
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/10 group" asChild>
            <Link href="/demo" className="flex items-center">
              Learn More
              <BookIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-16 w-full">
          <CompaniesCarousel />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 gradient-bg" />
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </div>
  )
}

