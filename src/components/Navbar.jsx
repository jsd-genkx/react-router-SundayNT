import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-7 text-blue-700 font-bold underline mb-5 text-[20px]">
        <Link to= "/"><li>Home</li></Link>
        <Link to= "/about"><li>About</li></Link>
        <Link to= "/contact"><li>Contact</li></Link>
        <Link to= "/profile"><li>Profile</li></Link>
      </ul>
    </div>
  )
}

