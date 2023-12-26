import React from "react";
import Image from "next/image";
import { oldlibrary, present, future } from "@/app/assets/img";
const page = () => {
  return (
    <div className="text-white mt-[100px] flex justify-center h-full ml-[100px] w-full max-container">
      <div className="w-full max-2xl:mr-[200px]">
        <div className="mt-[100px] max-2xl:flex-col max-2xl:gap-[50px]  flex justify-center items-center gap-[200px]">
          <Image
            src={oldlibrary}
            className="rounded-2xl "
            alt="old"
            width={600}
          />
          <div className="border-2 px-10 rounded-2xl w-[500px] flex flex-col items-center justify-center h-[500px]">
            <h1 className="text-[40px] mb-[40px]">History Unfolded</h1>
            <p>
              In the annals of literary passion, the genesis of "Book Haven,"
              your cherished bookstore, is a tale woven with dreams and pages.
              Established a year ago on this very date, the visionaries behind
              the store embarked on a mission to create a sanctuary for book
              enthusiasts. The inception sprouted from a collective ardor for
              literature and a desire to cultivate a space where stories could
              breathe and minds could wander.
            </p>
          </div>
        </div>
        <div className="mt-[200px] max-2xl:flex-col max-2xl:gap-[50px] flex justify-center items-center gap-[100px]">
          <div className="border-2 px-10 rounded-2xl w-[500px] flex flex-col items-center ml-[] justify-center h-[500px]">
            <h1 className="text-[40px] mb-[40px]">Present Panorama</h1>
            <p>
              Today, "Book Haven" stands as a thriving testament to its humble
              beginnings. Nestled in the heart of the city, the store boasts an
              extensive collection spanning genres and epochs. From timeless
              classics to contemporary gems, our shelves narrate a tapestry of
              tales waiting to be discovered. Our knowledgeable staff curates an
              immersive experience, ensuring that every visitor finds not just a
              book, but a literary companion to traverse through the
              complexities of the present moment.
            </p>
          </div>
          <Image
            src={present}
            alt="present"
            width={600}
            className="rounded-2xl "
          />
        </div>
        <div className="mt-[200px] max-2xl:flex-col max-2xl:gap-[50px] flex justify-center items-center gap-[200px]">
          <Image
            src={future}
            alt="future"
            width={600}
            className="rounded-2xl "
          />

          <div className="border-2 px-10 rounded-2xl w-[500px] flex flex-col items-center justify-center h-[500px]">
            <h1 className="text-[40px] mb-[40px]">Future Horizons</h1>
            <p>
              As we celebrate our one-year milestone, the journey is far from
              over. Looking ahead, "Book Haven" envisions expanding its
              community outreach programs, fostering reading clubs, and hosting
              literary events. We aspire to transform into a cultural hub, a
              place where not only books but ideas converge. With a commitment
              to nurturing a love for literature, our future unfolds with the
              promise of enriching lives, one page at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
