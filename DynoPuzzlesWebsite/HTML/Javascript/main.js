let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
        physics: {
            default: 'matter',
        },
    scene: [preloadScene, menu, sceneOne]
};

//start game selection set up
//takes the players to the first level
let startGameBool = false;
let startPlatform;

//level choice scene selection set up
//code here

//sprites
let square;

//variables
let counter;

//backgrounds
let backgroundImage;

//game config variable
let game = new Phaser.Game(config);

function create()
{
    this.scene.start("preloadScene");
}
