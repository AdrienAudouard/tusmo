import './HomePage.scss';
import Card from '../../components/card/Card';
import GameBoard from '../../components/game-board/GameBoard';
import GameProvider, { GameContext } from '../../context/game/game.context';
import React from 'react'

function HomePage() {
  return (
    <div className="home-page">
      <GameProvider>
        <GameContext.Consumer>
          {
            ({ result, score }) => {
              if (result.isWon) {
                return (
                  <Card
                    className="home-page__success_card"
                    success
                  >
                    Félicitation ! Vous avez gagné avec un score de
                    {' '}
                    <b>{score}</b>
                  </Card>
                );
              }

              return <div />;
            }
          }
        </GameContext.Consumer>
        <GameContext.Consumer>
          { ({
            word, lines, keyboardLettersState,
          }) => (
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
