import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';
import ScrollToTop from 'react-scroll-to-top';
import colors from './utils/style/colors';
import AnimatedRoutes from './AnimatedRoutes';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />

        <ScrollToTop smooth title='Remonter' style={{background: `${colors.color14}`, zIndex: 20, bottom: "1rem"}} />
        
        <Header />

        <AnimatedRoutes />

        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

