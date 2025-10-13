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
          <div className="">
           <div className="container mx-auto"> <FilterSystem /></div>
          <div className="container mx-auto"> <SignatureCardContainer /></div>
           <div className="container mx-auto"><InspirationSection /></div>
          <div className="container mx-auto"> <Luxury /></div>
           <div className="container mx-auto"><ExperiencesPage /></div>
          <div className="container mx-auto"> <GuestSections /></div>
          <div className=""> <EstateExperience /></div>
           <div className="container mx-auto"><Contact /> </div>
           <Affiliates />
          </div>
           
         
           
            
        </div> 
    );
};

export default Home;