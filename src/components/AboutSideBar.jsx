import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutSideBar = () => {

  const links = [
    { name: "About Us", path: "/about" },
    { name: "Vision & Mission", path: "/about/vision" },
    { name: "Governing Body", path: "/about/governing-body" },
    { name: "Organization Structure", path: "/about/organization-structure" },
    { name: "Director Message", path: "/about/director-message" }
  ]

  return (
    <div className="flex flex-col gap-2 bg-gray-100 p-5 rounded-lg shadow-sm">

      {links.map((item,i)=>(
        <NavLink
          key={i}
          to={item.path}
          end={item.path === "/about"}
          className={({isActive}) =>
            `px-4 py-2 rounded-md transition ${
              isActive
                ? "bg-blue-600 text-white font-semibold"
                : "text-gray-700 hover:bg-blue-100"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}

    </div>
  )
}

export default AboutSideBar