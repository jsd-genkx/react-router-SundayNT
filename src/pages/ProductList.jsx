import { Link } from "react-router-dom"

const products = [
    { id: 1, name: "Product 1"},
    { id: 2, name: "Product 2"},
    { id: 3, name: "Product 3"}
]


export default function ProductList() {
  return (
    <div>
      <h1 className="mb-3 font-semibold text-[18px]">Product List</h1>
      <ul>
        <li>
          <Link to={`/products/x.id`}>gg</Link>
        </li>
        {products.map((product) => 
            <li key={product.id} className="list-disc list-inside underline mb-2 text-teal-600">
                <Link to={`/products/${product.id}`}> {product.name} </Link>
            </li>
        )}
      </ul>
    </div>
  )
}
