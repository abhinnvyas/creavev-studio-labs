import React from "react";
import illustration from "@/app/images/Illustration.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-10 min-h-[calc(100vh-80px)]">
      {/* Text Section */}
      <div className="md:flex-5 space-y-6 md:max-w-[60%]">
        <h1 className="text-5xl md:text-6xl font-bold">
          DON’T LOSE ANY MORE LEADS
        </h1>
        <p className="text-xl">
          Get A Website Made Tailored To Your Business Requirements
        </p>
        <div className="flex items-center space-x-4">
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
          <h2 className="text-md font-light">FOR $FREE.99</h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:flex-3 animate-float">
        <Image
          src={illustration}
          alt="Illustration"
          width={500}
          height={400}
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
