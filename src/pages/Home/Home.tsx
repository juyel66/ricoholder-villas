import FilterSystem from "@/shared/FilterSystem";
import Banner from "./Component/Banner";
import SignatureCardContainer from "./Component/SignatureCardContainer";


const Home = () => {
    return (
        <div>
           <Banner />
           <FilterSystem />
           <SignatureCardContainer />
           
            
        </div>
    );
};

export default Home;