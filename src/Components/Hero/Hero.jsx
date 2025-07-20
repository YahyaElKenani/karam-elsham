import './Hero.css'
import { motion as Motion } from 'framer-motion'
import logo from '../../assets/Images/karam-elsham-logo.png'
export default function Hero() { 
    return ( 
        <div className='w-full h-full flex justify-around items-center hero-container'> 
            <Motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className='flex flex-col items-center gap-4'>
                <img src={logo} alt='logo' className='w-44'/>
                <div className='md:text-7xl text-4xl text-amber-600'>كرم الشام</div>
                <div className='md:text-3xl text-xl text-orange-700'>ألذ السندوتشات بأكبر الاحجام</div>
            </Motion.div>
        </div>
    )
}