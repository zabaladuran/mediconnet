import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SignInPage from "./components/pages/sign-in-page";
import SignUpPage from "./components/pages/sign-up-page";
import HomePage from "./components/pages/home-page";
import RutasProtegidasPorAut from "./components/navegacion/protected-routes";
import NotFoundPage from "./components/pages/not-found";
import { ProveedoresApp } from "./contexto/";
function App() {
  return (
    <>
      <ProveedoresApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route element={<RutasProtegidasPorAut to="/sign-in" />}>
              <Route path="/dashboard/home" element={<SignInPage />} />
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ProveedoresApp>
    </>
  );
}

export default App;
