
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FrameComponent1 = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error("Authentication error: ", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home');
    } catch (error) {
      console.error("Google authentication error: ", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/home');
    } catch (error) {
      console.error("Facebook authentication error: ", error);
    }
  };

  return (
    <div className={`self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-left text-base text-darkslategray-600 font-poppins gap-4 ${className}`}>
      <div className="w-[362px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[25px] max-w-full text-21xl text-dodgerblue-100">
        <h1 className="m-0 relative text-inherit font-normal font-bonheur-royale inline-block min-w-[109px] mq450:text-5xl mq1050:text-13xl">
          LOGO
        </h1>
        <h2 className="m-0 self-stretch relative text-11xl leading-[24px] font-semibold font-[inherit] text-darkslategray-600 mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[19px]">
          Log In To Your Account
        </h2>
        <div className="self-stretch h-[11px] relative text-base leading-[50px] text-dimgray-100 flex items-center">
          Welcome Back! Select a method to log in:
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[48.4px] text-center mq450:flex-wrap gap-6">
        <div className="h-[55px] w-[177.6px] relative shadow-[0px_4px_7px_rgba(131,_131,_131,_0.23)] rounded-md hover:text-white hover:[background:linear-gradient(88.75deg,_#2a8fff,_#0778f5)] [background:linear-gradient(90.74deg,_#e4e4e4,_#fff)] cursor-pointer" onClick={handleGoogleLogin}>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_7px_rgba(131,_131,_131,_0.23)] rounded-md [background:linear-gradient(90.74deg,_#e4e4e4,_#fff)] hidden" />
          <div className="absolute top-[13.8px] left-[37.1px] bg-silver w-[27.5px] h-[27.5px] z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver hidden opacity-[0]" />
          </div>
          <div className="absolute top-[15px] left-[40.9px] flex flex-row items-start justify-start gap-3 z-[2]">
            <img
              className="h-[22.4px] w-[21.9px] relative"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
            <div className="relative tracking-[0.03em] inline-block min-w-[61px]">
              Google
            </div>
          </div>
        </div>
        <button disabled className="cursor-pointer [border:none] pt-[13.8px] pb-[12.7px] pl-[45px] pr-11 bg-[transparent] flex-1 rounded-3xs hover:!text-white hover:[background:linear-gradient(88.75deg,_#2a8fff,_#0778f5)] [background:linear-gradient(90.74deg,_#e4e4e4,_#fff)]  flex flex-row items-start justify-start box-border gap-[7px] min-w-[133px]" onClick={handleFacebookLogin}>
          <div className="h-[54px] w-[205px] relative rounded-3xs [background:linear-gradient(88.75deg,_#2a8fff,_#0778f5)] hidden" />
          <div className="h-[27.5px] w-[27.5px] relative bg-silver z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver hidden opacity-[0]" />
            <img
              className="absolute h-[66.55%] w-[37.45%] top-[16.73%] right-[33.45%] bottom-[16.73%] left-[29.09%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/shape.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[3.7px] px-0 pb-0">
            <div className="relative text-base tracking-[0.03em] font-lexend text-black text-center inline-block min-w-[81px] z-[1]">
             Disabled
            </div>
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-center text-sm text-dimgray-100">
        <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full gap-4">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full mq750:flex-wrap">
              <div className="w-[125px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
              <div className="relative">Or Continue with Email</div>
              <div className="w-[127px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative text-base leading-[14px] font-medium text-darkslategray-600 text-left inline-block min-w-[45px]">
            Email
          </div>
        </div>
        <div className="self-stretch rounded-3xs border-gainsboro border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-[19px] px-5 max-w-full text-left text-mini">
          <div className="h-[54px] w-[428px] relative rounded-3xs border-gainsboro border-[0.7px] border-solid box-border hidden max-w-full" />
          <input
            className="relative leading-[14px] font-medium font-poppins text-darkslategray-600 text-left inline-block w-[413px] shrink-0 border-none bg-transparent outline-none max-w-full mq1050:text-mini"
            type="email"
            placeholder="abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative text-base leading-[14px] font-medium text-darkslategray-600 text-left inline-block min-w-[45px]">
            Password
          </div>

 <div className="self-stretch rounded-3xs border-gainsboro border-[0.7px] border-solid box-border flex flex-row items-center justify-between py-[19px] px-5 max-w-full text-left text-mini">
            <input
              className="relative leading-[14px] font-medium font-poppins text-darkslategray-600 text-left inline-block w-[350px] shrink-0 border-none bg-transparent outline-none max-w-full mq1050:text-mini"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            />
          </div>
      </div>
  
      <div className="self-stretch flex flex-row items-start justify-start gap-2.5 max-w-full text-sm text-dimgray-100 mq450:flex-wrap">
            <input
              className="m-0 h-4 w-[17px] relative rounded border-dimgray-100 border-[1px] border-solid box-border"
              type="checkbox"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[261px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[65px] max-w-full gap-8">
                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                  <div className="relative tracking-[0.02em] leading-[14px] inline-block min-w-[108px]">
                    Remember me
                  </div>
                  <div className="relative [text-decoration:underline] tracking-[0.02em] leading-[14px] font-medium text-dodgerblue-200 text-right">
                    Forgot password?
                  </div>
                </div>
                <div className="w-[373px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-right text-mini text-darkslategray-400">
                  <div className="flex-1 flex flex-col items-start justify-start gap-4">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
                      <button className="cursor-pointer [border:none] py-[15px] px-5 bg-dodgerblue-200 flex-1 rounded-3xs flex flex-row items-start justify-center whitespace-nowrap hover:bg-cornflowerblue-200" onClick={handleLogin}>
                        <div className="relative text-base font-semibold font-poppins text-white text-left inline-block min-w-[55px]">
                          Sign in
                        </div>
                      </button>
                    </div>
                    <div
                      className="relative tracking-[0.02em] leading-[14px] cursor-pointer"
                      onClick={onForgotPasswordTextClick}
                    >
                      <span>
                        <span>Don’t Have an Account?</span>
                        <span className="font-medium text-dodgerblue-200">{` `}</span>
                      </span>
                      <span className="font-medium text-dodgerblue-200">
                        <span className="[text-decoration:underline]">
                          Create Account
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
