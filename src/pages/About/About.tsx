import Affiliates from "../Home/Component/Affiliates";
import EstateExperience from "../Home/Component/EstateExperience";

import AboutCard from "./AboutCard";


const About = () => {
  return (
    <div>

        <AboutCard />

       <div className="mt-10">
         <EstateExperience />
       </div>

       <div className="mt-10"><Affiliates /></div>

 

    </div>
  );
};

export default About;
