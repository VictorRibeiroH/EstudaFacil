"use client";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = ({ user }: { user: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <nav className="absolute left-0 right-0 top-16 border-b border-gray-200 shadow-lg bg-white">
          <div className="flex flex-col p-4 space-y-2">
            <Link
              className={buttonVariants({
                variant: "ghost",
              })}
              href="/pricing"
            >
              Planos
            </Link>
            {!user ? (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: "secondary",
                  })}
                >
                  Login
                </Link>
                <Link href="/register" className={buttonVariants()}>
                  Registre-se
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "secondary",
                  })}
                >
                  Dashboard
                </Link>

                <Link className={buttonVariants()} href={"/create"}>
                  Criar
                </Link>

                <Link
                  href={"/signout"}
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  Sair
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
