const React = require("react");
const { Component } = React;
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("갈매기");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕!");
      setValue("");
      setWord(value);
      inputRef.current.focus();
    } else {
      setResult("땡!");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        ></input>
        <button>정답!</button>
      </form>
      <div className="result">{result}</div>
    </>
  );
};

module.exports = WordRelay;
