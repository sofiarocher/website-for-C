import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Logo from "../assets/logo.png";
import Arg from "../assets/arg-flag.webp";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      "Sobre Mí",
      "Online",
      "Presenciales",
      "Personalizados",
      "Formación Intensiva"
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} position="static" className="bg-pink">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand >
            <img src={Logo} alt="Logo" className="w-14 ml-20 sm:ml-0"/>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-7" justify="center">
          <NavbarItem>
            <Link href="/" className="text-brown font-bold">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sobremi" className="text-brown font-bold">
              Sobre Mí
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/online" className="text-brown font-bold">
              Online
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/presenciales" className="text-brown font-bold">
              Presenciales
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-brown font-bold">
              Formación Intensiva
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/asesorias" className="text-brown font-bold">
              Asesorías
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <img src={Arg} width={30} />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-pink pt-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} >
              <Link
                className="w-full text-brown font-semibold"
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
  

export default Nav
