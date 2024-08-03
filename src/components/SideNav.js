import PropTypes from "prop-types";

const SideNav = ({ className = "" }) => {
  return (
    <div
      className={`w-[250px] bg-white border-gainsboro border-r-[1px] border-solid box-border flex flex-col items-start justify-start pt-[55px] px-0 pb-[795px] gap-10 text-left text-21xl text-dodgerblue-100 font-bonheur-royale gap-5 mq725:pt-[23px] mq725:pb-[336px] mq725:box-border mq975:hidden mq1025:pt-9 mq1025:pb-[517px] mq1025:box-border ${className}`}
    >
      <div className="self-stretch h-[1275px] relative bg-white border-gainsboro border-r-[1px] border-solid box-border hidden" />
      <div className="flex flex-row items-start justify-start py-0 pl-[70px] pr-[71px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px] z-[1] mq450:text-5xl mq975:text-13xl">
          LOGO
        </a>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-4 text-mini text-darkslategray-600 font-poppins">
        <div className="self-stretch bg-lavender flex flex-row items-start justify-start gap-[22px] z-[1]">
          <div className="h-[46px] w-[249px] relative bg-lavender hidden" />
          <div className="h-[46px] w-[3px] relative bg-darkslategray-300 z-[2]" />
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[13px]">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/category.svg"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="h-2.5 -mt-1 relative tracking-[0.02em] font-medium inline-block min-w-[47px] z-[2]">
                  Home
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-5 pr-[19px] text-dimgray-100">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24.5px]">
            <div className="w-[129px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-3.5">
                <div className="flex flex-col  items-start justify-start gap-[30px]">
                  <img
                    className="w-[18px] h-[18px]  relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/2-user.svg"
                  />
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/paper.svg"
                  />
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/fiheart.svg"
                  />
                </div>
                <div className="flex-1  flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
                    <div className="h-2.5 -mt-1 relative tracking-[0.02em] inline-block min-w-[87px] z-[1]">
                      New Listing
                    </div>
                    <div className="h-2.5  relative tracking-[0.02em] inline-block min-w-[55px] z-[1]">
                      Search
                    </div>
                    <div className="h-2.5 relative tracking-[0.02em] inline-block min-w-[47px] z-[1]">
                      About
                    </div>
                    <div className="h-2.5 relative tracking-[0.02em] inline-block min-w-[71px] z-[1]">
                      Favorites
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/navigation-divider.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <div className="flex flex-col items-start justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start gap-3.5">
                  <input
                    className="m-0 h-[18px] w-[18px] relative overflow-hidden shrink-0 z-[1]"
                    type="checkbox"
                  />
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="h-2.5 -mt- relative tracking-[0.02em] inline-block min-w-[92px] z-[1]">
                      Help Center
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-3.5">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/setting.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="h-2.5 -mt-1 relative tracking-[0.02em] inline-block min-w-[63px] z-[1]">
                      Settings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideNav.propTypes = {
  className: PropTypes.string,
};

export default SideNav;
