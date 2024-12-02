import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Header />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;