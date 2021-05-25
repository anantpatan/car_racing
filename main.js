canvas=document.getElementById("mycanvas");
ctx=canvas.getContext('2d');

car1="car1.png";
car1_width=120;
car1_height=70;
car1_X=10;
car1_Y=10;

car2="car2.png";
car2_width=120;
car2_height=70;
car2_X=10;
car2_Y=100;

background_image="car racing bg.jpg";

function add(){
    bg_imgtag=new Image();
    bg_imgtag.onload=upload_bg;
    bg_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=upload_car1;
    car1_imgtag.src=car1;

    car2_imgtag=new Image();
    car2_imgtag.onload=upload_car2;
    car2_imgtag.src=car2;
}

function upload_bg(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width, canvas.height); 
}
function upload_car1(){
    ctx.drawImage(car1_imgtag,car1_X,car1_Y,car1_width, car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imgtag,car2_X,car2_Y,car2_width, car2_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        console.log("up arrow key");
        car1_up();
           
    }
    else if(keypressed=="40"){
        console.log("down arrow key");
        car1_down();
        
    }
    else if(keypressed=="37"){
        console.log("left arrow key");
        car1_left();
         
    }
    else if(keypressed=="39"){
        console.log("right arrow key");
         car1_right();
         
    }

    if(keypressed=="87"){
        console.log("W key");
        car2_up();
           
    }
    else if(keypressed=="83"){
        console.log("S key");
        car2_down();
        
    }
    else if(keypressed=="65"){
        console.log("A key");
        car2_left();
         
    }
    else if(keypressed=="68"){
        console.log("D key");
         car2_right();
         
    }
    if(car1_X>700){
        console.log("Car 1 Won!!");
        document.getElementById("game_status").innerHTML="Car 1 Won!!";
    }
    if(car2_X>700){
        console.log("Car 2 Won!!");
        document.getElementById("game_status").innerHTML="Car 2 Won!!";
    }
}

function car1_up(){
    if(car1_Y>=0){
        car1_Y=car1_Y-10;
        console.log("when up arrow is pressed;X="+car1_X+" y="+car1_Y) ;  
        upload_bg(); 
        upload_car1();
        upload_car2();
    }
}
function car1_down(){
    if(car1_Y<=500){
        car1_Y=car1_Y+10;
        console.log("when down arrow is pressed; X="+car1_Y+" y="+car1_Y);
        ctx.rotate(Math.PI);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}
function car1_left(){
    if(car1_X>=0){
        car1_X=car1_X-10;
        console.log("when left arrow is pressed; X="+car1_X+" y="+car1_Y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}
function car1_right(){
    if(car1_X<=700){
        car1_X=car1_X+10;
        console.log("when right arrow pressed; X="+car1_X+" y="+car1_Y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function car2_up(){
    if(car2_Y>=0){
        car2_Y=car2_Y-10;
        console.log("when up arrow is pressed;X="+car2_X+" y="+car2_Y) ;  
        upload_bg(); 
        upload_car1();
        upload_car2();
    }
}
function car2_down(){
    if(car2_Y<=500){
        car2_Y=car2_Y+10;
        console.log("when down arrow is pressed; X="+car2_Y+" y="+car2_Y);
        ctx.rotate(Math.PI);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}
function car2_left(){
    if(car2_X>=0){
        car2_X=car2_X-10;
        console.log("when left arrow is pressed; X="+car2_X+" y="+car2_Y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}
function car2_right(){
    if(car2_X<=700){
        car2_X=car2_X+10;
        console.log("when right arrow pressed; X="+car2_X+" y="+car2_Y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}