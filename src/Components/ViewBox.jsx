import { useEffect, useState } from "react";

const ViewBox = () => {
  const [rotate1, setRotate] = useState(12);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltax = (window.innerWidth / 2) - mousex;
      let deltay = (window.innerHeight / 2) - mousey;
      let angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex gap-10 justify-center -z-10"
      style={{
        backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')",
      }}
      data-scroll data-scroll-speed='-.9'
      >
      <div className="circle"  data-scroll data-scroll-speed="-.3">
        
        <div className="w-48 h-48 rounded-full bg-[#ffffff8f] flex justify-center items-center">
          

          <div className="w-36 h-36 bg-black rounded-full relative flex justify-center items-center text-white">
            <div className="w-full h-8" style={{ transform: `rotate(${rotate1}deg)` }}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"></div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="circle " data-scroll data-scroll-speed="-.3">
        <div className="w-48 h-48 rounded-full bg-[#ffffff8f] flex justify-center items-center">
          <div className="w-36 h-36 bg-black rounded-full relative flex justify-center items-center text-white">
            <div className="w-full h-8 " style={{ transform: ` rotate(${rotate1}deg)` }}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBox;
