const Popup = ({ status, word, reset }) => {
  if (!status) return null;

  const statusText = {
    win: "✨ Congratulations! You won! ✨",
    lose: "Sorry, you lost ⚰️",
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <p>{statusText[status]}</p>
        {status === "lose" && <p>The word was: {word}</p>}
        <button onClick={reset}>Play Again?</button>
      </div>
    </div>
  );
};

export default Popup;
