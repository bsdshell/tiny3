    var INIT = 0;
    var state_S = 1;
    var state_t = 2;
    var state_r = 3;
    var state_i = 4;
    var state_n = 5;
    var state_g = 6;
    var state_NONString = 7;

    console.log("cool");
    var str = "abc";
    for(var i=0; i<str.length; i++){
        console.log(str[i]);
    }

    function stateMachina(str){
        var curr_state = -1;
        for(var i=0; i<str.length; i++){
            if(str[i] === ' '){
                curr_state = INIT; 
            } if(curr_state = INIT && str[i] === 'S'){
                curr_state = state_S; 
            } if(str[i] === 't'){
                curr_state = state_t; 
            } if(str[i] === 'r'){
                curr_state = state_r; 
            } if(str[i] === 'i'){
                curr_state = state_i; 
            } if(str[i] === 'n'){
                curr_state = state_n; 
            } if(str[i] === 'g'){
                curr_state = state_g; 
            }else{
                if(curr_state == state_g && str[i] === ' '){
                    console.log('String');
                }

                if(curr_state === state_S && str[i] === 'a'){
                    curr_state = state_NONString;
                } if(curr_state == state_NONString && str[i] === ' '){
                    console.log('Sa');
                }
            }
        }
    }

    stateMachina("String ");
