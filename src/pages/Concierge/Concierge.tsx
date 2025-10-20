import ConciergeBanner from "./ConciergeBanner";
import ConciergeCard from "./ConciergeCard";
import Eastmond from "./Eastmond";


const Concierge = () => {
    return (
        <div className="lg:mt-26 mt-20 lg:p-0 p-2">
            <ConciergeBanner />
           <div className="container mx-auto"> <Eastmond />
            <ConciergeCard /></div>
            
        </div>
    );
};

export default Concierge;