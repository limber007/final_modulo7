import React from 'react';
import { Outlet } from 'react-router-dom';  // Importar Outlet para renderizar las rutas hijas

function App() {
  return (
    <div className="App">
      <Outlet />  {/* Esto renderizará la LandingPage */}
    </div>
  );
}

export default App;
