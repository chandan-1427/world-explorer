import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Countries", path: "/countries" },
    { name: "About", path: "/about" },
  ];

  const linkBase = "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out";
  const linkActive = "text-blue-600 bg-blue-50 shadow-sm ring-1 ring-blue-100";
  const linkInactive = "text-gray-600 hover:text-blue-600 hover:bg-gray-50";

  return (
    <header className="relative bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center group">
            <span className="font-black text-2xl tracking-wide text-gray-900 transition-transform group-hover:opacity-90">
              GraphQL<span className="text-blue-600">Explorer</span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-50 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full ${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}