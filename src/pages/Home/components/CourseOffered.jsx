import React from 'react'
import civilImg from '/civil.png'
import aimlImg from '/aids.jfif'
const CourseOffered = () => {

  const courses = [
    {
      name: "Civil Engineering",
      img: civilImg,
      desc: "Structural design, construction technology and infrastructure development."
    },
    {
      name: "Computer Science Engineering",
      img: civilImg,
      desc: "Programming, AI, data structures and modern software development."
    },
    {
      name: "Mechanical Engineering",
      img: aimlImg,
      desc: "Manufacturing, thermal systems and machine design."
    },
    {
      name: "Aritificial Intelligence & Data Science",
      img: aimlImg,
      desc: "Manufacturing, thermal systems and machine design."
    }
  ]

  return (
    <section className="bg-gray-50 py-16">

      <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
        Courses Offered
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-xl font-semibold text-blue-900">
                {course.name}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {course.desc}
              </p>

              <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default CourseOffered