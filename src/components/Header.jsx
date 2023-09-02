import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-2xl mx-auto gap-2">
      <h1 className="text-xl md:text-3xl font-bold justify-center">
        What are you up for today?
      </h1>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
