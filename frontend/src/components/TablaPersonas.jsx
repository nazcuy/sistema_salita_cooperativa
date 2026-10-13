function TablaPersonas({ personas }) {
  return (
    <table className="tabla-personas">
      <thead>
        <tr>
          <th>Barrio</th>
          <th>Cuadrícula</th>
          <th>Manzana</th>
          <th>Calle</th>
          <th>Altura</th>
          <th>Apellido y nombre</th>
          <th>Procedencia</th>
          <th>Situación laboral</th>
          <th>Latitud</th>
          <th>Longitud</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p, index) => (
          <tr key={index}>
            <td>{p.barrio}</td>
            <td>{p.cuadricula}</td>
            <td>{p.manzana}</td>
            <td>{p.calle}</td>
            <td>{p.altura}</td>
            <td>{p.apellidoNombre}</td>
            <td>{p.procedencia}</td>
            <td>{p.situacionLaboral}</td>
            <td>{p.lat.toFixed(5)}</td>
            <td>{p.lng.toFixed(5)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaPersonas;