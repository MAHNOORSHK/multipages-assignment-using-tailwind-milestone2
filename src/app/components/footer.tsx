import Image from 'next/image';
import Logo from "@/app/images/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
        <div className="w-full bg-[#1A3129] flex flex-col gap-8 px-5 lg:px-[162px] py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                    <Image src={Logo} alt="logo" />
                    <a href="#" className="text-white font-bold text-2xl">Nutritionist</a>
                </div>
                <ul className="flex flex-col lg:flex-row gap-3 font-bold lg:gap-6 text-white text-lg">
                    <li><a href="" className="hover:text-[#CBEA7B]">Home</a></li>
                    <li><a href="" className="hover:text-[#CBEA7B]">About</a></li>
                    <li><a href="" className="hover:text-[#CBEA7B]">Team</a></li>
                    <li><a href="" className="hover:text-[#CBEA7B]">Blogs</a></li>
                </ul>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <MdEmail className="text-[#CBEA7B] text-xl" />
                        <p className="text-white m-0">hello@squareup.com</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaPhoneVolume className="text-[#CBEA7B] text-xl" />
                        <p className="text-white m-0">+91 91813 23 2309</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaLocationDot className="text-[#CBEA7B] text-xl" />
                        <p className="text-white m-0">Somewhere in the World</p>
                    </div>
                </div>
                <p className="text-white text-sm text-center">© 2023 Nutritionist. All rights reserved.</p>
            </div>
        </div>
        </>
    );
}
