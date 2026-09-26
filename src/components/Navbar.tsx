import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  // Whether the mobile dropdown menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  const authButtons = (
    <div className="flex items-center gap-3">
      <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
        Sign In
      </button>
      <button className="brand-gradient-bg rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
        Sign Up
      </button>
    </div>
  )

  const logo = (
    <a href="#" className="flex items-center">
      <img
        src={`${import.meta.env.BASE_URL}assets/logo-text.png`}
        alt="Dev Stack"
        className="h-8"
      />
    </a>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Desktop layout: logo left, links centered, auth buttons right */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-4 md:flex">
        {logo}

        <nav className="flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link, index) => (
            
              key={link}
              href="#"
              className={
                index === 0
                  ? 'text-pink-500'
                  : 'text-gray-700 transition hover:text-pink-500'
              }
            >
              {link}
            </a>
          ))}
        </nav>

        {authButtons}
      </div>

      {/* Mobile layout: hamburger left, logo centered, auth buttons right */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span className="h-0.5 w-5 bg-gray-800" />
          <span className="h-0.5 w-5 bg-gray-800" />
          <span className="h-0.5 w-5 bg-gray-800" />
        </button>

        {logo}

        {authButtons}
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-200 px-4 py-3 md:hidden">
          {NAV_LINKS.map((link, index) => (
            
              key={link}
              href="#"
              className={
                index === 0
                  ? 'rounded-md px-2 py-2 text-sm font-medium text-pink-500'
                  : 'rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
              }
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
