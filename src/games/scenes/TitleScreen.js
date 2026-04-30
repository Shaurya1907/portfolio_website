import Phaser from "phaser";
import WebFontFile from "./WebFontFile"
import Game from '../scenes/Game';
import GameBackground from "../scenes/GameBackground"; 

export default class TitleScreen extends Phaser.Scene {

    constructor() {
        super("TitleScreen");
    }

    preload()
    {
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
    }

    create() {

        const title = this.add.text(
            400,
            250,
            "Old School Pong",
            {
                fontSize: 38,
                fontFamily: '"Press Start 2P"'
            }
        );
        title.setOrigin(0.5, 0.5)

        this.add.text(400, 300, 'Click to Start', {
            fontSize: 25,
            fontFamily: '"Press Start 2P"'
        })
        .setOrigin(0.5)

        this.input.on('pointerdown', () => {

            this.scene.start('game')
            this.scene.launch('game-background')

        });


    }

}