import React, { useState } from 'react'

const CRM_Tickets_Form = ({setShowFrom}) => {
    const [title, setTitle] = useState('');
    const [ticketDetail, setTicketDetail] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            ticket_detail: ticketDetail,
            due_date: dueDate,
            customer_id: customerId,
            customer_name: customerName,
            phone_number: phoneNumber,
            email,
            address,
        }
        setTitle('');
        setTicketDetail('');
        setDueDate('');
        setCustomerId('');
        setCustomerName('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        console.log(formData);

        const resp = await fetch(`http://localhost:4000/create-ticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if(resp.status === 200){
            alert('Ticket Created');
            setShowFrom(false);
        }
        else{
            alert(`Error:  ${resp.status}`);
        }
    }

    return (
        <div className='pt-3'>
            <form action="">
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="title">Title</label>
                    <input
                        id='title'
                        className='border-[1px] w-full p-2 rounded-md'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="ticket_details">Ticket Details</label>
                    <input
                        id='ticket_details'
                        className='border-[1px] w-full p-2 rounded-md'
                        type="text"
                        value={ticketDetail}
                        onChange={(e) => setTicketDetail(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="due_date">Due Date</label>
                    <input
                        id='due_date'
                        className='border-[1px] w-full p-2 rounded-md'
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="customer_id">Customer Id</label>
                    <input
                        id='customer_id'
                        className='border-[1px] w-full p-2 rounded-md'
                        type="text"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="customer_name">Customer Name</label>
                    <input
                        id='customer_name'
                        className='border-[1px] w-full p-2 rounded-md'
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="phone_no">Phone Number</label>
                    <input
                        id='phone_no'
                        className='border-[1px] w-full p-2 rounded-md'
                        type="number"
                        min='1111111111'
                        max='9999999999'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='block pb-2 text-gray-600' htmlFor="email">Email</label>
                    <input
                        className='border-[1px] w-full p-2 rounded-md'
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className='mt-6'>
                    <label className='block pb-2 text-gray-600' htmlFor="address">Address</label>
                    <textarea
                        className='border-[1px] w-full p-2 rounded-md'
                        name="address"
                        id="address"
                        rows="2"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <div className='flex mt-3'>
                    <button
                        className='border-[2px] rounded-md px-12 py-1 mx-auto bg-white hover:drop-shadow-lg hover:border-white'
                        onClick={(e) => handleSubmit(e)}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CRM_Tickets_Form;