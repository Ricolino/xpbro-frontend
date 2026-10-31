import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Hello from "./pages/Hello";
import UserProfile from "./pages/UserProfile";

function PrivateRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = true; // sau logica ta reală
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/hello"
            element={
              <PrivateRoute>
                <Hello />
              </PrivateRoute>
            }
          />
          <Route
            path="/userProfile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
        </Routes>
        </BrowserRouter>
  )
}
