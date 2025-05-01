import { Routes, Route } from "react-router-dom";
import SignInPage from "./componentes/pages/sign-in-page";
import SignUpPage from "./componentes/pages/sign-up-page";
import HomePage from "./componentes/pages/home-page";
import { DashboardPage } from "./componentes/pages";
import { PermitirUsuarioAutenticado } from "./componentes/navegacion";
import NotFoundPage from "./componentes/pages/not-found";
import { ProveedoresApp } from "./contexto/";

function App() {
  return (
    <ProveedoresApp>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard/home" element={<DashboardPage />} />

        {/* Rutas privadas protegidas */}
        <Route element={<PermitirUsuarioAutenticado to="/sign-in" />}>
          <Route path="/dashboard/home" element={<DashboardPage />} />
        </Route>
        

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ProveedoresApp>
  );
}

export default App;
