import { Outlet } from "react-router-dom";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
