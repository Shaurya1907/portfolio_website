import Phaser from "phaser"

import WebFontFile from "./WebFontFile"
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
        // FPS counter
        this.fpsText = this.add.text(10, 10, '', {
            fontSize: '16px',
            color: '#00ff00'
        }).setDepth(1000)

        // Background scene
        this.scene.run('game-background')

        this.physics.world.setBounds(-100, 0, 1000, 500)

        // Ball
        this.ball = this.add.circle(400, 250, 10, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCircle(10)
        this.ball.body.setBounce(1, 1)
        this.ball.body.setCollideWorldBounds(true, 1, 1)

        // Paddles
        this.paddleLeft = this.add.rectangle(30, 250, 30, 100, 0xffffff)
        this.physics.add.existing(this.paddleLeft, true)

        this.paddleRight = this.add.rectangle(770, 250, 30, 100, 0xffffff)
        this.physics.add.existing(this.paddleRight, true)

        this.physics.add.collider(this.paddleLeft, this.ball)
        this.physics.add.collider(this.paddleRight, this.ball)

        // Score UI
        const scoreStyle = {
            fontSize: 48,
            fontFamily: '"Press Start 2P"'
        }

        this.leftScoreLabel = this.add.text(250, 75, '0', scoreStyle)
            .setOrigin(0.5)

        this.rightScoreLabel = this.add.text(550, 75, '0', scoreStyle)
            .setOrigin(0.5)

        // Pointer movement (mouse + touch)
        this.input.on('pointermove', (pointer) => {

            if (this.gameState !== GameState.Running) return

            if (this.input.mouse.locked) {
                // Desktop (relative movement)
                this.paddleLeft.y += pointer.movementY
            } else {
                // Mobile + normal mouse (absolute)
                this.paddleLeft.y = Phaser.Math.Linear(
                    this.paddleLeft.y,
                    pointer.y,
                    0.25
                )
            }

            this.paddleLeft.y = Phaser.Math.Clamp(this.paddleLeft.y, 50, 450)
            this.paddleLeft.body.updateFromGameObject()
        })

        // Pointer lock (desktop)
        this.input.on('pointerdown', () => {
            if (this.gameState === GameState.Running) {
                this.input.mouse.requestPointerLock()
            }
        })

        // Start ball
        this.time.delayedCall(250, () => {
            this.resetBall()
        })
    }

    update(time, delta)
    {
        if (this.paused || this.gameState !== GameState.Running)
        {
            return
        }

        const dt = delta / 1000

        this.fpsText.setText(
            'FPS: ' + Math.floor(this.game.loop.actualFps)
        )

        this.updateAI(dt)
        this.checkScore()
    }

    updateAI(dt)
    {
        const diff = this.ball.y - this.paddleRight.y
        const aiSpeed = 5

        this.paddleRightVelocity.y = Phaser.Math.Clamp(diff * aiSpeed, -400, 400)

        this.paddleRight.y += this.paddleRightVelocity.y * dt
        this.paddleRight.body.updateFromGameObject()

        this.paddleRight.y = Phaser.Math.Clamp(this.paddleRight.y, 50, 450)
    }

    checkScore()
    {
        const x = this.ball.x
        const leftBounds = -30
        const rightBounds = 830

        if (x >= leftBounds && x <= rightBounds) return

        if (x < leftBounds) {
            this.incrementRightScore()
        } else if (x > rightBounds) {
            this.incrementLeftScore()
        }

        const maxScore = 5

        if (this.leftScore >= maxScore) {
            this.gameState = GameState.PlayerWon
        }
        else if (this.rightScore >= maxScore) {
            this.gameState = GameState.AIWon
        }

        if (this.gameState === GameState.Running) {
            this.resetBall()
        }
        else
        {
            this.ball.destroy()

            this.scene.stop('game-background')

            // Notify React
            this.game.events.emit('game-over')

            // Release pointer lock
            this.input.mouse.releasePointerLock()

            this.scene.start('game-over', {
                leftScore: this.leftScore,
                rightScore: this.rightScore
            })
        }
    }

    incrementLeftScore()
    {
        this.leftScore++
        this.leftScoreLabel.text = this.leftScore
    }

    incrementRightScore()
    {
        this.rightScore++
        this.rightScoreLabel.text = this.rightScore
    }

    resetBall()
    {
        this.ball.setPosition(400, 250)

        const angle = Phaser.Math.Between(0, 360)
        const vec = this.physics.velocityFromAngle(angle, 200)

        this.ball.body.setVelocity(vec.x, vec.y)
    }
}

export default Game