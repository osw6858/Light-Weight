import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
const Inform: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className=" md:text-lg bg-transparent" onClick={showDrawer}>
        <InfoCircleOutlined className="text-xl sm:text-3xl md:text-4xl text-white p-8 mr-3" />
      </button>
      <Drawer title="이용방법" placement="right" onClose={onClose} open={open}>
        <div>
          <h1 className="text-2xl font-sans font-bold">
            운동계획 짜기 홈페이지
          </h1>

          <br />
          <h2 className=" text-sm font-semibold">
            들 수 있다면 그건 가벼운 무게다
          </h2>
          <br />
          <span>
            들 수 있다면 그건 가벼운 무게입니다. 항상 전날보다 더 들려고
            노력하세요. 위에 타이머로 쉬는 시간을 체크할 수 있습니다. 목표하는
            운동을 입력하고 그날 수행할 세트, 무게, 반복횟수를 입력하세요.
            운동이 끝나면 그날 운동을 돌아보고 계획한 세트를 성공했다면 세트 맨
            왼쪽 체크버튼을 누르세요. 당신은 하루하루 성장하고 있습니다.
          </span>
          <br />
        </div>
      </Drawer>
    </>
  );
};

export default Inform;
