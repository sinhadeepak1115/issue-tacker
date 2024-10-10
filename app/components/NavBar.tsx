"use client";
import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./modeToggle";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex justify-between bg-orange-300 dark:bg-blue-700 px-5 h-14 items-center">
      {/* Left section with logo and links */}
      <div className="flex items-center space-x-6">
        <Link href="/">
          <FaBug className="text-red-500" />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`${
                link.href === currentPath ? "text-[#2E236C]" : "text-sky-500"
              } hover:text-[#940B92] transition-color`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      {/* Right section with the ModeToggle */}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
