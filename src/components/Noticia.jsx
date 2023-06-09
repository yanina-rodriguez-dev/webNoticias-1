import React from "react";


const Noticia = ({ noticia }) => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text>{noticia.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  export default Noticia;