import React, { useEffect, useCallback, useReducer } from "react";
import Form from "./From";
import Table from "./Table";

const initialSate = {
  tableData: [],
  timer: 0,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </>
  );
};

export default MineSearch;
