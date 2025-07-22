import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { motion as Motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/cartSlice";
import { Tooltip } from "@mui/material";
export default function Offerspage() { 
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://karam-elsham-api.vercel.app/offers')
        .then((response) => setOffers(response.data))
        .finally(() => setLoading(false))
    }, [])
    useEffect(() => {
        console.log(offers);
    }, [offers])
    return ( 
        <> 
            <Header active={'offers'} HeaderTheme={'dark'} />
            { 
                loading ? 
                <Loading />
                : 
                <Motion.div
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="py-36 px-16 flex flex-wrap gap-5" dir="rtl"> 
                    { 
                        offers.map((item) => <div className="w-fit flex flex-col md:flex-row
                        p-7 bg-amber-600 border-r-8 border-r-orange-700 rounded-xl h-100 md:h-72">
                            <img src={item.image}  alt="offer-thumbnail" className="object-contain rounded-xl md:rounded-3xl w-100"/>
                            <div className="offer-content flex flex-col md:gap-7 gap-2 justify-center" dir="rtl"> 
                                <div className="md:text-3xl text-xl font-bold mt-3 md:mt-0">{item.name}</div>
                                <div className="md:text-lg/8 text-md max-w-80">{item.content}</div>
                                <div className="flex w-full justify-between"> 
                                    <div className="md:text-2xl text-lg font-bold">{item.price} جنيه</div>
                                    <Tooltip title="Add to cart"> 
                                        <div className='text-gray-50 p-2 rounded-xl bg-orange-700 hover:cursor-pointer' style={{fontSize: '24px'}}
                                        onClick={() => dispatch(addToCart(item))}
                                        ><HiOutlineShoppingCart /></div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>)
                    }
                </Motion.div>
            }
        </>
    )
}