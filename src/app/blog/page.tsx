// import "@/app/blog/blog.css";
import Image from "next/image";
import { IoFlowerSharp } from "react-icons/io5";
import blogcard1 from "@/app/images/blogcard1.png";
import blogcard2 from "@/app/images/blogcard2.png";
import blogcard3 from "@/app/images/blogcard3.png";
import blogcard4 from "@/app/images/blogcard4.png";
import blogcard5 from "@/app/images/blogcard5.png";
import blogcard6 from "@/app/images/blogcard6.png";

export default function Blog() {
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
            tailored nutrition plans and expert guidance. We understand...
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-5 px-4 justify-center items-center">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <div className="w-full md:w-[500px] h-[450px]">
            <div className="w-full md:w-[500px] h-[250px] p-5">
              <h1 className="text-[20px] font-semibold underline decoration-[#cbea7b] mb-4">
                Weight Loss Tips
              </h1>
              <Image
                src={blogcard1}
                alt=""
                className="w-full md:w-[400px] float-right"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center text-start">
              <div className="w-full md:w-[350px] flex flex-col">
                <h1 className="text-[20px] font-normal">
                  10 Effective Strategies for Sustainable Weight Loss
                </h1>
                <p className="text-[14px] text-justify">
                  Discover proven strategies for long-term weight loss success.
                  Learn how to create healthy habits, set achievable goals, and
                  make sustainable lifestyle changes.
                </p>
              </div>
              <div className="bg-[#cbea7b] rounded-lg w-[100px] h-[40px] p-2 text-center font-semibold text-[14px]">
                Read More
              </div>
            </div>
          </div>

          <div className="w-full md:w-[500px] h-[450px]">
            <div className="w-full md:w-[500px] h-[250px] p-5">
              <h1 className="text-[20px] font-semibold underline decoration-[#cbea7b] mb-4">
                Weight Loss Tips
              </h1>
              <Image
                src={blogcard2}
                alt=""
                className="w-full md:w-[400px] float-right"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center text-start">
              <div className="w-full md:w-[350px] flex flex-col">
                <h1 className="text-[20px] font-normal">
                  The Role of Portion Control in Weight Management
                </h1>
                <p className="text-[14px] text-justify">
                  Learn how portion control can help you manage your weight
                  effectively. Find practical tips for controlling portion sizes
                  and avoiding overeating.
                </p>
              </div>
              <div className="bg-[#cbea7b] rounded-lg w-[100px] h-[40px] p-2 text-center font-semibold text-[14px]">
                Read More
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="w-full md:w-[500px] h-[450px]">
            <div className="w-full md:w-[500px] h-[250px] p-5">
              <h1 className="text-[20px] font-semibold underline decoration-[#cbea7b] mb-4">
                Weight Loss Tips
              </h1>
              <Image
                src={blogcard3}
                alt=""
                className="w-full md:w-[400px] float-right"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center text-start">
              <div className="w-full md:w-[350px] flex flex-col">
                <h1 className="text-[20px] font-normal">
                  Understanding Emotional Eating and How to Overcome It
                </h1>
                <p className="text-[14px] text-justify">
                  Explore the connection between emotions and eating habits. Get
                  valuable insights on how to identify emotional triggers and
                  develop healthier coping mechanisms.
                </p>
              </div>
              <div className="bg-[#cbea7b] rounded-lg w-[100px] h-[40px] p-2 text-center font-semibold text-[14px]">
                Read More
              </div>
            </div>
          </div>

          <div className="w-full md:w-[500px] h-[450px]">
            <div className="w-full md:w-[500px] h-[250px] p-5">
              <h1 className="text-[20px] font-semibold underline decoration-[#cbea7b] mb-4">
                Weight Loss Tips
              </h1>
              <Image
                src={blogcard4}
                alt=""
                className="w-full md:w-[400px] float-right"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center text-start">
              <div className="w-full md:w-[350px] flex flex-col">
                <h1 className="text-[20px] font-normal">
                  How to Stay Motivated on Your Weight Loss Journey
                </h1>
                <p className="text-[14px] text-justify">
                  Find effective strategies to stay motivated and overcome
                  obstacles during your weight loss journey. Get tips on setting
                  realistic goals, tracking progress, and celebrating
                  achievements.
                </p>
              </div>
              <div className="bg-[#cbea7b] rounded-lg w-[100px] h-[40px] p-2 text-center font-semibold text-[14px]">
                Read More
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="w-full md:w-[500px] h-[450px]">
            <div className="w-full md:w-[500px] h-[250px] p-5">
              <h1 className="text-[20px] font-semibold underline decoration-[#cbea7b] mb-4">
                Weight Loss Tips
              </h1>
              <Image
                src={blogcard5}
                alt=""
                className="w-full md:w-[400px] float-right"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center text-start">
              <div className="w-full md:w-[350px] flex flex-col">
                <h1 className="text-[20px] font-normal">
                  The Importance of Hydration in Weight Loss
                </h1>
                <p className="text-[14px] text-justify">
                  Understand how staying hydrated plays a crucial role in weight
                  loss. Learn how water affects metabolism, appetite, and
                  overall well-being.
                </p>
              </div>
              <div className="bg-[#cbea7b] rounded-lg w-[100px] h-[40px] p-2 text-center font-semibold text-[14px]">
                Read More
              </div>
            </div>
          </div>

          <div className="w-full md:w-[500px] h-[450px]">
            <div className="w-full md:w-[500px] h-[250px] p-5">
              <h1 className="text-[20px] font-semibold underline decoration-[#cbea7b] mb-4">
                Weight Loss Tips
              </h1>
              <Image
                src={blogcard6}
                alt=""
                className="w-full md:w-[400px] float-right"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center text-start">
              <div className="w-full md:w-[350px] flex flex-col">
                <h1 className="text-[20px] font-normal">
                  Healthy Snack Ideas for Weight Loss
                </h1>
                <p className="text-[14px] text-justify">
                  Explore a variety of healthy snack options that support weight
                  loss goals. Find nutritious, satisfying snacks to keep you
                  energized throughout the day.
                </p>
              </div>
              <div className="bg-[#cbea7b] rounded-lg w-[100px] h-[40px] p-2 text-center font-semibold text-[14px]">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
