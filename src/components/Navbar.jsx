import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <ul>
        <Link to= "/"><li>Home</li></Link>
        <Link to= "/about"><li>About</li></Link>
        <Link to= "/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

