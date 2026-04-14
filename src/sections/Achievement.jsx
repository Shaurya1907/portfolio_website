import React from 'react'

const Achievement = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text mb-10">Achievements</h3>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Box 1 */}
        <div className="grid-container aspect-square flex flex-col justify-center items-center text-center">
          
          <img 
            src="/assets/leatcode50day.png" 
            alt="badge" 
            className="w-2/3 object-contain"
          />

          <p className="grid-headtext">50 Day Badge</p>

          <a 
            className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition"
            href="https://leetcode.com/u/shaurya_goyal71/" 
            target="_blank" 
            rel="noreferrer"
          >
            <p>Check Profile</p>
            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
          </a>
        </div>

        {/* Box 2 */}
        <div className="grid-container aspect-square flex flex-col justify-center items-center text-center">
          
          <img 
            src="/assets/leatcode50day.png" 
            alt="badge" 
            className="w-2/3 object-contain"
          />

          <p className="grid-headtext">50 Day Badge</p>

          <a 
            className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition"
            href="https://leetcode.com/u/shaurya_goyal71/" 
            target="_blank" 
            rel="noreferrer"
          >
            <p>Check Profile</p>
            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Achievement