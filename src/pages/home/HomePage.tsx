import GameBoard from '../../components/game-board/GameBoard';
import GameProvider, { GameContext } from '../../context/game.context';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <GameProvider>
        <GameContext.Consumer>
          { ({ word, lines, keyboardLettersState }) => (
            <GameBoard
              wordSize={word?.length ?? 0}
              lines={lines}
              keyboardLettersState={keyboardLettersState}
            />
          ) }
        </GameContext.Consumer>
      </GameProvider>
    </div>

  );
}

export default HomePage;
