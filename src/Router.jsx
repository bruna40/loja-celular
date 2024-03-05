import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Registro } from './pages/RegisterUser'
import { RegistroProduto } from './pages/RegisterProduct'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/produto/:userId" element={<RegistroProduto />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  )
}
