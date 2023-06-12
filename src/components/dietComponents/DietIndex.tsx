import { useState } from "react";
import { List, Input, Result, Spin, Button, Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";

export type FoodType = {
  DESC_KOR: string; //식품이름
  NUTR_CONT1: string; //열량
  NUTR_CONT2: string; //탄수화물
  NUTR_CONT3: string; //단백질
  NUTR_CONT4: string; //지방
  NUTR_CONT5: string; //당류
  NUTR_CONT6: string; //나트륨
  NUTR_CONT7: string; //콜레스트롤
  NUTR_CONT8: string; //포화지방산
  NUTR_CONT9: string; //트랜스지방
};
export type FoodResult = FoodType[];

const DietIndex = () => {
  const { Search } = Input;
  const FOOD_API_URL = import.meta.env.VITE_FOOD_API_URL;
  const [data, setData] = useState<FoodResult>([]);
  const [searchText, setSearchText] = useState("");
  const [homeScreen, setHomeScreen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [foodDtail, setFoodDtail] = useState<FoodType>();
  const [modal2Open, setModal2Open] = useState(false);

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearch = (search: string) => {
    setLoading(true); // 로딩 상태 설정
    async function getFood() {
      const res = await axios.get(FOOD_API_URL + search);
      const foods: FoodResult = res.data.I2790.row;
      //  console.log(foods);
      setData(foods);
      setLoading(false); // 로딩 상태 해제
      setHomeScreen(false);
      if (foods === undefined) {
        alert("검색결과가 없습니다.");
        return;
      }
    }
    getFood();
  };

  const handleOpenModal = (item: FoodType) => {
    setModal2Open(true);
    setFoodDtail(item);
  };

  return (
    <main className="flex flex-col justify-center max-w-screen-sm  mx-auto mt-5 ">
      <div className="mx-3">
        <Search
          placeholder="음식 이름을 입력"
          enterButton="검색"
          size="large"
          onSearch={(e) => onSearch(e)}
          onChange={handleSearchText}
          value={searchText}
          className=" bg-blue-500 rounded-lg "
        />
      </div>
      {homeScreen ? (
        <Spin spinning={loading} size="large">
          <Result
            icon={<QuestionCircleOutlined />}
            title={<span>운동하려면 영양도 잘 챙기셔야죠!</span>}
            extra={<span>검색창에 궁금한 음식정보를 검색해 보세요!</span>}
          />
        </Spin>
      ) : (
        <div className="px-6">
          <Spin spinning={loading} size="large">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item: FoodType, index) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={item.DESC_KOR}
                    description={`${item.NUTR_CONT1}kcal`}
                  />
                  <Button onClick={() => handleOpenModal(item)}>
                    상세정보
                  </Button>
                </List.Item>
              )}
            />
            <Modal
              title={foodDtail?.DESC_KOR}
              centered
              okType="default"
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
            >
              <div className="flex flex-col justify-center items-center">
                <span className=" text-base my-1">
                  열량:{foodDtail?.NUTR_CONT1}Kcal
                </span>
                <span className=" text-base my-1">
                  탄수화물:{foodDtail?.NUTR_CONT2}g
                </span>
                <span className=" text-base my-1">
                  단백질:{foodDtail?.NUTR_CONT3}g
                </span>
                <span className=" text-base my-1">
                  지방:{foodDtail?.NUTR_CONT4}g
                </span>
                <span className=" text-base my-1">
                  당류:{foodDtail?.NUTR_CONT5}g
                </span>
                <span className=" text-base my-1">
                  나트륨:{foodDtail?.NUTR_CONT6}mg
                </span>
                <span className=" text-base my-1">
                  콜레스트롤:{foodDtail?.NUTR_CONT7}mg
                </span>
                <span className=" text-base my-1">
                  포화지방산:{foodDtail?.NUTR_CONT8}g
                </span>
                <span className=" text-base my-1">
                  트랜스지방:{foodDtail?.NUTR_CONT9}g
                </span>
              </div>
            </Modal>
          </Spin>
        </div>
      )}
    </main>
  );
};

export default DietIndex;
