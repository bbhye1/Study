import React, { memo } from "react";
import Tr from "./Tr";

const Table = memo(({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr
              key={"rowNum:" + i}
              dispatch={dispatch}
              rowIndex={i}
              rowData={tableData[i]}
            />
          ))}
      </tbody>
    </table>
  );
});
export default Table;
