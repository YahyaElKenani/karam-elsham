import { useNavigate } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";
import Header from "../Components/Header/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../Slices/cartSlice";

export default function Checkoutpage() { 
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState(0); 
    const dispatch = useDispatch();
    const handleSubmit = (e) => { 
        e.preventDefault();
        if (phoneNumber.length === 11) { 
            navigate('/checked');
            dispatch(setCart([]));
        } else {
            window.alert('Phone is not correct');
        }
    }
    return ( 
        <> 
            <Header active={null} HeaderTheme={'dark'} />
            <div className="checkout-container py-36 md:px-16 px-6 flex md:flex-row flex-col md:justify-between items-center md:items-start gap-10"> 
                <div className="md:w-1/5 w-full"> 
                    <Checkout/>
                </div>
                <form className="flex flex-col gap-3 md:w-4/5 w-full" dir="rtl">
                    <label htmlFor="name" className="text-xl">الاسم <span className="text-red-700">*</span></label>
                    <input type="text" id="name" placeholder="ادخل اسمك" autoComplete="off" required className="md:w-1/2 w-full bg-amber-50 p-4 rounded-2xl" />
                    <label htmlFor="phone-number" className="text-xl">رقم الهاتف <span className="text-red-700">*</span></label>
                    <input type="number" id="phone-number" onChange={(e) => setPhoneNumber(e.target.value)}
                    inputMode="tel" placeholder="ادخل رقمك" required className="md:w-1/2 w-full bg-amber-50 p-4 rounded-2xl" />
                    <label htmlFor="address" className="text-xl">العنوان <span className="text-red-700">*</span></label>
                    <input type="text" name="address" id="address" placeholder="العنوان" autoComplete="off" required className="md:w-1/2 w-full bg-amber-50 p-4 rounded-2xl" />
                    <label htmlFor="sale" className="text-xl">كوبون الخصم</label>
                    <input type="text" name="sale" id="sale" placeholder="الكوبون" autoComplete="off" className="md:w-1/2 w-full bg-amber-50 p-4 rounded-2xl" />
                    <button type="submit" className="md:self-start self-center mt-2 bg-amber-600 w-1/12 p-3 rounded-2xl text-lg hover:bg-amber-700 hover:cursor-pointer transition-all
                        duration-500 hover:text-gray-50 min-w-fit" onClick={(e) => handleSubmit(e)}>اكمال الطلب</button>
                </form>
                
            </div>
        </>
    )
}