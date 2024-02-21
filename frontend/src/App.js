import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/HeaderBar/HeaderBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage'; // 
import VitaminPage from './components/VitaminPage/VitaminPage'; // 
import HealthWellbeingPage from './components/HealthWellbeingPage/HealthWellbeingPage';// 
import Blog from './components/Blog/Blog'; // 
import NotFound from './components/NotFound/NotFound'; // 
import Quiz from './components/Quiz/Quiz'; //



function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar />
        <NavigationBar />
        <Routes> 
          <Route path="/" exact component={MainPage} />
          <Route path="/vitamins" exact component={VitaminPage} />
          <Route path="/health-wellbeing" exact component={HealthWellbeingPage} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
