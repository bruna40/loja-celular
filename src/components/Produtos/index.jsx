import React, { useState, useEffect } from 'react'
import { Container } from './style'
import axios from '../../api/axios'

export function Produtos({ idProduct }) {
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null)
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    brand: '',
    model: '',
    price: '',
    color: '',
  })
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get(`/products/${idProduct}`)
      .then(({ data }) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error)
      })
  }, [idProduct, products])

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`/products/${productId}`)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId),
        )
      })
      .catch((error) => {
        console.error('Erro ao excluir produto:', error)
      })
  }

  const handleEditProduct = (productId) => {
    setEditProduct(productId)
    const productToEdit = products.find((product) => product.id === productId)

    setEditedProduct(productToEdit)
  }

  const handleSaveEdit = () => {
    const productData = {
      ...editedProduct,
      price: parseFloat(editedProduct.price),
    }
    axios
      .put(`/products/${editProduct}`, productData)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === editProduct ? editedProduct : product,
          ),
        )
        setEditProduct(null)
        setEditedProduct({
          name: '',
          brand: '',
          model: '',
          price: '',
          color: '',
        })
      })
      .catch((error) => {
        console.error('Erro ao editar produto:', error)
      })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditedProduct((prevEditedProduct) => ({
      ...prevEditedProduct,
      [name]: value,
    }))
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section>
      <h1>Produtos</h1>
      <div>
        <input
          type="text"
          placeholder="Pesquisar pelo nome do produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Container>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Cor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                {editProduct === product.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editProduct === product.id ? (
                  <input
                    type="text"
                    name="brand"
                    value={editedProduct.brand}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.brand
                )}
              </td>
              <td>
                {editProduct === product.id ? (
                  <input
                    type="text"
                    name="model"
                    value={editedProduct.model}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.model
                )}
              </td>
              <td>
                {editProduct === product.id ? (
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editProduct === product.id ? (
                  <input
                    type="text"
                    name="color"
                    value={editedProduct.color}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.color
                )}
              </td>
              <td>
                {editProduct === product.id ? (
                  <>
                    <button onClick={handleSaveEdit}>Salvar</button>
                    <button onClick={() => setEditProduct(null)}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEditProduct(product.id)}>
                    Editar
                  </button>
                )}
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Container>
    </section>
  )
}
