import React from "react";
import cheer from "../../asset/cheer.jpg";
import env from "../../asset/env.jpg";
import gather from "../../asset/gather.jpg";
import waiter from "../../asset/waiter.jpg";
import window from "../../asset/window.jpg";
import chickenChop from "../../asset/chickenChop.jpg";
import tartine from "../../asset/tartine.jpg";
import spegatti from "../../asset/spegatti.jpg";

import DishCard from "./DishCard";

function Home() {
  return (
    <>
      <article className="bg-[url('./asset/dining_1.jpg')] bg-cover bg-center py-48 md:py-80 h-screen">
        <div className="container mx-auto py-auto backdrop-blur-sm bg-white/30 p-9 flex flex-col">
          <h2 className="text-3xl text-black w-full pb-4 fond-bold text-center">
            Good Food, Great Vibes
          </h2>
          <p className="text-center my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-yellow-200 p-4 rounded-xl w-1/2 md:w-1/4 place-self-center">
            Book A Table
          </button>
        </div>
      </article>
      <article className="container mx-auto md:flex text-white py-24">
        <div className="columns-2 gap-1 p-4">
          <img src={cheer} alt="cheer" className="object-cover h-56 w-56" />
          <img src={env} alt="env" className="object-cover h-56 w-56" />
          <img src={gather} alt="gather" className="object-cover h-56 w-56" />
          <img src={waiter} alt="waiter" className="object-cover h-56 w-56" />
        </div>
        <div className="md:w-1/2 p-4 place-self-center">
          <h2 className="text-3xl text-yellow-200 py-1">Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </article>
      <article className="container mx-auto text-white">
        <h2 className="text-3xl text-yellow-200 w-full text-center pt-4">
          Today Special
        </h2>
        <p className="w-full text-center py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 py-6">
          <DishCard imageUrl={chickenChop} name="Chicken Chop" />
          <DishCard imageUrl={tartine} name="Smoked Salmon Tartine" />
          <DishCard imageUrl={spegatti} name="Spegatti" />
        </div>
      </article>
      <article className="container mx-auto md:flex text-white py-24">
        <div className="md:w-1/2 place-self-center">
          <h2 className="text-3xl text-yellow-200 w-full py-4">
            Discover the true meaning of taste
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <button className="bg-yellow-200 m-4 p-4 rounded-xl w-1/2 md:w-1/4 text-black">
            Book A Table
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={window}
            alt="window"
            className="object-cover h-96 w-72 mx-auto"
          />
        </div>
      </article>
      <article className="bg-[url('./asset/salad.jpg')] bg-cover bg-center md:h-72 py-10 md:py-0 flex items-center">
        <div className="container mx-auto py-auto backdrop-blur-sm bg-white/30 p-9">
          <h2 className="text-3xl text-black w-full text-center pb-4">
            What people are saying about us
          </h2>
          <div className="md:flex">
            <div className="md:w-1/4">
              <img
                src={env}
                alt="env"
                className="object-cover h-32 w-32 rounded-full mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="container mx-auto text-white py-24">
        <h2 className="text-3xl text-yellow-200 w-full text-center pt-4">
          Gallery
        </h2>
        <p className="w-full text-center py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-2">
          <img
            src={cheer}
            alt="cheer"
            className="object-cover h-full md:row-span-2 p-2 md:p-0"
          />
          <img src={env} alt="env" className="object-cover h-full p-2 md:p-0" />
          <img
            src={gather}
            alt="gather"
            className="object-cover h-full md:row-span-2 p-2 md:p-0"
          />
          <img
            src={waiter}
            alt="waiter"
            className="object-cover h-full p-2 md:p-0"
          />
        </div>
      </article>
    </>
  );
}

export default Home;
