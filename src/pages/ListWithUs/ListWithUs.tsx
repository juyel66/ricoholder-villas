import BeforePage from "./BeforePage";
import Benefits from "./Benefits";
import ListWithUsBannerPage from "./ListWIthUsBannerPage";
import PartnerSections from "./PartnerSections";
import SubmitPropertyForm from "./SubmitPropertyForm";

import WorksPage from "./WorksPage";


const ListWithUs = () => {
    return (
        <div>
            <ListWithUsBannerPage />
            <PartnerSections />
            <Benefits />
            <WorksPage />
            <BeforePage />
            <SubmitPropertyForm />
            
        </div>
    );
};

export default ListWithUs;