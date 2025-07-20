import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";

export default function Homepage() { 
    return ( 
        <div className="homepage-container bg-top"> 
            <Header active={'home'} HeaderTheme={'light'}/>
            <Hero />
        </div>
    )
}