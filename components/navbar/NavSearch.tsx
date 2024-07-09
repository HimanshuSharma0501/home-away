import React from "react";
import { Input } from "../ui/input";
function NavSearch() {
  return (
    <Input
      type="text"
      placeholder="Find a Property....."
      className="max-w-xs dark:bg-muted"
    ></Input>
  );
}

export default NavSearch;
