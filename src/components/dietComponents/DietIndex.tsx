import { Button, Modal } from "antd";
import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const DietIndex = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  console.log(search);

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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => (
              <div key={index} className="flex overflow-y-auto">
                <Checkbox onChange={onChange}>
                  <p>검색내용</p>
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
