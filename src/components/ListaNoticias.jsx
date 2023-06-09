import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <div>
      {noticias.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListaNoticias;