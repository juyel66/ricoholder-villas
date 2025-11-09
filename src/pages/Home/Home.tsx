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
import TouristList from "@/features/tourist/TouristList";
//hello

const Home = () => {
    return (
        <div>

            <div>
                <TouristList />
            </div>
            


     <div 
         className="bg-white   pb-10  rounded-xl shadow-lg border border-gray-200 mx-auto  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760812885/savba_k7kol1.png')",
      }}
      >
             <div>
                 <Banner />
             </div>
          
           <div className="container mx-auto"> <FilterSystem /></div>
     </div>
          <div className="container mx-auto"> <SignatureCardContainer /></div>
           <div className="container mx-auto"><InspirationSection /></div>
          <div className="container mx-auto"> <Luxury /></div>
           <div className="container mx-auto"><ExperiencesPage /></div>
          <div className="container mx-auto"> <GuestSections /></div>
          <div className=""> <EstateExperience /></div>
           <div className="container mx-auto"><Contact /> </div>
           <Affiliates />
     
           
         
           
            
        </div> 
    );
};

export default Home;