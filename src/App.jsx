import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SignInPage from "./componentes/pages/sign-in-page";
import SignUpPage from "./componentes/pages/sign-up-page";
import HomePage from "./componentes/pages/home-page";
import { DashboardPage } from "./componentes/pages";
import {
  PermitirUsuarioAutenticado,
  BlockearUsuarioAutenticado,
  PermitirUsuarioDoctor,
  PermitirUsuarioPaciente,
} from "./componentes/navegacion";
import NotFoundPage from "./componentes/pages/not-found";
import { ProveedoresApp } from "./contexto/";
import { Toaster } from "./components/ui/sonner";
function App() {
  return (
    <>
      <ProveedoresApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route element={<PermitirUsuarioAutenticado to="/sign-in" />}>
              <Route
                element={
                  <PermitirUsuarioPaciente to="/doctor/dashboard/home" />
                }
              >
                <Route
                  path="/paciente/dashboard/home"
                  element={<DashboardPage />}
                />
              </Route>
              <Route
                element={
                  <PermitirUsuarioDoctor to="/paciente/dashboard/home" />
                }
              >
                <Route
                  path="/paciente/dashboard/home"
                  element={<DashboardPage />}
                />
              </Route>
            </Route>
            <Route
              element={<BlockearUsuarioAutenticado to="/dashboard/home" />}
            >
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </ProveedoresApp>
    </>
  );
}

export default App;
