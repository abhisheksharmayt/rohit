import React, { useState } from 'react'
import { BsTag } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { IoMdAddCircleOutline, IoIosArrowBack } from 'react-icons/io'
import CRM_Tickets_Form from './CRM_Tickets_Form'
const Overview = () => {
    const [showForm, setShowFrom] = useState(false);
    return (
        <div className='mx-auto mt-16 w-[300px] border-gray-300 border-[1px] p-5 rounded-lg text-gray-600'>
            {
                (showForm) ? (
                    <div className='flex items-center'>
                        <button onClick={() => setShowFrom(false)}>
                            <IoIosArrowBack className='text-[#00A300]' />
                        </button>
                        <p className='ml-2 text-sm'>Raise Tickets</p>
                    </div>
                ) : (
                    <div className='flex items-center'>
                        <BsTag />
                        <p className='ml-2 mr-auto'>CRM Tickets</p>
                        <button onClick={() => setShowFrom(true)}>
                            <IoMdAddCircleOutline className='text-[#00A300] text-xl' />
                        </button>
                    </div>
                )
            }
            {showForm && <CRM_Tickets_Form/>}
            {showForm || <p className='text-sm mt-2'>No tickets found.</p>}
        </div>
    )
}

export default Overview