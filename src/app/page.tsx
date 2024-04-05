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
import FAQ from "./FAQ";
import StudentAthlete from "./StudentAthlete";

export default function Home() {
  //TODO: later when you decide on colors, only use divider if the pages have the same main background color, otherwise no divider is needed
  //!!!: MAKE SURE EVERYTHING IS OPTIMIZED FOR MOBILE
  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 z-50">
        <NavBar/>
      </div>
      <Landing />
      <Problem />
      <Approach />
      <StudentAthlete />
      <WhyUs />
      <div className="divider"></div> 
      <About />
      <FAQ />
      <Consultation />
      <Footer />
    </div>
  );
}
