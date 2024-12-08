import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([])

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

  console.log(products)

  return (
    <>
      <div className='app'>

        <h1>Lista de Produtos</h1>

        <ul>
          {products.map((product) => (

            <li key={product.id}>{product.name} - R$ {product.price}</li>

          ))}
        </ul>

      </div>
    </>
  )
}

export default App
