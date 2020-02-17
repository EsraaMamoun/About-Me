`use strict`

var name = prompt("Whats your name?");
alert(`Welcome ${name}, I wanna play with you a guess game.`);

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
        console.log('Do you think am I love coffe?', Q1);
        break;
    default:
        alert("You didn't even try");
        //    console.log('Do you think am I love coffe?', Q1);
        break;
}
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
        break;

    default:
        alert("Why you didn't try to guess!");
        //    console.log('do you think I am a good in English language', Q2);

        break;
}
var Q3 = prompt('Do you think can I play football?');
switch (Q3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Yes, I am skilled in playing football");
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
}
var Q4 = prompt('Do you think am I watch Anime?');

switch (Q4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Yes, I watched a hundreds");
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
}
var Q5 = prompt('Do you think am I own a cat?');

switch (Q5.toUpperCase()) {
    case 'Yes':
    case 'Y':
        alert('Yesss, his name is White(but in Arabic)');
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

alert(`Thank you very much ${name}, for spending some of your valuable time on my site.`);