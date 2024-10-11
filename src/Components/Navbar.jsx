import logo from "../assets/ochi.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center px-14 backdrop-blur-lg top-0 left-0 right-0 fixed z-10 text-[#aba7a7]">
      <a href="#">
        <img src={logo} alt="OCHI"/>
      </a>
      <div className="left flex w-1/2 justify-between">
        <ul className="one flex">
          <li className="mx-3">Services</li>
          <li className="mx-3">Our Work </li>
          <li className="mx-3">About Us</li>
          <li className="mx-3">Insights</li>
        </ul>
        <div className="two">Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
