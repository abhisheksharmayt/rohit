import React from 'react'

const CRM_Tickets_Form = () => {
    return (
        <div className='pt-3'>
            <form action="">
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="crm_type">CRM Type</label>
                    <select className='p-2 border-[1px] rounded-md w-full' name="crm_type" id="crm_type">
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
                    </select>
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="email">Email</label>
                    <input className='border-[1px] w-full p-2 rounded-md' id="email" type="email" />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="phone_no">Phone Number</label>
                    <input id='phone_no' className='border-[1px] w-full p-2 rounded-md' type="number" min='1111111111' max='9999999999' />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="order_id">Order Id</label>
                    <input id='order_id' className='border-[1px] w-full p-2 rounded-md' type="text" />
                </div>
                <p className='text-xs mt-6'>There are no tags added to this conversation</p>
                <div className='mt-6'>
                    <label className='block pb-2 text-gray-600' htmlFor="subject">Subject</label>
                    <input id='subject' className='border-[1px] w-full p-2 rounded-md' type="text" />
                </div>
                <div className='mt-6'>
                    <label className='block pb-2 text-gray-600' htmlFor="desc">Description</label>
                    <textarea className='border-[1px] w-full p-2 rounded-md' name="desc" id="desc" rows="2"></textarea>
                </div>
                <div className='flex mt-3'>
                    <button className='border-[2px] rounded-md px-12 py-1 mx-auto'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CRM_Tickets_Form;