import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/index";
import Menu from "./components/menu/index";
import Gallery from "./components/gallery/index";
import Contact from "./components/contact/index";

function App() {
  return (
    <div className="">
      <nav className="fixed top-0 left-0 z-10 w-full flex justify-between px-6 text-white font-bold ">
        <div className="opacity-0 w-0 md:opacity-100 md:w-auto py-8">Logo</div>
        <div className="flex h-20">
          <div className="h-full py-8 px-1 md:px-4 hover:bg-slate-600">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </div>
          <div className="h-full py-8 px-1 md:px-4 hover:bg-slate-600">
            <Link to="/menu">Menu</Link>
          </div>
          <div className="h-full py-8 px-1 md:px-4 hover:bg-slate-600">
            Reservation
          </div>
          <div className="h-full py-8 px-1 md:px-4 hover:bg-slate-600">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="h-full py-8 px-1 md:px-4 hover:bg-slate-600">
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <footer className="flex bg-slate-900 text-white pl-6 py-20">
        <div className="basis-1/5">
          <div className="py-4">Logo</div>
        </div>
        <div className="basis-1/5">
          <div className="py-4">Facebook</div>
          <div className="py-4">Instagram</div>
          <div className="py-4">Twitter</div>
        </div>
        <div className="basis-1/5">
          <div className="py-4">
            <Link to="/menu">Menu</Link>
          </div>
          <div className="py-4">Reservation</div>
          <div className="py-4">
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>
        <div className="basis-2/5">
          <div className="py-4">
            <Link to="/contacts">Contact Us</Link>
          </div>
          <div className="py-4">Be the first who get the reservation</div>
          <div className="py-4"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
