import Phaser from 'phaser'

export default class GameOver extends Phaser.Scene
{  
    constructor() {
        super('game-over')
    }

    create(data)
    {
        let titleText = 'Game Over'

        if(data.leftScore > data.rightScore)
        {
            titleText = 'You Win!'
        }
        else
        {
            titleText = 'You Lose!'
        }

        this.add.text(400, 200, titleText, {
            fontFamily: '"Press Start 2P"',
            fontSize: 38
        }).setOrigin(0.5)

        this.add.text(400, 300, 'Click to Continue', {
            fontFamily: '"Press Start 2P"',
            fontSize: 30
        }).setOrigin(0.5)

        this.input.once('pointerdown', () => {
            this.scene.start('TitleScreen')
        })
    }
}