import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1 className="font-bold text-[18px] mb-3">User Profile</h1>
      <ul className="text-teal-600 underline font-semibold list-disc list-inside mb-3">
        <li>
            <Link to="info">Profile Info</Link>
        </li>
        <li>
            <Link to="order">Orders</Link>
        </li>
        <li>
            <Link to="setting">Setting</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
