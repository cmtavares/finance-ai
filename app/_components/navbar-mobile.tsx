"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { CreditCardIcon, LayoutDashboardIcon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const NavbarMobile = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between border-b border-solid px-6 py-4 lg:hidden">
      {/* ESQUERDA */}
      <Link href="/">
        <Image src="/logo.svg" width={173} height={39} alt="Logo" />
      </Link>

      {/* DIREITA */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="border-b border-solid py-2">
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonPopoverCard: {
                    pointerEvents: "auto",
                  },
                },
              }}
            />
          </SheetDescription>
          <SheetHeader>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 flex justify-start"
            >
              <LayoutDashboardIcon />
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "font-bold text-primary"
                    : "text-muted-foreground"
                }
              >
                Dashboard
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="mb-2 flex justify-start"
            >
              <CreditCardIcon />
              <Link
                href="/subscription"
                className={
                  pathname === "/subscription"
                    ? "font-bold text-primary"
                    : "text-muted-foreground"
                }
              >
                Assinatura
              </Link>
            </Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavbarMobile;
