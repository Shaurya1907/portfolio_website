import { useEffect } from "react";

const Game = ({ setIsGameRunning }) => {

  useEffect(() => {
    let gameInstance;

    import("../games/pong/PongGame").then(module => {
      gameInstance = module.getGame();

      gameInstance.events.on('game-start', () => {
        setIsGameRunning(true);
      });

      gameInstance.events.on('game-over', () => {
        setIsGameRunning(false);
      });
    });

  }, []);

  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">Pong Game</h3>

        <div className="w-full flex justify-center">
          <div id="phaser-container" className="w-full max-w-[800px] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Game;