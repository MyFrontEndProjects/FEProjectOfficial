import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Header from "containers/home/Header";

import RouteContent from './components/RouteContent';

function App() {
  return (
    <>
      <Header />
      <RouteContent />
      
    </>
  );
}

export default App;
