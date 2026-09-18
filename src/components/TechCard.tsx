import type { Technology } from '../types'

// A handful of soft pastel tones the badge cycles through, keyed by badge
// text so the same badge word always gets the same color.
const BADGE_STYLES = [
  'bg-blue-50 text-blue-600',
  'bg-green-50 text-green-600',
  'bg-orange-50 text-orange-600',
  'bg-purple-50 text-purple-600',
  'bg-pink-50 text-pink-600',
  'bg-gray-100 text-gray-600',
]

function badgeStyleFor(badge: string) {
  let hash = 0
  for (let i = 0; i < badge.length; i++) {
    hash = (hash + badge.charCodeAt(i)) % BADGE_STYLES.length
  }
  return BADGE_STYLES[hash]
}

interface TechCardProps {
  tech: Technology
  isSelected: boolean
  onAdd: (tech: Technology) => void
}

function TechCard({ tech, isSelected, onAdd }: TechCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50">
          <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeStyleFor(tech.badge)}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="font-semibold text-gray-900">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm text-gray-500">{tech.description}</p>

      <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
        <span className="rounded-full bg-gray-100 px-2 py-1 font-medium text-gray-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700">
          <span className="text-amber-400">★</span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        disabled={isSelected}
        onClick={() => onAdd(tech)}
        className={
          isSelected
            ? 'mt-4 w-full cursor-not-allowed rounded-lg bg-gray-100 py-2 text-sm font-medium text-gray-400'
            : 'mt-4 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition hover:bg-black'
        }
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechCard
