import Phaser from "phaser";
import TitleScreen from "../scenes/TitleScreen";
import Game from '../scenes/Game';
import GameBackground from "../scenes/GameBackground";
import GameOver from "../scenes/GameOver";

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,

    render: {
        antialias: false,
        pixelArt: true,
        roundPixels: true,
        powerPreference: 'high-performance'
    },

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

let game = null;

export function getGame() {
    if (!game) {
        game = new Phaser.Game(config);
    }
    return game;
}