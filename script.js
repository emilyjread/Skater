//SELECT BACKGROUND
var backgroundArr=["url('img/starry_sky.jpeg')", "url('img/ocean3.jpg')", "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet, red)"];
var groundArr = ["url('img/moon_long.png')", "url('img/floor_long.png')", "url('img/gold_long.png')"];
var obArr = ["url('img/rover.png')", "url('img/jelly.png')", "url('img/unicorn.png')"]
var skyArr = [];

var doc= document.querySelector("#container")
var container = $("#container").html()

function updateBackground(input){
    $('section').css('background-image', backgroundArr[input]);
    $('#ground').css('background-image', groundArr[input]);
    $('.obstacle').css('background-image', obArr[input]);

    $('.obstacle').css('left', 900);

    var checkContainer = $("#container").html()
    if (checkContainer="<h1 id='gameover'>Game Over</h1>"){
        $("#container").html(container)
        $('section').css('background-image', backgroundArr[input]);
        $('#ground').css('background-image', groundArr[input]);
        $('.obstacle').css('background-image', obArr[input]);
        $("#score-num").html("0")
        score=0
    }
}

// MOVE BACKGROUND

$(function(){
    var move =0;
    setInterval(function(){
        move-=.2;
        $('section').css('background-position', move+'px');
    })
})

//MOVE GROUND

$(function(){
    var move =0;
    setInterval(function(){
        move-=1;
        $('#ground').css('background-position', move+'px');
    })
})

//CHECK FOR COLLISION
var score=0

function removeCoin(){
    var left =1000;
    $('.coin').css('left', (left-1.5) +'px');

}


function collisionCheck(){
    var charLeft = parseInt($('#character').css('left'))+100;
    var charTop = parseInt($('#character').css('top'));

    var obstacleLeft = parseInt($('.obstacle').css('left'));
    var obstacleTop = parseInt($('.obstacle').css('top'));

    var coinLeft = parseInt($('.coin').css('left'));
    var coinTop = parseInt($('.coin').css('top'));



    if (charLeft==obstacleLeft+50 && charTop>=obstacleTop){
        $("#container").html("<h1 id='gameover'>Game Over</h1>")
        score=0
    }
    if (charLeft==coinLeft+50 && charTop+150>=coinTop){
        score+=1
        console.log("collided")
        $("#score-num").text(score)
        // $('.coin').css("background-position", "1000px");
        removeCoin()
    }
}
collisionCheck()

//MOVE OBSTACLE CALL COLLISION FUNCTION

$(function(){
    var left =1000;
    setInterval(function(){
        left-=1;
        $('.obstacle').css('left', left+'px');
        // $('.coin').css('left', (left*1.5) +'px');
        if(left<=-100){
            left+=Math.floor(Math.random()*450+550)
        }
        collisionCheck()
    })
    
})
//MOVE COIN, CALL COLLISION FUNCTION

$(function(){
    var left =600;
    setInterval(function(){
        left-=1;
        // $('.obstacle').css('left', left+'px');
        $('.coin').css('left', (left*1.75) +'px');
        if(left<=-100){
            left=600
        }
        collisionCheck()
    })
    
})

//GUY JUMPING
document.onkeydown = function(e){
    if (e.keyCode == 38) {
        var url= "url('img/guy_up.png')"
        var height = 150
        
        function jump(){
        $("#character").css('backgroundImage', url);
        $("#character").css('top', height+"px");      
        }
        
        jump()

        url= "url('img/guy_down.png')"
        height = 350
        setTimeout(function(){ 
            jump() }, 1000);
    }
    
}






//to do

//add sky variables
//obstacle reset
//make random obstacles
//make coins disappear
//add timer at the top
//add game over stats
//refactor and clean up code
