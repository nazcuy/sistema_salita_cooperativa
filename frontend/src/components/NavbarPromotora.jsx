function NavbarPromotora() {
  return (
    <header className="navbar-brutal">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="navbar-logo">
          <span>Salita Cooperativa</span>
          <span className="badge">Comunitaria</span>
        </div>
        <nav className="navbar-links">
          <a href="#" className="activo">Relevamiento Territorial</a>
          <a href="#">Pacientes</a>
          <a href="#">Historial Clínico</a>
          <a href="#">Farmacia</a>
          <a href="#">Administración</a>
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className="navbar-info">
          <span>👥</span>
          <div>
            <div style={{ fontWeight: 700 }}>Cuadrilla 04</div>
            <div style={{ fontSize: 10 }}>Promotora R. Maidana</div>
          </div>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#001824', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #022e40' }}>
          👤
        </div>
      </div>
    </header>
  );
}
export default NavbarPromotora;