import React, { useRef } from "react";
import BeforePage from "./BeforePage";
import Benefits from "./Benefits";
import ListMyVilla from "./ListMyVilla";
import ListWithUsBannerPage from "./ListWIthUsBannerPage";
import PartnerSections from "./PartnerSections";
import SubmitPropertyForm from "./SubmitPropertyForm";
import WorksPage from "./WorksPage";

const ListWithUs = () => {
  const submitFormRef = useRef<HTMLDivElement>(null);

  const handleScrollToForm = () => {
    submitFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Pass scroll function as prop */}
      <ListWithUsBannerPage onSubmitClick={handleScrollToForm} />

      <div className="container mx-auto"><PartnerSections /></div>
      <div className="container mx-auto"><Benefits /></div>
      <div className="container mx-auto"><WorksPage /></div>
      <BeforePage />

      {/* Attach ref here */}
      <div ref={submitFormRef}>
        <SubmitPropertyForm />
      </div>

      <ListMyVilla />
    </div>
  );
};

export default ListWithUs;
