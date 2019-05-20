$(document).ready(generateRandomNumber);//initialize
var the_number;

function generateRandomNumber(){
    the_number = Math.floor(Math.random()*10);
    console.log('random number: ' + the_number);
};

function handlingEvents(){
    var input_Number = $('#guess_input').val(); //""
    var x = parseInt(input_Number);
    
    console.log('inputNumber: ' + input_Number);
    console.log('x: ' + x);
  
    if(x > the_number) {
        console.log("too high");
                var show_text = $('.bottom').text('Too high');

    } else if( x < the_number) {

        console.log('Too low');
         var show_text = $('.bottom').text('Too low');
    } else {
        var show_text = $('.bottom').text('You Guessed it right!');
        console.log('You Guessed it right!');
    };

    
}