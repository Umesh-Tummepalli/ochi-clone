import img1 from "../assets/img1.jpg"
import { easeOut, motion } from "framer-motion"

const Hero = () => {
  return (
    <>
     <div className="hero pt-32 pb-24 p-14 relative -z-30 " >
          <h1 className="text-[95px] uppercase font-[700] text-slate-400  tracking-[-5px] leading-[85px]		">
            we create
          </h1>
          <h1 className="text-[95px] uppercase font-[700]  text-slate-400  tracking-[-5px] leading-[85px]  	">
            <motion.div initial={{width:0,}} animate={{width:'140px',height:85}} transition={{duration:.6,delay:.4,ease:easeOut,}} className="inline-block h-85 mb-2 object-cover object-center">

           <img  src={img1} alt="" className="inline-block w-full h-full rounded p-0 m-0 object-cover object-center" />
            </motion.div>
           <span className="transition-transform">
            eye-opening
           </span>
          </h1>
          <h1 className="text-[95px] uppercase font-[700]  text-slate-400 tracking-[-5px] leading-[85px]		 ">
            presentations
          </h1>
        </div>
        <div className="flex justify-between w-full p-3 px-8 items-center absolute bottom-28 border-solid  border-t-gray-500 border-t-2 " >
          <span>For public and private companies</span>
          <span>From the first pitch to IPO</span>
          <span className="flex items-center ">
            <button className="border-2 p-2 rounded-full px-4 hover:bg-white hover:text-black transition-all duration-300">
              START THE PROJECT
              </button>
            <span className="rounded-full p-2 bg-white ml-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="black"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
            </span>
          </span>
        </div>
    </>
    )
}
export default Hero