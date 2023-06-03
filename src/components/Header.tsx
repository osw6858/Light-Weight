import dayjs from "dayjs";
import { InfoCircleOutlined } from "@ant-design/icons";
import Inform from "./Inform";

const Header = () => {
  const now = dayjs().format("YYYY-MM-DD");

  return (
    <header className=" bg-blue-600 h-24  sm:h-28 md:h-32 flex justify-between">
      <div className="flex flex-col justify-center ml-2">
        <h2 className="text-xl text-center text-white font-sans pt-4 sm:text-4xl md:text-5xl md:text-left md:px-8">
          Light-Weight!
        </h2>
        <h2 className="text-lg text-center text-white font-sans pt-2 sm:text-2xl md:text-2xl md:text-left md:px-8">
          {now.toString()}
        </h2>
      </div>

      <div className="">
        <Inform />
      </div>
    </header>
  );
};

export default Header;
