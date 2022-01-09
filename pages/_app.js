import { useState, useEffect } from "react";
import New from "../components/new";
import Nav from "../components/nav";
import Player from "../components/player";
import Alert from "../components/alert";
import "../styles/css/main.css";
const MyApp = ({ Component, pageProps }) => {
  const [phrase, setPhrase] = useState("");
  const [hiddenPhrase, setHiddenPhrase] = useState("");
  const [setup, setSetup] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [movesLeft, setMovesLeft] = useState(9);
  const [lettersLeft, setLettersLeft] = useState(0);
  const [winLose, setWinLose] = useState(false);
  const [reset, setReset] = useState(false);
  const [used, setUsed] = useState([]);

  useEffect(() => {
    if (winLose !== false && reset) {
      setPhrase("");
      setHiddenPhrase("");
      setGameStart(false);
      setMovesLeft(9);
      setLettersLeft(0);
      setWinLose(false);
      setReset(false);
      setUsed([]);
      return;
    }
    if (movesLeft <= 0 && lettersLeft >= 1 && gameStart) {
      setGameStart(false);
      setWinLose("lose");
      return;
    } else if (movesLeft >= 1 && lettersLeft === 0 && gameStart) {
      setGameStart(false);
      setWinLose("win");
      return;
    }
  });

  return (
    <>
      <Nav setup={setup} setSetup={setSetup} />

      {winLose === "win" || winLose === "lose" ? (
        <Alert winLose={winLose} setSetup={setSetup} setReset={setReset} />
      ) : (
        ""
      )}

      {setup ? (
        <New
          phrase={phrase}
          setPhrase={setPhrase}
          setSetup={setSetup}
          hiddenPhrase={hiddenPhrase}
          setHiddenPhrase={setHiddenPhrase}
          setGameStart={setGameStart}
          setLettersLeft={setLettersLeft}
          setUsed={setUsed}
          setMovesLeft={setMovesLeft}
        />
      ) : (
        ""
      )}
      {gameStart ? (
        <Player
          phrase={phrase}
          hiddenPhrase={hiddenPhrase}
          setHiddenPhrase={setHiddenPhrase}
          lettersLeft={lettersLeft}
          setLettersLeft={setLettersLeft}
          setMovesLeft={setMovesLeft}
          movesLeft={movesLeft}
          used={used}
          setUsed={setUsed}
        />
      ) : (
        ""
      )}

      <Component
        movesLeft={movesLeft}
        hiddenPhrase={hiddenPhrase}
        phrase={phrase}
        used={used}
        {...pageProps}
      />
    </>
  );
};

export default MyApp;
