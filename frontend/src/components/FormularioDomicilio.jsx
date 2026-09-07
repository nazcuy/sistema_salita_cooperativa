import { useState } from 'react';

function FormularioDomicilio({ coordenadas, onGuardar }) {
  const [cuadricula, setCuadricula] = useState('');
  const [manzana, setManzana] = useState('');
  const [frente, setFrente] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coordenadas) {
      alert('Primero hacé clic en el mapa para registrar un punto.');
      return;
    }
    onGuardar({
      cuadricula,
      manzana,
      frente,
      calle,
      numero,
      lat: coordenadas.lat,
      lng: coordenadas.lng,
    });
    setCuadricula('');
    setManzana('');
    setFrente('');
    setCalle('');
    setNumero('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-domicilio">
      <h3>Datos de domicilio</h3>
      <div>
        <label>Cuadrícula:</label>
        <input type="text" value={cuadricula} onChange={(e) => setCuadricula(e.target.value)} required />
      </div>
      <div>
        <label>Manzana:</label>
        <input type="text" value={manzana} onChange={(e) => setManzana(e.target.value)} required />
      </div>
      <div>
        <label>Frente:</label>
        <input type="text" value={frente} onChange={(e) => setFrente(e.target.value)} required />
      </div>
      <div>
        <label>Calle:</label>
        <input type="text" value={calle} onChange={(e) => setCalle(e.target.value)} required />
      </div>
      <div>
        <label>Número:</label>
        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} required />
      </div>
      <div>
        <label>Coordenadas:</label>
        <span>{coordenadas ? `${coordenadas.lat.toFixed(5)}, ${coordenadas.lng.toFixed(5)}` : 'Sin seleccionar'}</span>
      </div>
      <button type="submit">Registrar punto</button>
    </form>
  );
}

export default FormularioDomicilio;