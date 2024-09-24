import React from "react";
import logo from "@/app/images/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center md:justify-between p-5 h-20">
      <div className="flex items-center space-x-2">
        <Image src={logo} width={50} objectFit="cover" alt="logo" />
        <h1 className="bold text-lg">CREAVE STUDIO LABS</h1>
      </div>

      <div className="hidden md:block">
        <Link
          href="https://forms.gle/1iv4YdHZM7iTCALcA"
          legacyBehavior
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-sm text-lg"
          >
            Book An Appointment
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
