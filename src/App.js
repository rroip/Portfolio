import React, { useState } from "react";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Portfolio from './components/pages/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const renderCurrentPage = () => {
    switch (currentPage){
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />; 
      case "contact":
        return <Contact />;   
      default:
        return <About />;
  };
}

  return (
    <>
    <Header setCurrentPage={setCurrentPage} />
    {renderCurrentPage()}
    <Footer />
    </>

  );
}

export default App;
