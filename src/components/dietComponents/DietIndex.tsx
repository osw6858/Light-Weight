import { Button, Modal } from "antd";
import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import axios from "axios";
import { Spin } from "antd";

const DietIndex = () => {
  type Food = {
    DESC_KOR: string;
    NUTR_CONT1: string;
  };

  type FoodResult = Food[];

  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState<FoodResult>([]);
  const FOOD_API_URL = import.meta.env.VITE_FOOD_API_URL;
  const foodList: Food[] = [];

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const hadleSearch = (search: string) => {
    async function getFood() {
      const res = await axios.get(FOOD_API_URL + search);
      //console.log("res", res);
      const food: FoodResult = res.data.I2790.row;
      console.log(food);
      if (food === undefined) {
        alert("검색결과가 없습니다.");
        return;
      }
      setSearch(food);
    }
    if (search.trim() !== "") {
      getFood();
    }
  };

  const onChecked = (e: Food) => {
    //console.log(`checked = ${e.NUTR_CONT1}`);
    foodList.push(e);
    console.log(foodList);
  };

  //console.log(search);

  return (
    <main className="flex justify-center max-w-screen-sm  mx-auto mt-5 ">
      {["아침", "점심", "저녁"].map((e: string, index) => (
        <div className="mx-3" key={index}>
          <Button onClick={() => setOpen(true)}>{e}식단 추가</Button>
          <Modal
            title="검색해 주세요"
            className=" text-center"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={500}
            okText={<span className="text-black">추가</span>}
          >
            <input
              className=" border border-b-black"
              onChange={(e) => handleSearchText(e)}
            ></input>
            <button onClick={() => hadleSearch(searchText)}>검색</button>
            {search.map((e: Food, index) => (
              <div key={index} className="flex my-1 ">
                <Checkbox onChange={() => onChecked(e)}>
                  <span className=" md:text-lg">{e.DESC_KOR}</span>
                </Checkbox>
              </div>
            ))}
          </Modal>
        </div>
      ))}
    </main>
  );
};

export default DietIndex;
