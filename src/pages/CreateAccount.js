import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust import path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


import ProgressDots from "../components/ProgressDots";

  const CreateAccount = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  

     const [error, setError] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = async () => {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        toast.error("Please fill in all fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        console.log("Error:", error);
        return;
      }
  
      try {
        // Sign up with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
  
        // Update profile with display name
        await updateProfile(user, { displayName: formData.name });
  
        toast.success("Signup successful! Welcome aboard.");
        navigate("/home"); // Navigate to a different page after successful signup
      } catch (error) {
        toast.error(error.message || "An error occurred. Please try again.");
      }
    };
  
    const onForgotPasswordTextClick = useCallback(() => {
      navigate("/log-in");
    }, [navigate]);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[107px] px-[121px] pb-[111px] box-border gap-[121px] leading-[normal] tracking-[normal] text-left text-mini text-dimgray-100 font-poppins gap-[60px] mq750:pl-[60px] mq750:pr-[60px] mq750:box-border gap-[30px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:flex-wrap">
      <div className="h-12 w-[135px] relative [filter:blur(40px)] rounded-lg bg-darkslategray-500 hidden opacity-[0.06] z-[0]" />
      <div className="h-12 w-[135px] relative [filter:blur(40px)] rounded-lg bg-darkslategray-500 hidden opacity-[0.06] z-[1]" />
      <div className="h-6 w-[79px] relative hidden z-[2] text-center text-sm text-white font-nunito-sans">
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] w-6 h-6">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver opacity-[0]" />
              <img
                className="absolute h-[66.67%] w-[62.5%] top-[16.67%] right-[20.83%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="absolute top-[4px] left-[32px] tracking-[0.03em] flex items-center justify-center w-12 h-[19px]">
              Google
            </div>
          </div>
        </div>
      </div>
      <div className="w-[429px] flex flex-col items-start justify-start gap-10 min-w-[429px] max-w-full text-21xl text-dodgerblue-100 font-bonheur-royale mq750:min-w-full gap-5 mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full gap-4">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px] mq450:text-5xl mq1050:text-13xl">
            LOGO
          </a>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-11xl text-darkslategray-600 font-poppins">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[19px]">
              Sign In To Your Account
            </h2>
            <div className="self-stretch h-[67px] relative text-base leading-[28px] flex items-center text-dimgray-100">
              <span>
                <p className="m-0">{`elcome Back! By click the sign up button, you're agree 
to
Zenitood Terms and Service and acknlowledge the`}</p>
                <p className="m-0 [text-decoration:underline] text-dodgerblue-100">
                  Privacy and Policy
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full text-mini text-dimgray-100 font-poppins gap-[15px]">
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
            Name
          </div>
        </div>
        <div className="self-stretch rounded-3xs border-gainsboro border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-[19px] px-5 max-w-full text-left text-mini">
          <div className="h-[54px] w-[428px] relative rounded-3xs border-gainsboro border-[0.7px] border-solid box-border hidden max-w-full" />
          <input
            className="relative leading-[14px] font-medium font-poppins text-darkslategray-600 text-left inline-block w-[413px] shrink-0 border-none bg-transparent outline-none max-w-full mq1050:text-mini"
            type="name"
            name="name" 
            placeholder="@username"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative text-base leading-[14px] font-medium text-darkslategray-600 text-left inline-block min-w-[45px]">
            Email
          </div>

        <div className="self-stretch rounded-3xs border-gainsboro border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-[19px] px-5 max-w-full text-left text-mini">
          <div className="h-[54px] w-[428px] relative rounded-3xs border-gainsboro border-[0.7px] border-solid box-border hidden max-w-full" />
          <input
            className="relative leading-[14px] font-medium font-poppins text-darkslategray-600 text-left inline-block w-[413px] shrink-0 border-none bg-transparent outline-none max-w-full mq1050:text-mini"
            type="email"
            name="email" 
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            />
          </div>
        <div className="relative text-base leading-[14px] font-medium text-darkslategray-600 text-left inline-block min-w-[45px]">
           confirmPassword
          </div>

          <div className="self-stretch rounded-3xs border-gainsboro border-[0.7px] border-solid box-border flex flex-row items-center justify-between py-[19px] px-5 max-w-full text-left text-mini">
            <input
              className="relative leading-[14px] font-medium font-poppins text-darkslategray-600 text-left inline-block w-[350px] shrink-0 border-none bg-transparent outline-none max-w-full mq1050:text-mini"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-type password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="cursor-pointer"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
      </div>
          <div className="w-[417px] flex flex-row items-start justify-start gap-[43px] max-w-full mq450:flex-wrap gap-[21px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[227px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-11 max-w-full gap-[22px]">
               
                <div className="self-stretch flex flex-col items-start justify-start gap-9 max-w-full text-base text-darkslategray-600 gap-[18px]">
                 
                  <div className="self-stretch flex flex-row items-start justify-start gap-2.5 max-w-full text-sm text-dodgerblue-100 mq450:flex-wrap">
                    <input
                      className="m-0 h-4 w-[17px] relative rounded border-dimgray-100 border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[210px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[41px] gap-5">
                        <div className="relative tracking-[0.02em] leading-[14px]">
                          Accept Terms of Service
                        </div>
                        <div className="w-[373px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-right text-mini text-darkslategray-400">
                  <div className="flex-1 flex flex-col items-start justify-start gap-4">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
                      <button className="cursor-pointer [border:none] py-[15px] px-5 bg-dodgerblue-200 flex-1 rounded-3xs flex flex-row items-start justify-center whitespace-nowrap hover:bg-cornflowerblue-200" 
                        onClick={handleSignup}>
                        <div className="relative text-base font-semibold font-poppins text-white text-left inline-block min-w-[55px]">
                          Sign up
                        </div>
                      </button>
                    </div>
                    <div
                      className="relative tracking-[0.02em] leading-[14px] cursor-pointer"
                      onClick={onForgotPasswordTextClick}
                    >
                      <span>
                        <span>Already Have an Account?</span>
                        <span className="font-medium text-dodgerblue-200">{` `}</span>
                      </span>
                      <span className="font-medium text-dodgerblue-200">
                        <span className="[text-decoration:underline]">
                         Log in
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[421px] max-w-full mq750:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[-2px] left-[0px] rounded-14xl max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-9593@2x.png"
        />
        <ProgressDots />
      </div>
    </div>
    </div>
  );
};

export default CreateAccount;
