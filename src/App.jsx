import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';

// 懒加载组件
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// 加载占位组件
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function AppContent() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ScrollProgress />
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <main className="relative">
            <section id="hero">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="projects" className="min-h-screen py-20">
              <Projects />
            </section>
            
            <Contact />
            
            <footer className="bg-gray-900 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Fanyuansheng.top All rights reserved.
                </p>
              </div>
            </footer>
            
            <BackToTop />
          </main>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App; 