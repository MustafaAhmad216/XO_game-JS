let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");
var turn = 'x';
let title = document.getElementById("title");
let squares=[];

function Draw() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    
    
}
function end(num1 , num2 , num3) {
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById("item" + num1).style.background = "black";
    document.getElementById("item" + num2).style.background = "black";
    document.getElementById("item" + num3).style.background = "black";

    setInterval( function(){title.innerHTML += '.'} ,1000);
    setTimeout( function(){location.reload()} ,4000);    
    turn = '0';   
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
    {
        end(1,2,3);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
    {
        end(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != '')
    {
        end(7,8,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '')
    {
        end(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '')
    {
        end(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
    {
        end(3,6,9);
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')
    {
        end(1,5,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '')
    {
        end(3,5,7);
    }
    else if (squares[1]!='' && squares[2]!='' && squares[3]!='' && squares[4]!='' && squares[5]!='' && squares[6]!='' && squares[7]!='' && squares[8]!='' &&squares[9]!='')
    {
        title.innerHTML = "OMG... It's a Draw.";
        title.style.color = 'white';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
    }
}

function game(id)
{
    var element = document.getElementById(id);

    if (turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = "it's o's turn";
        title.style.color = 'rgb(255, 247, 0)';
    }
    else if ( turn === 'o' && element.innerHTML == '' )
    {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = "it's x's turn"
        title.style.color = 'rgb(255, 247, 0)';
    }
    else if((turn === 'x' || turn === 'o') && element.innerHTML != '' ){
        title.innerHTML += `<br><small style="color: red; text-shadow: 0 0 5px black, 0 0 5px black;"> Wrong Square... Try Again </small>`;

    }
    winner();
}