import { FiCloudOff } from "react-icons/fi";
import './EmptyCart.css'
export default function EmptyCart() { 
    return ( 
        <div className="empty-cart"> 
            <div className="text-7xl"><FiCloudOff /></div>
            <div className="text-2xl">العربة فارغة</div>
        </div>
    )
}