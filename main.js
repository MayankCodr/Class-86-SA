var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        birthday_image_object = Img;
        birthday_image_object.scaleToWidth(700);
        birthday_image_object.scaleToHeight(510);
        birthday_image_object.set({
            top:0,
            left:0
        });
        canvas.add(birthday_image_object);
    });
	
}

function playsound(){
	x.play();
}
