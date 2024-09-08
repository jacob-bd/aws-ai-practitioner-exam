import '../styles/globals.css';
import { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <AnimatedBackground />
      <div className="relative z-10 bg-opacity-90 bg-white dark:bg-opacity-90 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <nav className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1"></div>
              <div className="flex-1 flex justify-center">
                <h1 className="text-xl font-bold text-orange-dark dark:text-orange-light text-center">
                  The unofficial AWS AI Practitioner Prep Exam
                </h1>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <span className="text-sm mr-2 text-orange-dark dark:text-orange-light">Dark Mode</span>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 relative z-10">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default MyApp;