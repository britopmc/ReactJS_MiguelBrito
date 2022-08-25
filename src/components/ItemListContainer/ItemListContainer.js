
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Saludo(props) {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">BritoSpa</strong>
          </Toast.Header>
          <Toast.Body>Bienvenido a nuestra web {props.usuario[0]}!</Toast.Body>
        </Toast>
      </Col>

      <h1>Esta web esta en construccion, proximamente aca estaran nuestros productos en un contenedor muy diferente</h1>
    </Row>
  );
}

export default Saludo;