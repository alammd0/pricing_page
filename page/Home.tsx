import PriceCard from "@/components/PriceCard";
import { FaCheck, FaTimes } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdAutoGraph, MdDirectionsBike, MdOutlineSupportAgent } from "react-icons/md";

export default function HeroPage() {
  return (
    <>
      <div className="bg-hero">
        <div className="relative">
          <div className="bg-[url('/image.png')] w-11/12 mx-auto bg-cover bg-center items-center justify-center flex h-screen z-50">
            <div className="flex flex-col gap-10">
              <h1 className="text-8xl/30 text-white/40 font-bold text-center w-9/12 mx-auto font-sans">
                Choose a plan that's right for you.
              </h1>
              <p className="text-xl font-semibold w-5/12 mx-auto font-sans text-center text-white/80">
                We're here to help with any questions you have about plans,
                pricing, and supported features.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-20 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1800 90"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 C480,0 1400,190 1800, 90 L1920,0 L0,0 Z"
                fill="#0D1117"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* here Pricing Card Section */}
        <div className="bg-secondary pb-10 pt-10">
            <div className="w-11/12 mx-auto flex justify-center items-center">
            <div className="flex gap-10">
                {/* card - 01 */}
                <PriceCard
                    icon = {<MdDirectionsBike />}
                    text="Hobby • Best for Individual"
                    price="12/month"
                    features={[
                        { icon: <FaCheck />, label: "Unlimited requests" },
                        { icon: <FaCheck />, label: "Unlimited brands" },
                        { icon: <FaCheck />, label: "Unlimited team members" },
                        { icon: <FaCheck />, label: "Free stock photos" },
                        { icon: <FaCheck />, label: "Native source files included" },
                        { icon: <FaTimes />, label: "Cancel anytime" },
                    ]}
                />

                {/* card - 02 */}
                 <PriceCard
                    icon = {<IoIosRocket/>}
                    text="Pro • Best for Freelancers"
                    price="24/month"
                    mark = {true}
                    features={[
                        { icon: <FaCheck />, label: "All the Hobby plan features" },
                        { icon: <FaCheck />, label: "Front-end development with Webflow" },
                        { icon: <FaCheck />, label: "Ongoing support & maintenance" },
                        { icon: <FaCheck />, label: "Free stock photos" },
                        { icon: <FaCheck />, label: "Native source files included" }
                    ]}
                />

                {/* card - 03 */}
                <PriceCard
                    icon = {<MdAutoGraph />}
                    text="Business • Best for Studios"
                    price="32/month"
                    features={[
                        { icon: <FaCheck />, label: "All the Pro plan features" },
                        { icon: <FaCheck />, label: "Unlimited team members" }
                    ]}
                />

                {/* Card - 04 */}
                  <PriceCard
                    icon = {<MdOutlineSupportAgent />}
                    text="Enterprise • Best for Agencies"
                    price="48/month"
                    features={[
                        { icon: <FaCheck />, label: "All the Business plan features" },
                        { icon: <FaCheck />, label: "Native source files included" }
                    ]}
                />
            </div>
        </div>
        </div>
    </>
  );
}
