'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Dashboard', href: '/products' },
    { name: 'Relatórios', href: '/metrics' },
    { name: 'Cadastre-se', href: '/singin' },
    { name: 'Login', href: '/login' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                TechTest
              </span>
            </div>

            <div className="hidden md:ml-8 md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300" target='_blank'>Samuel Santana da Silva</a>
                <a href="https://www.linkedin.com/in/samuelsantana-dev" className="text-gray-600 hover:text-blue-600 dark:text-gray-300" target='_blank'>Linkedin</a>
                <a href="https://github.com/samuelsantana-dev" className="text-gray-600 hover:text-blue-600 dark:text-gray-300" target='_blank'>GitHub</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {!isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="mt-3 px-2 space-y-1 flex flex-col">
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300" target='_blank'>Samuel Santana da Silva</a>
                <a href="https://www.linkedin.com/in/samuelsantana-dev" className="text-gray-600 hover:text-blue-600 dark:text-gray-300" target='_blank'>Linkedin</a>
                <a href="https://github.com/samuelsantana-dev" className="text-gray-600 hover:text-blue-600 dark:text-gray-300" target='_blank'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}