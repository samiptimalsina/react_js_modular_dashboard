import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../modules/landing/components/Header";
import Footer from "../modules/landing/components/Footer";

export default function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
