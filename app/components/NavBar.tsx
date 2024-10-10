import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex  text-gray-50 dark:bg-slate-500 space-x-6 md-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6 items-right">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-sky-500 hover:text-sky-800 transition-color"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
