import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import Logo from "../assets/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
/*   const [isEnglish, setIsEnglish] = useState(false);  */
  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Sobre Mí", href: "/sobremi" },
    { label: "Online", href: "/online" },
    { label: "Presenciales", href: "/presenciales" },
    { label: "Formación Intensiva", href: "/formacion" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="static"
      className="bg-pink"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <Image src={Logo} alt="Logo" className="w-14 ml-20 sm:ml-0" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link href={item.href} className="text-brown font-bold">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          {/* <p className="font-semibold text-brown cursor-pointer" onClick={() => setIsEnglish(!isEnglish)}>{isEnglish ? "ESP" : "ENG"} </p>  */}
          <p> </p>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-pink pt-4 sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full text-brown font-semibold"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
