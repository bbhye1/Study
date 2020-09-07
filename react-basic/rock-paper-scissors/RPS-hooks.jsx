import React, { useState, useRef, useEffect, memo } from "react";

const rpsCoords = {
  바위: 0,
  가위: "-142px",
  보: "-284px",
};
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rpsCoords).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

const RPS = memo(() => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rpsCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      setResult("비겼습니다!");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("졌습니다!");
      setScore((prevScore) => prevScore - 1);
    }

    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  const changeHand = () => {
    if (imgCoord === rpsCoords.바위) {
      setImgCoord(rpsCoords.가위);
    } else if (imgCoord === rpsCoords.가위) {
      setImgCoord(rpsCoords.보);
    } else if (imgCoord === rpsCoords.보) {
      setImgCoord(rpsCoords.바위);
    }
  };

  return (
    <React.Fragment>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="sissor" className="btn" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </React.Fragment>
  );
});

export default RPS;
