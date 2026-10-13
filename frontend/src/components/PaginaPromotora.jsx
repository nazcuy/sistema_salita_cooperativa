import { useState } from 'react';
import NavbarPromotora from './NavbarPromotora';
import MapaPromotora from './MapaPromotora';
import FormularioPromotora from './FormularioPromotora';
import TablaPersonas from './TablaPersonas';

function PaginaPromotora() {
  const [personas, setPersonas] = useState([]);
  const [coordenadas, setCoordenadas] = useState(null);
  const [cuadriculaFiltro, setCuadriculaFiltro] = useState('');
  const [formularioAbierto, setFormularioAbierto] = useState(false);

  const manejarSeleccionPunto = (lat, lng) => {
    setCoordenadas({ lat, lng });
    setFormularioAbierto(true); // se abre el formulario al hacer clic en el mapa
  };

  const manejarGuardar = (nuevaVisita) => {
    setPersonas([...personas, nuevaVisita]);
    setCoordenadas(null);
  };

  return (
    <div>
      <NavbarPromotora />
      <main style={{ padding: '20px' }}>
        <h2>Visitas domiciliarias</h2>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cuadriculaFiltro">Filtrar por cuadrícula:</label>
          <select
            id="cuadriculaFiltro"
            value={cuadriculaFiltro}
            onChange={(e) => setCuadriculaFiltro(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <MapaPromotora
          puntos={personas}
          cuadriculaSeleccionada={cuadriculaFiltro}
          onSeleccionarPunto={manejarSeleccionPunto}
        />

        {/* Desplegable Formulario */}
        <div className="desplegable-formulario">
          <button
            type="button"
            className="boton-desplegable"
            onClick={() => setFormularioAbierto(!formularioAbierto)}
          >
            {formularioAbierto ? '▼' : '▶'} Formulario
          </button>

          {formularioAbierto && (
            <div className="contenido-desplegable">
              <FormularioPromotora
                coordenadas={coordenadas}
                onGuardar={manejarGuardar}
              />
            </div>
          )}
        </div>

        <h3>Personas relevadas</h3>
        <TablaPersonas personas={personas} />
      </main>
    </div>
  );
}

export default PaginaPromotora;