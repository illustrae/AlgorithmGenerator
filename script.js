
let algos=[
    'Beginner: Print 1 - 255 (print all the integers 1-255)',
    'Beginner: Print Odds 1 - 255 (print all odd integers 1-255)',
    'Beginner: Print Ints and Sum 0 - 255 (print integers from 0 - 255), and with each integer print the sum so far)',
    'Beginner: Iterate and Print Array (iterate through a given array, printing each value)',
    'Beginner: Find and Print Max (given an array, find and print its largest element)',
    'Beginner: Get and Print Average (analyze an arrays values and print the average)',
    'Beginner: Array with Odds (create an array with all the odd integers between 1 and 255 (inclusive))',
    'Beginner: Square the values (square eah value in a given array, returning that same array with hanged values)',
    'Beginner: Greater than Y (given an array and a value Y, count and print the number of array values greater than Y)',
    'Beginner: Zero out negative numbers (return the given array, after setting any negative values to zero)',
    'Beginner: Max, Min, Average (given an array, print the max, min and average values for that array)',
    'Beginner: Shift Array Values (given an array, move all values forward(to the left) by one index, dropping the first value and leaving a 0 value at the end of the array)',
    'Beginner: Swap string for Array Negative Values (given an array of numbers, replace any negative values with the string YesSir!',
];



function displayAlgor() {

    let index=Math.floor(Math.random()*algos.length)
// <---this will give a random algorithm. --->
    let div=document.querySelector('#algor');
    let algor=`<div class="top">
    <p>${algos[index]}</p> </div>`;
    div.innerHTML=algor;

}

    let btn=document.querySelector('.btn');
        btn.addEventListener('click', displayAlgor)