import React, { useState } from "react";
import { useStore } from "../store";
import { addList, mark, clean } from "../store/list/listAction";

const List = () => {
  const { listState, dispatchList } = useStore();
  const { list } = listState;
  const [text, setText] = useState("");

  return (
    <div className="cont">
      <h1>To Do List</h1>

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button
        onClick={() => {
          setText("");
          dispatchList(addList(text));
        }}
        id='b1'
      >
        Add
      </button>

      <div >
        {list.map((item) => (
          <div
            className={item.success ? "success" : ""}
            key={item.id}
            onClick={() => dispatchList(mark(item.id))}
          >
            {item.title}
          </div>
        ))}
      </div>

      <button id="b2" onClick={() => dispatchList(clean())}>Clean</button>
    </div>
  );
};

export default List;
