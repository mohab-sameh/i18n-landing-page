import { Hero } from '@/components/hero'
import { Nav } from '@/components/nav'
import { VideoDemo } from '@/components/video-demo'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Divider } from '@/components/divider'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <Divider />
      <VideoDemo />
      <Divider />
      <Testimonials />
      <Divider />
      <CTA />
    </div>
  )
}

