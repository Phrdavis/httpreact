import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([])
  const [name, setName] = useState([])
  const [price, setPrice] = useState([])

  useEffect(()=>{

    async function fetchData(){

      try{

        const res = await fetch(url);
    
        const data = await res.json();
    
        setProducts(data)

      }catch(error){

        console.error(error)

      }
  
    }

    fetchData();

  }, [])

  const handleSubmit = async (e) =>{

    e.preventDefault();

    const product = {

      name,
      price

    };

  }

  return (
    <>
      <div className='app'>

        <h1>Lista de Produtos</h1>

        <ul>
          {products.map((product) => (

            <li key={product.id}>{product.name} - R$ {product.price}</li>

          ))}
        </ul>

        <div className='add-product'>

          <form onSubmit={handleSubmit}>

            <label>Nome: </label>
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)}/>
            
            <label> Preço: </label>
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)}/>
            
            <input type="submit" className='criar-submit' value="Criar"/>
          </form>

        </div>

      </div>
    </>
  )
}

export default App
