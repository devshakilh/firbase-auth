import PropTypes from "prop-types";

const InputFields = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-6 text-left text-base text-darkslategray-600 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="relative leading-[14px] font-medium inline-block min-w-[49px] z-[2]">
          Name
        </div>
        <input
          className="border-gainsboro border-[0.7px] border-solid [outline:none] bg-[transparent] self-stretch h-[54px] relative rounded-3xs box-border min-w-[250px] z-[1]"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="relative leading-[14px] font-medium inline-block min-w-[45px]">
          Email
        </div>
        <input
          className="border-gainsboro border-[0.7px] border-solid [outline:none] bg-[transparent] self-stretch h-[54px] relative rounded-3xs box-border min-w-[250px]"
          type="text"
        />
      </div>
      <div className="relative leading-[14px] font-medium inline-block min-w-[78px]">
        Password
      </div>
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
