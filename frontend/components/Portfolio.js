'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, FileText, ChevronDown, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const projects = [
  { name: "AirbnbData Analysis", image: "/marin.jpg ", link: "https://github.com/Amadeus415/airbnb-price-prediction?tab=readme-ov-file" },
  { name: "Iron man Analytics", image: "/ironman.jpg", link: "https://github.com/Amadeus415/analytics/tree/main/Ironman_analysis" },
  { name: "Crypto Algo(Coming Soon)", image: "/crypto.jpg", link: "#" },
  { name: "AI Nutrition App(Coming Soon)", image: "/food.jpg", link: "#" }
]

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowProjects(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <main className="w-full max-w-4xl mx-auto px-4">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center font-poppins bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text">
          Amadeus Colenbrander
        </h1>

        <div className="mb-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/amadeus-colenbrander-72112520a/" className="hover:text-blue-400 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/Amadeus415/Projects" className="hover:text-pink-600 transition-colors">
            <Github size={32} />
          </a>
        </div>

        

        <div className="flex flex-col space-y-4">
          <a href="/resume.pdf" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <FileText size={24} />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Resume</span>
            <span className="relative invisible">Resume</span>
          </a>
          
        <a
          href="mailto:amadeus.colenbrander@gmail.com"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
            <Mail size={24} />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">Contact</span>
          <span className="relative invisible">Contact</span>
        </a>
        </div>

        <button 
          onClick={scrollToProjects}
          className="mt-16 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

        {/*projects section*/}
      <section id="projects" className={`py-16 transition-opacity duration-1000 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-semibold mb-8 text-center font-poppins">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white text-center px-4">{project.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
          <p className="text-lg">
            I&apos;m currently working on projects involving machine learning, data analysis, and blockchain technology. 
            My goal is to create innovative solutions that leverage cutting-edge technologies to solve real-world problems.
          </p>
        </div>
      </section>

      {/*footer*/}
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Amadeus Colenbrander. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
