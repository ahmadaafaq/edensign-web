// import './MediaQueries.css';
import './App.css';
import React from "react";
import { ThemeProvider } from '@mui/material';
import Theme from './Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Salons from './pages/Salons';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div>
      <ThemeProvider theme={Theme}>
      <Router>
        <HeaderBar title="EDENSIGN" />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/edensign-web' element={ <Home />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/salons' element={ <Salons />}/>
          <Route path='/services' element={ <Services />}/>
          <Route path='/privacyPolicy' element={ <PrivacyPolicy />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/signup' element={ <Signup />}/>
        </Routes>
        <Footer />
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
