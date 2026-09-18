import type { Technology } from '../types'

interface StackPanelProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function StackPanel({ stack, onRemove, onRemoveAll }: StackPanelProps) {
  const count = stack.length

  return (
    <aside className="sticky top-24 h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-gray-900">Your Stack</h3>
      <p className="mb-4 text-sm text-gray-400">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-200 px-4 py-8 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2"
            >
              <img src={tech.icon} alt={tech.name} className="h-6 w-6 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${tech.name} from stack`}
                onClick={() => onRemove(tech.id)}
                className="shrink-0 text-gray-400 transition hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}

export default StackPanel
