import React from "react";
import Banner from "../banner/Banner";
// sections for this page
import Buttons from "./buttons";
import Labels from "./labels";
import PagePagination from "./pagination";
import Images from "./images";
import CalendlyBanner from "./calendlyBanner";
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
import { PopupWidget } from "react-calendly"
import BannerComponent from "../custom/sections/bannercomponent";
import HeaderComponent from "../custom/sections/headercomponent";
//import CalendlyBanner from "./calendlyBanner";


const Calendly = () => {
  return (
      <div>
            <HeaderComponent />
          <BannerComponent/>
   </div>
  );
};

export default Calendly;
