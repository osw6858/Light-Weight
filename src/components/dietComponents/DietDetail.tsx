import { useLocation } from "react-router";
import { FoodType } from "./DietIndex";
import { List, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const DietDetail = () => {
  const location = useLocation();
  const foodItem: FoodType = location.state.item;
  const navigate = useNavigate();
  //console.log(foodItem);
  return (
    <main className="flex flex-col justify-center max-w-screen-sm  mx-auto mt-5 px-3">
      <List
        className=" bg-slate-100"
        header={<span className=" font-bold text-lg">{foodItem.DESC_KOR}</span>}
        footer={
          <button onClick={() => navigate("/Light-Weight/Lose-Weight/")}>
            <span className=" font-semibold">재검색</span>
          </button>
        }
        bordered
      >
        <List.Item className="flex flex-col bg-white">
          <span className=" text-base my-1">
            열량:{foodItem.NUTR_CONT1}Kcal
          </span>
          <span className=" text-base my-1">
            탄수화물:{foodItem.NUTR_CONT2}g
          </span>
          <span className=" text-base my-1">단백질:{foodItem.NUTR_CONT3}g</span>
          <span className=" text-base my-1">지방:{foodItem.NUTR_CONT4}g</span>
          <span className=" text-base my-1">당류:{foodItem.NUTR_CONT5}g</span>
          <span className=" text-base my-1">나트륨:{foodItem.NUTR_CONT6}g</span>
          <span className=" text-base my-1">
            콜레스트롤:{foodItem.NUTR_CONT7}g
          </span>
          <span className=" text-base my-1">
            포화지방산:{foodItem.NUTR_CONT8}g
          </span>
          <span className=" text-base my-1">
            트랜스지방:{foodItem.NUTR_CONT9}g
          </span>
        </List.Item>
      </List>
    </main>
  );
};

export default DietDetail;
