import Phaser from 'phaser'

export default class GameBackground extends Phaser.Scene
{
    constructor()
    {
        super('game-background')
    }

    preload()
    {

    }

    create()
    {
        this.add.line(400, 250, 0, 0, 0, 500, 0xffffff, 1).setLineWidth(2.5, 5)

        this.add.circle(400, 250, 50).setStrokeStyle(5, 0xffffff, 1)

        this.add.rectangle(400, 250, 800, 500)
            .setStrokeStyle(5, 0xffffff)
    }
}