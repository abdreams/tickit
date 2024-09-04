import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignIn() {

  const { loginWithRedirect } = useAuth0();
  return (

    <button onClick={() => loginWithRedirect()}>Log In</button>


    // <div className=" flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start shadow-2xl shadow-white/5 rounded bg-white dark:!bg-navy-800 ">
    //   {/* Sign in section */}
    //   <div className="mt-[10vh]   w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
    //     <h4 className="mb-2.5 px-2 text-4xl font-bold text-navy-700 dark:text-white">
    //       Sign In
    //     </h4>

    //     {/* Email */}
    //     <InputField
    //       variant="auth"
    //       extra="mb-3 px-2"
    //       label="Email*"
    //       placeholder="Enter your email"
    //       id="email"
    //       type="text"
    //     />

    //     {/* Password */}
    //     <InputField
    //       variant="auth"
    //       extra="mb-3 px-2"
    //       label="Password*"
    //       placeholder="Enter your password"
    //       id="password"
    //       type="password"
    //     />
    //     {/* Checkbox */}
    //     <div className="mb-4  flex items-center justify-between px-3">
    //       <div className="flex  items-center">
    //         <Checkbox />
    //         <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
    //           Keep me logged In
    //         </p>
    //       </div>
    //       <a
    //         className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
    //         href=" "
    //       >
    //         Forgot Password?
    //       </a>
    //     </div>
    //     <button className="linear mt-2 w-[96%] ml-2 rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white  dark:hover:bg-brand-300 dark:active:bg-brand-200">
    //       Sign In
    //     </button>

    //     <div className="mb-2 mt-2 flex items-center">
    //       <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
    //       <p className="text-base text-gray-600 dark:text-white"> or </p>
    //       <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
    //     </div>
    //     <div className="mb-2 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
    //       <div className="rounded-full text-xl">
    //         <FcGoogle />
    //       </div>
    //       <h5 className="text-sm font-medium text-navy-700 dark:text-white ">
    //         Sign In with Google
    //       </h5>
    //     </div>
    //     <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
    //       <div className="rounded-full text-xl">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           x="0px"
    //           y="0px"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 48 48"
    //         >
    //           <path
    //             fill="#ff5722"
    //             d="M6 6H22V22H6z"
    //             transform="rotate(-180 14 14)"
    //           ></path>
    //           <path
    //             fill="#4caf50"
    //             d="M26 6H42V22H26z"
    //             transform="rotate(-180 34 14)"
    //           ></path>
    //           <path
    //             fill="#ffc107"
    //             d="M26 26H42V42H26z"
    //             transform="rotate(-180 34 34)"
    //           ></path>
    //           <path
    //             fill="#03a9f4"
    //             d="M6 26H22V42H6z"
    //             transform="rotate(-180 14 34)"
    //           ></path>
    //         </svg>
    //       </div>
    //       <h5 className="text-sm font-medium text-navy-700 dark:text-white">
    //         Sign In with Microsoft
    //       </h5>
    //     </div>
    //     <div className="mt-4 text-center">
    //       <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
    //         Not registered yet?
    //       </span>
    //       <Link
    //         to={"/auth/sign-up"}
    //         className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
    //       >
    //         Create an account
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
