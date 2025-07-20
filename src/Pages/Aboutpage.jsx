import { useEffect, useState } from 'react'
import Header from '../Components/Header/Header.jsx'
import axios from 'axios';
import Loading from '../Components/Loading/Loading.jsx';
export default function Aboutpage() { 
    const [branches, setBranches] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [activeGov, setActiveGov] = useState({id: 1, name: 'الكل', gov: 'all'}); 
    const [filteredBranches, setFilteredBranches] = useState([]);
    const branchesGov = [
        {id: 1, name: 'الكل', gov: 'all'},
        {id: 2, name: 'الاسكندرية', gov: 'alexandria'}, 
        {id: 3, name: 'القاهرة', gov: 'cairo'}, 
        {id: 4, name: 'منصورة', gov: 'mansoura'}, 
        {id: 5, name: 'زقازيق', gov: 'zagazig'}, 
        {id: 6, name: 'طنطا', gov: 'tanta'}, 
        {id: 7, name: 'جيزة', gov: 'giza'}, 
        {id: 8, name: 'بورسعيد', gov: 'portsaid'}
    ]
    useEffect(() => {
        axios.get('https://karam-elsham-api.vercel.app/branches')
        .then((response) => setBranches(response.data))
        .finally(() => setLoading(false));
    }, []);
    useEffect(() => {
        if (branches) { 
            if (activeGov.id === 1) { 
                setFilteredBranches(branches);
            } else { 
                setFilteredBranches(branches.filter((branch) => branch.gov === activeGov.gov));
            }
        }
    }, [activeGov, branches])
    return ( 
        <> 
            <Header active={'about'} HeaderTheme={'dark'}/> 
            <> 
                { 
                    loading ?
                    <Loading />
                    : 
                    <div className='about-page-container flex flex-col items-center gap-5 py-36'>
                        <div className='about-heading flex justify-center gap-5 w-full md:h-40 h-28'>
                            <div className='md:w-70 w-40 bg-amber-600 flex items-center justify-center flex-col md:text-3xl text-2xl text-gray-50 rounded-2xl'>
                                <div>+25</div>
                                <div>Branches</div>
                            </div>
                            <div className='md:w-70 w-40 bg-amber-600 flex items-center justify-center flex-col md:text-3xl text-2xl text-gray-50 rounded-2xl'>
                                <div>+150</div>
                                <div>Dishes</div>
                            </div>
                        </div>
                        <div className='categories flex md:flex-row flex-col px-3 justify-around w-full' dir='rtl'>
                            {
                                branchesGov.map((branch) => <div key={branch.id} className={`text-xl opacity-50 hover:opacity-100 hover:cursor-pointer category p-3.5
                                    ${activeGov && activeGov.name === branch.name ? 'active opacity-100' : ''}`}
                                onClick={() => setActiveGov(branch)}
                                >{branch.name}</div>)
                            }
                        </div>
                            <div dir='rtl' className='self-end w-full branches flex md:flex-row flex-col gap-5 px-8 md:px-16 justify-center flex-wrap'> 
                                {
                                    filteredBranches.map((branch) => <div className='md:w-1/3 w-full p-2 md:text-xl text-md md:p-4 border-r-8 border-orange-700 bg-amber-600 max-h-15' key={branch.id}>{branch.location}</div>)
                                }
                            </div>
                    </div>
                }
            </>
        </>
    )
}