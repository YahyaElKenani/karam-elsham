import { useNavigate } from 'react-router-dom'
import './Header.css'
import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { IoIosMenu } from "react-icons/io";
export default function Header({active}) { 
    const navigate = useNavigate();
    const [showTabs, setShowTabs] = useState(false);
    const routeToPage = (pageName) => { 
        navigate(`/${pageName}`);
    }
    useEffect(() => {
        console.log(showTabs);
    }, [showTabs])
    return ( 
        <Motion.header
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='flex w-full h-32 justify-around px-12 py-6 items-center'> 
            <img src='/src/assets/Images/karam-elsham-logo.png' alt='logo' className='h-full'/>
            <nav className='flex flex-col w-100 text-2xl justify-between'> 
                <button className='cursor-pointer self-end' onClick={() => setShowTabs((prevState) => !prevState)}><IoIosMenu /></button>
                <div className={`nav-tabs flex w-100 justify-between ${showTabs && 'show-tabs'}`}>
                    <div 
                    className={`${active === 'home' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('')}
                    >Home</div>
                    <div className={`${active === 'menu' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('menu')}
                    >Menu</div>
                    <div className={`${active === 'contact' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('contact')}
                    >Contact</div>
                    <div className={`${active === 'about' && 'opacity-100 font-bold active'} opacity-50 hover:opacity-100 transition-all transition-duration-700 cursor-pointer`}
                    onClick={() => routeToPage('about')}
                    >About</div>
                </div>
            </nav>
        </Motion.header>
    )
}