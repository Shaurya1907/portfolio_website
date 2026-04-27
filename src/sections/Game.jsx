import { useEffect } from "react";

const Game = () => {

  useEffect(() => {
    import("../games/pong/PongGame");
  }, []);

  return (
    <section className="w-full py-20 bg-neutral-900">

      <h2 className="text-white text-3xl mb-6 text-center">
        🏓 Pong Game
      </h2>

      {/* Center container */}
      <div className="flex justify-center items-center">

        <div
          id="phaser-container"
          className="flex justify-center items-center"
        />

      </div>

    </section>
  );
};

export default Game;