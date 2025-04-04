import { BrowserRouter, Routes, Route, Navigate } from "react-router";
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
    <>
      <ProveedoresApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route element={<PermitirUsuarioAutenticado to="/sign-in" />}>
              <Route path="/dashboard/home" element={<DashboardPage />} />
            </Route>
            <Route
              element={<BlockearUsuarioAutenticado to="/dashboard/home" />}
            >
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ProveedoresApp>
    </>
  );
}

export default App;
