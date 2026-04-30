import Phaser from "phaser";
import TitleScreen from "../scenes/TitleScreen";
import Game from '../scenes/Game';
import GameBackground from "../scenes/GameBackground";
import GameOver from "../scenes/GameOver";

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,

    parent: "phaser-container",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    backgroundColor: "#000000",

    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 0},
            fps: 60, 
            debug: false
        }
    },

    scene: [TitleScreen, Game, GameBackground, GameOver],

};

const game = new Phaser.Game(config);


export default game;