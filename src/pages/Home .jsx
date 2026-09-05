import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
function Home () {
    const [products, setproducts] = useState([])
    const [search, setsearch ] = useState("")

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(data => setproducts(data))
    },[])

   const filtered = products.filter((product)=>(
    product.title.toLowerCase().includes(search.toLowerCase())
   ))
  return (
    <div className="home">
        <h2>منتجاتنا</h2>
        <input type="text" value={search} 
          onChange={(e)=>setsearch(e.target.value)}
          placeholder="......................" className="search" />

        <div className="products-grid">
            {filtered.map((product) => (
                <div key={product.id} className="products-card">

                    <img src={product.image} alt={product.title} />

                    <h3>{product.title}</h3>
                    <p>{product.price}$</p>

                    <Link to={`/products/${product.id}`} className="btn">
                       عرض المنتجات
                    </Link>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default Home 
