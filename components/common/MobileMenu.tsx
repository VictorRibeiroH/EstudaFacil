"use client";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";

const MobileMenu = ({ user }: { user: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </div>
  );
};

export default MobileMenu;
