import BeforePage from "./BeforePage";
import Benefits from "./Benefits";
import ListMyVilla from "./ListMyVilla";
import ListWithUsBannerPage from "./ListWIthUsBannerPage";
import PartnerSections from "./PartnerSections";
import SubmitPropertyForm from "./SubmitPropertyForm";

import WorksPage from "./WorksPage";


const ListWithUs = () => {
    return (
        <div>
            <ListWithUsBannerPage />
           <div className="container mx-auto"> <PartnerSections /></div>
           <div className="container mx-auto"> <Benefits /></div>
            <div className="container mx-auto"><WorksPage /></div>
            <BeforePage />
            <SubmitPropertyForm />
            <ListMyVilla />
            
        </div>
    );
};

export default ListWithUs;