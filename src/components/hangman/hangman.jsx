import { useState, useEffect } from "react";
import ProgressImage from "../progressImage/progressImage";
import Popup from "../popup/popup";
import words from "../../assets/words.json";
import { hangmanPartsLong as hangmanParts } from "../../assets/hangmanParts";

function Hangman() {
  const alfabets = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [status, setStatus] = useState("");

  const randomizeWord = () =>
    setWord(words[Math.floor(Math.random() * words.length)].toLowerCase());

  const reset = () => {
    randomizeWord();
    setCorrectLetters([]);
    setWrongLetters([]);
    setStatus("");
  };

  const onGuess = (letter) => {
    word.includes(letter)
      ? setCorrectLetters([...correctLetters, letter])
      : setWrongLetters([...wrongLetters, letter]);
  };

  useEffect(reset, []);

  useEffect(() => {
    if (
      correctLetters.length &&
      word.split("").every((letter) => correctLetters.includes(letter))
    ) {
      setStatus("win");
    }
  }, [correctLetters]);

  useEffect(() => {
    if (wrongLetters.length === hangmanParts.length) {
      setStatus("lose");
    }
  }, [wrongLetters]);

  const maskWord = word
    .split("")
    .map((letter) => (correctLetters.includes(letter) ? letter : "_"))
    .join("");

  return (
    <div className="game-container">
      <h1>HANGMAN</h1>
      <p className="mask-word">{maskWord}</p>
      <div className="keyboard">
        {alfabets.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((letter, letterIndex) => (
              <button
                key={letterIndex}
                onClick={() => onGuess(letter)}
                disabled={
                  wrongLetters.includes(letter) ||
                  correctLetters.includes(letter)
                }
                className="keyboard-key"
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
      <ProgressImage fails={wrongLetters.length} />
      <Popup status={status} word={word} reset={reset} />
    </div>
  );
}

export default Hangman;
