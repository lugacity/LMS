import { useFetchedIssuedCert } from "@/hooks/certificate/use-fetched-issued-certificates";
import { formatDateString } from "@/lib/formatdatestring";
import DashButton from "@/pages/auth/ButtonDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSearchParams } from "react-router-dom";

// const issueCertificate = [
//     {
//         id: '1',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Live Session',
//         issueDate: '29/08/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'August 2024 Cohort'
//     },
//     {
//         id: '2',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Recorded Session',
//         issueDate: '30/10/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'October 2024 Cohort'
//     },
//     {
//         id: '3',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Recorded Session',
//         issueDate: '30/10/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'October 2024 Cohort'
//     },
//     {
//         id: '4',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Live Session',
//         issueDate: '21/11/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'November 2024 Cohort'
//     },
//     {
//         id: '5',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Live Session',
//         issueDate: '30/12/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'December 2024 Cohort'
//     },
//     {
//         id: '6',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Recorded Session',
//         issueDate: '30/10/2025',
//         issueTime: '04:12pm',
//         courseCohort:  'January 2025 Cohort'
//     },
//     {
//         id: '7',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Live Session',
//         issueDate: '30/10/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'October 2024 Cohort'
//     },
//     {
//         id: '8',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Recorded Session',
//         issueDate: '30/10/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'October 2024 Cohort'
//     },
//     {
//         id: '9',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Live Session',
//         issueDate: '30/10/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'October 2024 Cohort'
//     },
//     {
//         id: '10',
//         courseTitle: 'Project Consultant Training Programme (Bundle)',
//         courseType: 'Live Session',
//         issueDate: '30/10/2024',
//         issueTime: '10:12pm',
//         courseCohort:  'October 2024 Cohort'
//     },
// ]

const CertificateHistory = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { data, isLoading, isError } = useFetchedIssuedCert(id);
  console.log("This is the issued certificate", data);

  // if (data?.data?.data.length > 0) {
  //     <p>No certificate issued yet</p>
  // }

  return (
    <div>
      <div className="grid grid-cols-12 py-6">
        <div className="col-span-4 text-[20px] font-[500] text-[#344054]">
          <p>Certificate issue history</p>
        </div>

        <div className="col-span-8 flex items-center justify-between">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full rounded-md border px-1 py-2 pl-10 text-[14px] focus:outline-none"
              placeholder="Search Course"
            />
            <div className="absolute left-3 top-1.5 text-gray-400">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          "Network error"
        ) : data?.data?.data.length < 1 ? (
          <p className="text-gray-500 italic">No certificates issued yet...</p>
        ) : (
          <table className="min-w-full border border-gray-300 bg-white text-[13px] text-[#344054]">
            <thead>
              <tr className="min-w-full border-0 border-red-500 bg-[#E4E7EC]">
                <th className="border-b p-4 text-left">S/N</th>
                <th className="border-b p-4 text-left">Course Title</th>
                <th className="border-b p-4 text-left">Course Type</th>
                <th className="border-b p-4 text-left">Issue Date</th>
                <th className="border-b p-4 text-left">Course Cohort</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {data?.data?.data.map((cert, index) => (
                <tr key={index}>
                  <td className="border-b p-4">
                    {(index + 1).toString().padStart(1, "0")}
                  </td>
                  <td className="border-b p-4">{cert.course_title}</td>
                  <td className="border-b p-3">
                    <button className="rounded bg-[#FFECE5] p-1 capitalize text-[#AD3307]">
                      {cert.course_type}
                    </button>
                  </td>

                  <td className="border-b p-4">
                    {formatDateString(cert.created_at)}
                  </td>
                  <td className="border-b p-4">{cert.cohort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CertificateHistory;
