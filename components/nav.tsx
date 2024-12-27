import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold">
            Codemod
          </Link>
          <div className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#benefits" className="text-sm text-zinc-400 transition-colors hover:text-white">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm text-zinc-400 transition-colors hover:text-white">
              Testimonials
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button className="bg-white text-black hover:bg-zinc-200" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

