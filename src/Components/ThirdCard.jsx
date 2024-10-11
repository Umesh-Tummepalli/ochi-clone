



const ThirdCard = () => {
  
  return (
    <div className="rounded-[40px] bg-[rgba(205,235,104)] -mt-48 p-2 z-20 relative" >
      <div className="w-full p-2 border-b-2 border-solid border-[#c5bebe] ">
        <p className="text-5xl w-[75%] break-words	ml-16 pt-32 pb-10 leading-snug">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to
          <span className="border-b-2 border-solid border-black">
            raise funds
          </span>
          ,
          <span className="border-b-2 border-solid border-black">
            {" "}
            sell prod­ucts
          </span>
          ,
          <span className="border-b-2 border-solid border-black">
            ex­plain com­plex ideas
          </span>
          ,
          <span className="border-b-2 border-solid border-black">
            and hire great peo­ple
          </span>
          .
        </p>
      </div>
      <div className="flex justify-between p-3 border-b-2 border-[#868080]">
        <div className="ml-10">
          <span>What can you expect: </span>
        </div>
        <section className="flex justify-between  w-[50%]">
          <div className="w-[40%] ">
            <p className="mb-8">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center mr-10">
            <span className="mb-5 mt-12">S:</span>
            <a href="#" className="underline">
              Instagram
            </a>
            <a href="#" className="underline">
              Behance
            </a>
            <a href="#" className="underline">
              Facebook
            </a>
            <a href="#" className="underline">
              Linkedin
            </a>
          </div>
        </section>
      </div>
      <div className="flex justify-between p-4 ">
        <div className="p-5 m-2">
          <h1 className="ml-3 text-[5vw]">Our appoach:</h1>
          <a href="#" className="inline">
            <div className="flex  bg-[#222] rounded-full w-[200px] p-5 justify-between ml-2 group items-center hover:bg-black">
              <span className="text-white ">READMORE</span>
              <div className="overflow-hidden rounded-full bg-white scale-50 group-hover:scale-150 duration-200 px-2 py-2">
                <svg
                  className="opacity-0 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path fill="white" d="M0 0h24v24H0z"></path>
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="rounded-lg w-[40rem] h-[30rem]  hover:scale-95 duration-500 overflow-hidden ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
            className="rounded-3xl  object-center object-cover w-full h-full hover:scale-110 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;
