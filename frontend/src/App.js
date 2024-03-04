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
// import NotFound from './components/NotFound/NotFound'; // 
import Quiz from './components/Quiz/Quiz'; //
import { AuthProvider } from './contexts/AuthContext';
import Cart from './components/CartComp/Cart';
import SignUp from './components/User/SignUp';




function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <HeaderBar />
          <NavigationBar />
          <Routes> 
            <Route path="/" element={<MainPage />} />
            <Route path="/vitamins" element={<VitaminPage />} />
            <Route path="/health-wellbeing" element={<HealthWellbeingPage />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
