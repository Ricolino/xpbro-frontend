import { Outlet } from "react-router-dom";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

export const AppLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10] text-slate-100">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="fixed top-[40%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="fixed top-[60%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
