
const Featured = () => {
  function split(name) {
    return Array.from(name).map((e, i) => (
      <span
        key={i} 
        className="text-yellow-600 text-8xl ease-[cubic-bezier(0.65, 0, 0.35, 1)] font-bold opacity-0 pointer-events-none group-hover:opacity-100 inline-block group-hover:translate-y-0 relative z-30 spans translate-y-48 spans2"
        style={{transition:`${(i+1)/10}s`}}
      >
        {e}
      </span>
    ));
  }

  return (
    <div className="rounded-md bg-black">
      <h1 className="text-5xl text-white p-10 border-b-[1px] border-solid border-[#706d6d] ">
        Featured projects
      </h1>
      <div className="cards w-full flex gap-3 justify-between p-3 relative inset-0">
        <div className="first-card carddiv group">
          <div className="card w-[48vw] p-3 h-[80vh] rounded-3xl overflow-hidden hover:scale-90 duration-300" >
            <img
              className="w-full h-full object-cover object-center rounded-3xl hover:scale-125 duration-300"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="e"
            />
          </div>
          <div className="overflowdiv absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {split("FYDE")}
          </div>
        </div>
        <div className="second-card carddiv group">
          <div className="card w-[48vw] p-3 h-[80vh] rounded-3xl overflow-hidden hover:scale-90 duration-300 -z-10 " >
            <img
              className="w-full h-full object-cover object-center rounded-3xl hover:scale-125 duration-300"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="e"
            />
          </div>
          <div className="overflowdiv pointer-events-none  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {split("VISE")}
          </div>
        </div>
      </div>
      <div className="cards w-full flex gap-3 justify-between p-3 relative inset-0">
        <div className="third-card carddiv group">
          <div className="card w-[48vw] p-3 h-[80vh] rounded-3xl overflow-hidden hover:scale-90 duration-300" >
            <img
              className="w-full h-full object-cover object-center rounded-3xl hover:scale-125 duration-300"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt="e"
            />
          </div>
          <div className="overflowdiv pointer-events-none  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {split("TRAWA")}
          </div>
        </div>
        <div className="fourth-card carddiv group" >
          <div className="card w-[48vw] p-3 h-[80vh] rounded-3xl overflow-hidden hover:scale-90 duration-300" >
            <img
              className="w-full h-full object-cover object-center rounded-3xl hover:scale-125 duration-300"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt="e"
            />
          </div>
          <div className="overflowdiv pointer-events-none  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {split("PREMIUM BLEND")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
