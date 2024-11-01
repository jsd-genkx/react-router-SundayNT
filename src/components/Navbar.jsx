import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-7 text-[20px] text-blue-700 font-bold mb-4 underline">
        <Link to= "/"><li>Home</li></Link>
        <Link to= "/about"><li>About</li></Link>
        <Link to= "/products"><li>Product List</li></Link>
        <Link to= "/contact"><li>Contact</li></Link>
        
      </ul>
    </div>
  )
}

