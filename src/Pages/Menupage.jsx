import { Suspense, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import axios from "axios";
import {motion as Motion} from 'framer-motion'
import Menu from "../Components/Menu/Menu";
import Loading from "../Components/Loading/Loading";
export default function Menupage() { 
    const [menuItems, setMenuItems] = useState([]); 
    const [activeCategory, setActiveCategory] = useState("الجميع"); 
    const [activeType, setActiveType] = useState('menu');
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const categories = [ 
        {name: 'الجميع', type: 'menu'},
        {name: 'صواني', type: 'trays'}, 
        {name: 'سندوتشات شاورما', type: 'shawarma sandwiches'}, 
        {name: 'وجبات شاورما', type: 'shawarma meals'}, 
        {name: 'بوكس شاورما', type: 'shawarma boxes'}, 
        {name: 'اوزان شاورما', type: 'shawarma weights'}, 
        {name: 'مشاوي', type: 'grills'}, 
        {name: 'دجاج مشوي', type: 'grill chicken'}, 
        {name: 'دجاج بروستد', type: 'broasted chicken'}, 
        {name: 'فتة', type: 'fattah'}, 
        {name: 'سندوتشات تنين', type: 'dragon sandwich'}, 
        {name: 'سندوتشات بطاطس', type: 'fries sandwich'}, 
        {name: 'سندوتشات غربي', type: 'western sandwiches'}, 
        {name: 'وجبات غربي', type: 'western meals'}, 
        {name: 'كريب', type: 'crepes'}, 
        {name: 'ماريا', type: 'maria'}, 
        {name: 'مشروبات', type: 'drinks'}, 
    ]
    useEffect(() => {
        axios.get('https://karam-elsham-api.vercel.app/menu')
        .then((response) => setMenuItems(response.data))
        .finally(() => setLoading(false));
    }, [])
    useEffect(() => {
        activeType === 'menu' ? 
        setFilteredItems(menuItems)  
        : 
        setFilteredItems(menuItems.filter((item) => item.category === activeType));
    }, [activeType, menuItems])
    return ( 
        <> 
            <Header active={'menu'} HeaderTheme={'dark'}/>
            <div className="menu-page-content py-36 px-16 pb-7 flex flex-col gap-7 items-center" dir="rtl">     
                <Motion.div
                initial={{opacity: 0, x:50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.7}}
                className="flex flex-col md:flex-row w-full justify-between categories">
                    { 
                        categories.map((category, index) => <div key={index} onClick={() => {
                            setActiveCategory(category.name);
                            setActiveType(category.type)}}
                        className={`${activeCategory === category.name && 'active opacity-100'} opacity-50 hover:opacity-100 cursor-pointer category p-3.5`}
                        >{category.name}</div>)
                    }
                </Motion.div>
                { 
                    loading ? 
                    <Loading /> 
                    : 
                    <Menu menuList={filteredItems ?? filteredItems}/>
                }
            </div>
        </>
    )
}