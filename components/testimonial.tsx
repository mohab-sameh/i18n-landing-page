import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function Testimonial() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-24">
      <Card className="overflow-hidden border-white/10 bg-zinc-900/50 backdrop-blur-sm">
        <div className="grid gap-8 p-8 sm:p-12 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <blockquote className="space-y-4">
              <p className="text-xl font-medium leading-relaxed text-white">
                "Switching to Codemod transformed our i18n workflow, cutting implementation time from 3 months to just 2 days. It didn't just speed us up; it changed how we approach internationalization."
              </p>
              <footer className="flex items-center gap-4">
                <div>
                  <div className="font-medium text-white">Engineering Lead</div>
                  <div className="text-sm text-zinc-400">Enterprise Company</div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="#case-study"
              className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Read Case Study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}

