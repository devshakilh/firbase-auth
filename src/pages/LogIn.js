import { useState } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent3 from "../components/GroupComponent3";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";


const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/home');
    } catch (error) {
      console.error("Authentication error: ", error);
    }
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-[111px] pl-[122px] pr-[120px] box-border gap-[118px] leading-[normal] tracking-[normal] text-center text-sm text-white font-nunito-sans gap-[59px] mq750:pl-[61px] mq750:pr-[60px] mq750:box-border gap-[29px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:flex-wrap">
      <div className="h-12 w-[135px] relative [filter:blur(40px)] rounded-lg bg-darkslategray-500 hidden opacity-[0.06]" />
      <div className="h-12 w-[135px] relative [filter:blur(40px)] rounded-lg bg-darkslategray-500 hidden opacity-[0.06]" />
      <div className="h-6 w-[79px] relative hidden">
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
      <div className="w-[432px] flex flex-col items-start justify-start pt-[57px] px-0 pb-0 box-border min-w-[432px] max-w-full mq750:pt-[37px] mq750:box-border mq750:min-w-full mq1125:flex-1">
        <FrameComponent1 />
      </div>
      <GroupComponent3 />
    </div>
  );
};

export default LogIn;
