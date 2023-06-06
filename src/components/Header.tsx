import dayjs from "dayjs";
import Weather from "./Weather";

const Header = () => {
  const now = dayjs().format("YYYY-MM-DD");

  return (
    <header className=" bg-slate-800 h-24  sm:h-28 md:h-32 flex justify-between">
      <div className="flex flex-col justify-center ml-2">
        <h2 className="text-xl text-center text-white font-sans ml-3 sm:text-4xl md:text-5xl md:text-left md:px-5">
          Light-Weight!
        </h2>
        <h2 className="text-lg text-center text-white font-sans pt-1 sm:text-2xl md:text-2xl md:text-left md:px-8 md:pt-3">
          {now.toString()}
        </h2>
      </div>

      <div className="">
        <Weather />
      </div>
    </header>
  );
};

export default Header;
