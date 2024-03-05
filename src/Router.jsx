import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Registro } from './pages/Registro'
import { RegistroProduto } from './pages/RegistoProduto'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/produto/:userId" element={<RegistroProduto />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  )
}
