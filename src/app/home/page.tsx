import Image from "next/image";
import HeroImage from "@/app/images/heroImage.png";
import { PiFlowerTulipBold } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { FaStarOfLife } from "react-icons/fa6";
import { BsBagHeartFill } from "react-icons/bs";
import Blog1 from "@/app/images/blog1.png";
import Review1 from "@/app/images/review1.png";
import Blog2 from "@/app/images/blog2.png";
import Review2 from "@/app/images/review2.png";
import Blog3 from "@/app/images/blog3.png";
import Review3 from "@/app/images/review3.png";
import Blog4 from "@/app/images/blog4.png";
import Review4 from "@/app/images/review4.png";
import { LuHeart } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row gap-12 bg-[#f6fbe9] pt-12 pb-16">
    <div className="flex-1">
        <Image src={HeroImage} alt="Hero Image" className="w-full h-auto" />
    </div>
    <div className="flex-1 flex flex-col items-start justify-start pt-12">
        <div className="flex gap-5 text-xl font-bold border-b-2 border-[#cbea7b] text-[#1a3129] mb-8">
            <h2>Transform Your</h2>
            <h3>Health with</h3>
        </div>
        <h1 className="text-5xl font-bold text-[#1a3129] leading-normal mb-4">Personalized Nutrition Coaching</h1>
        <p className="text-lg font-light text-[#1a3129] mb-6 max-w-lg">
            Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.
        </p>
        <div className="flex gap-4 mb-6">
            <button className="bg-[#cbea7b] py-2 px-6 text-xl">Get Started Today</button>
            <button className="py-2 px-6 border border-[#cbea7b] text-xl">Book a Demo</button>
        </div>
    </div>
</div>


            <div className="bg-[#f6fbe9] py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold text-[#262626] mb-4">Features</h1>
                    <p className="text-lg font-light">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 max-w-screen-xl mx-auto">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex gap-4 items-center mb-6">
                            <PiFlowerTulipBold className="text-[#cbea7b] text-3xl" />
                            <h2 className="text-2xl font-semibold">Personalized Nutrition Plans</h2>
                        </div>
                        <p className="text-lg font-light">
                            Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex gap-4 items-center mb-6">
                            <FaGraduationCap className="text-[#cbea7b] text-3xl" />
                            <h2 className="text-2xl font-semibold">Guidance from Certified Nutritionists</h2>
                        </div>
                        <p className="text-lg font-light">
                            Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex gap-4 items-center mb-6">
                            <GiForkKnifeSpoon className="text-[#cbea7b] text-3xl" />
                            <h2 className="text-2xl font-semibold">Food Tracking and Analysis</h2>
                        </div>
                        <p className="text-lg font-light">
                            Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex gap-4 items-center mb-6">
                            <GrNotes className="text-[#cbea7b] text-3xl" />
                            <h2 className="text-2xl font-semibold">Meal Planning and Recipes</h2>
                        </div>
                        <p className="text-lg font-light">
                            Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex gap-4 items-center mb-6">
                            <FaStarOfLife className="text-[#cbea7b] text-3xl" />
                            <h2 className="text-2xl font-semibold">Lifestyle and Behavior Coaching</h2>
                        </div>
                        <p className="text-lg font-light">
                            Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex gap-4 items-center mb-6">
                            <BsBagHeartFill className="text-[#cbea7b] text-3xl" />
                            <h2 className="text-2xl font-semibold">Nutritional Education and Workshops</h2>
                        </div>
                        <p className="text-lg font-light">
                            Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#f6fbe9] py-16">
    <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#262626] mb-4">Our Blogs</h1>
        <p className="text-lg font-light">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {/* Blog 1 */}
        <div className="w-full p-4 bg-white shadow-lg rounded-lg">
            <Image src={Blog1} alt="Blog 1" className="w-full h-48 object-cover mb-6 rounded-t-lg" />
            <div className="p-4">
                <p className="text-lg font-medium text-[#cbea7b]">Weight Loss</p>
                <h2 className="text-2xl font-semibold text-[#262626] mb-4">The Benefits of Hydration for Weight Loss</h2>
                <h5 className="text-lg font-light mb-6">Discover how staying hydrated can support your weight loss goals and improve overall health.</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={Review1} alt="Reviewer" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <h1 className="font-semibold">Emily Johnson</h1>
                            <p className="text-sm">23 May 2023 - 5 min read</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <LuHeart />
                        <FaRegBookmark />
                    </div>
                </div>
            </div>
        </div>

        {/* Blog 2 */}
        <div className="w-full p-4 bg-white shadow-lg rounded-lg">
            <Image src={Blog2} alt="Blog 2" className="w-full h-48 object-cover mb-6 rounded-t-lg" />
            <div className="p-4">
                <p className="text-lg font-medium text-[#cbea7b]">Nutrition</p>
                <h2 className="text-2xl font-semibold text-[#262626] mb-4">Understanding Macronutrients: A Comprehensive Guide</h2>
                <h5 className="text-lg font-light mb-6">Learn about the three macronutrients—carbohydrates, proteins, and fats—and their vital role in your diet.</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={Review2} alt="Reviewer" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <h1 className="font-semibold">John Doe</h1>
                            <p className="text-sm">24 May 2023 - 6 min read</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <LuHeart />
                        <FaRegBookmark />
                    </div>
                </div>
            </div>
        </div>

        {/* Blog 3 */}
        <div className="w-full p-4 bg-white shadow-lg rounded-lg">
            <Image src={Blog3} alt="Blog 3" className="w-full h-48 object-cover mb-6 rounded-t-lg" />
            <div className="p-4">
                <p className="text-lg font-medium text-[#cbea7b]">Healthy Eating</p>
                <h2 className="text-2xl font-semibold text-[#262626] mb-4">The Top 5 Superfoods to Include in Your Diet</h2>
                <h5 className="text-lg font-light mb-6">Discover the top superfoods that can boost your energy, improve your mood, and promote overall health.</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={Review3} alt="Reviewer" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <h1 className="font-semibold">Jane Smith</h1>
                            <p className="text-sm">25 May 2023 - 7 min read</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <LuHeart />
                        <FaRegBookmark />
                    </div>
                </div>
            </div>
        </div>

        {/* Blog 4 */}
        <div className="w-full p-4 bg-white shadow-lg rounded-lg">
            <Image src={Blog4} alt="Blog 4" className="w-full h-48 object-cover mb-6 rounded-t-lg" />
            <div className="p-4">
                <p className="text-lg font-medium text-[#cbea7b]">Nutrition Tips</p>
                <h2 className="text-2xl font-semibold text-[#262626] mb-4">Meal Prepping 101: How to Prepare for a Week of Healthy Eating</h2>
                <h5 className="text-lg font-light mb-6">Learn the best strategies for meal prepping to save time and eat healthy throughout the week.</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={Review4} alt="Reviewer" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <h1 className="font-semibold">Mark Lee</h1>
                            <p className="text-sm">26 May 2023 - 5 min read</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <LuHeart />
                        <FaRegBookmark />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    );
}
