import dayjs from "dayjs";
import { InfoCircleOutlined } from "@ant-design/icons";

const Header = () => {
  const now = dayjs().format("YYYY-MM-DD");

  return (
    <header className=" bg-blue-600 h-24  sm:h-28 md:h-32 flex justify-between">
      <div className="flex flex-col ml-5">
        <h2 className="text-xl text-center text-white font-sans pt-4 sm:text-4xl md:text-5xl md:text-left md:px-8">
          GoToTheGYM
        </h2>
        <h2 className="text-lg text-center text-white font-sans pt-1 sm:text-2xl md:text-3xl md:text-left md:px-8">
          {now.toString()}
        </h2>
      </div>

      <InfoCircleOutlined className="text-xl sm:text-3xl md:text-4xl text-white p-8 mr-3" />
    </header>
  );
};

export default Header;
