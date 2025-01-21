import NavBar from "@/components/VendorComponents/Navbar";
import style from "./style.module.css";
import DigitalizeServiceBooking from "@/components/VendorComponents/DigitalizeServiceBooking";
import WhatWeHaveForYou from "@/components/VendorComponents/WhatWeHaveForYou";
import GrowYourBusiness from "@/components/VendorComponents/GrowYourBusiness";
import LetsConnect from "@/components/VendorComponents/LetsConnect";
import FAQ from "@/components/VendorComponents/FAQ";
import DigitizeBusiness from "@/components/VendorComponents/DigitizeBusiness";
import Footer from "@/components/VendorComponents/Footer";
import Banner from "@/components/VendorComponents/Banner";
import ManageYourBussiness from "@/components/VendorComponents/ManageYourBussiness";
import GrowExponentially from "@/components/VendorComponents/GrowExponentially";
import WhatOurClientsSay from "@/components/VendorComponents/WhatOurClientsSay";
import CuratedPlans from "@/components/VendorComponents/CuratedPlans";
import SecureYourBusiness from "@/components/VendorComponents/SecureYourBusiness";
import HowBookSpotCanHelp from "@/components/VendorComponents/HowBookSpotCanHelp";

const VendorSite = () => {
  return (
    <main className={`${style.vendorContainer}`}>
      <NavBar/>
      <Banner/>
      <DigitalizeServiceBooking/>
      <WhatWeHaveForYou/>
      <ManageYourBussiness/>
      <GrowExponentially/>
      <WhatOurClientsSay/>
      <GrowYourBusiness/>
      <CuratedPlans/>
      <SecureYourBusiness/>
      <HowBookSpotCanHelp/>
      <LetsConnect/>
      <FAQ/>
      <DigitizeBusiness/>
      <Footer/>
    </main>
  );
};
export default VendorSite;
