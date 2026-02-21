import React from 'react'
import Container from '../../components/Container'
import ContainerHeading from '../../components/ContainerHeading'
const AboutUs = () => {
  const courses = [
    'Computer Science And Engineering',
    'Artificial Intelligence & Data Science (AI&DS)',
    'Electronics & Communication Engineering',
    'Electrical & Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ]

  const tableData = [
    { position: 'Chairman', name: 'Dr.Y.Venkatarami Reddy' },
    { position: 'Correspondent', name: 'Sri Nedurumalli Ram Kumar' },
    { position: 'Director', name: 'Dr. V. Vijaya Kumar Reddy' }
  ]
  return (
    <Container>
      <ContainerHeading text='About Us'/>
      <div className='flex flex-col gap-4'>
        <p>
          NBKR Institute of Science & Technology established in 1979 is an Autonomous Institute affiliated to JNTUA Anantapuramu. This Institute is reaccredited by NAAC (UGC) for the Third cycle with “A” grade. All B.Tech courses are accredited by National Board of Accreditation (NBA) under Tier 1. UGC awarded the status of “College with Potential for Excellence (CPE)” to our Institute.
        </p>
        <p className=' uppercase font-medium'>The Institute offers B.Tech programmes in</p>
        <ul className='list-disc ml-10'>
          {courses.map((item) => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
        <p >The Institute has an R&D Cell and recognised research centres of JNTUA Anantapuramu offering Ph.D programmes.</p>
        <p>Training programs through Industry-Institute interactions are organized on latest trends & innovations in Technology by eminent Industry experts, Entrepreneurs, HR managers and Alumni by Training & Placement Cell.</p>
        <p>The Institute is located on wide spread campus that is covered in beautiful greenery includes Academic Blocks, Boys and Girls Hostels, Open Air Auditorium, Sports Complex, Staff Quarters etc. The Institute focuses on skill and professional development of the graduates through student run clubs, technical associations. Professional chapters like IEEE, ISTE, IETE, and CSI exist in our Institute..</p>
        <p>Department laboratories and Computer Centre has state-of-the-art equipment to fulfill the needs of the researchers, students and faculty. The central library is well-stocked with books, journals, magazines, newspapers thousands of e-journals and e-books. The e-resources can be accessed through the campus network..</p>
        <p>There are adequate opportunities for co-curricular and extra-curricular activities helping students gain overall skills. Industrial visits and relevant field visits expose the students to hands-on learning experience..</p>
        <p>Industry Institute Partnership Cell (IIP Cell) caters the needs of the Institute and Industry by way of internships, consultancy..</p>
        <p>The Institute has NCC- Army & Navy wings on the campus. The NCC Cadets of the Institute are enthusiastically participating in the State & National level parades on regular basis.</p>


        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="text-left px-6 py-3">Position</th>
                <th className="text-left px-6 py-3">Name</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-200"
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {data.position}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {data.name}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </Container>
  )
}

export default AboutUs