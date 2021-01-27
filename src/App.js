// Dependencias generales

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Páginas internas
function Login() {
  
  return <h2>Bienvenid@ a la Web de VMall</h2>;
}

function About() {

  return <h2>Somos un pyme de emprendedoras,que soñamos con cambiar el mundo</h2>;

}

function Users() {
  return <h2>Users</h2>;
}

// Función del router
function AppRouter() {
  return (
    <Router>
      <div className={"site-content"}>
        // Menú de navegación
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        // Anclado de rutas al contenido
        <Route path="/" exact component={Login} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}
export default AppRouter;