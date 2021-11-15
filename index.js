// Algorithm
// 1. Declare a named findLongestWord() that takes in a parameter.
// 2. Declare a variable named longest to hold the current longest string our program has seen.
// 3. Declarea variable named length intialize to 0 to hold the length of our longest sring so far.
// 3. Create a for loop to iterate through the string.
// 4. Check if the string is the longest word in array.
// 5. Check if the string is the first occuring longest word in array.
// 6. Return string.


function findLongestWord(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}
console.log(findLongestWord(["Batman", "Superman", "Wonder Woman", "The Flash", "Green Lantern"])) // output: Green Lantern