import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const images = [
  "/rectangle-9593@2x.png",
  "/path/to/your/second-image.png",
  "/path/to/your/third-image.png",
];

const ProgressDots = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex-1 [backdrop-filter:blur(42.3px)] rounded-2xl bg-dodgerblue-300 flex flex-col items-center justify-start pt-[332px] pb-7 pl-5 pr-[21px] box-border gap-[289px] max-w-full z-[1] text-center text-3xl text-dodgerblue-200 font-poppins gap-36 mq450:pt-[140px] mq450:box-border mq1050:pt-[216px] mq1050:pb-5 mq1050:box-border ${className}`}
    >
      <div className="w-[648px] h-[802px] relative [backdrop-filter:blur(42.3px)] rounded-2xl bg-dodgerblue-300 hidden max-w-full" />
      <div className="w-[341px] flex flex-row items-start justify-start py-[30px] px-[35px] box-border relative max-w-full z-[2]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-darkslategray-700" />
        <h3 className="m-0 h-[83px] flex-1 relative text-inherit leading-[35px] flex items-center z-[1] font-[inherit] mq450:text-lg mq450:leading-[28px]">
          <span>
            <p className="m-0 font-semibold">Create Account</p>
            <p className="m-0 font-medium text-white">
              Fill in Your Information
            </p>
          </span>
        </h3>
      </div>
      {/* <div className="relative w-[300px] h-[200px]">
        <img
          className="h-full w-full rounded-14xl max-w-full overflow-hidden object-cover"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
      </div> */}
      <div className="w-[341px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div className="h-2.5 w-[52px] relative">
          {images.map((_, index) => (
            <div
              key={index}
              className={`absolute top-[0px] left-[${index * 21}px] rounded-[50%] w-2.5 h-2.5 z-[2] ${
                currentIndex === index ? "bg-dodgerblue-200" : "bg-darkslategray-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ProgressDots.propTypes = {
  className: PropTypes.string,
};

export default ProgressDots;
