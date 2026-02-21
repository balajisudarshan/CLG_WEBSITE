import React from 'react'
import chairman from '/chaiman.png'
import correspondent from '/correspondent.png'
import director from '/director.png'

const leaders = [
  {
    role: "Chairman",
    name: "Dr. Y. Venkatarami Reddy",
    img: chairman
  },
  {
    role: "Correspondent",
    name: "Nedurumalli Ramkumar",
    img: correspondent
  },
  {
    role: "Director",
    name: "Dr. V. Vijaya Kumar Reddy",
    img: director
  }
]

const AdministrationSection = () => {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Administration
          </h2>

          <div className="space-y-6">

            {leaders.map((person, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {person.role}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {person.name}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Accreditation & Affiliation
          </h2>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              AICTE Approved Institution
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              Autonomous Status by UGC
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              NAAC ‘A’ Grade Accreditation
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              NBA Accredited Programs
            </li>

          </ul>

        </div>

      </div>

    </section>
  )
}

export default AdministrationSection