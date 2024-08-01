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
import Mission from "./Mission"

export default function Home() {
  
  //TODO: FILL IN BLANKS
  return (
    <div className="flex flex-col w-full scroll-smooth">
      <div className="sticky top-0 z-50">
        <NavBar/>
      </div>
      <Landing id="home"/>
      <Problem id="problem"/>
      <Approach id="approach" />
      <StudentAthlete id="service"/>
      <WhyUs id="whyus"/>
      <Mission id="about"/>
      <FAQ id="faq"/>
      <Consultation id="consultation"/>
      <Footer />
    </div>
  );
}
