import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/index";
import Menu from "./components/menu/index";

function App() {
  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full flex justify-between bg-red-500 py-8 px-6">
        <div>Logo</div>
        <div className="flex">
          <div className="px-4">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </div>
          <div className="px-4">
            <Link to="/menu">Menu</Link>
          </div>
          <div className="px-4">Reservation</div>
          <div className="px-4">Gallery</div>
          <div className="px-4">Contacts</div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <footer className="flex bg-red-400 pl-6">
        <div className="basis-1/5">
          <div className="py-4">Logo</div>
        </div>
        <div className="basis-1/5">
          <div className="py-4">Facebook</div>
          <div className="py-4">Instagram</div>
          <div className="py-4">Twitter</div>
        </div>
        <div className="basis-1/5">
          <div className="py-4">Menu</div>
          <div className="py-4">Reservation</div>
          <div className="py-4">Gallery</div>
        </div>
        <div className="basis-2/5">
          <div className="py-4">Contact Us</div>
          <div className="py-4">Be the first who get the reservation</div>
          <div className="py-4">Form</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
