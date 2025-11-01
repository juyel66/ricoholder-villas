import ConciergeBanner from "./ConciergeBanner";
import ConciergeCard from "./ConciergeCard";
import Eastmond from "./Eastmond";


const Concierge = () => {
    return (
        <div className=" ">
            <ConciergeBanner />
           <div className="container mx-auto"> 
            <Eastmond />
            <ConciergeCard />
            </div>
            
        </div>
    );
};

export default Concierge;