import React, { useRef, useState, memo } from "react";
import Try from "./Try";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = memo(() => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevTrires) => [
        ...prevTrires,
        { try: value, result: "홈런!" },
      ]);

      alert("게임을 다시 시작합니다!");

      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 탈락! 정답은 ${answer.join(",")}`);

        alert("게임을 다시 시작합니다!");

        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTrires) => [
          ...prevTrires,
          {
            try: value,
            result: `${strike}스트라이크 ${ball}볼 입니다.`,
          },
        ]);

        setValue("");
        inputEl.current.focus();
      }
    }

    e.preventDefault();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <h1>숫자야구</h1>
      <div>{result}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        ></input>
        <button>확인!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도`} tryInfo={v} />;
        })}
      </ul>
    </React.Fragment>
  );
});

export default NumberBaseball;
