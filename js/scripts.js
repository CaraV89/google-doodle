// YOUR SCRIPTS GO HERE

// Random Number Generator
var limit = 3;
var randNum = Math.floor(Math.random() * limit);
console.log(randNum);

// Get Random Body Class
// Change Background Color
$('body').addClass('bg' + randNum );
