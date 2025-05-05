import EmailVerified from "./componentes/emal-verification/successful-verification";
import EmailVerification from "./componentes/pages/Email-verification-page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SignInPage from "./componentes/pages/sign-in-page";
import SignUpPage from "./componentes/pages/sign-up-page";
import HomePage from "./componentes/pages/home-page";
import { DashboardPage } from "./componentes/pages";
import {
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
      <BrowserRouter>
        <ProveedoresApp>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/auth/*" element={<BlockearUsuarioAutenticado />}>
              <Route path="email-verification" element={<EmailVerification />} />
              <Route path="successful-verification" element={<EmailVerified />} />
              <Route path="verification" element={<HomePage />} />
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
