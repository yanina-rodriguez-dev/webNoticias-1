import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form.Select aria-label="Seleccionar la opcion deseada">
        <option>Seleccionar la opcion deseada</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};

export default Formulario;
