import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export default function Checkpage() { 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        setTimeout(() => {
            navigate('/');
        }, 3500);
    }, [])
    return ( 
        <div className="checked-page"> 
            { 
                loading ? 
                <Loading />
                : 
                <> 
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="text-lime-700 md:text-7xl text-6xl"><CiCircleCheck /></div> 
                        <div className="md:text-2xl text-lg">تم اكمال الطلب</div>
                        <div className="md:text-2xl text-lg">سيتم اعادة توجيهك للصفحة الرئيسية</div>
                    </div>
                </>
            }
        </div>
    )
}