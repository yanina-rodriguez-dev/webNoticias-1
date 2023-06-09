import Card from 'react-bootstrap/Card';

const Noticia = ({ noticia }) => {
    return (
      
        <Card.Body>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text>{noticia.description}</Card.Text>
        </Card.Body>
    );
  };
  export default Noticia;