import { useState } from "react";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const renderCurrentPage = () => {
    switch (currentPage){
      case "about":
        return <About/>;
      case "portfolio":
        return <Portfolio/>; 
      case "contact":
        return <Contact/>;   
      default:
        return; 
  };
}

  return (
    <>
    <Header setCurrentPage={setCurrentPage}/>
    {renderCurrentPage()}
    <Footer />
    </>

  );
}

export default App;
