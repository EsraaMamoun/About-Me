`use strict`
var correct=0;
var name = prompt("Whats your name?");
alert(`Welcome ${name}, I wanna play with you a guess game.`);

function question1()
{
    var Q1 = prompt('Do you think am I love coffe?');

switch (Q1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("I don't think so");
        console.log('Do you think am I love coffe?', Q1);

        break;
    case 'no':
    case 'n':
        alert('Yes, thats right, but I am forced to drink it');
        correct=correct+1;
        console.log('Do you think am I love coffe?', Q1);
        break;
    default:
        alert("You didn't even try");
        //    console.log('Do you think am I love coffe?', Q1);
        break;
}
}

question1();

function question2 ()
{
    var Q2 = prompt('Do you think I am a good in English language?');
switch (Q2.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert("no, I'm so bad in English");
        console.log('do you think I am a good in English language', Q2);

        break;

    case 'No':
    case 'N':
        alert("Yes unfortunately, pray for me to become good in this");
        console.log('do you think I am a good in English language', Q2);
        correct=correct+1;
        break;

    default:
        alert("Why you didn't try to guess!");
        //    console.log('do you think I am a good in English language', Q2);

        break;
}
}
question2();

function question3()
{
    var Q3 = prompt('Do you think can I play football?');
switch (Q3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Yes, I am skilled in playing football");
        correct=correct+1;
        console.log('Do you think can I play football?', Q3);
        break;
    case 'no':
    case 'n':
        alert("I expected you would answer no, but I am skilled at football");
        console.log('Do you think can I play football?', Q3);

        break;
    default:
        alert("Can you please force your self a little to play with me");
        //   console.log('Do you think can I play football?', Q3);

        break;
}}

question3();

function question4()
{
var Q4 = prompt('Do you think am I watch Anime?');

switch (Q4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Yes, I watched a hundreds");
        correct=correct+1;
        console.log('Do you think am I watch Anime?', Q4);
        break;
    case 'no':
    case 'n':
        alert("ooh nooo I spent alot of my time to watch Anime");
        console.log('Do you think am I watch Anime?', Q4);

        break;

    default:
        alert("try a guess please");
        //   console.log('Do you think am I watch Anime?', Q4);
        break;
}}

question4();

function question5()
{
var Q5 = prompt('Do you think am I own a cat?');

switch (Q5.toUpperCase()) {
    case 'Yes':
    case 'Y':
        alert('Yesss, his name is White(but in Arabic)');
        correct=correct+1;
        console.log('Do you think am I own a cat?', Q5);
        break;
    case 'No':
    case 'N':
        alert("Nop, I have, but thanks to try");
        console.log('Do you think am I own a cat?', Q5);
        break;
    default:
        alert("Try again please, this is a yes/no qustion");
        //      console.log('Do you think am I own a cat?', Q5);
        break;
}
}
question5();

function question6()
{
for (var i=1 ; i<=4 ; i++){
    var guessNum = prompt('guess a number from 1 to 100');
    if (guessNum > 100){
        console.log("Error, Can not be bigger than 100");
        alert('Error, Can not be bigger than 100');
    }
    else if (guessNum < 0){
        alert('Error, Can not be smaller than 0');
        console.log("Error, Can not be smaller than 0");
    }
    
    else if (guessNum < 70){
        alert('too low');
        console.log("too low");
    }
    else if (guessNum > 70){ 
        alert('too high');
        console.log("too high");
    }
    else if (guessNum == 70){
        alert("You are correct.");
        correct=correct+1;
        console.log("You are correct.");
        alert("It took you " + i +" tries");
        console.log("It took you " , i ," tries");
        break;
    }
    else {
         alert('It is a guess number game!');
    }
         
    }  
    alert('The right answer is: 70');
}

question6();
     
function question7(){
    var favColor =['blue','black','yellow','orange'];
    var answer = prompt('Can you guess whats my favourte color');
    for (var j=1 ; j<6 ; j++){
       var atempts=6-j;
        if(favColor[0] == answer)
        {
            alert('Yes, it is a one of my favourte colore');
            correct=correct+1;
            break;
        }else if(favColor[1] == answer){
            alert('Yes, it is a one of my favourte colore');
            correct=correct+1;
            break;
         }else if(favColor[2] == answer){
            alert('Yes, it is a one of my favourte colore');
            correct=correct+1;
            break;
         }else if(favColor[3] == answer){
            alert('Yes, it is a one of my favourte colore');
            correct=correct+1;
            break;
        }
        else{
            answer = prompt(`Try again, you lost ${j} attempts, you have now only ${atempts} attempts`);
        }
    }
alert(`My favourite color list is: ${favColor[0]}, ${favColor[1]}, ${favColor[2]}, ${favColor[3]}.`);
}
question7();
alert(`You have got ${correct} out of 7 score`);
alert(`Thank you very much ${name}, for spending some of your valuable time on my site.`);