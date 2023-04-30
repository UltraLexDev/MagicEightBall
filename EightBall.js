var userName = 'Alex';

if (userName) {
    console.log(`Hello ${userName}!`);
} else {console.log('Hello!')}

var userQuestion = 'Will it rain today?'; {
    console.log(`So you want to know "${userQuestion}" Let us shake the magic eight ball, ${userName}!`)
}

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = randomNumber;
switch (eightBall) {
    case 0: console.log('It is certain.')
    break;
    case 1: console.log('It is decidedly so.')
    break;
    case 2: console.log('Reply hazy try again.')
    break;
    case 3: console.log('Cannot predict now.')
    break;
    case 4: console.log('Do not count on it.')
    break;
    case 5: console.log('My sources say no.')
    break;
    case 6: console.log('Outlook not so good.')
    break;
    case 7: console.log('Signs point to yes.')
    }
