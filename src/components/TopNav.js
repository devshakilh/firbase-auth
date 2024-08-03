import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path if necessary
import SideNav from "./SideNav";
import MobileNav from "./MobileNav";

const TopNav = ({ className = "" }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/log-in'); // Redirect to login page after logout
  };

  return (
    <header
      className={`self-stretch bg-white border-gainsboro border-b-[1px] border-solid box-border flex flex-row items-start justify-between pt-6 lg:px-[30px] md:px-[30px] pb-[22px] top-[0] z-[99] sticky max-w-full gap-5 text-left text-mini text-darkslategray-600 font-poppins ${className}`}
    >
      <div className="h-[88px] w-[1190px] relative bg-white border-gainsboro border-b-[1px] border-solid box-border hidden max-w-full" />
   <MobileNav/>
   <div className="w-[191px] flex flex-row items-center justify-start gap-3 z-[2] hidden md:flex">
  <img
    className="h-10 w-10 relative object-cover"
    loading="lazy"
    alt="User Avatar"
    src={currentUser?.image || "/joe.png"} 
  />
  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] -mt-2">
    <div className="self-stretch flex flex-row items-center justify-between gap-5">
      <a className="[text-decoration:none] h-2.5 relative tracking-[0.02em] font-medium text-[inherit] inline-block min-w-[83px] whitespace-nowrap">
        {currentUser?.name || "Joe"} 
      </a>
      <img
        className="h-[5.3px] w-[11px] relative"
        alt="Dropdown Icon"
        src="/iconlylightarrowdown2.svg"
      />
    </div>
    <a className="[text-decoration:none] h-2.5 relative text-sm tracking-[0.02em] text-dimgray-100 inline-block whitespace-nowrap">
      {currentUser?.email || "Joe@gmail.com"} 
    </a>
  </div>
</div>

      <div className="flex flex-row items-start justify-start gap-2.5 text-tomato">
        <div className="flex  flex-col  items-start justify-start py-0 pl-0 pr-2.5  ">
          <img
            className="w-10 h-10  relative z-[2] "
            loading="lazy"
            alt="Icon"
            src="/group-12870.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-2.5">
          <img
            className="w-0 h-9 relative object-contain z-[2]"
            alt="Line"
            src="/line-1.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 -mt-2 hidden md:flex">
          <a
            className="[text-decoration:none] h-2.5 relative tracking-[0.02em]  font-medium cursor-pointer text-[inherit] inline-block min-w-[60px] whitespace-nowrap z-[2]"
            onClick={handleLogout} // Call handleLogout on click
          >
            Log Out
          </a>
        </div>
        <img
          className="h-10 w-10 relative object-contain min-h-[40px] z-[2] hidden md:flex"
          loading="lazy"
          alt="Group"
          src="/group-1000001685@2x.png"
        />
    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px] text-blue-500 mq450:text-5xl mq1050:text-13xl lg:hidden">
            LOGO
          </a>

      </div>
    </header>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
};

export default TopNav;
