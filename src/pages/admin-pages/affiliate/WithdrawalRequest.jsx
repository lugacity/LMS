import React from 'react'
import { withdrawalRequest } from '@/lib/withdrawalRequest'
import DashButton from '@/pages/auth/ButtonDash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCopy, faDownload, faSearch } from '@fortawesome/free-solid-svg-icons'
import MarkRead from '../../../assets/images/mark_as_read.svg';
import MarkPaid from '../../../assets/images/mark_paid.svg';

const WithdrawalRequest = () => {
  return (
    <div  className='mt-8 pl-3'>

         <div className='grid grid-cols-12 py-10'>
            <div className='text-[20px] col-span-4 font-[500]text-[#344054]' >
                <p>Withdrawal Request</p>
            </div>

            <div className='col-span-8'>
                <div className='flex items-center justify-between'> 
                    <div className="relative w-3/4">
                        <input type="text" className="w-full rounded-md border bg-gray-50 px-1 py-2 pl-10 text-[14px] focus:outline-none"
                            placeholder="Search Course" />
                        <div className="absolute left-3 top-1.5 text-gray-400">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>

                    <div>
                        <DashButton className="rounded  p-2 text-white">
                            <FontAwesomeIcon icon={faDownload} />  Export CSV
                        </DashButton>
                    </div>
                </div>

            </div>
            
        </div>


        {/* Withdrawal Request Data */}
        <div className="overflow-x-auto">
      
            <table className="max-w-full bg-white text-[#344054] text-[13px] border border-gray-300">
                <thead>
                    <tr className="max-w-full  bg-[#E4E7EC] border-0 border-red-500">
                    <th className="p-4 text-left border-b">S/N</th>
                    <th className="p-4 text-left border-b">Name</th>
                    <th className="p-4 text-left border-b">Account Details</th>
                    <th className="p-4 text-left border-b">Sort Code</th>
                    <th className="p-4 text-left border-b">Amount</th>
                    <th className="p-4 text-left border-b">Available <br/> Balance</th>
                    <th className="p-4 text-left border-b">Date</th>
                    <th className="p-4 text-left border-b">Action</th>
                    </tr>
                </thead>
                <tbody className='text-[14px]'>
                    {withdrawalRequest.map((data, index) => (
                    <tr key={index}>
                        <td className="p-4 border-b">{index + 1}</td>
                        <td className="p-4 border-b">{data.name} | <br/> {`${data.email.length > 15 ? `${data.email.slice(0, 15)}...` : data.email}`}</td>
                        
                        <td className="p-4 border-b flex items-center">
                            {data.acctNo} | {data.acctName}
                            <button >
                                <FontAwesomeIcon icon={faCopy} className="ml-2 text-[#98A2B3]"/>
                            </button>
                        </td>


                        <td className="p-4 border-b">{data.sortCode}</td>
                        <td className="p-4 border-b">{data.amount}</td>
                        <td className="p-4 border-b">{data.amountAval}</td>
                        <td className="p-4 border-b">{data.date} | {data.time}</td>
                        <td className="p-4 border-b">
                            {data.action === 'Mark as Paid' ? (
                                <button className='flex justify-between items-center p-2 font-[500] border-b rounded text-[#FFECE5] bg-[#CC1747]'>
                                    <img src={MarkRead} alt="" /> {data.action}
                                </button>

                            ) : data.action === 'Payment Paid' && (
                                <button className='flex justify-between items-center p-2  font-[500] border-b rounded bg-[#FFECE5] text-[#CC1747]'>
                                    <img src={MarkPaid} alt="" /> {data.action}
                                </button>

                            )}
                        </td>
                        
                    </tr>
                    ))}
                </tbody>
            </table>
      
        </div>
    </div>
  )
}

export default WithdrawalRequest