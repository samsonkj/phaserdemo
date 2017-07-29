var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state0');
        game.input.Keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        game.input.Keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 2);
    },
    update: function(){} 
}

function changeState(i, stateNum){
    console.log(i);
    console.log(stateNum);
    game.state.start('state' + stateNum);
}