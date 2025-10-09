import FilterSystem from "@/shared/FilterSystem";
import Banner from "./Component/Banner";
import SignatureCardContainer from "./Component/SignatureCardContainer";
import InspirationSection from "./Component/InspirationSection";
import Luxury from "./Component/Luxury";
import ExperiencesPage from "./Component/ExperiencesPage";

import GuestSections from "./Component/GuestSections";
import EstateExperience from "./Component/EstateExperience";
import Contact from "../Contact/Contact";
import Affiliates from "./Component/Affiliates";


const Home = () => {
    return (
        <div>
           <Banner />
           <FilterSystem />
           <SignatureCardContainer />
           <InspirationSection />
           <Luxury />
           <ExperiencesPage />
           <GuestSections />
           <EstateExperience />
           <Contact />
           <Affiliates />
           
         
           
            
        </div> 
    );
};

export default Home;