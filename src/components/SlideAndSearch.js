import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

const mockData = [
  { id: 1, image: "/image-116@2x.png", name: "Alexander Cort", address: "123 Elm Street, NY" },
  { id: 2, image: "/image-1161@2x.png", name: "Michael Smith", address: "789 Maple Drive, NY" },
  { id: 3, image: "/image-1162@2x.png", name: "David Martinez", address: "Pine Street, San " },
  { id: 4, image: "/image-1163@2x.png", name: "Jennifer Lee", address: "567 Cedar , Miami" },
  { id: 5, image: "/image-1164@2x.png", name: "Emily Davis", address: "456 Oak Avenue, LA" },
  { id: 6, image: "/image-1165@2x.png", name: "William Johnson", address: "234 Birch Road, " },
  { id: 7, image: "/image-1166@2x.png", name: "Olivia Brown", address: "890 Elm Street, " },
  { id: 8, image: "/image-1167@2x.png", name: "James Wilson", address: "123 Pine Road, Austin" },
  { id: 9, image: "/image-1168@2x.png", name: "Sophia Taylor", address: "456 Maple Street, " },
  { id: 10, image: "/image-1169@2x.png", name: "Benjamin Harris", address: "789 Cedar Lane, " }
];

const GroupComponent = ({
  className = "",
  image116,
  propAlignSelf,
  propFlex,
  alexanderCort,
  propMinWidth,
  propAlignSelf1,
  propAlignSelf2,
  propMinHeight,
  propHeight,
  propFlex1,
  elmStreetNewYork,
  propAlignSelf3,
  propBackgroundColor,
  propColor,
}) => {
  const alexanderCortStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const locationIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const elmStreetNewStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
    };
  }, [propAlignSelf3]);

  const therapistSelectionStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const seeDetailsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`rounded-3xs border-gainsboro border-[1px]  border-solid flex flex-col items-start justify-start pt-2 px-0 pb-0 relative gap-5 text-left text-sm text-darkslategray-600 font-poppins ${className}`}
    >
      <div className="self-stretch h-[303px] relative rounded-3xs border-gainsboro border-[1px] border-solid box-border hidden z-[0]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px]">
        <img
          className="h-[146px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={image116}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-[19px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-1">
          <div
            className="relative tracking-[0.02em] font-medium inline-block min-w-[110px] z-[1]"
            style={alexanderCortStyle}
          >
            {alexanderCort}
          </div>
          <div className="flex flex-col items-start justify-start gap-3 z-[1] text-smi text-dimgray-100">
            <div className="flex flex-row items-start justify-start gap-[5px] ">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px] mt-1  placeholder:"
                loading="lazy"
                alt=""
                src="/location.svg"
                style={locationIconStyle}
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 ">
                <div
                  className="h-[9px] relative tracking-[0.02em] inline-block "
                  style={elmStreetNewStyle}
                >
                  {elmStreetNewYork}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5">
              <div className="flex flex-row items-start justify-start gap-[7px]">
                <img
                  className="h-2.5 w-2.5 relative object-cover min-h-[10px] mt-1"
                  loading="lazy"
                  alt=""
                  src="/image-117@2x.png"
                />
                <div className="h-[9px] relative tracking-[0.02em] inline-block min-w-[124px]">{`Mobile & In-Studio`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border hidden z-[3] " />
      <div
        className="self-stretch h-[45px] relative rounded-t-none rounded-b-4xs bg-[#D4E9FF] text-white hover:bg-dodgerblue-200 z-[1]"
        style={therapistSelectionStyle}
      />
      <div
        className="h-2.5 absolute !m-[0] right-[66px] bottom-[20px] [text-decoration:underline] tracking-[0.02em] font-medium text-black   inline-block min-w-[81px] z-[2]"
        style={seeDetailsStyle}
      >
        See Details
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  image116: PropTypes.string,
  alexanderCort: PropTypes.string,
  elmStreetNewYork: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
};

const SliderWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredData = mockData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, filteredData.length - 4));
  };

  return (
    <section className="self-stretch flex flex-col items-start justify-start py-0 lg:px-[30px] box-border max-w-full text-left text-[20px] text-darkslategray-600 font-poppins">
     

      <section className="self-stretch flex flex-row items-start justify-start py-0 lg:px-[30px] box-border max-w-full text-left text-[20px] text-darkslategray-600 font-poppins">
          <div className="flex-1 rounded-3xs bg-white flex flex-row items-start justify-start py-5 px-[30px] box-border gap-[39px] max-w-full gap-[19px] mq975:flex-wrap">
            <div className="h-[212px] w-[1130px] relative rounded-3xs bg-white hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[382px] max-w-full mq725:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-medium font-[inherit] z-[1] mq450:text-base mq450:leading-[24px]">
                    I'm Looking for Massage Therapist Near...
                  </h3>
                  <div className="w-[489px] h-[33px] relative text-mini tracking-[0.01em] inline-block max-w-full z-[1] text-darkslategray-100">
                    <span>{`In using this site, I agree to be bound by the `}</span>
                    <span className="[text-decoration:underline] font-medium text-dodgerblue-200">
                      Terms of Service
                    </span>
                    <span className="whitespace-pre-wrap">{`  and  `}</span>
                    <span className="[text-decoration:underline] font-medium text-dodgerblue-200">
                      Privacy Policy
                    </span>
                  </div>
                </div>
                <div className="w-[470px] rounded-3xs bg-whitesmoke flex flex-row items-start justify-between py-[5px] pl-[1px] pr-[5px] box-border gap-5 max-w-full z-[1] text-mini text-dimgray-200 mq450:flex-wrap">
                  <div className="h-[50px] w-[470px] relative rounded-3xs bg-whitesmoke hidden max-w-full" />
                  <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-3.5 ">
            <input
              className="font-poppins text-[inherit] bg-[inherit] rounded-[inherit] text-black box-border w-[200px] lg:w-[422px]  flex-1 relative leading-[24px] py-[5px] px-3.5 border-[1px] border-solid border-whitesmoke-300 items-center justify-start mq450:pl-2.5 mq450:pr-[21px] mq450:text-base mq450:leading-[24px]"
              type="text"
              placeholder="Enter Massage Therapist Name/Location"
              value={searchTerm}
              onChange={handleSearch}
            />
         
          </div>
                  </div>
                  <div className="rounded-lg mt-3 bg-dodgerblue-200 flex flex-row items-start justify-start py-[15px] px-[30px] z-[1] text-sm text-white">
                    <div className="h-2.5 relative tracking-[0.02em] font-semibold inline-block min-w-[23px]" >
                    Go
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
            
            <div className="h-[172px] w-[444px] relative min-w-[444px] max-w-full -ml-44 mq725:min-w-full mq975:flex-1">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[351px] z-[1]"
                alt=""
                src="/footer-logo.svg"
              />
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[167.2px] max-h-full w-[276.8px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-1000001700.svg"
              />
            </div>
          </div>
        </section>



  <div className="flex-1 rounded-3xs bg-white border-[1px] border-solid border-gainsboro flex flex-col items-start justify-start pt-1 pr-[41px] pb-6 pl-4 box-border max-w-full gap-6 mq975:pl-0 mq725:w-full mq725:pl-4 mq725:pr-0">
  <div className="relative leading-[30px] font-medium">
              Featured Therapist
            </div>
          <div className="flex flex-row items-center justify-start gap-6 max-w-full overflow-hidden">
            <button className="cursor-pointer p-0 bg-[transparent] border-none relative w-12 h-12 flex items-center justify-center z-[0]" onClick={handlePrevSlide}>
              <img
                className="absolute w-full h-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden"
                alt=""
                src="/iconlylightarrowdown2-1@2x.png"
              />
            </button>
            <div className="!flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full overflow-hidden">
            {filteredData.length > 0 ? (
                filteredData.slice(currentIndex, currentIndex + 4).map((item) => (
                  <GroupComponent
                    key={item.id}
                    image116={item.image}
                    alexanderCort={item.name}
                    elmStreetNewYork={item.address}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-dimgray-100 font-dm-sans">
                  No results found
                </div>
              )}
            </div>
            <button className="cursor-pointer p-0 bg-[transparent] border-none relative w-12 h-12 flex items-center justify-center z-[0]" onClick={handleNextSlide}>
              <img
                className="absolute w-full h-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden"
                alt=""
                src="/group-1000001706.svg"
              />
            </button>
          </div>
        </div>

    </section>
  );
};

export default SliderWithSearch;
