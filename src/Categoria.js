import React, { useState, useEffect } from 'react';

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/categorias')
      .then(response => response.json())
      .then(data => setCategorias(data));
  }, []);

  return (
<div>
    <h2>Lista de categorías</h2>
    <table>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
        </tr>
        </thead>
        <tbody>
        {categorias.map((categoria, index) => (
            <tr key={categoria.id}>
            <th scope="row">{index + 1}</th>
            <td>{categoria.nombre}</td>
            <td>{categoria.estado}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default Categoria;
