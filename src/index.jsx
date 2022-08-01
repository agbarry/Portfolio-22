import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import Contact from './pages/Contact';
import './utils/style/styles.scss';
import { ThemeProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        
        <Header />

        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path="/formation" element={<Education />}> </Route>
          <Route path="/competences" element={<Knowledge />}> </Route>
          <Route path="/experiences" element={<Experience />}> </Route>
          <Route path="/a_propos" element={<About />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
        </Routes>

        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

