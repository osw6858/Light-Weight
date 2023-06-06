import { Carousel } from "antd";

const CarouselComponent = () => {
  return (
    <div className="w-full p-8 mx-auto md:opacity-100 ">
      <Carousel autoplay>
        {/* PC 화면에서는 보임 */}
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-xl md:text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            아직 등록된 운동이 없어요!
            <span className="text-sm md:text-base font-normal mt-2">
              어떤 운동을 하실건가요?
            </span>
          </h3>
        </div>
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-xl md:text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            위에 입력창에 적어주세요!
            <span className="text-sm md:text-base font-normal mt-2">
              그리고 추가 버튼을 누르면 돼요.
            </span>
          </h3>
        </div>
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-lg md:text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            타이머로 휴식시간을 체크하세요!
            <span className="text-sm md:text-base font-normal mt-2">
              '휴식' 버튼을 누르세요!
            </span>
          </h3>
        </div>
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-xl md:text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            오늘도 좋은 하루 보내세요!
            <span className="text-sm md:text-base font-normal mt-2">
              #오운완
            </span>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
