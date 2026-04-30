import { useEffect } from "react";

const Game = () => {

  useEffect(() => {
    import("../games/pong/PongGame");
  }, []);

  return (
    <section className="c-space my-20">
        <div className="w-full text-white-600">
            <h3 className="head-text">Pong Game</h3>
            {/* <h2 className="text-white text-3xl mb-6 text-center">
                🏓 Pong Game
            </h2> */}

            {/* Phaser wrapper */}
            <div className="w-full flex justify-center">

            <div
                id="phaser-container"
                className="w-full max-w-[800px] mx-auto"
            />

            </div>
        </div>
    </section>
  );
};

export default Game;