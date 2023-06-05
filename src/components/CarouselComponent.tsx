import { Carousel } from "antd";

const CarouselComponent = () => {
  return (
    <div className="w-full p-8 mx-auto opacity-0 md:opacity-100 ">
      <Carousel autoplay>
        {/* PC 화면에서는 보임 */}
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            Take Your Workout to the Next Level with Our App
            <span className="text-base font-normal mt-2">
              Track your progress and stay motivated
            </span>
          </h3>
        </div>
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            Get in Shape and Stay Accountable
            <span className="text-base font-normal mt-2">
              Set your goals and track your results with ease
            </span>
          </h3>
        </div>
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            Join a Community of Fitness Enthusiasts
            <span className="text-base font-normal mt-2">
              Join challenges, share your workouts, and get inspired
            </span>
          </h3>
        </div>
        <div>
          <h3 className="bg-gray-100 h-40 rounded-lg text-2xl font-bold text-gray-500 flex flex-col justify-center items-center px-6">
            Thank you for Visite Our Page
            <span className="text-base font-normal mt-2">
              Make every day count with our Page
            </span>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
