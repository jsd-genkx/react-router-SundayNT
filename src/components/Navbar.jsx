import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="mb-5">
      <ul className="flex gap-7 font-bold text-blue-700">
        <li>
            <Link to= "/">Home</Link>
        </li>

        <li>
            <Link to= "/about">About</Link>
        </li>

        <li>
            <Link to= "/contact">Contact</Link>
        </li>      
      </ul>
    </nav>
  )
}

