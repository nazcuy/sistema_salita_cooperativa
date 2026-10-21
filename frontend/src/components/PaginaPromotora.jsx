import { useState } from 'react';
import NavbarPromotora from './NavbarPromotora';
import MapaPromotora from './MapaPromotora';
import FormularioPromotora from './FormularioPromotora';
import TablaPersonas from './TablaPersonas';

const API_URL = 'http://localhost:8080/api/promotoras';

function PaginaPromotora() {
  const [personas, setPersonas] = useState([]);
  const [coordenadas, setCoordenadas] = useState(null);
  const [cuadriculaFiltro, setCuadriculaFiltro] = useState('');
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const manejarSeleccionPunto = (lat, lng) => setCoordenadas({ lat, lng });

  const manejarGuardar = async (nuevaVisita) => {
    if (!coordenadas) return false;
    const payload = { ...nuevaVisita, lat: coordenadas.lat, lng: coordenadas.lng };
    // Convertir números
    payload.anioNacimiento = payload.anioNacimiento ? Number(payload.anioNacimiento) : null;
    payload.telefono = payload.telefono ? Number(payload.telefono) : null;
    payload.mayoresEnCasa = payload.mayoresEnCasa ? Number(payload.mayoresEnCasa) : null;
    payload.menoresEnCasa = payload.menoresEnCasa ? Number(payload.menoresEnCasa) : null;

    setGuardando(true);
    try {
      const res = await fetch(`${API_URL}/visitas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      const guardada = await res.json();
      const fila = {
        id: guardada.id,
        barrio: guardada.direccion?.barrio,
        cuadricula: guardada.direccion?.cuadricula,
        manzana: guardada.direccion?.manzana,
        calle: guardada.direccion?.calle,
        altura: guardada.direccion?.altura,
        apellidoNombre: guardada.apellidoNombre,
        procedencia: guardada.procedencia,
        situacionLaboral: guardada.situacionLaboral,
        situacionEducativa: guardada.situacionEducativa,
        lat: guardada.direccion?.lat,
        lng: guardada.direccion?.lng,
      };
      setPersonas(prev => [...prev, fila]);
      setCoordenadas(null);
      setFormularioAbierto(false);
      return true;
    } catch (e) {
      alert(`Error al guardar: ${e.message}`);
      return false;
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div>
      <NavbarPromotora />
      <main className="main-brutal">
        <header className="encabezado-brutal">
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#b22300' }}>
              Módulo Territorial Operativo // Cuadrilla 04
            </div>
            <h1>Visitas Domiciliarias <span className="texto-secondary">//</span> Relevamiento en Territorio</h1>
          </div>
          <div className="filtro-cuadricula">
            <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>Filtrar por cuadrícula</label>
            <select value={cuadriculaFiltro} onChange={e => setCuadriculaFiltro(e.target.value)}>
              <option value="">Todas</option>
              {[1,2,3,4,5].map(n => <option key={n} value={n}>Cuad. {n}</option>)}
            </select>
          </div>
        </header>

        <section>
          <div className="mapa-header">
            <span>🗺️ Visor Cartográfico Territorial</span>
          </div>
          <div className="mapa-contenedor">
            <MapaPromotora
              puntos={personas}
              cuadriculaSeleccionada={cuadriculaFiltro}
              onSeleccionarPunto={manejarSeleccionPunto}
            />
            {coordenadas && (
              <div className="mapa-panel-gps">
                <span className="etiqueta">Punto Activo</span>
                <div style={{ fontWeight: 700, marginTop: 4 }}>
                  LAT: {coordenadas.lat.toFixed(5)} | LNG: {coordenadas.lng.toFixed(5)}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="formulario-contenedor">
          <button
            type="button"
            className="formulario-toggle"
            onClick={() => setFormularioAbierto(!formularioAbierto)}
            disabled={!coordenadas}
          >
            {formularioAbierto ? '▼' : '▶'} Registrar Nueva Visita
            {!coordenadas && ' (elegí un punto en el mapa)'}
          </button>
          {formularioAbierto && coordenadas && (
            <div className="formulario-cuerpo">
              <FormularioPromotora
                coordenadas={coordenadas}
                onGuardar={manejarGuardar}
                guardando={guardando}
              />
            </div>
          )}
        </section>

        <section>
          <div className="flex-between" style={{ borderBottom: '2px solid #022e40', paddingBottom: 8 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#b22300' }}>Base de Datos Viva</span>
              <h2 style={{ margin: 0, textTransform: 'uppercase', fontSize: 24 }}>
                Personas Relevadas <span className="texto-secondary">({personas.length})</span>
              </h2>
            </div>
          </div>
          <TablaPersonas personas={personas} />
        </section>
      </main>
    </div>
  );
}
export default PaginaPromotora;