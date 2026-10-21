// src/components/FormularioPromotora.jsx
import { useState } from 'react';

function FormularioPromotora({ coordenadas, onGuardar }) {
  const [form, setForm] = useState({
    // Datos barriales
    barrio: '',
    cuadrilla: '',
    cuadricula: '',
    manzana: '',
    frente: '',
    calle: '',
    altura: '',
    depto: '',
    // Datos personales
    apellidoNombre: '',
    anioNacimiento: '',
    telefono: '',
    procedencia: '',
    observacionesProcedencia: '',
    mayoresEnCasa: '',
    menoresEnCasa: '',
    // Trabajo
    situacionLaboral: '',
    rama: '',
    lugarTrabajo: '',
    observacionesTrabajo: '',
    // Educación
    situacionEducativa: '',
    // Conciencia
    opinionEconomia: '',
    experienciaOrganizacion: '',
    propuestasMejora: '',
  });
  const [guardando, setGuardando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!coordenadas) {
      alert('Primero hacé clic en el mapa para registrar un punto.');
      return;
    }

    setGuardando(true);

    try {
      const exito = await onGuardar({
        ...form,
        lat: coordenadas.lat,
        lng: coordenadas.lng,
      });

      if (exito) {
        setForm({
          barrio: '', cuadrilla: '', cuadricula: '', manzana: '', frente: '',
          calle: '', altura: '', depto: '',
          apellidoNombre: '', anioNacimiento: '', telefono: '', procedencia: '',
          observacionesProcedencia: '', mayoresEnCasa: '', menoresEnCasa: '',
          situacionLaboral: '', rama: '', lugarTrabajo: '', observacionesTrabajo: '',
          situacionEducativa: '',
          opinionEconomia: '', experienciaOrganizacion: '', propuestasMejora: '',
        });
      }
    } finally {
      setGuardando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Fieldset 1 */}
      <fieldset className="fieldset-brutal">
        <legend>1. Datos Barriales</legend>
        <div className="grid-4">
          <div className="campo-brutal">
            <label>Barrio *</label>
            <select name="barrio" value={form.barrio} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              <option value="San Lorenzo">San Lorenzo</option>
              <option value="Dock Sud">Dock Sud</option>
              <option value="Nueva Ana">Nueva Ana</option>
            </select>
          </div>
          <div className="campo-brutal">
            <label>Cuadrilla</label>
            <input type="text" name="cuadrilla" value={form.cuadrilla} onChange={handleChange} />
          </div>
          <div className="campo-brutal">
            <label>Cuadrícula *</label>
            <select name="cuadricula" value={form.cuadricula} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div className="campo-brutal">
            <label>Manzana *</label>
            <select name="manzana" value={form.manzana} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              {['A','B','C','D'].map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>
        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="campo-brutal">
            <label>Calle</label>
            <input type="text" name="calle" value={form.calle} onChange={handleChange} />
          </div>
          <div className="campo-brutal">
            <label>Altura</label>
            <input type="text" name="altura" value={form.altura} onChange={handleChange} />
          </div>
        </div>
        <div className="grid-2">
          <div className="campo-brutal">
            <label>Depto / Frente</label>
            <input type="text" name="depto" value={form.depto} onChange={handleChange} />
          </div>
          <div className="campo-brutal">
            <label>Frente</label>
            <input type="text" name="frente" value={form.frente} onChange={handleChange} />
          </div>
        </div>
      </fieldset>

      {/* Fieldset 2 */}
      <fieldset className="fieldset-brutal">
        <legend>2. Datos Personales</legend>
        <div className="grid-2">
          <div className="campo-brutal">
            <label>Apellido y Nombre *</label>
            <input type="text" name="apellidoNombre" value={form.apellidoNombre} onChange={handleChange} required />
          </div>
          <div className="campo-brutal">
            <label>Año de Nacimiento</label>
            <input type="number" name="anioNacimiento" value={form.anioNacimiento} onChange={handleChange} />
          </div>
        </div>
        <div className="grid-2">
          <div className="campo-brutal">
            <label>Teléfono</label>
            <input type="number" name="telefono" value={form.telefono} onChange={handleChange} />
          </div>
          <div className="campo-brutal">
            <label>Observaciones procedencia</label>
            <input type="text" name="observacionesProcedencia" value={form.observacionesProcedencia} onChange={handleChange} />
          </div>
        </div>
        <div className="campo-brutal">
          <label>Procedencia</label>
          <div style={{ display: 'flex', gap: 8 }}>
            {['GBA','CABA','INTERIOR','EXTERIOR'].map(op => (
              <label key={op} style={{ display: 'flex', alignItems: 'center', gap: 4, border: '2px solid #022e40', padding: '4px 8px', cursor: 'pointer', background: form.procedencia === op ? '#022e40' : '#fff', color: form.procedencia === op ? '#fff' : '#000', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
                <input type="radio" name="procedencia" value={op} checked={form.procedencia === op} onChange={handleChange} style={{ display: 'none' }} />
                {op}
              </label>
            ))}
          </div>
        </div>
        <div className="grid-2">
          <div className="campo-brutal">
            <label>Mayores en casa</label>
            <input type="number" name="mayoresEnCasa" value={form.mayoresEnCasa} onChange={handleChange} />
          </div>
          <div className="campo-brutal">
            <label>Menores en casa</label>
            <input type="number" name="menoresEnCasa" value={form.menoresEnCasa} onChange={handleChange} />
          </div>
        </div>
      </fieldset>

      {/* Fieldset 3 */}
      <fieldset className="fieldset-brutal">
        <legend>3. Situación Laboral</legend>
        <div className="campo-brutal">
          <label>Condición laboral</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              ['EN_BLANCO','En blanco'],
              ['EN_NEGRO','En negro'],
              ['CHANGA','Changa'],
              ['DESOCUPADO','Desocupado'],
              ['JUBILADO','Jubilado'],
              ['OTROS','Otros'],
            ].map(([val, txt]) => (
              <label key={val} style={{ border: '2px solid #022e40', padding: '6px 12px', cursor: 'pointer', background: form.situacionLaboral === val ? '#db340c' : '#fff', color: form.situacionLaboral === val ? '#fff' : '#000', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
                <input type="radio" name="situacionLaboral" value={val} checked={form.situacionLaboral === val} onChange={handleChange} style={{ display: 'none' }} />
                {txt}
              </label>
            ))}
          </div>
        </div>
        <div className="grid-2">
          <div className="campo-brutal">
            <label>Rama</label>
            <input type="text" name="rama" value={form.rama} onChange={handleChange} />
          </div>
          <div className="campo-brutal">
            <label>Lugar de trabajo</label>
            <input type="text" name="lugarTrabajo" value={form.lugarTrabajo} onChange={handleChange} />
          </div>
        </div>
        <div className="campo-brutal">
          <label>Observaciones trabajo</label>
          <input type="text" name="observacionesTrabajo" value={form.observacionesTrabajo} onChange={handleChange} />
        </div>
      </fieldset>

      {/* Fieldset 4 */}
      <fieldset className="fieldset-brutal">
        <legend>4. Educación y Conciencia</legend>
        <div className="campo-brutal">
          <label>Situación educativa</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {['AN','PI','PC','SI','SC','TI','TC','UI','UC'].map(op => (
              <button type="button" key={op} onClick={() => setForm({ ...form, situacionEducativa: op })} style={{ border: '2px solid #022e40', padding: '6px 12px', fontWeight: 700, background: form.situacionEducativa === op ? '#022e40' : '#fff', color: form.situacionEducativa === op ? '#fff' : '#000' }}>
                {op}
              </button>
            ))}
          </div>
        </div>
        <div className="grid-2">
          <div className="campo-brutal">
            <label>Experiencia de organización</label>
            <textarea name="experienciaOrganizacion" value={form.experienciaOrganizacion} onChange={handleChange} rows="2" />
          </div>
          <div className="campo-brutal">
            <label>Propuestas de mejora</label>
            <textarea name="propuestasMejora" value={form.propuestasMejora} onChange={handleChange} rows="2" />
          </div>
        </div>
        <div className="campo-brutal">
          <label>¿Qué piensa de la situación económica?</label>
          <textarea name="opinionEconomia" value={form.opinionEconomia} onChange={handleChange} rows="2" />
        </div>
      </fieldset>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: '#e4e2df', border: '2px solid #022e40' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>Punto GPS vinculado</div>
          <div style={{ fontFamily: 'monospace', fontSize: 14 }}>
            LAT: {coordenadas ? coordenadas.lat.toFixed(6) : '—'}, LNG: {coordenadas ? coordenadas.lng.toFixed(6) : '—'}
          </div>
        </div>
        <button type="submit" className="btn-brutal" disabled={guardando}>
          {guardando ? 'Guardando...' : 'Registrar Visita'}
        </button>
      </div>
    </form>
  );
}

export default FormularioPromotora;