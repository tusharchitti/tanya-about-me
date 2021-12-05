import React from "react";
import Banner from "../banner/Banner";
// sections for this page
import Buttons from "./buttons";
import Labels from "./labels";
import PagePagination from "./pagination";
import Images from "./images";
import Breadcrumbs from "./breadcrumbs";
import Cards from "./cards";
import Dropdowns from "./dropdowns";
import PageForm from "./form";
import PageTable from "./table";
import Notification from "./notification";
import TooltipPopover from "./tooltip-popover";
import Typography from "./typography";
import JsComponents from "./js-components";
import CallToAction from "../call-to-action/CallToAction";
import HeaderComponent from "../custom/sections/headercomponent";
import FeatureComponentCopy from "./featureComponentCopy";
import PortfolioComponentCopy from "./portfolioComponentCopy";
const ProfessionComponents = () => {
  return (
    <div>
        <HeaderComponent />
        <Cards />
        <FeatureComponentCopy/>
        <PortfolioComponentCopy/>
      {/* <Banner />
      <Buttons />
      <Labels />
      <PagePagination />
      <Images />
      <Breadcrumbs />
      <Cards />
      <Dropdowns />
      <PageForm />
      <PageTable />
      <Notification />
      <TooltipPopover />
      <Typography />
      <JsComponents />
      <CallToAction /> */}
    </div>
  );
};

export default ProfessionComponents;
