import chickenChop from "../../asset/chickenChop.jpg";
import tartine from "../../asset/tartine.jpg";
import spegatti from "../../asset/spegatti.jpg";

import DishCard from "../home/DishCard";

function Menu() {
  return (
    <>
      <article className="container mx-auto text-white py-48 md:py-40">
        <h2 className="text-3xl text-yellow-200 w-full text-center pt-4">
          Menu
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
    </>
  );
}

export default Menu;
