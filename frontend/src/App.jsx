import { useState } from 'react';
import NavbarPromotora from './components/NavbarPromotora';
import MapaPromotora from './components/MapaPromotora';
import FormularioDomicilio from './components/FormularioDomicilio';
import TablaPersonas from './components/TablaPersonas';

function App() {
  const [personas, setPersonas] = useState([]);
  const [coordenadas, setCoordenadas] = useState(null);
  const [cuadriculaFiltro, setCuadriculaFiltro] = useState('');

  const manejarSeleccionPunto = (lat, lng) => {
    setCoordenadas({ lat, lng });
  };

  const manejarGuardar = (nuevoDomicilio) => {
    setPersonas([...personas, nuevoDomicilio]);
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
            <option value="4">Cuadrícula 4</option>
            <option value="5">Cuadrícula 5</option>
          </select>
        </div>

        <MapaPromotora
          puntos={personas}
          cuadriculaSeleccionada={cuadriculaFiltro}
          onSeleccionarPunto={manejarSeleccionPunto}
        />
        <FormularioDomicilio coordenadas={coordenadas} onGuardar={manejarGuardar} />
        <h3>Personas relevadas</h3>
        <TablaPersonas personas={personas} />
      </main>
    </div>
  );
}

export default App;