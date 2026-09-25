import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCard from './components/TechCard'
import StackPanel from './components/StackPanel'
import Footer from './components/Footer'
import type { Technology } from './types'

function App() {
  // State: list of all technologies, loaded from JSON
  const [technologies, setTechnologies] = useState<Technology[]>([])
  // State: whether data is still loading
  const [loading, setLoading] = useState(true)
  // State: the user's currently selected stack
  const [stack, setStack] = useState<Technology[]>([])
  // State: search text typed by the user
  const [search, setSearch] = useState('')
  // Ref to the technologies section, used to scroll to it from the hero button
  const techSectionRef = useRef<HTMLDivElement>(null)

  // useEffect: runs once when the component mounts (empty dependency array).
  useEffect(() => {
    // BASE_URL is '/' in dev and '/Devstack/' on GitHub Pages
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: Technology[]) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        toast.error('Could not load technologies. Please try again later.')
      })
  }, [])

  function handleAdd(tech: Technology) {
    const alreadyAdded = stack.some((item) => item.id === tech.id)
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id: string) {
    const tech = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    setStack([])
    toast.info('Stack cleared.')
  }

  function scrollToTechnologies() {
    techSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const filteredTechnologies = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero onExplore={scrollToTechnologies} />

      <main ref={techSectionRef} className="mx-auto max-w-7xl px-4 pb-16 scroll-mt-24">
        <div className="mx-auto mb-8 max-w-md px-4">
          <input
            type="text"
            placeholder="Search technologies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <h2 className="mb-1 text-2xl font-bold">
              Explore the <span className="text-pink-500">Technologies</span>
            </h2>
            <p className="mb-6 text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>

            {loading ? (
              <p className="text-gray-400">Loading technologies...</p>
            ) : filteredTechnologies.length === 0 ? (
              <p className="text-gray-400">No technologies match your search.</p>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTechnologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isSelected={stack.some((item) => item.id === tech.id)}
                    onAdd={handleAdd}
                  />
                ))}
              </div>
            )}
          </div>

          <StackPanel stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App