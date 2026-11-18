import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-8 text-4xl font-bold">
        XPBRO
      </h1>

      <p className="mb-8 text-gray-600">
        Welcome to XPBRO.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link
          to="/login"
          className="rounded border p-4 hover:bg-gray-50"
        >
          Login
        </Link>

        <Link
          to="/profile"
          className="rounded border p-4 hover:bg-gray-50"
        >
          User Profile
        </Link>

        <Link
          to="/dashboard"
          className="rounded border p-4 hover:bg-gray-50"
        >
          Dashboard
        </Link>

        <Link
          to="/gameCollection"
          className="rounded border p-4 hover:bg-gray-50"
        >
          Game Collection
        </Link>
      </div>
    </div>
  );
}
