/* function declarations
function greet(){
    console.log('Hi there!')
}

// function expressions
const speak = function(){
    console.log('Good day!')

};
greet();
speak();
*/

/* const speak = function(name = 'luigi', age = 20){
    console.log(`Goodday ${name}, you're ${age} old`);
};

speak('John', 30);
*/
/*const calcArea = function(radius){
    return 3.14 * radius ** 2;
};

const calcVol = function(radius, height){
    return calcArea(radius) * height;

}

const area = calcArea(5);
console.log(area);
const vol = calcVol(5, 10);
console.log(vol)
*/
// arrow functions
const calcArea = radius => 3.14 * radius ** 2;


area = calcArea(8);
console.log(area);

const greet = name => `Hi ${name}, good morning!`;
greeter  = greet('Brian');
console.log(greeter);