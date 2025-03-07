import imgBanner from "../assets/rocket.png";
import Button from "./Button";

function Banner() {
  return (
    <div className="absolute w-[1162px] h-[598px] top-[92px] left-[164px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl mb-8 font-semibold text-[#184657]">
            Hello, welcome
          </h1>
          <h2 className="text-5xl mb-8 font-extrabold text-black">
            Find your dream job
          </h2>
          <div className="text-xl mb-10 font-normal text-black">
            Work in a place that makes your comfortable <br /> Register now free
          </div>
          <div className="flex space-x-4">
            <Button
              className="bg-[#2545f4] text-white px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5]"
              title="Register"
            />
            <Button
              className="border border-solid border-[#2545f4] text-[#2545f4] px-12 py-3 rounded-xl text-lg font-bold hover:bg-white"
              title="Login"
            />
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={imgBanner}
            alt="Img Banner"
            className="w-[553px] h-[598px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
