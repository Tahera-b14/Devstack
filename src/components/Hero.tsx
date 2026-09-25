interface HeroProps {
  onExplore: () => void
}

function Hero({ onExplore }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-4 max-w-md text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them side by
          side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onExplore}
            className="brand-gradient-bg rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore Technologies
          </button>
          <button
            type="button"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}assets/banner-stack.png`}
          alt="Isometric illustration of a layered development stack"
          className="w-64 md:w-80"
        />
      </div>
    </section>
  )
}

export default Hero
