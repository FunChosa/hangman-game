import { hangmanPartsLong as hangmanParts } from "../../assets/hangmanParts";
const ProgressImage = ({ fails }) => {
  return (
    <div className="hangman-container">
      <svg height="250" width="200" className="hangman-parts">
        {hangmanParts.slice(0, fails)}
      </svg>
    </div>
  );
};

export default ProgressImage;
