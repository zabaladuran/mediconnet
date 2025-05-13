import EmailVerified from "./funcionalidades/autenticacion/componentes/ui/successful-verification";
import EmailVerification from "./funcionalidades/autenticacion/pages/email-verification-page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SignInPage from "./funcionalidades/autenticacion/pages/sign-in-page";
import SignUpPage from "./funcionalidades/autenticacion/pages/sign-up-page";
import HomePage from "./componentes/pages/home-page";
import { DashboardPage } from "./componentes/pages";
import {
  BlockearUsuarioAutenticado,
  PermitirUsuarioDoctor,
  PermitirUsuarioPaciente,
  PermitirUsuarioAutenticado,
} from "./componentes/navegacion";
import NotFoundPage from "./componentes/pages/not-found";
import { ProveedoresApp } from "./contexto/";
import { Toaster } from "./components/ui/sonner";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProveedoresApp>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/verification/*"
              element={<PermitirUsuarioAutenticado />}
            >
              <Route path="email" element={<EmailVerification />} />
              <Route path="verification" element={<HomePage />} />
            </Route>
            <Route path="/home" element={<HomePage />} />
            <Route path="/auth/*" element={<BlockearUsuarioAutenticado />}>
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="sign-up" element={<SignUpPage />} />
            </Route>
            <Route path="/paciente/*" element={<PermitirUsuarioPaciente />}>
              <Route path="dashboard/home" element={<DashboardPage />} />
            </Route>
            <Route path="/doctor/*" element={<PermitirUsuarioDoctor />}>
              <Route path="dashboard/home" element={<DashboardPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </ProveedoresApp>
      </BrowserRouter>
    </>
  );
}

export default App;
