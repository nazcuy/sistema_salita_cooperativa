function TablaPersonas({ personas }) {
  return (
    <div className="tabla-contenedor">
      <table className="tabla-brutal">
        <thead>
          <tr>
            <th>Barrio / Cuad.</th>
            <th>Manzana / Dir.</th>
            <th>Apellido y Nombre</th>
            <th>Procedencia</th>
            <th>Situación Laboral</th>
            <th>Educación</th>
            <th>Coordenadas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personas.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ padding: 24, textAlign: 'center' }}>
                Aún no hay personas relevadas.
              </td>
            </tr>
          ) : (
            personas.map((p, i) => (
              <tr key={p.id ?? i}>
                <td className="celda-cuadricula">
                  {p.barrio}<br /><span className="cuad">Cuad. {p.cuadricula}</span>
                </td>
                <td>
                  <span style={{ border: '1px solid #022e40', padding: '0 4px', fontSize: 10, fontWeight: 700, marginRight: 4 }}>MZ {p.manzana}</span>
                  {p.calle} {p.altura}
                </td>
                <td style={{ fontWeight: 700 }}>{p.apellidoNombre}</td>
                <td>{p.procedencia}</td>
                <td>
                  <span style={{ background: '#ffdad2', padding: '2px 6px', fontSize: 10, fontWeight: 700, border: '1px solid #022e40' }}>
                    {p.situacionLaboral}
                  </span>
                </td>
                <td>{p.situacionEducativa}</td>
                <td style={{ fontFamily: 'monospace', fontSize: 11 }}>
                  {p.lat?.toFixed(4)}, {p.lng?.toFixed(4)}
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button style={{ border: '1px solid #022e40', background: '#fff', padding: 4, marginRight: 4 }}>👁️</button>
                  <button style={{ border: '1px solid #022e40', background: '#fff', padding: 4 }}>📍</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default TablaPersonas;