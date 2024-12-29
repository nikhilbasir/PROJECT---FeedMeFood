"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { SessionProvider, useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { useRouter } from 'next/navigation'


const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({})
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()
    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast.success('Thanks for Donation!😊', {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: TextTrackCue,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            router.push(`/${username}`)


        }
    }, [])

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
        console.log(u, dbpayments)
    }


    const pay = async (amount) => {
        // Get the order Id 
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "FeedMeFood", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='relative'>
                <img className='opacity-95  sepia-5 object-fill w-full h-48 md:h-[350px] shadow-blue-700' src={currentuser.coverpic} alt="" />

                <div className='absolute -bottom-20 right-[33%] md:right-[46%] border-white overflow-hidden border-2 rounded-full size-36'>
                    <img className='rounded-full object-cover size-36' width={128} height={128} src={currentuser.profilepic} alt="" />
                </div>

            </div>

            <div className='flex justify-center  flex-col items-center gap-2 my-16 mt-28'>

                <div className='font-bold bg-white p-2 '>@{username} </div>

                <div className='bg-white p-2 '>Total {payments.length} Payments have been made.   ₹{payments.reduce((a, b) => a + b.amount, 0)} raised till now</div>

            </div>
            <div className='md:flex-row flex flex-col w-[80%] mb-8 mx-auto mt-4'>

                <div className='bg-gray-700 text-white container m-2 w-full  md:w-1/2    p-4 rounded-lg'>
                    <h1 className='text-2xl mx-2'>Submitted by</h1>
                    <ul className='mx-4 my-3 md:items-center md:gap-6 gap-2'>
                        {payments.map((p, i) => {
                            return <li className='flex gap-1 md:mt-3 mt-1 items-start md:items-centre'>
                                <img width={30} height={30} src="avatar.gif.gif" alt="user" />
                                <span>
                                    {p.name} : donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;
                                </span>
                            </li>
                        })}


                    </ul>
                </div>
                <div className='bg-gray-700 text-white  w-full md:w-1/2 m-2  p-4  rounded-lg'>
                    <h1 className='text-2xl mx-2'>Make Payment</h1>
                    <div>
                        <input onChange={handleChange} value={paymentform.name} name='name' className='p-2 my-1 rounded-lg w-full  bg-slate-900' placeholder='Enter name' type="text" />
                    </div>
                    <div>
                        <input onChange={handleChange} value={paymentform.message} name='message' className='p-2  my-1 rounded-lg w-full   bg-slate-900' placeholder='Enter message' type="text" />
                    </div>
                    <div>
                        <input onChange={handleChange} value={paymentform.amount} name='amount' className='p-2  my-1 rounded-lg w-full   bg-slate-900' placeholder='Enter amount' type="text" />
                    </div>
                    <button type="button" onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} class="text-white w-full my-3  bg-gradient-to-r from-blue-500 font-bold text-lg to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                    <div className='flex gap-2 md:w-full w-fit mb-3'>
                        <button type="button" onClick={() => pay(10000)} class="text-white w-full  my-1 bg-gradient-to-r from-blue-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">100rs</button>

                        <button type="button" onClick={() => pay(20000)} class="text-white w-full my-1 bg-gradient-to-r from-blue-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">200rs</button>
                        <button type="button" onClick={() => pay(30000)} class="text-white w-full my-1 bg-gradient-to-r from-blue-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">300rs</button>

                    </div>


                </div>
            </div>

        </>
    )
}

export default PaymentPage