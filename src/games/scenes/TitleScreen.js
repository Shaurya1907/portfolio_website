import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {

    constructor() {
        super("TitleScreen");
    }

    preload() {

        // no assets yet

    }

    create() {

        // Hello World text

        const text = this.add.text(
            400,
            250,
            "Hello, World!",
        );
        text.setOrigin(0.5, 0.5)


    }

}