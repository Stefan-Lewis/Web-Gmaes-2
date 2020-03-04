class menu extends Phaser.Scene{
    constructor(){
        super({key:"menu"})
    }

    update()
    {
        if(startGameBool)
        {
            this.scene.start("sceneOne");
            startGameBool = false;
        }
    }

    create(){

        backgroundImage = this.add.image(400, 300, 'backgroundMenu');

        let startPlatform = this.matter.add.image(75, 500, 'startPlatformImage', null, {label: 'startPlatform'}).setStatic(true);
        startPlatform.setScale(1);

        //Adding Shape Images
        square = this.add.image(300, 300, 'squareImage');

        //Locking the Mouse

        game.canvas.addEventListener('mousedown', function ()
        {
            if (counter !== 1)
            {
                game.input.mouse.requestPointerLock();
            }
        });

        //Moving Chosen Shape to Pointer

        this.input.on('pointermove', function (pointer)
        {
            if (this.input.mouse.locked)
            {
                square.x += pointer.movementX;
                square.y += pointer.movementY;

                // Force the sprite to stay on screen
                square.x = Phaser.Math.Wrap(square.x, 0, game.renderer.width);
                square.y = Phaser.Math.Wrap(square.y, 0, game.renderer.height - 400);
            }
        }, this);

        //Drop Object

        this.input.on('pointerup', function (pointer)
        {
            this.matter.add.sprite(square.x, square.y, 'squareImage');

            square.destroy();
            square = this.add.image(300, 300, 'squareImage');

            game.input.mouse.releasePointerLock();

            counter--;

        }, this);

        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {

            bodyA.gameObject.setTint(0xff0000);
            bodyB.gameObject.setTint(0x00ff00);

            if(bodyA.label === 'startPlatform')
            {
                startGameBool = true;
            }
        });

        //platform movement
        //used a tween as it was best for performance
        //duration is 3 seconds - 3000ms

        this.tweens.add({
            targets: startPlatform,
            x: 700,
            duration: 3000,
            ease: 'Power2',
            yoyo: true,
            repeat: 20
        });
    }
}
