// import { useState } from "react";
// import TextFieldWithIcon from "./TextFieldWithIcon";

// export default function SignInForm({ className = "" }: SignInFormProps) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <div
//       className={`flex flex-col items-start gap-y-4 self-stretch text-left ${className}`}
//     >
//       <h1 className="font-poor-richard text-[40px] leading-[normal] text-blue-500" >
//         LOGO
//       </h1>
//       <div className="flex items-end pt-4">
//         <h2 className="text-3xl font-semibold leading-6 text-green-950">
//           Sign In To Your Account
//         </h2>
//       </div>
//       <div className="flex w-[429px] flex-col items-center pt-2">
//         <div className="flex h-16 w-[429px] flex-shrink-0 items-center leading-7 text-[dimgray]" >
//           <span>
//             <p>{"elcome Back! By click the sign up button, you're agree "}</p>
//             <p>toZenitood Terms and Service and acknlowledge the</p>
//             <p className="text-blue-500 underline">Privacy and Policy</p>
//           </span>
//         </div>
//       </div>
//       <label
//         className="flex items-end pt-6 font-medium leading-[14px] text-green-950"
//         htmlFor="username"
//       >
//         Name
//       </label>
//       <div className="flex w-[428px] items-center rounded-[10px] border-l-[0.7px] border-r-[0.7px] border-t-[0.7px] border-solid border-neutral-200 p-[19px] [border-bottom-width:0.7px] focus-within:[box-shadow:0_0_4px_#1e40af]" >
//         <input
//           className="flex min-w-0 flex-grow text-[15px] leading-[14px] text-[dimgray] [outline:none] placeholder:text-[#5c635a]"
//           placeholder="@username"
//           id="username"
//           type="text"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//          />
//       </div>
//       <label
//         className="flex items-end pt-2 font-medium leading-[14px] text-green-950"
//         htmlFor="email"
//       >
//         Email
//       </label>
//       <div className="flex w-[428px] items-center rounded-[10px] border-l-[0.7px] border-r-[0.7px] border-t-[0.7px] border-solid border-neutral-200 p-[19px] [border-bottom-width:0.7px] focus-within:[box-shadow:0_0_4px_#1e40af]" >
//         <input
//           className="flex min-w-0 flex-grow text-[15px] leading-[14px] text-[dimgray] [outline:none] placeholder:text-[#5c635a]"
//           placeholder="Enter your email"
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//          />
//       </div>
//       <div className="pt-2 font-medium leading-[14px] text-green-950">
//         Password
//       </div>
//       <TextFieldWithIcon
//         containerPadding="pr-64"
//         inputPlaceholder="Enter your password"
//        />
//       <div className="pt-2 font-medium leading-[14px] text-green-950">
//         Confirm Password
//       </div>
//       <TextFieldWithIcon
//         containerPadding="pr-[270px]"
//         inputPlaceholder="Re-type password"
//        />
//       <div className="flex flex-wrap items-center gap-x-2.5 gap-y-[7px] min-[1430px]:flex-nowrap" >
//         <div className="h-4 w-[17px] flex-shrink-0 rounded border-b border-l border-r border-t border-solid border-[dimgray]" />
//         <div className="text-sm leading-[14px] tracking-[0.32px] text-blue-500" >
//           Accept Terms of Service
//         </div>
//       </div>
//       <div className="flex items-end justify-center px-20 pt-6">
//         <button className="rounded-[10px] bg-blue-500 px-[105px] py-[15px] font-semibold leading-[normal] text-white" >
//           Sign up
//         </button>
//       </div>
//       <div className="px-20 text-center leading-6 text-green-950">
//         <span>
//           {"Already Have an Account? "}
//           <span className="text-center font-medium text-blue-600 underline">
//             Log in
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }

// interface SignInFormProps {
//   className?: string;
// }
