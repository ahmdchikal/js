import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About Me" subtitle="Perkenalan singkat tentang saya.">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              I am Ahmad Chikal, a Bachelor of Informatics graduate from Universitas Teknokrat Indonesia, with strong interest and focus in Web Development, Data Processing, IT Support, and 3D Design. Throughout my academic journey, I actively developed both technical and creative skills through academic projects, hands-on experience, and self-learning.

I am recognized as a fast learner who adapts quickly to new technologies, with strong analytical and problem-solving abilities, and capable of working effectively in both team environments and independent settings. Additionally, I am creative in developing innovative solutions, particularly when facing technical challenges or design requirements.

I am passionate about continuing to grow in the technology field, contributing to a professional environment, and ready to take on new challenges to deliver positive impact through my skills in software development, data management, IT support, and 3D visualization.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Kemampuan teknis utama yang saya miliki.">
          <Skills />
        </Section>

        <Section id="experience" title="Experience" subtitle="Pengalaman relevan yang pernah saya jalani.">
          <Experience />
        </Section>

        <Section id="projects" title="Projects" subtitle="Beberapa karya dan eksplorasi yang pernah saya buat.">
          <Projects />
        </Section>

        <Section id="contact" title="Contact" subtitle="Tertarik bekerjasama? Silakan hubungi saya.">
          <Contact />
        </Section>
      </main>
      <footer className="py-10 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-600 dark:text-slate-400">
          © {new Date().getFullYear()} Ahmad Chikal. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
