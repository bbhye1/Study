import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  memo,
} from "react";
import Ball from "./Ball";

function getNumbers() {
  console.log("getnumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = memo(() => {
  const [winBalls, setWinBalls] = useState([]);
  const LottoNumbers = useMemo(() => getNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(LottoNumbers);
  const [bonus, setBonus] = useState("");
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log("useEffect");
    runTimeouts();
    return () => {
      console.log("useEffectEnd");
      timeouts.current.forEach((v) => clearTimeout(v));
    };
  }, [timeouts.current]);

  const onClickRedo = useCallback(() => {
    console.log(winNumbers);
    setWinNumbers(getNumbers());
    setWinBalls([]);
    setBonus("");
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  const runTimeouts = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinballs) => [...prevWinballs, winNumbers[i]]);
      }, i * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더 !</button>}
    </>
  );
});

export default Lotto;
