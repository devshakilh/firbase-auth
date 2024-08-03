import { useMemo } from "react";
import PropTypes from "prop-types";

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
      className={`rounded-3xs border-gainsboro border-[1px] border-solid flex flex-col items-start justify-start pt-2 px-0 pb-0 relative gap-5 text-left text-sm text-darkslategray-600 font-poppins ${className}`}
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
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                loading="lazy"
                alt=""
                src="/location.svg"
                style={locationIconStyle}
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div
                  className="h-[9px] relative tracking-[0.02em] inline-block"
                  style={elmStreetNewStyle}
                >
                  {elmStreetNewYork}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5">
              <div className="flex flex-row items-start justify-start gap-[7px]">
                <img
                  className="h-2.5 w-2.5 relative object-cover min-h-[10px]"
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
      <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border hidden z-[3]" />
      <div
        className="self-stretch h-[45px] relative rounded-t-none rounded-b-4xs bg-dodgerblue-200 z-[1]"
        style={therapistSelectionStyle}
      />
      <div
        className="h-2.5 absolute !m-[0] right-[66px] bottom-[20px] [text-decoration:underline] tracking-[0.02em] font-medium text-white inline-block min-w-[81px] z-[2]"
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

export default GroupComponent;
