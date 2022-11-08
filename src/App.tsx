import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ThemeProvider from './Contexts/ThemeProvider';

function App() {
  useEffect(() => {
    if (localStorage.getItem('globalTheme') === null) {
      localStorage.setItem('globalTheme', 'light');
    }
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
