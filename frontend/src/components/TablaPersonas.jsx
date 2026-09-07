function TablaPersonas({ personas }) {
  return (
    <table className="tabla-personas">
      <thead>
        <tr>
          <th>Cuadrícula</th>
          <th>Manzana</th>
          <th>Frente</th>
          <th>Calle</th>
          <th>Número</th>
          <th>Latitud</th>
          <th>Longitud</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((persona, index) => (
          <tr key={index}>
            <td>{persona.cuadricula}</td>
            <td>{persona.manzana}</td>
            <td>{persona.frente}</td>
            <td>{persona.calle}</td>
            <td>{persona.numero}</td>
            <td>{persona.lat.toFixed(5)}</td>
            <td>{persona.lng.toFixed(5)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaPersonas;