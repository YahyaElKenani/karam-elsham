import { useEffect, useState } from "react"
import Loading from "../Components/Loading/Loading";
import Header from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../Components/Checkout/Checkout";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Slices/cartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../Components/EmptyCart/EmptyCart";
export default function Cartpage() { 
    const [loading, setLoading] = useState(true); 
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    useEffect(() => {
        if (cart) { 
            setLoading(false);
            console.log(cart);
        }
    }, [cart])
    return ( 
        <>
            {
                loading ? 
                <Loading /> 
                : 
                <> 
                    <Header active={null} HeaderTheme={'dark'} />
                    { 
                        cart.length > 0 ?
                            <div className="cart-page-container py-36 md:px-16 px-4 flex w-full justify-between md:flex-row flex-col-reverse gap-10" dir="rtl"> 
                                <div className="cart-items md:w-3/5 w-full flex flex-col gap-5">
                                {
                                    cart.map((item) => <div className="flex justify-between items-center rounded-lg border-r-8 border-r-orange-700 bg-amber-600 md:p-3.5 p-2">
                                        <div className="flex flex-col gap-5">
                                            <div className="md:text-3xl text-xl font-bold">{item.name}</div>
                                            <div className="flex items-center md:gap-6 gap-3">
                                                <div className="md:text-xl text-sm font-bold opacity-75">الكمية: {item.quantity}</div>
                                                <div className="flex items-center gap-1">
                                                    <button className="md:text-3xl text-2xl hover:cursor-pointer hover:text-gray-50 transition-all"
                                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                                    ><CiCirclePlus /></button>
                                                    <button className="md:text-3xl text-2xl hover:cursor-pointer hover:text-gray-50 transition-all"
                                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                                    ><CiCircleMinus/></button>
                                                    <button className="md:text-2xl text-2xl hover:cursor-pointer hover:text-red-700 transition-all"
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                    ><FaRegTrashCan/></button>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="md:text-2xl text-xl">{item.price} جنيه</div>
                                        </div>)
                                }
                                <button className="bg-amber-600 w-1/12 p-3 rounded-2xl text-lg hover:bg-amber-700 hover:cursor-pointer transition-all
                                duration-500 hover:text-gray-50 min-w-fit self-center" onClick={() => navigate('/checkout')}>Checkout</button>
                                </div>
                                <div className="total-checkout md:w-1/5 w-full">
                                    <Checkout />
                                </div>
                            </div> 
                            : 
                            <EmptyCart />
                    }
                </>
            }
        </>
    )
}