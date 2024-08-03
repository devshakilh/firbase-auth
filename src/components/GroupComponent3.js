import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const images = [
  "/rectangle-9593@2x.png",
  "/rectangle-9593@2x.png",
  "/rectangle-9593@2x.png",
];

const GroupComponent3 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex-1 rounded-14xl flex flex-col items-center justify-start pt-[330px] pb-[30px] pl-5 pr-[21px] box-border relative gap-[289px] bg-cover bg-no-repeat bg-[top] min-w-[421px] max-w-full text-center text-3xl text-dodgerblue-200 font-poppins mq750:min-w-full gap-36 mq450:pt-[139px] mq450:box-border mq1050:pt-[214px] mq1050:pb-5 mq1050:box-border ${className}`}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <img
        className="w-[648px] h-[802px] relative rounded-14xl object-cover hidden max-w-full z-[0]"
        alt=""
        src={images[currentIndex]}
      />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(42.3px)] rounded-2xl bg-dodgerblue-300 z-[1]" />
      <div className="w-[341px] flex flex-row items-start justify-start py-[30px] px-[35px] box-border relative max-w-full z-[2]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-darkslategray-700" />
        <h3 className="m-0 h-[83px] flex-1 relative text-inherit leading-[35px] flex items-center z-[1] font-[inherit] mq450:text-lg mq450:leading-[28px]">
          <span>
            <span className="font-semibold">Sign In</span>
            <span className="font-medium text-gray">
              {" "}
              to view all the massage therapists
            </span>
          </span>
        </h3>
      </div>
      <div className="w-[341px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div className="h-2.5 w-[52px] relative z-[2] flex justify-between">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-[50%] ${
                currentIndex === index ? "bg-dodgerblue-200" : "bg-darkslategray-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
