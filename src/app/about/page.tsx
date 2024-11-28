import Image from "next/image";
import { IoFlowerSharp } from "react-icons/io5";
import card1 from "@/app/images/card1.png";
import card2 from "@/app/images/card2.png";
import card3 from "@/app/images/card3.png";
import card4 from "@/app/images/card4.png";
import card5 from "@/app/images/card5.png";
import card6 from "@/app/images/card6.png";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 flex-wrap bg-white w-full h-[400px]">
        {/* Left Box - Hidden on small and medium screens */}
        <div className="hidden lg:flex flex-col gap-1 w-[300px] h-[310px]">
          <div className="flex gap-1">
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
          </div>
        </div>

        {/* Center Icon - Always Visible */}
        <div className="w-[300px] h-[310px] flex justify-center items-center">
          <div className="w-[300px] h-[305px] bg-[#cbea7b] rounded-md flex items-center justify-center">
            <IoFlowerSharp className="text-[200px] text-[#1a3129]" />
          </div>
        </div>

        {/* Right Box - Hidden on small and medium screens */}
        <div className="hidden lg:flex flex-col gap-1 w-[300px] h-[310px]">
          <div className="flex gap-1">
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
            <div className="w-[150px] h-[150px] bg-[#cbea7b] rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="flex justify-center items-center w-full h-[400px] bg-white">
        <div className="w-[1000px] h-[300px] bg-[#e5f5bd] flex flex-col justify-center items-center gap-2">
          <h1 className="text-[48px] font-light">Welcome to Nutritionist</h1>
          <p className="text-center text-[14px] font-light px-4">
            Your trusted source for personalized nutrition coaching. Our mission
            is to help you achieve your weight loss and health goals through
            tailored nutrition plans and expert guidance. 
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex justify-center items-center w-full bg-white p-5">
        <div className="bg-[#f6fbe9] p-5 w-[1000px] flex flex-col gap-10">
          {/* Section Title */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-[48px] font-bold">Our Story</h1>
            <p className="text-[14px] font-light">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching...
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col bg-[#e5f5bd]">
            {/* Card 1 */}
            <div className="flex flex-col lg:flex-row h-auto bg-[#f6fbe9]">
              <div className="w-full lg:w-[500px] p-2">
                <Image src={card1} alt="Card Image 1" />
              </div>
              <div className="w-full lg:w-[500px] border-l-[8px] border-[#cbea7b] p-4">
                <h1 className="text-[24px] font-normal underline decoration-[#cbea7b]">
                  Inspiring Transformations Story
                </h1>
                <p className="text-[14px] font-normal pt-2">
                  Nutritionist continues to empower individuals to transform
                  their lives...
                </p>
                <h3 className="text-[14px] font-normal pt-2">July 1, 2025</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col lg:flex-row h-auto bg-[#f6fbe9]">
              <div className="w-full lg:w-[500px] p-4 text-right">
                <h1 className="text-[24px] font-normal underline decoration-[#cbea7b]">
                  Recognition and Accolades Story
                </h1>
                <p className="text-[14px] font-normal pt-2">
                  Nutritionist received industry recognition for its excellence
                  in personalized nutrition coaching...
                </p>
                <h3 className="text-[14px] font-normal pt-2">March 10, 2023</h3>
              </div>
              <div className="w-full lg:w-[500px] p-2 border-l-[8px] border-[#cbea7b]">
                <Image src={card2} alt="Card Image 2" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col lg:flex-row h-auto bg-[#f6fbe9]">
              <div className="w-full lg:w-[500px] p-2">
                <Image src={card3} alt="Card Image 3" />
              </div>
              <div className="w-full lg:w-[500px] border-l-[8px] border-[#cbea7b] p-4">
                <h1 className="text-[24px] font-normal underline decoration-[#cbea7b]">
                  Continued Growth Story
                </h1>
                <p className="text-[14px] font-normal pt-2">
                  Nutritionist celebrated serving over 5,000 clients, a
                  testament to our commitment...
                </p>
                <h3 className="text-[14px] font-normal pt-2">
                  November 2, 2021
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col lg:flex-row h-auto bg-[#f6fbe9]">
              <div className="w-full lg:w-[500px] p-4 text-right">
                <h1 className="text-[24px] font-normal underline decoration-[#cbea7b]">
                  Collaborating for Success Story
                </h1>
                <p className="text-[14px] font-normal pt-2">
                  Nutritionist established partnerships with renowned health
                  professionals...
                </p>
                <h3 className="text-[14px] font-normal pt-2">July 15, 2019</h3>
              </div>
              <div className="w-full lg:w-[500px] p-2 border-l-[8px] border-[#cbea7b]">
                <Image src={card4} alt="Card Image 4" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col lg:flex-row h-auto bg-[#f6fbe9]">
              <div className="w-full lg:w-[500px] p-2">
                <Image src={card5} alt="Card Image 5" />
              </div>
              <div className="w-full lg:w-[500px] border-l-[8px] border-[#cbea7b] p-4">
                <h1 className="text-[24px] font-normal underline decoration-[#cbea7b]">
                  Enhanced Support Story
                </h1>
                <p className="text-[14px] font-normal pt-2">
                  In response to the growing demand for personalized nutrition
                  coaching...
                </p>
                <h3 className="text-[14px] font-normal pt-2">April 1, 2018</h3>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col lg:flex-row h-auto bg-[#f6fbe9]">
              <div className="w-full lg:w-[500px] p-4 text-right">
                <h1 className="text-[24px] font-normal underline decoration-[#cbea7b]">
                  Innovating for Clients Story
                </h1>
                <p className="text-[14px] font-normal pt-2">
                  Nutritionist launched its groundbreaking mobile app for
                  seamless access...
                </p>
                <h3 className="text-[14px] font-normal pt-2">
                  February 25, 2016
                </h3>
              </div>
              <div className="w-full lg:w-[500px] p-2 border-l-[8px] border-[#cbea7b]">
                <Image src={card6} alt="Card Image 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
