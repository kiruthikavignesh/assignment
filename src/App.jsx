import "./App.css";

import AdvancedFilters from "./components/advancedFilters/AdvancedFilters";
import BannerSection from "./components/bannerSection/BannerSection";
import DemoSection from "./components/demoSection/DemoSection";
import ElementsIncluded from "./components/elementsIncluded/ElementsIncluded";
import MobileNavbar from "./components/common/MobileNavbar";
import Navbar from "./components/common/Navbar";
import WhyChooseUsSection from "./components/whyChooseUsSection/WhyChooseUsSection";

function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #F4F7FF, #FDF2FD, #94A7FA, #DC98EC)",
          paddingBottom: 24,
        }}>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <BannerSection />
      </div>
      <WhyChooseUsSection />
      <DemoSection />
      <ElementsIncluded />
      <AdvancedFilters />
    </>
  );
}

export default App;
