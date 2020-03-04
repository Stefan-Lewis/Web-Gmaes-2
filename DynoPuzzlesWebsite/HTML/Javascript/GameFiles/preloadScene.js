class preloadScene extends Phaser.Scene {
    constructor(){
        super({key:"preloadScene"})
    }

    //assets loaded before game begins
    preload()
    {
        console.log("Game is Loading");

        //sprites
        this.load.image('startPlatformImage', 'Assets/sprites/startPlatformImage.png');
        this.load.image('squareImage', 'Assets/sprites/squareImage.png');

        //backgrounds
        this.load.image('backgroundMenu', 'Assets/backgrounds/background_pastel_mix.png');
    }

    create()
    {
        this.scene.start("menu");
    }
}