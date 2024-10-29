import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const user = false;

  return (
    <header>
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary">EstudaFácil</span>
          </Link>
          <MobileMenu user={user}/>
          <nav className="hidden md:flex items-center space-x-4">
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
                <Link href="/login"
                    className={buttonVariants({
                        variant: "secondary"
                    })}
                >Login</Link>

                <Link href="/register" className={buttonVariants()}>Registre-se</Link>
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
                Criar</Link>

                <Link href={"/signout"} className={buttonVariants({
                    variant: "ghost"
                })}>
                Sair</Link>
              </div>
            )}
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
