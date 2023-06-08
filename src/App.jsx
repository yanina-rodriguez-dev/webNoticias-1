import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo"
import Formulario from "./components/Formulario"
import ListaNoticias from "./components/ListaNoticias";

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <Formulario></Formulario>
        <ListaNoticias></ListaNoticias>
      </Container>
    </>
  );
}

export default App;
