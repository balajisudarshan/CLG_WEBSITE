import React from 'react'
import clgBanner from '/image.png'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE TEXT */}
      <div className="flex-1 flex items-center justify-center bg-blue-950 text-white px-8 py-16">
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            NBKR Institute of Science & Technology
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Autonomous | NAAC 'A' Grade | NBA Accredited <br/>
            Empowering students through quality education,
            research and industry collaboration.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-semibold transition">
            Explore Admissions
          </button>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 h-[350px] lg:h-auto">
        <img
          src={clgBanner}
          className="w-full h-full object-cover"
          alt="college campus"
        />
      </div>

    </section>
  )
}

export default Hero