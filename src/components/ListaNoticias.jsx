import { Card } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <div>
      {noticias.map((noticia) => (
        <Card key={noticia.id}>
          <Noticia noticia={noticia} />
        </Card>
      ))}
    </div>
  );
};

export default ListaNoticias;
