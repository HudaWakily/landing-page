import React from "react";
import Autoras from "./components/Autoras";
import Home from "./components/Home";
import Parceiros from "./components/Parceiros";
import Patrocinador from "./components/Patrocinador";
import "./index.css";





function App() {
  return (
    <div className="App">
      <section id="home">
           <Home /> 
      </section>
      <section id="autoras"> 
        <Autoras />
      </section>
      
      <section id="parceiros">
        <Parceiros />


      </section>
      <section id="patrocinador" className="pt-[80px] lg:pt-[150px]">
        <Patrocinador />

  </section>

    </div>
  )
};


export default App;










