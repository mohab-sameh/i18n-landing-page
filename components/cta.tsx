import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-screen-xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Start migrating in seconds
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
          Save days of manual work by automating internationalization code changes using Codemod now.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-zinc-200 group" asChild>
          <Link href="/get-started" className="flex items-center">
            Start automating i18n
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

