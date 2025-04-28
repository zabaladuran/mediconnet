import { Routes, Route } from "react-router-dom";
import SignInPage from "./componentes/pages/sign-in-page";
import SignUpPage from "./componentes/pages/sign-up-page";
import HomePage from "./componentes/pages/home-page";
import { DashboardPage } from "./componentes/pages";
import { PermitirUsuarioAutenticado } from "./componentes/navegacion";
import { BlockearUsuarioAutenticado } from "./componentes/navegacion";
import NotFoundPage from "./componentes/pages/not-found";
import { ProveedoresApp } from "./contexto/";

function App() {
  return (
    <ProveedoresApp>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Protege rutas privadas con "PermitirUsuarioAutenticado" */}
        <Route element={<PermitirUsuarioAutenticado to="/sign-in" />}>
          <Route path="/dashboard/home" element={<DashboardPage />} />
        </Route>
        {/* Protege las rutas de SignIn y SignUp con "BlockearUsuarioAutenticado" */}

        {/* <Route element={<BlockearUsuarioAutenticado to="/dashboard/home" />}> </Route> */}

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </ProveedoresApp>
  );
}

export default App;
