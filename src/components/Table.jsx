import React from "react";

function Table({ candidates, onEditClick, onDeleteClick }) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Place of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Years of Experience
              </th>
              <th scope="col" className="px-6 py-3">
                Last Salary
              </th>
              <th scope="col" className="px-6 py-3">
                <span className=" text-black">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {candidates.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  No candidate data
                </td>
              </tr>
            ) : (
              // Data kandidat
              candidates.map((candidate) => (
                <tr
                  key={candidate.candidate_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {candidate.full_name}
                  </td>
                  <td className="px-6 py-4">{candidate.email}</td>
                  <td className="px-6 py-4">{candidate.phone_number}</td>
                  <td className="px-6 py-4">{candidate.dob}</td>
                  <td className="px-6 py-4">{candidate.pob}</td>
                  <td className="px-6 py-4">{candidate.gender}</td>
                  <td className="px-6 py-4">{candidate.year_exp}</td>
                  <td className="px-6 py-4">${candidate.last_salary}</td>
                  <td className="px-6 py-4 text-right flex gap-4">
                    <button
                      onClick={() => onEditClick(candidate)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteClick(candidate.candidate_id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
