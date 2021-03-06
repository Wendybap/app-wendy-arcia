import React from "react";
import Item from "../Components/Item";
import { Col } from "react-bootstrap";

export default function ItemList({ productos }) {
  return productos.map((producto) => (
    <Col className="mb-4">
      <Item
        key={producto.id}
        id={producto.id}
        nombre={producto.nombre}
        precio={producto.precio}
        leyenda={producto.leyenda}
        categoria={producto.categoria}
        imagen={producto.imagen}
      />
    </Col>
  ));
}
