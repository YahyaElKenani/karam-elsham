import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export default function Checkout() { 
    const cart = useSelector((state) => state.cart.cart); 
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (cart.length >= 1) { 
            setTotal(cart.reduce((acc, value) => acc + value.quantity * value.price, 0))
        }
    }, [cart])
    return ( 
        <div className="bg-amber-600 p-6 rounded-lg" dir="rtl"> 
            <h1 className="md:text-4xl text-2xl font-bold mb-5">اجمالي الطلب</h1>
            <Divider />
            <div className="order-total flex justify-between md:text-2xl text-lg font-bold md:font-normal mt-5">
                <div>الاجمالي قبل التوصيل</div>
                <div>{total} جنيه </div>
            </div>
        </div> 
    )
}