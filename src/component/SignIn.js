// import { useState } from "react";
// import GoogleButton from "./assets/GoogleButton";
// import FacebookButton from "./assets/FacebookButton";
// import EmailDivider from "./assets/EmailDivider";
// import EmailDividerEnd from "./assets/EmailDividerEnd";
// import PasswordVisibilityToggle from "./assets/PasswordVisibilityToggle";
// export default function LoginContent({ className = "" }) {
//   const [emailInput, setEmailInput] = useState("");
//   const [passwordInput, setPasswordInput] = useState("");
//   return (
//     <div
//       className={`flex flex-col items-start gap-y-3.5 text-left ${className}`}
//     >
//       <h1 className="font-poor-richard text-[40px] leading-[normal] tracking-[0px] text-blue-500" >
//         LOGO
//       </h1>
//       <div className="flex w-[432px] items-end pt-[11px]">
//         <h2 className="flex-grow text-3xl font-semibold leading-6 tracking-[0px] text-green-950" >
//           Log In To Your Account
//         </h2>
//       </div>
//       <div className="flex w-[432px] items-end pr-[70px] pt-[11px]">
//         <div className="flex h-[11px] w-[362px] flex-shrink-0 items-center leading-[50px] tracking-[0px] text-[dimgray]" >
//           <p>Welcome Back! Select a method to log in:</p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-end pr-[1.3px] pt-[26px]" >
//         <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-7 leading-[normal] tracking-[0.48px] min-[1430px]:flex-nowrap" >
//           <button className="flex items-center justify-center gap-x-[13px] rounded-md pb-4 pl-10 pr-11 pt-[15px] text-left drop-shadow-lg [background-image:linear-gradient(91deg,_#e4e4e4,_white)]" >
//             <GoogleButton className="h-[22px] w-[22px] flex-shrink-0" />
//             <div className="text-green-950">Google</div>
//           </button>
//           <button className="flex items-center justify-center gap-x-2 rounded-[10px] px-11 pb-[13px] pt-3.5 text-left [background-image:linear-gradient(89deg,_#298fff,_#0778f5)]" >
//             <FacebookButton className="h-7 w-7 flex-shrink-0" />
//             <div className="font-lexend text-white">Facebook</div>
//           </button>
//         </div>
//       </div>
//       <div className="flex w-[432px] flex-col justify-end pl-[0.65px] pt-[18px]" >
//         <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-[0.35px] [max-width:432px] min-[1430px]:flex-nowrap" >
//           <EmailDivider className="h-[0.7px] flex-grow" />
//           <p className="text-sm leading-[normal] tracking-[0px] text-[dimgray]" >
//             Or Continue with Email
//           </p>
//           <EmailDividerEnd className="h-[0.7px] flex-grow" />
//         </div>
//       </div>
//       <label
//         className="flex items-end pt-[18px] font-medium leading-[14px] tracking-[0px] text-green-950"
//         htmlFor="email-input"
//       >
//         Email
//       </label>
//       <div className="flex items-center justify-center pr-[4.3px] pt-0.5">
//         <div className="flex w-[428px] items-center rounded-[10px] border-l-[0.7px] border-r-[0.7px] border-t-[0.7px] border-solid border-neutral-200 p-[19px] [border-bottom-width:0.7px] focus-within:[box-shadow:0_0_4px_#1e40af]" >
//           <input
//             className="flex min-w-0 flex-grow text-[15px] leading-[14px] tracking-[0px] text-[dimgray] [outline:none] placeholder:text-[#5c635a]"
//             placeholder="Enter your email"
//             id="email-input"
//             type="email"
//             value={emailInput}
//             onChange={(e) => {
//               setEmailInput(e.target.value);
//             }}
//            />
//         </div>
//       </div>
//       <label
//         className="flex items-end pt-[18px] font-medium leading-[14px] tracking-[0px] text-green-950"
//         htmlFor="password-input"
//       >
//         Password
//       </label>
//       <div className="flex items-center justify-center pl-px pr-[3.3px] pt-0.5" >
//         <div className="flex w-[428px] flex-wrap items-center justify-center rounded-[10px] border-l-[0.7px] border-r-[0.7px] border-t-[0.7px] border-solid border-neutral-200 px-[17px] py-3.5 [border-bottom-width:0.7px] focus-within:[box-shadow:0_0_4px_#1e40af] min-[1430px]:flex-nowrap" >
//           <input
//             className="flex min-w-0 flex-grow text-[15px] leading-[14px] tracking-[0px] text-[dimgray] [outline:none] placeholder:text-[#5c635a]"
//             placeholder="Enter your password"
//             id="password-input"
//             type="password"
//             value={passwordInput}
//             onChange={(e) => {
//               setPasswordInput(e.target.value);
//             }}
//            />
//           <PasswordVisibilityToggle className="h-6 w-6 flex-shrink-0" />
//         </div>
//       </div>
//       <div className="flex flex-wrap items-center justify-center gap-x-40 gap-y-[7px] pr-[3.3px] text-sm leading-[14px] tracking-[0.32px] min-[1430px]:flex-nowrap" >
//         <div className="flex items-center justify-center gap-x-2.5">
//           <div className="h-4 w-[17px] flex-shrink-0 rounded border-b border-l border-r border-t border-solid border-[dimgray]" />
//           <p className="text-[dimgray]">Remember me</p>
//         </div>
//         <div className="font-medium text-blue-600 underline">
//           Forgot password?
//         </div>
//       </div>
//       <div className="flex items-end justify-center px-20 pt-12">
//         <button className="rounded-[10px] bg-blue-600 px-28 py-[15px] font-semibold leading-[normal] tracking-[0px] text-white" >
//           Sign in
//         </button>
//       </div>
//       <div className="pl-14 pr-16 pt-0.5 text-center text-[15px] leading-[14px] tracking-[0.32px]" >
//         <span>
//           <span className="text-center text-cyan-950">
//             {"Don’t Have an Account? "}
//           </span>
//           <span className="text-center font-medium text-blue-600 underline">
//             Create Account
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }



// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// const LogIn = () => {
//   const navigate = useNavigate();

//   const onForgotPasswordTextClick = useCallback(() => {
//     navigate("/create-account");
//   }, [navigate]);

//   return (
//     <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-[111px] pl-[122px] pr-[120px] box-border gap-[118px] leading-[normal] tracking-[normal] text-center text-sm text-white font-poppins gap-[59px] mq450:pl-[61px] mq450:pr-[60px] mq450:box-border gap-[29px] mq725:pl-5 mq725:pr-5 mq725:box-border mq1025:flex-wrap">
//       <div className="h-12 w-[135px] relative [filter:blur(40px)] rounded-lg bg-darkslategray-500 hidden opacity-[0.06]" />
//       <div className="h-12 w-[135px] relative [filter:blur(40px)] rounded-lg bg-darkslategray-500 hidden opacity-[0.06]" />
//       <div className="h-6 w-[79px] relative hidden font-nunito-sans">
//         <div className="absolute top-[0px] left-[0px] w-full h-full">
//           <div className="absolute top-[0px] left-[0px] w-full h-full">
//             <div className="absolute top-[0px] left-[0px] w-6 h-6">
//               <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver opacity-[0]" />
//               <img
//                 className="absolute h-[66.67%] w-[62.5%] top-[16.67%] right-[20.83%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
//                 alt=""
//                 src="/vector.svg"
//               />
//             </div>
//             <div className="absolute top-[4px] left-[32px] tracking-[0.03em] flex items-center justify-center w-12 h-[19px]">
//               Google
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-[432px] flex flex-col items-start justify-start pt-[57px] px-0 pb-0 box-border min-w-[432px] max-w-full text-left text-base text-darkslategray-600 mq450:pt-[37px] mq450:box-border mq450:min-w-full mq1025:flex-1">
//         <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full gap-4">
//           <div className="w-[362px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[25px] max-w-full text-21xl text-dodgerblue-100">
//             <h1 className="m-0 relative text-inherit font-normal font-bonheur-royale inline-block min-w-[109px] mq725:text-5xl mq975:text-13xl">
//               LOGO
//             </h1>
//             <h2 className="m-0 self-stretch relative text-11xl leading-[24px] font-semibold font-[inherit] text-darkslategray-600 mq725:text-lg mq725:leading-[14px] mq975:text-5xl mq975:leading-[19px]">
//               Log In To Your Account
//             </h2>
//             <div className="self-stretch h-[11px] relative text-base leading-[50px] text-dimgray-100 flex items-center">
//               Welcome Back! Select a method to log in:
//             </div>
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-start gap-[48.4px] text-center mq725:flex-wrap gap-6">
//             <div className="h-[55px] w-[177.6px] relative shadow-[0px_4px_7px_rgba(131,_131,_131,_0.23)] rounded-md [background:linear-gradient(90.74deg,_#e4e4e4,_#fff)]">
//               <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_7px_rgba(131,_131,_131,_0.23)] rounded-md [background:linear-gradient(90.74deg,_#e4e4e4,_#fff)] hidden" />
//               <div className="absolute top-[13.8px] left-[37.1px] bg-silver w-[27.5px] h-[27.5px] z-[1]">
//                 <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver hidden opacity-[0]" />
//               </div>
//               <div className="absolute top-[15px] left-[40.9px] flex flex-row items-start justify-start gap-3 z-[2]">
//                 <img
//                   className="h-[22.4px] w-[21.9px] relative"
//                   loading="lazy"
//                   alt=""
//                   src="/group.svg"
//                 />
//                 <div className="relative tracking-[0.03em] inline-block min-w-[61px]">
//                   Google
//                 </div>
//               </div>
//             </div>
//             <button className="cursor-pointer [border:none] pt-[13.8px] pb-[12.7px] pl-[45px] pr-11 bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(88.75deg,_#2a8fff,_#0778f5)] flex flex-row items-start justify-start box-border gap-[7px] min-w-[133px]">
//               <div className="h-[54px] w-[205px] relative rounded-3xs [background:linear-gradient(88.75deg,_#2a8fff,_#0778f5)] hidden" />
//               <div className="h-[27.5px] w-[27.5px] relative bg-silver z-[1]">
//                 <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver hidden opacity-[0]" />
//                 <img
//                   className="absolute h-[66.55%] w-[37.45%] top-[16.73%] right-[33.45%] bottom-[16.73%] left-[29.09%] max-w-full overflow-hidden max-h-full z-[1]"
//                   alt=""
//                   src="/shape.svg"
//                 />
//               </div>
//               <div className="flex flex-col items-start justify-start pt-[3.7px] px-0 pb-0">
//                 <div className="relative text-base tracking-[0.03em] font-lexend text-white text-center inline-block min-w-[81px] z-[1]">
//                   Facebook
//                 </div>
//               </div>
//             </button>
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-center text-sm text-dimgray-100">
//             <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full gap-4">
//               <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
//                 <div className="flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full mq450:flex-wrap">
//                   <div className="w-[125px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
//                     <img
//                       className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
//                       loading="lazy"
//                       alt=""
//                       src="/vector-4.svg"
//                     />
//                   </div>
//                   <div className="relative">Or Continue with Email</div>
//                   <div className="w-[127px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
//                     <img
//                       className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
//                       loading="lazy"
//                       alt=""
//                       src="/vector-5.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="relative text-base leading-[14px] font-medium text-darkslategray-600 text-left inline-block min-w-[45px]">
//                 Email
//               </div>
//             </div>
//             <div className="self-stretch rounded-3xs border-gainsboro border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-[19px] px-5 max-w-full text-left text-mini">
//               <div className="h-[54px] w-[428px] relative rounded-3xs border-gainsboro border-[0.7px] border-solid box-border hidden max-w-full" />
//               <div className="relative leading-[14px] inline-block min-w-[122px] z-[1]">
//                 Enter your email
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0.5 box-border max-w-full">
//             <div className="flex-1 flex flex-col items-start justify-start gap-3.5 max-w-full">
//               <div className="self-stretch h-[84px] relative z-[2]">
//                 <input
//                   className="border-gainsboro border-[0.7px] border-solid [outline:none] bg-[transparent] absolute h-[calc(100%_-_30px)] w-full top-[30px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border"
//                   type="text"
//                 />
//                 <div className="absolute top-[0px] left-[0px] leading-[14px] font-medium inline-block min-w-[78px] z-[1]">
//                   Password
//                 </div>
//                 <div className="absolute bottom-[20px] left-[19px] text-mini leading-[14px] text-dimgray-100 z-[1]">
//                   Enter your password
//                 </div>
//                 <img
//                   className="absolute right-[18px] bottom-[15px] w-6 h-6 object-cover z-[1]"
//                   loading="lazy"
//                   alt=""
//                   src="/componenticonhide@2x.png"
//                 />
//               </div>
//               <div className="self-stretch flex flex-row items-start justify-start gap-2.5 max-w-full text-sm text-dimgray-100 mq725:flex-wrap">
//                 <input
//                   className="m-0 h-4 w-[17px] relative rounded border-dimgray-100 border-[1px] border-solid box-border"
//                   type="checkbox"
//                 />
//                 <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[261px] max-w-full">
//                   <div className="self-stretch flex flex-col items-start justify-start gap-[65px] max-w-full gap-8">
//                     <div className="self-stretch flex flex-row items-start justify-between gap-5 mq725:flex-wrap">
//                       <div className="relative tracking-[0.02em] leading-[14px] inline-block min-w-[108px]">
//                         Remember me
//                       </div>
//                       <div className="relative [text-decoration:underline] tracking-[0.02em] leading-[14px] font-medium text-dodgerblue-200 text-right">
//                         Forgot password?
//                       </div>
//                     </div>
//                     <div className="w-[373px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-right text-mini text-darkslategray-400">
//                       <div className="flex-1 flex flex-col items-start justify-start gap-4">
//                         <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
//                           <button className="cursor-pointer [border:none] py-[15px] px-5 bg-dodgerblue-200 flex-1 rounded-3xs flex flex-row items-start justify-center whitespace-nowrap hover:bg-cornflowerblue-200">
//                             <div className="relative text-base font-semibold font-poppins text-white text-left inline-block min-w-[55px]">
//                               Sign in
//                             </div>
//                           </button>
//                         </div>
//                         <div
//                           className="relative tracking-[0.02em] leading-[14px] cursor-pointer"
//                           onClick={onForgotPasswordTextClick}
//                         >
//                           <span>
//                             <span>Don’t Have an Account?</span>
//                             <span className="font-medium text-dodgerblue-200">{` `}</span>
//                           </span>
//                           <span className="font-medium text-dodgerblue-200">
//                             <span className="[text-decoration:underline]">
//                               Create Account
//                             </span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 rounded-14xl flex flex-col items-center justify-start pt-[330px] pb-[30px] pl-5 pr-[21px] box-border relative gap-[289px] bg-[url('/public/group-1000001697@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[421px] max-w-full text-3xl text-dodgerblue-200 mq450:min-w-full gap-36 mq725:pt-[139px] mq725:box-border mq975:pt-[214px] mq975:pb-5 mq975:box-border">
//         <img
//           className="w-[648px] h-[802px] relative rounded-14xl object-cover hidden max-w-full z-[0]"
//           alt=""
//           src="/rectangle-9593@2x.png"
//         />
//         <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(42.3px)] rounded-2xl bg-dodgerblue-300 z-[1]" />
//         <div className="w-[341px] flex flex-row items-start justify-start py-[30px] px-[35px] box-border relative max-w-full z-[2]">
//           <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-darkslategray-800" />
//           <h3 className="m-0 h-[83px] flex-1 relative text-inherit leading-[35px] flex items-center z-[1] font-[inherit] mq725:text-lg mq725:leading-[28px]">
//             <span>
//               <span className="font-semibold">Sign In</span>
//               <span className="font-medium text-gray">
//                 {" "}
//                 to view all the massage therapists
//               </span>
//             </span>
//           </h3>
//         </div>
//         <div className="w-[341px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
//           <img
//             className="h-2.5 w-[52px] relative z-[2]"
//             loading="lazy"
//             alt=""
//             src="/group-1000001688.svg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };