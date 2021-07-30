import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userChoise, setUserChoise] = useState(null);
  const [computerChoise, setComputerChoise] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "sicssers"];

  const handleClick = (value) => {
    setUserChoise(value);
    generatecomputerChoise();
  };

  const generatecomputerChoise = () => {
    const randomChoise = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoise(randomChoise);
  };

  useEffect(() => {
    switch (userChoise + computerChoise) {
      case "sicsserspaper":
      case "rocksicssers":
      case "paperrock":
        setResult("you win!");
        break;
      case "papersicssers":
      case "sicssersrock":
      case "rockpaper":
        setResult("You lose!");
        break;
      case "sicsserssicssers":
      case "paperpaper":
      case "rockrock":
        setResult("It's a draw!");
        break;
    }
  }, [computerChoise, userChoise]);

  return (
    <div className="App">
      <h1>You choice is: {userChoise}</h1>
      <h1>Computer choice is: {computerChoise}</h1>
      {/* <button onClick={() => handleClick('rock')}>Rock</button>
      <button onClick={() => handleClick('paper')}>paper</button>
      <button onClick={() => handleClick('sicssers')}>sicssers</button> */}
      {choices.map((choise, index) => (
        <button key={index} onClick={() => handleClick(choise)}>
          {choise}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
