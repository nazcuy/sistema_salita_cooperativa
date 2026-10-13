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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coordenadas) {
      alert('Primero hacé clic en el mapa para registrar un punto.');
      return;
    }
    onGuardar({
      ...form,
      lat: coordenadas.lat,
      lng: coordenadas.lng,
    });
    // Limpiar formulario
    setForm({
      barrio: '', cuadrilla: '', cuadricula: '', manzana: '', frente: '',
      calle: '', altura: '', depto: '',
      apellidoNombre: '', anioNacimiento: '', telefono: '', procedencia: '',
      observacionesProcedencia: '', mayoresEnCasa: '', menoresEnCasa: '',
      situacionLaboral: '', rama: '', lugarTrabajo: '', observacionesTrabajo: '',
      situacionEducativa: '',
      opinionEconomia: '', experienciaOrganizacion: '', propuestasMejora: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-promotora">
      <fieldset>
        <legend>Datos barriales</legend>

        <div className="campo">
          <label>Barrio:</label>
          <select name="barrio" value={form.barrio} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="San Lorenzo">San Lorenzo</option>
            <option value="Dock Sud">Dock Sud</option>
            <option value="Nueva Ana">Nueva Ana</option>
          </select>
        </div>

        <div className="campo">
          <label>Cuadrilla (Cabeza y cuadro):</label>
          <input type="text" name="cuadrilla" value={form.cuadrilla} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Cuadrícula:</label>
          <select name="cuadricula" value={form.cuadricula} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        <div className="campo">
          <label>Manzana:</label>
          <select name="manzana" value={form.manzana} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        <div className="campo">
          <label>Frente:</label>
          <input type="text" name="frente" value={form.frente} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Calle:</label>
          <input type="text" name="calle" value={form.calle} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Altura:</label>
          <input type="text" name="altura" value={form.altura} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Depto:</label>
          <input type="text" name="depto" value={form.depto} onChange={handleChange} />
        </div>
      </fieldset>

      <fieldset>
        <legend>Datos personales</legend>

        <div className="campo">
          <label>Apellido y nombre:</label>
          <input type="text" name="apellidoNombre" value={form.apellidoNombre} onChange={handleChange} required />
        </div>

        <div className="campo">
          <label>Año de nacimiento:</label>
          <input type="number" name="anioNacimiento" value={form.anioNacimiento} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input type="number" name="telefono" value={form.telefono} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Procedencia:</label>
          <span className="opciones-radio">
            <label><input type="radio" name="procedencia" value="GBA" checked={form.procedencia === 'GBA'} onChange={handleChange} /> GBA</label>
            <label><input type="radio" name="procedencia" value="CABA" checked={form.procedencia === 'CABA'} onChange={handleChange} /> CABA</label>
            <label><input type="radio" name="procedencia" value="INTERIOR" checked={form.procedencia === 'INTERIOR'} onChange={handleChange} /> Interior</label>
            <label><input type="radio" name="procedencia" value="EXTERIOR" checked={form.procedencia === 'EXTERIOR'} onChange={handleChange} /> Exterior</label>
          </span>
        </div>

        <div className="campo">
          <label>Observaciones procedencia:</label>
          <input type="text" name="observacionesProcedencia" value={form.observacionesProcedencia} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Mayores en la casa:</label>
          <input type="number" name="mayoresEnCasa" value={form.mayoresEnCasa} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Menores en la casa:</label>
          <input type="number" name="menoresEnCasa" value={form.menoresEnCasa} onChange={handleChange} />
        </div>
      </fieldset>

      <fieldset>
        <legend>Trabajo</legend>

        <div className="campo">
          <label>Situación laboral actual:</label>
          <span className="opciones-radio">
            <label><input type="radio" name="situacionLaboral" value="EN_BLANCO" checked={form.situacionLaboral === 'EN_BLANCO'} onChange={handleChange} /> En blanco</label>
            <label><input type="radio" name="situacionLaboral" value="EN_NEGRO" checked={form.situacionLaboral === 'EN_NEGRO'} onChange={handleChange} /> En negro</label>
            <label><input type="radio" name="situacionLaboral" value="CHANGA" checked={form.situacionLaboral === 'CHANGA'} onChange={handleChange} /> Changa</label>
            <label><input type="radio" name="situacionLaboral" value="DESOCUPADO" checked={form.situacionLaboral === 'DESOCUPADO'} onChange={handleChange} /> Desocupado</label>
            <label><input type="radio" name="situacionLaboral" value="JUBILADO" checked={form.situacionLaboral === 'JUBILADO'} onChange={handleChange} /> Jubilado</label>
            <label><input type="radio" name="situacionLaboral" value="OTROS" checked={form.situacionLaboral === 'OTROS'} onChange={handleChange} /> Otros</label>
          </span>
        </div>

        <div className="campo">
          <label>Rama:</label>
          <input type="text" name="rama" value={form.rama} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Lugar de trabajo:</label>
          <input type="text" name="lugarTrabajo" value={form.lugarTrabajo} onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Observaciones trabajo:</label>
          <input type="text" name="observacionesTrabajo" value={form.observacionesTrabajo} onChange={handleChange} />
        </div>
      </fieldset>

      <fieldset>
        <legend>Educación</legend>

        <div className="campo">
          <label>Situación educativa actual:</label>
          <span className="opciones-radio">
            <label><input type="radio" name="situacionEducativa" value="AN" checked={form.situacionEducativa === 'AN'} onChange={handleChange} /> AN</label>
            <label><input type="radio" name="situacionEducativa" value="PI" checked={form.situacionEducativa === 'PI'} onChange={handleChange} /> PI</label>
            <label><input type="radio" name="situacionEducativa" value="PC" checked={form.situacionEducativa === 'PC'} onChange={handleChange} /> PC</label>
            <label><input type="radio" name="situacionEducativa" value="SI" checked={form.situacionEducativa === 'SI'} onChange={handleChange} /> SI</label>
            <label><input type="radio" name="situacionEducativa" value="SC" checked={form.situacionEducativa === 'SC'} onChange={handleChange} /> SC</label>
            <label><input type="radio" name="situacionEducativa" value="TI" checked={form.situacionEducativa === 'TI'} onChange={handleChange} /> TI</label>
            <label><input type="radio" name="situacionEducativa" value="TC" checked={form.situacionEducativa === 'TC'} onChange={handleChange} /> TC</label>
            <label><input type="radio" name="situacionEducativa" value="UI" checked={form.situacionEducativa === 'UI'} onChange={handleChange} /> UI</label>
            <label><input type="radio" name="situacionEducativa" value="UC" checked={form.situacionEducativa === 'UC'} onChange={handleChange} /> UC</label>
          </span>
        </div>
      </fieldset>

      <fieldset>
        <legend>Conciencia</legend>

        <div className="campo">
          <label>¿Qué piensa de la situación económica del país?</label>
          <textarea name="opinionEconomia" value={form.opinionEconomia} onChange={handleChange} rows="3"></textarea>
        </div>

        <div className="campo">
          <label>¿Tiene experiencia de organización sindical o barrial?</label>
          <textarea name="experienciaOrganizacion" value={form.experienciaOrganizacion} onChange={handleChange} rows="3"></textarea>
        </div>

        <div className="campo">
          <label>¿Qué hay que hacer para mejorar la situación actual?</label>
          <textarea name="propuestasMejora" value={form.propuestasMejora} onChange={handleChange} rows="3"></textarea>
        </div>
      </fieldset>

      <div className="campo-coordenadas">
        <strong>Coordenadas:</strong>{' '}
        {coordenadas ? `${coordenadas.lat.toFixed(5)}, ${coordenadas.lng.toFixed(5)}` : 'Sin seleccionar'}
      </div>

      <button type="submit" className="boton-guardar">Registrar visita</button>
    </form>
  );
}

export default FormularioPromotora;