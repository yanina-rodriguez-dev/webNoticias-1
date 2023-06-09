import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {

  return (
    <>
      <Container>
        <Titulo />
        <Formulario/>
       
      </Container>
    </>
  );
}

export default App;
