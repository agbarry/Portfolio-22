import { Route, Routes, useLocation } from "react-router-dom";
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import Contact from './pages/Contact';
import Error from './components/Error';
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
    const location = useLocation();

    return ( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}> </Route>
            <Route path="/formation" element={<Education />}> </Route>
            <Route path="/competences" element={<Knowledge />}> </Route>
            <Route path="/experiences" element={<Experience />}> </Route>
            <Route path="/a_propos" element={<About />}> </Route>
            <Route path="/contact" element={<Contact />}> </Route>
            <Route path="/*" element={<Error />}> </Route>
            </Routes>
        </AnimatePresence>
     );
}

export default AnimatedRoutes;