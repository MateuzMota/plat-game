// Todos os direitos reservados por Mateus da Mota.
  
function createGame() {
    const state = {
        world: {
            floor: 50,
        },
        players: {},
        keypress: {
            a: false,
            w: false,
            d: false,
            s: false,
        }
    }

    function setState(newState) {
        Object.assign(state, newState);
    }

    function attWorld() {
        const gravity = 2;
        //const friction = 1.5;

        attGravity();
        //attFriction();

        function attGravity() {
            for(let i in state.players) {
                const player = state.players[i];

                player.velocity.y += gravity;

                if((player.y + player.velocity.y) > 485){
                    player.y = 485;
                    player.velocity.y = 0;
                } else { 
                    player.y += player.velocity.y;
                }
            }
        }

        // function attFriction() {
        //     for(let i in state.players) {
        //         const player = state.players[i];

        //         if(player.velocity.x > 0) {
        //             player.velocity.x -= friction;
        //         }else if(player.velocity.x < 0) {
        //             player.velocity.x += friction;
        //         }

        //         player.x += player.velocity.x;
        //     }
        // }
    }

    //function attPlayer(player) {
        //setPlayerDirection();
        //setPlayerState();
        //movePlayer();
        //playerJump();

        // function setPlayerDirection() {
        //     if(player.velocity.x < 0) { player.direction = 0;}
        //     else if(player.velocity.x > 0) { player.direction = 1;}
        // }

        // function setPlayerState() {
        //     if(player.velocity.y < 0) { player.state = 2;}
        //     else if(player.velocity.y > 0) { player.state = 3;}
        //     else if(player.velocity.x != 0  &&  player.velocity.y == 0) { player.state = 1;}
        //     else if(player.velocity.x == 0  &&  player.velocity.y == 0) { player.state = 0;}
        // }

    //     function playerJump() {
    //         if(state.keypress.w  &&  player.velocity.y == 0) {
    //             player.velocity.y = -30;
    //         }
    //     }

    //     function movePlayer() {            
    //         if(state.keypress.a) {player.velocity.x = -12;}
    //         else if(state.keypress.d) {player.velocity.x = 12;}
    //     }
    // }

    // function changeKeypress(key, press) {
    //     if(state.keypress[key] !== undefined) state.keypress[key] = press;
    // }

    function run() {
        //attPlayer(state.players['player']);
        attWorld();
    }

    return {
        state,
        //changeKeypress,
        run,
        setState
    }
}