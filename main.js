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
        console.log("W arrow key");
        car2_up();
           
    }
    else if(keypressed=="83"){
        console.log("S arrow key");
        car2_down();
        
    }
    else if(keypressed=="65"){
        console.log("A arrow key");
        car2_left();
         
    }
    else if(keypressed=="68"){
        console.log("D arrow key");
         car2_right();
         
    }
}