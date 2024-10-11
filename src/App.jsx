import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.jsx";
import Second from "./Components/Second.jsx";
import ThirdCard from "./Components/ThirdCard.jsx";
import ViewBox from "./Components/ViewBox.jsx";
import Featured from "./Components/Featured.jsx";
// import { useEffect, useRef } from "react";

import LocomotiveScroll from 'locomotive-scroll';



const App = () => {

  const locomotiveScroll = new LocomotiveScroll({
    // autoResize: true,
  });
  return (
    <>
      <div className="w-full  bg-[#111] h-[99vh] text-white relative" data-scroll data-scroll-speed="-.4" >
        <Navbar />
        <Hero />
        <span className="capitalize absolute bottom-4 left-1/2 opacity-35 font-light ">
          scroll down
        </span>
      </div>
      <Second />
      <ThirdCard />
      <ViewBox />
      <Featured />
    </>
  );
};

export default App;
