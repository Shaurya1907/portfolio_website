import Phaser from 'phaser'
import TitleScreen from './TitleScreen'

export default class GameOver extends Phaser.Scene
{  
    constructor() {
        super('game-over')
    }
    
    /**
    * @param {{leftScore: number, rightScore: number}}
    */
    create(data)
    {
        let titleText = 'Game Over'

        if(data.leftScore > data.rightScore)
        {
            // player won
            titleText = 'You Win!'
        }

        this.add.text(400, 200, titleText, {
            fontFamily: '"Press Start 2P"',
            fontSize: 38
        })
        .setOrigin(0.5)

        this.add.text(400, 300, 'Click to Continue', {
            fontFamily: '"Press Start 2P"',
            fontSize: 30
        }).setOrigin(0.5)

        this.input.once('pointerdown', () => {
            this.scene.start('TitleScreen')
        })
    }
}