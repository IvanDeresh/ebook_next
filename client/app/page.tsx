import Image from "next/image";
import Link from "next/link";
import { libra3 } from "./assets/img";
export default function Home() {
  return (
    <div className="flex max-container justify-center h-[50%] text-white">
      <div className="mt-[300px] max-2xl:flex max-2xl:flex-col-reverse  flex justify-around max-2xl:items-center">
        <div className="w-[40%] h-[1000px]  flex flex-col max-lg:justify-start mt-[200px] leading-8 items-start">
          <h3 className="text-[33px] left-10 mb-[50px]">
            A Digital Library for Literary Exploration
          </h3>
          <p className="text-[20px] max-lg:hidden">
            Immerse yourself in the world of literature with eBook Haven, your
            go-to digital sanctuary for a vast collection of captivating eBooks.
            Explore genres ranging from timeless classics to contemporary
            masterpieces. Unleash the power of knowledge at your fingertips,
            where each page invites you on a journey of endless discovery.
          </p>
          <Link
            className="mt-[50px] w-[150px] bg-green-500 text-white h-[50px] rounded-full flex justify-center items-center"
            href="/pages/book"
          >
            Lets see
          </Link>
        </div>
        <div className="w-[40%] max-lg:w-[60%]">
          <Image className="w-full" src={libra3} alt="some" />
        </div>
      </div>
    </div>
  );
}
