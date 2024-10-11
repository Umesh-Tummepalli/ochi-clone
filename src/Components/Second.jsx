import { motion } from "framer-motion"


const Second = () => {
    
  return (
    <div className="w-full h-[80vh] rounded-[40px] bg-[#004C42] flex justify-center items-center m-0  relative" data-scroll data-scroll-speed=".2" data-scroll-section>
        <div className="w-full h-1/2 border-b-2 rounded  border-t-2 border-neutral-500 overflow-hidden whitespace-nowrap flex items-center">
            <motion.h1  animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="uppercase text-[18vw] text-white p-0 m-0  whitespace-nowrap	pl-10 font-extrabold"> we are ochi</motion.h1>
            <motion.h1  animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="uppercase text-[18vw]  text-white p-0 m-0  whitespace-nowrap font-extrabold	"> we are ochi</motion.h1>  
        </div>
      </div>
  )
}
export default Second

