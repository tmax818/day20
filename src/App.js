import React from 'react';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
