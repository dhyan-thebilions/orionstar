import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Download from "./components/Download";
import Footer from "./components/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "reactstrap/lib";

const App = () => {
  return (
    <React.Fragment>
      <div className="app-bg">
        <NavBar />
        <Banner />
        <Cards />
        <Download />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
