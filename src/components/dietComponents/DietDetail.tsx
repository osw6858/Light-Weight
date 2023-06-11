import { useLocation } from "react-router";
import { FoodType } from "./DietIndex";

const DietDetail = () => {
  const location = useLocation();
  const foodItem: FoodType = location.state.item;
  console.log(foodItem);
  return (
    <div className="flex flex-col">
      <span>{foodItem.DESC_KOR}</span>
      <span>{foodItem.NUTR_CONT1}</span>
      <span>{foodItem.NUTR_CONT2}</span>
      <span>{foodItem.NUTR_CONT3}</span>
      <span>{foodItem.NUTR_CONT4}</span>
      <span>{foodItem.NUTR_CONT5}</span>
      <span>{foodItem.NUTR_CONT6}</span>
      <span>{foodItem.NUTR_CONT7}</span>
      <span>{foodItem.NUTR_CONT8}</span>
      <span>{foodItem.NUTR_CONT9}</span>
    </div>
  );
};

export default DietDetail;
