import { Tooltip } from '@mui/material';
import {motion as Motion} from 'framer-motion';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/cartSlice';
export default function Menu({menuList}) { 
    const dispatch = useDispatch();
    return ( 
        <> 
            <Motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.7}}
                    className="flex flex-wrap gap-8 justify-center md:text-xl"
                    > 
                        { 
                            menuList &&
                            menuList.map((item) => <Motion.div 
                            whileHover={{scale: 1.05, cursor: 'pointer'}}
                            key={item.id} className="w-full md:w-1/3 flex justify-between items-center md:p-12 px-3 py-5 gap-2 bg-amber-600 border-r-orange-700 border-r-8">
                                <div>{item.name}</div>
                                <div className='flex items-center justify-center gap-4'> 
                                    <div>{item.price} جنيه</div>
                                    <Tooltip title='Add to cart'>
                                        <div className='text-gray-50 p-2 rounded-xl bg-orange-700 hover:cursor-pointer' style={{fontSize: '24px'}}
                                        onClick={() => dispatch(addToCart(item))}
                                        ><HiOutlineShoppingCart /></div>
                                    </Tooltip>
                                </div>
                            </Motion.div>)
                        }
            </Motion.div>    
        </>
    )
}