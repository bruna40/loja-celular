import { Container, ContainerForm } from './style'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from '../../api/axios'

export function Registro() {
  const { handleSubmit } = useForm()

  const handleChange = (fieldName, value) => {
    setDataForm((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onSubmit = () => {
    axios
      .post('/users', {
        name: dataForm.name,
        email: dataForm.email,
        password: dataForm.password,
      })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Container>
      <h1>Registro</h1>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            placeholder="Nome"
            id="name"
            value={dataForm.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={dataForm.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            placeholder="Senha"
            id="password"
            value={dataForm.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </ContainerForm>
    </Container>
  )
}
