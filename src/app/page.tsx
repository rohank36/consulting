import Image from "next/image";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Problem from "./Problem";
import Service from "./Service";
import WhyUs from "./WhyUs";
import About from "./About";
import Consultation from "./Consultation";
import Footer from "./Footer";
import Approach from "./Approach";

export default function Home() {
  //TODO: later when you decide on colors, only use divider if the pages have the same main background color, otherwise no divider is needed
  //!!!: MAKE SURE EVERYTHING IS OPTIMIZED FOR MOBILE
  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 z-50">
        <NavBar/>
      </div>
      <Landing />
      <div className="divider"></div> 
      <Problem />
      <div className="divider"></div> 
      <Approach />
      <Service />
      <WhyUs />
      <div className="divider"></div> 
      <About />
      <div className="divider"></div>
      <Consultation />
      <Footer />
    </div>
  );
}
