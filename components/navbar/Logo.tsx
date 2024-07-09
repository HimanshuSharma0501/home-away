import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaPlaneDeparture } from "react-icons/fa6";
function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href={"/"}>
        <FaPlaneDeparture className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
