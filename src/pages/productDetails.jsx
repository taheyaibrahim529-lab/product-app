import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ProductDetails =()=> {
    const {id} =useParams()
    const navigate = useNavigate()
    const [product, Setproduct] = useState(null)

    useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => Setproduct(data))
}, [id])
  if (!product) {return <p>loading....</p>}
  return (
    <div className="product-details">
            <button onClick={() => navigate(-1)} className="back-btn">
                رجوع
            </button>
            <div className="details-content">
                <img src={product.image} alt={product.title} />
                <div className="details-info">
                    <h2>{product.title}</h2>
                    <p className="price">{product.price} $</p>
                    <p className="description">{product.description}</p>
                    <button className="btn">أضف للسلة</button>
                </div>
            </div>
    </div>
  )
}

export default ProductDetails
