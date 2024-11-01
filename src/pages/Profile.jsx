import { Link, Outlet } from "react-router-dom";


export default function Profile() {
  return (
    <div>
      <h1 className="text-[18px] font-semibold mb-3">User profile</h1>
      <ul className="flex gap-7 text-teal-600 underline font-semibold">
        <li>
            <Link to="info">Profile Info</Link>
        </li>
        <li>
            <Link to="orders">Orders</Link>
        </li>
        <li>
            <Link to="setting">Setting</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
