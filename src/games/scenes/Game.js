import Phaser from "phaser"

import WebFontFile from "./WebFontFile"
import GameOver from "./GameOver"
import GameBackground from "./GameBackground"

const GameState = {
    Running: 'running',
    PlayerWon: 'player-won',
    AIWon: 'ai-won'
}

class Game extends Phaser.Scene
{

    constructor()
    {
        super('game')
    }


    init()
    {
        this.gameState = GameState.Running

        this.paddleRightVelocity = new Phaser.Math.Vector2(0, 0)

        this.leftScore = 0
        this.rightScore = 0

        this.paused = false
    }
    preload()
    {
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
    }
    create()
    {

        this.fpsText = this.add.text(10, 10, '', {
            fontSize: '16px',
            color: '#00ff00'
        }).setDepth(1000)

       this.scene.run('game-background')

        this.physics.world.setBounds(-100, 0, 1000, 500)

        this.ball = this.add.circle(400, 250, 10, 0xffffff, 1)
        this.physics.add.existing(this.ball)
        this.ball.body.setCircle(10)
        this.ball.body.setBounce(1, 1)

        this.ball.body.setCollideWorldBounds(true, 1, 1)

        //this.ball.body.setVelocity(Phaser.Math.Between(-600, 600), Phaser.Math.Between(-600, 600))

        //this.ball.body.setMaxVelocity(600, 600);

        this.paddleLeft = this.add.rectangle(30, 250, 30, 100, 0xffffff, 1)
        this.physics.add.existing(this.paddleLeft, true)

        this.paddleRight = this.add.rectangle(770, 250, 30, 100, 0xffffff, 1)
        this.physics.add.existing(this.paddleRight, true)
        
        this.physics.add.collider(this.paddleLeft, this.ball)
        this.physics.add.collider(this.paddleRight, this.ball)

        const scoreStyle = {
            fontSize: 48,
            fontFamily: '"Press Start 2P"'
        }
        this.leftScoreLabel = this.add.text(250, 75, '0', scoreStyle)
        .setOrigin(0.5, 0.5)

        this.rightScoreLabel = this.add.text(550, 75, '0', scoreStyle)
        .setOrigin(0.5, 0.5)

        this.cursors = this.input.keyboard.createCursorKeys()

        this.time.delayedCall(250, () => {
            this.resetBall()
        } )
    }

    update(time, delta)
    {

        if(this.paused || this.gameState !== GameState.Running)
        {
            return
        }

        const dt = delta / 1000   // convert ms → seconds

        this.fpsText.setText(
            'FPS: ' + Math.floor(this.game.loop.actualFps)
        )

        this.handlePlayerInput(dt)

        this.updateAI(dt)

        this.checkScore()
    }

    handlePlayerInput(dt)
    {
        const body = this.paddleLeft.body

        const paddleSpeed = 400 // pixels per second

        if(this.cursors.up.isDown)
        {
            this.paddleLeft.y -= paddleSpeed * dt
            body.updateFromGameObject()

        }
        else if(this.cursors.down.isDown)
        {
            this.paddleLeft.y += paddleSpeed * dt
            body.updateFromGameObject()
        }

        // Keep inside screen
        this.paddleLeft.y = Phaser.Math.Clamp(
            this.paddleLeft.y,
            50,
            450
        )
    }

    updateAI(dt)
    {
        const diff = this.ball.y - this.paddleRight.y

        const aiSpeed = 5   // sensitivity

        this.paddleRightVelocity.y = diff * aiSpeed

        this.paddleRightVelocity.y = Phaser.Math.Clamp(
            this.paddleRightVelocity.y,
            -400,
            400
        )

        this.paddleRight.y += this.paddleRightVelocity.y * dt

        this.paddleRight.body.updateFromGameObject()

        // Keep inside screen
        this.paddleRight.y = Phaser.Math.Clamp(
            this.paddleRight.y,
            50,
            450
        )
    }

    checkScore()
    {

        const x = this.ball.x
        const leftBounds = -30
        const rightBounds = 830
        if(x >= leftBounds && x <= rightBounds)
        {
            return
        }

        if(this.ball.x < -30)
        {
            this.incrementRightScore() 
        }
        else if(this.ball.x > 830)
        {
            this.incrementLeftScore()
        }

        const maxScore = 1
        if(this.leftScore >= maxScore)
        {
            // player won
            this.gameState = GameState.PlayerWon
        }
        else if(this.rightScore >= maxScore)
        {
            // AI won
            this.gameState = GameState.AIWon
        }

        if(this.gameState === GameState.Running)
        {
            this.resetBall()
        }
        else
        {
            this.ball.active = false
            this.ball.destroy()

            this.scene.stop('game-background')

            this.scene.start('game-over', {
                leftScore: this.leftScore,
                rightScore: this.rightScore
            })
        }
    }

    incrementLeftScore()
    {
        this.leftScore += 1
        this.leftScoreLabel.text = this.leftScore
    }

    incrementRightScore()
    {
        this.rightScore += 1
        this.rightScoreLabel.text = this.rightScore
    }

    resetBall()
    {
        this.ball.setPosition(400, 250)

        // Better motion
        const angle = Phaser.Math.Between(0, 360)
        const vec = this.physics.velocityFromAngle(angle, 200)

        this.ball.body.setVelocity(vec.x, vec.y)
    }
}

export default Game