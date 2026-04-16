import React from "react";

const Achievement = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text mb-10">Achievements</h3>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Box 1 */}
        <div className="grid-container flex flex-col justify-between items-center text-center p-6 h-[420px]">

          {/* Image */}
          <div className="flex items-center justify-center w-full h-[220px]">
            <img
              src="/assets/leatcode50day.png"
              alt="LeetCode Badge"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Title */}
          <p className="grid-headtext mt-4">
            50 Day Badge
          </p>

          {/* Link */}
          <a
            className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition mt-2"
            href="https://leetcode.com/u/shaurya_goyal71/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Check Certification</p>
            <img
              src="/assets/arrow-up.png"
              className="w-3 h-3"
              alt="arrow"
            />
          </a>

        </div>

        {/* Box 2 */}
        <div className="grid-container flex flex-col justify-between items-center text-center p-6 h-[420px]">

          {/* Image */}
          <div className="flex items-center justify-center w-full h-[220px]">
            <img
              src="/assets/CompGraphics.jpg"
              alt="Computer Graphics Certificate"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Title */}
          <p className="grid-headtext mt-4">
            Computer Graphics Course
          </p>

          {/* Link */}
          <a
            className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition mt-2"
            href="https://www.udemy.com/certificate/UC-368d1baf-1ab1-4c43-b473-f31eode624a56/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Check Certification</p>
            <img
              src="/assets/arrow-up.png"
              className="w-3 h-3"
              alt="arrow"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Achievement;