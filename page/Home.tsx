import PriceCard from "@/components/PriceCard";
import { FaCheck, FaTimes } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import {
  MdAutoGraph,
  MdDirectionsBike,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { cardsData } from "@/data/cardData";
import Card from "@/components/Card";
import React from "react";
import HostProject from "@/components/HostProject";
import Link from "next/link";

export default function HeroPage() {
  return (
    <>
      <div className="bg-hero">
        <div className="relative">
          <div className="bg-[url('/image.png')] relative w-11/12 mx-auto bg-cover bg-center md:items-center md:justify-center flex h-screen pt-40 md:pt-0 pb-20">
            <div className="flex flex-col gap-10">
              <h1 className="md:text-8xl/30 text-5xl/15 text-white/40 font-bold text-center w-fit md:w-9/12 mx-auto font-sans">
                Choose a plan that's right for you.
              </h1>
              <p className="text-xl font-semibold md:w-5/12 mx-auto font-sans text-center text-white/80">
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
      <div id="pricing" className="bg-secondary pb-10 pt-10 scroll-mt-20">
        <div className="w-11/12 mx-auto flex justify-center items-center">
          <div className="flex flex-col lg:flex-row md:flex-wrap gap-10 items-center justify-center">
            {/* card - 01 */}
            <PriceCard
              icon={<MdDirectionsBike />}
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
              icon={<IoIosRocket />}
              text="Pro • Best for Freelancers"
              price="24/month"
              mark={true}
              features={[
                { icon: <FaCheck />, label: "All the Hobby plan features" },
                {
                  icon: <FaCheck />,
                  label: "Front-end development with Webflow",
                },
                { icon: <FaCheck />, label: "Ongoing support & maintenance" },
                { icon: <FaCheck />, label: "Free stock photos" },
                { icon: <FaCheck />, label: "Native source files included" },
              ]}
            />

            {/* card - 03 */}
            <PriceCard
              icon={<MdAutoGraph />}
              text="Business • Best for Studios"
              price="32/month"
              features={[
                { icon: <FaCheck />, label: "All the Pro plan features" },
                { icon: <FaCheck />, label: "Unlimited team members" },
              ]}
            />

            {/* Card - 04 */}
            <PriceCard
              icon={<MdOutlineSupportAgent />}
              text="Enterprise • Best for Agencies"
              price="48/month"
              features={[
                { icon: <FaCheck />, label: "All the Business plan features" },
                { icon: <FaCheck />, label: "Native source files included" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Slider Cards Section */}
        <div id="slider" className="overflow-hidden w-full bg-hero p-10 py-20 scroll-mt-20">
          <div className=" flex gap-10  animate-loop will-change-transform [transform-style:preserve-3d]">
            {
              cardsData.map((item, index) => {
                return(
                  <React.Fragment key={index}>
                    <div className="hover:scale-110 transition-all transform-content duration-75 cursor-pointer">
                     <Card 
                        img={item.avatar}
                        name={item.name}
                        username={item.username}
                        about={item.text}
                        time={item.time}
                        date={item.date}
                    />
                   </div>

                   <div aria-hidden="true" className="hover:scale-110 transition-all transform-content duration-75 cursor-pointer">
                     <Card 
                        img={item.avatar}
                        name={item.name}
                        username={item.username}
                        about={item.text}
                        time={item.time}
                        date={item.date}
                    />
                   </div>
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>


        {/* All account plans include: */}
        <div id="product" className="bg-secondary px-4 py-28 scroll-mt-20">
          <div className="flex flex-col gap-4 w-11/12 mx-auto text-white">
             <h2 className="text-2xl font-bold text-white/30">All account plans include:</h2>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

               <div className="border-l-1 border-white/30 pl-5">
                  <HostProject 
                    heading="Unlimited hosted projects"
                    paragraph="Hosted projects don’t count against your plan limits, so you can build as many as you want when you host with Webflow."
                   />

                   <div className="h-[1px] bg-white/10 rounded-lg mt-16"></div>
                   <div className="h-[1px] bg-white/10 rounded-lg mt-1"></div>
                   
               </div>

               <div className="border-l-1 border-white/30 pl-5">
                  <HostProject 
                    heading="Unlimited team members"
                    paragraph="You can invite up to 10 team members to your account. You can also invite team members to individual projects."
                   />

                   <div className="h-[1px] bg-white/10 rounded-lg mt-16"></div>
                   <div className="h-[1px] bg-white/10 rounded-lg mt-1"></div>
               </div>

               <div className="border-l-1 border-white/30 pl-5">
                  <HostProject 
                    heading="Unlimited requests"
                    paragraph="You can make up to 100 requests per day. You can also make up to 10 requests per minute."
                   />

                   <div className="h-[1px] bg-white/10 rounded-lg mt-16"></div>
                   <div className="h-[1px] bg-white/10 rounded-lg mt-1"></div>
               </div>

               <div className="border-l-1 border-white/30 pl-5">
                  <HostProject 
                    heading="Native source files included"
                    paragraph="Webflow includes native source files like HTML, CSS, and JavaScript. You can also use other source files like React, Vue, and Angular."
                   />

                   
                   <div className="h-[1px] bg-white/10 rounded-lg mt-13 lg:hidden md:block"></div>
                   <div className="h-[1px] bg-white/10 rounded-lg mt-1 lg:hidden md:block"></div>
               </div>

               <div className="border-l-1 border-white/30 pl-5">
                  <HostProject 
                    heading="Free stock photos"
                    paragraph="Webflow includes free stock photos that you can use in your projects."
                    />

                    <div className="h-[1px] bg-white/10 rounded-lg mt-10 lg:hidden md:hidden"></div>
                   <div className="h-[1px] bg-white/10 rounded-lg mt-1 lg:hidden md:hidden"></div>
               </div>

               <div className="border-l-1 border-white/30 pl-5">
                  <HostProject 
                     heading="Ongoing support & maintenance"
                     paragraph="We offer ongoing support and maintenance for your account. We'll respond to your questions and help you get the most out of Webflow."   
                  />
                  {/* <div className="h-[1px] bg-white/10 rounded-lg mt-5 hidden lg:hidden md:"></div>
                   <div className="h-[1px] bg-white/10 rounded-lg mt-1 hidden lg:hidden md:block"></div> */}
               </div>

             </div>
          </div>
        </div>

        {/* Codebase Section */}
        <div className="bg-secondary pb-18">
          <div className="w-11/12 mx-auto bg-primary px-10 py-30 rounded-lg">
            <div className="flex items-center justify-center flex-col gap-4 text-white">
               <h1 className="md:text-6xl text-3xl font-bold max-w-5xl text-center md:leading-[70px]">Move even faster with Codebase UI Kit for Webflow.</h1>
               
               <div className="flex md:gap-10 justify-center flex-col lg:flex-row md:flex-row gap-4">
                   <button className="bg-white/20 text-white/80 px-5 py-2 rounded-lg text-[14px] font-semibold hover:scale-95 transition-all transform-content duration-75 cursor-pointer">
                       Take the Tour
                   </button> 

                    <button className="bg-white/20 text-white/80 px-5 py-2 rounded-lg text-[14px] font-semibold hover:scale-95 transition-all transform-content duration-75 cursor-pointer">
                      Browser in Webflow
                    </button>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-secondary py-10 border-t-1 border-white/30">
          <div className="w-11/12 mx-auto flex justify-center items-center text-white/30 text-center text-[16px] font-sans font-semibold">
             <p className="text-center">This Website Design and Development By <Link className="text-white/50 hover:text-white" href="https://github.com/alammd0/pricing_page">Khalid Alam</Link></p>
          </div>
        </div>
    </>
  );
}
