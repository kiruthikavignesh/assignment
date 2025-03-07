import "./App.css";

import AdvancedFilters from "./components/advancedFilters/AdvancedFilters";
import BannerSection from "./components/bannerSection/BannerSection";
import DemoSection from "./components/demoSection/DemoSection";
import ElementsIncluded from "./components/elementsIncluded/ElementsIncluded";
import Navbar from "./components/common/Navbar";
import WhyChooseUsSection from "./components/whyChooseUsSection/WhyChooseUsSection";

function App() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #F4F7FF, #FDF2FD, #94A7FA, #DC98EC)",
          paddingBottom: 24,
        }}>
        <Navbar />
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
