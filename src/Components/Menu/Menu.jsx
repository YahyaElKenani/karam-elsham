import {motion as Motion} from 'framer-motion'
export default function Menu({menuList}) { 
    return ( 
        <Motion.div
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.7}}
                className="flex flex-wrap gap-8 justify-center md:text-xl"> 
                    { 
                        menuList &&
                        menuList.map((item) => <Motion.div 
                        whileHover={{scale: 1.05, cursor: 'pointer'}}
                        key={item.id} className="w-full md:w-1/3 flex justify-between md:p-12 px-3 py-5 gap-2 bg-amber-600 border-r-orange-700 border-r-8">
                            <div>{item.name}</div>
                            <div>{item.price} جنيه</div>
                        </Motion.div>)
                    }
                </Motion.div>
    )
}