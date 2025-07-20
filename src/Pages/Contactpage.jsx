import Header from "../Components/Header/Header";
import './style.css'
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { Divider } from "@mui/material";
import { FaPhone } from "react-icons/fa6";
import { motion as Motion } from 'framer-motion'
export default function Contactpage() { 
    const routeToPage = (link) => { 
        window.open(link)
    }
    return ( 
        <> 
            <Header active={'contact'} HeaderTheme={'dark'} />
            <div className="contact-page-container py-36 md:px-16 flex flex-col md:flex-row justify-around items-center gap-5 px-4"> 
                <Motion.form
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                className="flex flex-col md:w-1/3 w-full gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input autoComplete="off" className="input w-full" type="text" id="name" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="off" className="input w-full" type="email" id="email" placeholder="Enter Your Email" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea className="input w-full" name="message" id="message" placeholder="Enter Your Message"/>
                    </div>
                    <button type="submit" className="p-2 bg-amber-600 w-50 h-fit rounded-2xl self-center hover:opacity-80 hover:cursor-pointer
                    transition-all duration-300"
                    onClick={(e) => e.preventDefault()}>Submit</button>
                </Motion.form>
                <div className="divider md:h-100 md:w-0.5 w-full h-0.5 opacity-50 bg-amber-700"></div>
                <Motion.div
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                className="contact-methods w-1/3 flex flex-col items-center gap-3"> 
                    <div className="md:text-5xl text-3xl font-bold">Socials</div>
                    <div className="socials flex h-30 gap-3">
                        <FaFacebookF
                        onClick={() => routeToPage('https://www.facebook.com/karamelshaam')}
                        className="border-4 border-amber-600 rounded-full md:w-40 w-20 md:h-2/3 h-1/2 p-3 hover:cursor-pointer hover:bg-amber-600 hover:text-gray-50 transition-all duration-500"/> 
                        <LuInstagram
                        onClick={() => routeToPage('https://www.instagram.com/karamelshamfoods/')}
                        className="border-4 border-amber-600 rounded-full md:w-40 w-20 md:h-2/3 h-1/2 p-3 hover:cursor-pointer hover:bg-amber-600 hover:text-gray-50 transition-all duration-500"/>
                        <FaTiktok 
                        onClick={() => routeToPage('https://www.tiktok.com/@karamelshamegypt')}
                        className="border-4 border-amber-600 rounded-full md:w-40 w-20 md:h-2/3 h-1/2 p-3 hover:cursor-pointer hover:bg-amber-600 hover:text-gray-50 transition-all duration-500"/>
                    </div>
                    <Divider className="w-full"/> 
                    <div className="phone flex text-amber-600 gap-3 h-30 items-center"> 
                        <FaPhone className=" h-2/3 w-10"/>
                        <div className="text-3xl font-bold">19509</div>
                    </div>
                </Motion.div>
            </div>
        </>
    )
}