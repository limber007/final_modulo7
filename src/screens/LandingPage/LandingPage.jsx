import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      </header>
      <section className="landing-content">
        <h2>Bienvenido</h2>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.
        </p>
        <h3>Temas Cubiertos</h3>
        <table>
          <thead>
            <tr>
              <th>Componentes funcionales y de clase</th>
              <th>Uso de React hooks como useState y useEffect</th>
              <th>Creación de custom hooks como useForm</th>
              <th>Gestión de variables de estado con useState</th>
              <th>Gestión de estado global con Redux</th>
              <th>Integración de Redux con React</th>
              <th>Manejo de Formularios en React</th>
              <th>Publicando nuestra Pagina con GitHub Pages</th>
            </tr>
          </thead>
        </table>
        <h3>Recursos Adicionales</h3>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes recursos:
        </p>
      </section>
      <footer className="landing-footer">
        <p>© 2024 Modulo 7. USIP.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
