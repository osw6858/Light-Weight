import { useState } from "react";
import { List, Input, Result, Spin } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const DietIndex = () => {
  type FoodType = {
    DESC_KOR: string;
    NUTR_CONT1: string;
  };

  type FoodResult = FoodType[];
  const { Search } = Input;
  const FOOD_API_URL = import.meta.env.VITE_FOOD_API_URL;
  const [data, setData] = useState<FoodResult>([]);
  const [searchText, setSearchText] = useState("");
  const [noData, setNoData] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearch = (search: string) => {
    async function getFood() {
      setLoading(true); // 로딩 상태 설정
      const res = await axios.get(FOOD_API_URL + search);
      const foods: FoodResult = res.data.I2790.row;

      setData(foods);
      setLoading(false); // 로딩 상태 해제
      setNoData(false);
      if (foods === undefined) {
        alert("검색결과가 없습니다.");
        return;
      }
    }
    getFood();
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
      {noData ? (
        <Result
          icon={<QuestionCircleOutlined />}
          title={<span>지금 먹고 있는 음식 영양성분 궁금하지 않으세요?</span>}
          extra={<span>위에 검색창에 알고싶은 음식을 검색해 보세요!</span>}
        />
      ) : (
        <Spin spinning={loading} size="large">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item: FoodType, index) => (
              <List.Item key={index}>
                <List.Item.Meta
                  title={item.DESC_KOR}
                  description={item.NUTR_CONT1}
                />
              </List.Item>
            )}
          />
        </Spin>
      )}
    </main>
  );
};

export default DietIndex;
