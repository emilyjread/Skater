//SELECT BACKGROUND
var backgroundArr=["url('img/starry_sky.jpeg')", "url('img/ocean3.jpg')", "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet, red)"];
var groundArr = ["url('img/moon_long.png')", "url('img/floor_long.png')", "url('img/gold_long.png')"];
var obArr = ["url('img/rover.png')", "url('img/jelly.png')", "url('img/unicorn.png')"]
var skyArr = [];

var doc= document.querySelector("#container")
var container = $("#container").html()
console.log(container)

function updateBackground(input){
    $('section').css('background-image', backgroundArr[input]);
    $('#ground').css('background-image', groundArr[input]);
    $('.obstacle').css('background-image', obArr[input]);
    var checkContainer = $("#container").html()
    if (checkContainer="<h1 id='gameover'>Game Over</h1>"){
        $("#container").html(container)
        $('section').css('background-image', backgroundArr[input]);
        $('#ground').css('background-image', groundArr[input]);
        $('.obstacle').css('background-image', obArr[input]);
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

function collisionCheck(){
    var charLeft = parseInt($('#character').css('left'))+100;
    var obstacleLeft = parseInt($('.obstacle').css('left'));
    var charTop = parseInt($('#character').css('top'));
    var obstacleTop = parseInt($('.obstacle').css('top'));


    if (charLeft==obstacleLeft+50 && charTop>=obstacleTop){
        $("#container").html("<h1 id='gameover'>Game Over</h1>")
    }
}
collisionCheck()

//MOVE OBSTACLE, CHECK FOR COLLISION

$(function(){
    var left =1000;
    setInterval(function(){
        left-=1;
        $('.obstacle').css('left', left+'px');
        if(left<=-100){
            left=950
            
        }
        collisionCheck()
    })
    
})

//CREATE OBSTACLE
// var obstacleArr=[]
// var obstacle= "<div class='obstacle'></div>"
// function createObstacle(){
//     var obstacle= "<div class='obstacle' style='left: 900px;'></div>"
//     document.querySelector("#obstacles").innerHTML+=obstacle
// }
// setInterval(createObstacle(), 800);
// $(function(){
//     var left =0;
//     setInterval(function(){
//         left-=.05;
//         $('#ground').css('background-position', left+'px');
//     })
// })


// function createObstacle(){
//     var obstacle= "<div class='obstacle'></div>"
//     document.querySelector("#ground").innerHTML+=obstacle
// }
// setInterval(createObstacle(), 2000)

// $(function(){
//     var obstacle= "<div class='obstacle'></div>"
//     setInterval(function(){
//         $('#obstacles').append(obstacle);
//     })
// })

//GUY JUMPING
document.onkeydown = function(e){
    if (e.keyCode == 38) {
        console.log("this is working")
        var url= "url('img/guy_up.png')"
        var height = 200
        
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
//fix images
//make random obstacles
//make buttons reset game
//make points
//keep score
