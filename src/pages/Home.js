
import GroupComponent1 from "../components/GroupComponent1";
import SideNav from "../components/SideNav";
import SliderWithSearch from "../components/SlideAndSearch";
import TopNav from "../components/TopNav";

const Home = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq975:pl-5 mq975:pr-5 mq975:box-border">
     
      <SideNav />
    
      <main className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-[calc(100%_-_250px)] mq975:max-w-full">
      
        <TopNav />
      
      <SliderWithSearch/>

     
     
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-lg text-darkslategray-600 font-poppins">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-px min-w-[357px] max-w-full mq450:min-w-full">
              <div className="relative leading-[30px] font-medium">
                Featured Testimonial
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-[30px] box-border gap-5 max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="w-[550px] h-[429px] relative rounded-3xs bg-white hidden max-w-full" />
                <GroupComponent1 image116="/image-116-4@2x.png" />
                <GroupComponent1
                  image116="/image-116-41@2x.png"
                  propMinHeight="unset"
                />
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
                  <img
                    className="h-[9px] w-[51px] relative z-[1] "
                    loading="lazy"
                    alt=""
                    src="/group-1000001689.svg"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-start justify-start gap-px min-w-[357px] max-w-full mq450:min-w-full">
              <div className="relative leading-[30px] font-medium inline-block min-w-[126px]">
                Popular Cities
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start pt-[30px] px-0 pb-[18px] box-border gap-6 max-w-full text-sm text-dodgerblue-200 mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="self-stretch h-[429px] relative rounded-3xs bg-white hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                  <div className="w-[526px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[17px]">
                        <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[81px] z-[1]">
                          Atlanta, GA
                        </div>
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[111px] z-[1]">
                        Indianapolis, IN
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[115px] z-[1]">
                        Philadelphia, PA
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                  <div className="w-[492px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[17px]">
                        <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[79px] z-[1]">
                          Boston, MA
                        </div>
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[109px] z-[1]">
                        Jacksonville, FL
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[81px] z-[1]">
                        Queens, NY
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                  <div className="w-[494px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                      <div className="w-[103px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                        <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[79px] z-[1]">
                          Chicago, IL
                        </div>
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[116px] z-[1]">
                        Kansas City, MO
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[83px] z-[1]">
                        Raleigh, NC
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                  <div className="w-[523px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5">
                        <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[79px] z-[1]">
                          Chicago, IL
                        </div>
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[113px] z-[1]">
                        Los Angeles, CA
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[112px] z-[1]">
                        San Antonio, TX
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                  <div className="w-[488px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[75px] z-[1]">
                        El Paso, TX
                      </div>
                      <div className="w-[88px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                        <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[65px] z-[1]">
                          Miami, FL
                        </div>
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[77px] z-[1]">
                        Tucson, AZ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
                  <div className="w-[491px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[76px] z-[1]">
                        Fresno, CA
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[91px] z-[1]">
                        Nashville, TN
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[80px] z-[1]">
                        Upland, CA
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="w-[533px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                    <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[84px] z-[1]">
                      Houston, TX
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[47px] mq450:flex-wrap gap-[23px]">
                      <div className="relative [text-decoration:underline] tracking-[0.02em] z-[1]">
                        Oklahoma City, OK
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[0.02em] inline-block min-w-[122px] z-[1]">
                        Washington, D.C.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
