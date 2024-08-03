import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  image116,
  propHeight,
  propMinHeight,
  propHeight1,
}) => {
  const locationIcon1Style = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={`self-stretch rounded-3xs border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-start py-2 px-2.5 gap-[15px] max-w-full z-[1] text-left text-smi text-dimgray-100 font-poppins mq725:flex-wrap ${className}`}
    >
      <div className="h-40 w-[490px] relative rounded-3xs border-gainsboro border-[1px] border-solid box-border hidden max-w-full" />
      <img
        className="h-[140px] w-[130px] relative rounded-lg object-cover z-[1] mq725:flex-1"
        loading="lazy"
        alt=""
        src={image116}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[206px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-5">
          <div className="flex flex-col items-start justify-start gap-[15px] z-[1]">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px] mt-1"
                loading="lazy"
                alt=""
                src="/location.svg"
                style={locationIcon1Style}
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="h-[9px] relative tracking-[0.02em] inline-block">
                  123 Elm Street, New York
                </div>
              </div>
            </div>
            <div className="h-2.5 relative text-sm tracking-[0.02em] inline-block text-darkslategray-200">
              <span className="font-medium">{`Healing Bodywork `}</span>
              <i className="font-semibold text-dodgerblue-200">by Cort</i>
            </div>
          </div>
          <div className="self-stretch h-[55px] relative tracking-[0.02em] leading-[23px] inline-block z-[1]">
            <span>
              Cort’s healing bodywork massage was absolutely transformative.
              Their intuitive touch and deep understanding of...
            </span>
            <span className="[text-decoration:underline] font-medium text-dodgerblue-200">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  image116: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default GroupComponent1;
