import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">
        XPBRO
      </h1>

      <p className="mb-8 text-gray-600">
        Welcome to XPBRO.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link
          to="/dashboard"
          className="rounded border bg-white p-4 hover:bg-gray-50"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
