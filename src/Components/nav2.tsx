"use client";

import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { AcmeLogo } from "./AcmeLogo";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session } = useSession();
  console.log(session);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/customers" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/history">
            History
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <NavbarItem>
            <h1 color="primary">{session.user.name}</h1>
            <img src={`${session.user.image}`} alt="avatar" />
          </NavbarItem>
        ) : (
          <NavbarItem className="Xhidden Xlg:flex flex">
            <Button onClick={() => signIn()}>Login</Button>
          </NavbarItem>
        )}

        {session?.user ? (
          <NavbarItem>
            <Button
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                });
              }}
            >
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
