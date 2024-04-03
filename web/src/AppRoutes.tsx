import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function AppRoutes () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaBase />} />
      <Route index element={<PaginaInicial />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<PaginaBaseFormulario />} >
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>  
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;