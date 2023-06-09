import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [categoria, setCategoria] = useState("")
   const [noticia, setNoticia]= useState([]);
useEffect(()=> {
consultarAPI()
}, [categoria])

const consultarAPI = async ()=>{
  try{
    const pedido  = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_241791243e299a9c8d7428add6b2caa8bc98e&${categoria || "food"}&language=es`
      );
      const respuesta = await pedido.json();
      setNoticia(respuesta.results)
    } catch (error){
      console.log(error)
    }
};

  return (
    <section>
      <Form.Select aria-label="Categoria" onChange={(e)=>{
       setCategoria(e.target.value);
      }}
      >
        <option value="">Seleccionar categoria deseada</option>
        <option value="sports">Deportes</option>
        <option value="tecnology">Tecnologia</option>
        <option value="food">Comida</option>
        <option value="Csience">Ciencia</option>
      </Form.Select>
      <ListaNoticias noticias={noticia}></ListaNoticias>
    </section>
  );
};

export default Formulario;
