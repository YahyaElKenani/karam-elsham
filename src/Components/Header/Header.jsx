import { useNavigate } from 'react-router-dom'
import './Header.css'
import { motion as Motion } from 'framer-motion'
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import logo from '../../assets/Images/karam-elsham-logo.png'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Header({active, HeaderTheme}) { 
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart); 
    const [showTabs, setShowTabs] = useState(false);
    const routeToPage = (pageName) => { 
        navigate(`/${pageName}`);
    }
    return ( 
        <Motion.header
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='flex w-full h-32 md:justify-around justify-between px-12 py-6 items-center'> 
            <img src={logo} alt='logo' className='h-full hover:cursor-pointer' onClick={() => {routeToPage('')}}/>
            <nav className={`flex flex-col text-xl justify-between ${HeaderTheme === 'dark' ? 'text-black' : 'text-gray-50'}`}> 
                <button className='cursor-pointer self-end' onClick={() => setShowTabs((prevState) => !prevState)}><IoIosMenu /></button>
                <div className={`nav-tabs flex w-100 justify-between items-center bg-amber-600 md:bg-transparent ${showTabs && 'show-tabs'}`}>
                    <div 
                    className={`${active === 'home' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('')}
                    >Home</div>
                    <div className={`${active === 'menu' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('menu')}
                    >Menu</div>
                    <div className={`${active === 'offers' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('offers')}
                    >Offers</div>
                    <div className={`${active === 'contact' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('contact')}
                    >Contact</div>
                    <div className={`${active === 'about' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('about')}
                    >About</div>
                    <div onClick={() => routeToPage('cart')}>
                        <Badge badgeContent={cart.length && cart.length} color='success'> 
                            <HiOutlineShoppingCart style={{fontSize: '24px'}}/>
                        </Badge>
                    </div>
                </div>
            </nav>
        </Motion.header>
    )
}