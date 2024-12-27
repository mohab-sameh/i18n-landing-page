export function VideoDemo() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Automate away tedious code changes for i18n adoption.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Replacing hardcoded strings is tedious, requiring updates to numeric conditions, string alternates, and interpolation. Free up your engineers' time and energy for building exciting features that drive the business forward.
          </p>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg bg-zinc-800">
          <video
            className="h-full w-full object-cover"
            controls
            poster="/placeholder.svg"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

