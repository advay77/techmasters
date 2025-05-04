import Image from "next/image";

export const Bento = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <div className="flex gap-3 relative">
        <div className="bottom-14 -left-8 shadow-md shadow-gray-600 rounded-[12px] absolute">
          <img
            className="p-2 bg-white rounded-[12px] h-14 w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
            alt="google logo"
          />
        </div>
        <div>
          <div className="rounded-[12px] bg-green-600 rounded-[14px] w-60 h-50 flex flex-col justify-between p-4">
            <div className="bg-white w-1 mt-4 h-34 rounded-full absolute"></div>
            <div className="flex justify-center ">
              <img
                className="bg-white rounded-full h-10 w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
              />
              <img
                className="bg-white rounded-full -ml-3 h-10 w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
              />
              <img
                className="bg-white rounded-full -ml-3 h-10 w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
              />
            </div>
            <div>
              <h3 className="text-center  text-white text-4xl font-bold ">
                306+
              </h3>
              <p className="text-center text-white text-md font-md mr-4">
                Signed in
              </p>
            </div>
          </div>
          <div className="mt-3 bg-yellow-400 rounded-[14px] w-60 h-20 flex flex-col justify-center items-center">
            <div className="flex gap-2 ">
              <div>
                <h3 className="flex flex-col justify-center text-5xl font-bold">
                  4
                </h3>
              </div>
              <div className="font-bold text-xl w-40">Years of Innovating</div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-end">
          <div className="shadow-md shadow-gray-600 top-20 -right-20 w-40 h-24 bg-red-500 rounded-[14px] absolute flex flex-col justify-center items-center ">
            <h3 className="text-white">Current Members</h3>
            <h3 className="text-white text-5xl font-bold">230</h3>
          </div>
          <div className="bottom-2 shadow-md shadow-gray-600  -right-20 w-40 h-24 bg-blue-500 rounded-[14px] absolute flex flex-col justify-center items-center">
            <h3 className="text-white">Events & Workshops</h3>
            <h3 className="text-white text-5xl font-bold">23</h3>
          </div>

          <img
            className="w-70 h-72 rounded-[14px]"
            src="https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-600nw-2071252046.jpg"
            alt="random"
          />
        </div>
      </div>
      <div className="mt-2 relative">
        <div className="-top-1 shadow-md shadow-gray-600 -right-20 w-40 h-24 bg-green-500 rounded-[14px] absolute flex flex-col justify-center items-center">
          <h3 className="text-white">SOLCHA Attempts</h3>
          <h3 className="text-white text-5xl font-bold">03</h3>
        </div>

        <img
          className="flex flex-col justify-center w-132 h-44 rounded-[14px]"
          src="https://www.shutterstock.com/image-photo/cheerful-young-adult-male-holds-260nw-2440265253.jpg"
          alt="nothing"
        />
      </div>
    </div>
  );
};
