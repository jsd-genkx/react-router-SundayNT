import { useParams } from "react-router-dom"

export default function ProductDetail() {
    const { id } = useParams() ;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Details for Product ID: {id}</p>
    </div>
  )
}