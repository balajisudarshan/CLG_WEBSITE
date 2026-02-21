import React from 'react';
import Container from '../../components/Container';

const governingBodyValues = [
  { sno: '1', mainTxt: 'Dr. Y. Venkatarami Reddy', subTxt: 'Former Member - UPSC.', position: 'Chairman' },
  { sno: '2', mainTxt: 'Dr. P. Jaya Rami Reddy', subTxt: 'Former Vice Chancellor, S.V.U., Tirupati', position: 'Member' },
  { sno: '3', mainTxt: 'Dr. K. Narayana', subTxt: 'Former Director, SHAR Centre.', position: 'Member' },
  { sno: '4', mainTxt: 'Sri K. Damodara Reddy', subTxt: 'Secretary, HVUS.', position: 'Member' },
  { sno: '5', mainTxt: 'Sri N. Ram Kumar', subTxt: 'Correspondent, N.B.K.R.I.S.T.', position: 'Member' },
  { sno: '6', mainTxt: 'Sri K. Sanjeevaiah', subTxt: 'MLA, Sulurpet', position: 'Member' },
  { sno: '7', mainTxt: 'Dr. M. Vijaya Kumar', subTxt: 'Rector, JNTUA.', position: 'Govt. Nominee' },
  { sno: '8', mainTxt: 'Dr. P. Sujatha', subTxt: 'Principal, JNTUACE', position: 'University Nominee' },
  { sno: '9', mainTxt: 'Dr. Amiya Kumar Rath', subTxt: 'Professor, VSSUT, Odisha', position: 'UGC Nominee' },
  { sno: '10', mainTxt: 'Dr. D. Srinivas', subTxt: 'Professor, N.B.K.R.I.S.T.', position: 'Member' },
  { sno: '11', mainTxt: 'Dr. S. Suresh Reddy', subTxt: 'Professor, N.B.K.R.I.S.T.', position: 'Member' },
  { sno: '12', mainTxt: 'Dr. V. Vijaya Kumar Reddy', subTxt: 'Director, N.B.K.R.I.S.T.', position: 'Member Secretary' },
];

const GoverningBody = () => {
  return (
    <Container>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
            {/* Header - visible only on desktop */}
            <div className="hidden md:block bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 px-6 py-6 md:py-7">
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center tracking-wide">
                Governing Body Members
              </h2>
            </div>

            {/* Mobile: Card view  |  Desktop: Table view */}
            <div className="md:hidden divide-y divide-gray-200">
              {governingBodyValues.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white hover:bg-indigo-50/40 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 font-semibold text-sm">
                        {item.sno}
                      </span>
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.position}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.mainTxt}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.subTxt}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20"
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Name & Designation
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-64"
                    >
                      Position
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {governingBodyValues.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-indigo-50/40 transition-colors duration-200"
                    >
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-700">
                        {item.sno}
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-base font-semibold text-gray-900">
                          {item.mainTxt}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          {item.subTxt}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex px-3.5 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                          {item.position}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Subtle footer accent */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GoverningBody;