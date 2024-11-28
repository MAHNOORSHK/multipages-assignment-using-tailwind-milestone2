import Image from "next/image";
import { IoFlowerSharp } from "react-icons/io5";
import team1 from "@/app/images/team1.png";
import team2 from "@/app/images/team2.png";
import team3 from "@/app/images/team3.png";
import team4 from "@/app/images/team4.png";

export default function Team() {
  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto bg-[#cbea7b] rounded-full flex items-center justify-center">
            <IoFlowerSharp className="text-4xl text-[#1a3129]" />
          </div>
          <h1 className="text-3xl font-semibold mt-5">
            Meet Our Team of Experts
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our team at Nutritionist is composed of highly skilled professionals
            who are passionate about helping you achieve your health and
            wellness goals. With a diverse range of expertise in nutrition,
            coaching, and support, our team is dedicated to providing you with
            the guidance and personalized care you need. Get to know the experts
            behind our success and discover how they can make a positive impact
            on your journey to better health.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative">
            <Image
              src={team1}
              alt="Sarah Mitchell"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f6fbe9] p-4 rounded-lg text-center">
              <h1 className="text-xl font-semibold">Sarah Mitchell</h1>
              <p className="text-sm">Founder and CEO</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <Image
              src={team2}
              alt="Emily Thompson"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f6fbe9] p-4 rounded-lg text-center">
              <h1 className="text-xl font-semibold">Emily Thompson</h1>
              <p className="text-sm">Chief Operating Officer</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <Image
              src={team3}
              alt="John Davis"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f6fbe9] p-4 rounded-lg text-center">
              <h1 className="text-xl font-semibold">John Davis</h1>
              <p className="text-sm">Chief Financial Officer</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative">
            <Image
              src={team4}
              alt="Rachel Adams"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f6fbe9] p-4 rounded-lg text-center">
              <h1 className="text-xl font-semibold">Rachel Adams</h1>
              <p className="text-sm">Chief Marketing Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
