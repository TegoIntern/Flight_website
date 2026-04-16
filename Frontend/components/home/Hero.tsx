"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

  {/* BACKGROUND IMAGE */}     //Put a airport background here 
  <div className="absolute inset-0 z-0">
    <img
      src="/aiport_en.jpeg" 
      alt="Airport Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* OVERLAY */}
  <div className="absolute inset-0 z-10 bg-black/40"></div>

  {/* CONTENT */}
  <div className="relative z-20 max-w-3xl">

    <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
  Corporate Flight Booking Made Easy
</h1>

<p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
  Book flights, manage employee travel, and streamline company logistics all in one powerful platform.
</p>

<div className="flex justify-center gap-6 flex-wrap">

  {/* GET STARTED */}
  <button
    onClick={() => router.push("/login")}
    className="bg-red-600 text-white px-8 py-4 text- rounded-xl hover:bg-red-700 hover:scale-105 transition duration-200 shadow-lg focus:outline-none"
  >
    Get Started
  </button>

  {/* LEARN MORE */}
  <button
    onClick={() => router.push("/about")}
    className="border border-white text-white px-8 py-4 text-lg rounded-xl hover:bg-white/10 hover:scale-105 transition duration-200 focus:outline-none"
  >
    Learn More
  </button>

</div>

  </div>

</div>
  );
}
