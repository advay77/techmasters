import Image from "next/image";
import PhysicsIcons from "./matter-js";

export const Bento = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center sm:gap-4 items-center">
      <div className="flex flex-col justify-center items-center w-[90vw] mx-auto sm:mx-0 sm:w-130 relative bg-gray-100 rounded-[14px] h-123">
        <div className="flex flex-col justify-center rounded-[14px] h-80 w-full">
          <PhysicsIcons />
        </div>
        <div className="flex flex-col h-40 px-4">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight pt-8">
            Our Sponsorers
          </h2>

          <p className="text-md text-gray-600 mt-1">
            These are the companies that have sponsored us in the past. We are
            grateful for their support and look forward to working with them and some content.
            Here you can play with them 😉.
          </p>
        </div>
      </div>
      <div className="sm:h-screen flex flex-col justify-center items-center sm:mt-0 mt-4">
        <div className="flex gap-3 relative">
          <div>
            <div className="rounded-[14px] bg-green-600 w-54 sm:w-60 h-50 flex flex-col justify-between p-4">
              <div className="bg-white w-1 mt-4 h-34 rounded-full absolute"></div>
              <div className="flex justify-center">
                <Image
                  className="bg-white rounded-full"
                  src="/B1.png"
                  alt="TechMasters Logo"
                  width={40}
                  height={40}
                />
                <Image
                  className="bg-white rounded-full -ml-3"
                  src="/B2.png"
                  alt="TechMasters Logo"
                  width={40}
                  height={40}
                />
                <Image
                  className="bg-white rounded-full -ml-3"
                  src="/B3.png"
                  alt="TechMasters Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="text-center text-white text-4xl font-bold">100+</h3>
                <p className="text-center text-white text-md font-md mr-4">
                  Signed in
                </p>
              </div>
            </div>
            <div className="mt-3 bg-yellow-400 rounded-[14px] w-54 sm:w-60 h-20 flex flex-col justify-center items-center">
              <div className="flex gap-2">
                <div>
                  <h3 className="flex flex-col justify-center text-5xl font-bold">1+</h3>
                </div>
                <div className="font-bold text-xl w-40">Years of Innovating</div>
              </div>
            </div>
          </div>
          <div className="relative flex sm:flex-row gap-4 sm:gap-0 flex-col justify-start sm:justify-end">
            <div className="shadow-md sm:shadow-gray-600 top-20 -right-20 w-40 h-24 bg-red-500 rounded-[14px] block sm:absolute flex flex-col justify-center items-center">
              <h3 className="text-white">Current Members</h3>
              <h3 className="text-white text-3xl sm:text-5xl font-bold">60</h3>
            </div>
            <div className="bottom-2 sm:shadow-md shadow-gray-600 -right-20 w-40 h-24 bg-blue-500 rounded-[14px] block sm:absolute flex flex-col justify-center items-center">
              <h3 className="text-white">Events & Workshops</h3>
              <h3 className="text-white text-3xl sm:text-5xl font-bold">5</h3>
            </div>
            <div className="-top-1 sm:shadow-md shadow-gray-600 -right-20 w-40 h-24 bg-green-500 rounded-[14px] block flex flex-col justify-center items-center block sm:hidden">
              <h3 className="text-white">SOLCHA Attempts</h3>
              <h3 className="text-white text-3xl sm:text-5xl font-bold">03</h3>
            </div>

            <Image
              className="rounded-[14px] hidden sm:block h-73 object-cover"
              src="/A1.png"
              alt="random"
              width={280}
              height={288}
            />
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="mt-2 relative">
            <div className="-top-1 shadow-md shadow-gray-600 -right-20 w-40 h-24 bg-green-500 rounded-[14px] absolute flex flex-col justify-center items-center">
              <h3 className="text-white">SOLCHA Attempts</h3>
              <h3 className="text-white text-5xl font-bold">03</h3>
            </div>
          </div>

          <Image
            className="rounded-[14px] h-48 object-cover"
            src="/A4.png"
            alt="nothing"
            width={528}
            height={176}
          />
        </div>
      </div>
    </div>
  );
};