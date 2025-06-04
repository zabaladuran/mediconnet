import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import {
  SignInPage,
  SignUpPage,
  EmailVerificationPage,
} from "./funcionalidades/autenticacion/pages";
import { DashboardPage, HomePage, NotFoundPage } from "./componentes/pages";
import {
  BlockearUsuarioAutenticado,
  PermitirUsuarioDoctor,
  PermitirUsuarioPaciente,
  PermitirUsuarioVerificacionPendiente,
} from "./componentes/navegacion";
import { ProveedoresApp } from "./contexto/";
import { Toaster } from "./components/ui/sonner";
import { GetMedicalAssistancePage } from "./funcionalidades/paciente/pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProveedoresApp>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/verification/*"
              element={<PermitirUsuarioVerificacionPendiente />}
            >
              <Route path="email" element={<EmailVerificationPage />} />
            </Route>
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
            <Route
              path="/appointment/set"
              element={<GetMedicalAssistancePage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </ProveedoresApp>
      </BrowserRouter>
    </>
  );
}

export default App;
