import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Codemod's i18n automation saved us months of manual work. What would have taken our team 12 weeks was completed in just days.",
    author: "Jane Doe",
    title: "CTO",
    company: "Tech Innovators Inc."
  },
  {
    quote: "The precision and speed of Codemod's i18n automation tool are unmatched. It's become an essential part of our development workflow.",
    author: "John Smith",
    title: "Lead Developer",
    company: "Global Software Solutions"
  },
  {
    quote: "Codemod has revolutionized how we approach internationalization. It's not just a time-saver; it's a game-changer for our global expansion.",
    author: "Emily Johnson",
    title: "Product Manager",
    company: "Worldwide Apps Ltd."
  }
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          What our customers are saying
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700">
              <CardContent className="p-6">
                <blockquote className="mb-4 text-lg text-zinc-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-zinc-400">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p>{testimonial.title}, {testimonial.company}</p>
                </div>
              </CardContent>
              <div className="absolute inset-0 rounded-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

