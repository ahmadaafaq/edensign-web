import './App.css';
// import './MediaQueries.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div>
      <Router>
        <HeaderBar title="EDENSIGN" />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/edensign-web' element={ <Home />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/services' element={ <Services />}/>
          <Route path='/privacyPolicy' element={ <PrivacyPolicy />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/signup' element={ <Signup />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
