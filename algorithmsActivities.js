// //----------------------- ACTIVITY 1 --------------------------------------------
// //----------------------- BUBBLE SORT NUMBERS -----------------------------------

// let array = [23, 2, 4, 34, 7, 19, 22, 1, 5, 6783, 87, 8934, 7];

// console.log(array);

// let notFinished;

// let bubbleSort = (input) => {
//     do { 
//         notFinished = false;   
//         for (i = 0; i < (input.length+1); i++ ) {
//             if (input[i] > input[i+1]){
//                 let a = input[i]; 
//                 let b = input[i+1];           
//                 input[i] = b;
//                 input[i+1] = a;        
//                 console.log(array);
//                 notFinished = true;    
//             }
//         }
//     } while (notFinished) 
// }


// bubbleSort(array);
// bubbleSort(array);

// //----------------------- BUBBLE SORT LETTERS -----------------------------------

// let arrayL = ["f", "w", "s", "a", "e", "a", "o", "h", "l", "d", "n", "s"];

// let notFinished;

// let bubbleSort = (input) => {
//     do { 
//         notFinished = false;   
//         for (i = 0; i < (input.length+1); i++ ) {
//             if (input[i] > input[i+1]){
//                 let a = input[i]; 
//                 let b = input[i+1];           
//                 input[i] = b;
//                 input[i+1] = a;        
//                 console.log(arrayL);
//                 notFinished = true;    
//             }
//         }
//     } while (notFinished) 
// }


// bubbleSort(arrayL);
// bubbleSort(arrayL);

// //----------------------- BUBBLE SORT WORD -----------------------------------

// let word = "Conglomerate";

// let wordLower = word.toLowerCase();

// let arrayL = wordLower.split("");

// let notFinished;

// let bubbleSort = (input) => {
//     do { 
//         notFinished = false;   
//         for (i = 0; i < (input.length+1); i++ ) {
//             if (input[i] > input[i+1]){
//                 let a = input[i]; 
//                 let b = input[i+1];           
//                 input[i] = b;
//                 input[i+1] = a;        
//                 console.log(arrayL);
//                 notFinished = true;    
//             }
//         }
//     } while (notFinished) 
// }


// bubbleSort(arrayL);
// bubbleSort(arrayL);

// //-------------------------- QUICK SORT NUMBERS ------------------------------

// let arr = [23, 2, 4, 34, 7, 19, 22, 1, 5, 6783, 87, 8934, 7];

// const quickSort = (arr, start, end) =>{
//     if(start < end) {
//         let pivot = partition(arr, start, end);
//         quickSort(arr, start, pivot-1);
//         quickSort(arr, pivot +1, end)
//     }
// }

// const partition = (arr, start, end) => {
//     let pivot = end;
//     let i = start - 1;
//     let j = start;
//     while (j < pivot) {
//         if (arr[j] > arr[pivot]){
//             j++;
//         } else {
//             i++;
//             swap(arr, j, i);
//             j++
//         }
//     }
//     swap(arr, i+1, pivot);
//     return i +1
// }

// const swap = (arr, firstIndex, secondIndex) => {
//     let temp = arr[firstIndex];
//     arr[firstIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// //-------------------------- QUICK SORT LETTERS ------------------------------

// let arr = ["e", "h", "i", "s", "b", "m", "l", "u", "t", "r", "v", "c", "j"];

// const quickSort = (arr, start, end) =>{
//     if(start < end) {
//         let pivot = partition(arr, start, end);
//         quickSort(arr, start, pivot-1);
//         quickSort(arr, pivot +1, end)
//     }
// }

// const partition = (arr, start, end) => {
//     let pivot = end;
//     let i = start - 1;
//     let j = start;
//     while (j < pivot) {
//         if (arr[j] > arr[pivot]){
//             j++;
//         } else {
//             i++;
//             swap(arr, j, i);
//             j++
//         }
//     }
//     swap(arr, i+1, pivot);
//     return i +1
// }

// const swap = (arr, firstIndex, secondIndex) => {
//     let temp = arr[firstIndex];
//     arr[firstIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// //------------------------------ QUICKSORT WORD ------------------------------


// let word = "Conglomerate";

// let wordLower = word.toLowerCase();

// let arr = wordLower.split("");

// const quickSort = (arr, start, end) =>{
//     if(start < end) {
//         let pivot = partition(arr, start, end);
//         quickSort(arr, start, pivot-1);
//         quickSort(arr, pivot +1, end)
//     }
// }

// const partition = (arr, start, end) => {
//     let pivot = end;
//     let i = start - 1;
//     let j = start;
//     while (j < pivot) {
//         if (arr[j] > arr[pivot]){
//             j++;
//         } else {
//             i++;
//             swap(arr, j, i);
//             j++
//         }
//     }
//     swap(arr, i+1, pivot);
//     return i +1
// }

// const swap = (arr, firstIndex, secondIndex) => {
//     let temp = arr[firstIndex];
//     arr[firstIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// //----------------------- ACTIVITY 2 ---------------------------------

// let wordString = "At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. At every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or. Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.";



// let wordCount = (str) => {
//     return str.split(" ").length;
// }

//---------------------------------

// let sentenceCount = (str) => {
//     return str.split(".").length;
// }

// //---------------------------------

// let splitString = [];
// let longestWord = "";
// let withoutFullStops = "";

// let getLongestWord = (str) => {
//     withoutFullStops = str.replace(/\./g,"");
//     splitString = withoutFullStops.split(" ");
//     for (let i = 0; i < splitString.length; i++) {
//         if(splitString[i].length > longestWord.length) {
//             longestWord = splitString[i];
//         }
//     }
//     return longestWord, splitString;
// }

// getLongestWord(wordString);
// console.log(longestWord);


// //----------------------------------

// let wordLengths = [];
// let splitString = [];
// let longestWord = "";
// let withoutFullStops = "";

// const averageLength = (str) => {
//     withoutFullStops = str.replace(/\./g,"");
//     splitString = withoutFullStops.split(" ");
//     for (let i = 0; i < splitString.length; i++) {
//         wordLengths.push(splitString[i].length);
//     }
//     const arrSum = wordLengths.reduce((a, b) => a + b, 0);  
//     averageWordLength = arrSum / wordLengths.length;
// }

// averageLength(wordString);
// console.log(Math.floor(averageWordLength));

// //---------------------------------------------------

// let wordLengths = [];
// let splitString = [];
// let longestWord = "";
// let withoutFullStops = "";
// numberOfThreePlusLetters = 0;

// const howManyThreePlus = (str) => {
//     withoutFullStops = str.replace(/\./g,"");
//     splitString = withoutFullStops.split(" ");
//     console.log(splitString);
//     for (let i = 0; i < splitString.length; i++) {
//         if (splitString[i].length > 3) {
//             numberOfThreePlusLetters++;
//         }
//     }
// }

// howManyThreePlus(wordString);
// console.log(numberOfThreePlusLetters);

// //--------------------- ACTIVITY 3 -------------------------

// let characterString = "Adam Smith";
// let characterArray = [];

// for (let i = 0 ; i < characterString.length ; i++){
//     characterArray[i] = characterString.charAt(i);
// }

// console.log(characterArray);

// let characterCaseChange = () => {
//     for (let i = 0; i < characterArray.length; i++) {
//         if (characterArray[i] === (characterArray[i].toUpperCase())) {
//             characterArray[i] = characterArray[i].toLowerCase();
//         } else {
//             characterArray[i] = characterArray[i].toUpperCase();
//         }
//     }
//     characterArray = characterArray.join("");
// }



// characterCaseChange(characterArray);
// console.log(characterArray);

// //------------------------- ACTIVITY 4 BINARY SEARCH ---------------------------

let array = [2,3,5,7,9,12,14,15,16,43,56,]; 
let mid = 0;
let binarySearch = (array, target) => {
// Next we define the start and end index for first pass.
    let start = 0;
    let end = array.length - 1;
    while(start <= end) {
// Define the mid point in the array for the first pass(mid value will change)
        mid = Math.floor((start + end) / 2);
// Compare mid with target to check if we got lucky and have a match.
        if (target === array[mid]) {
            return console.log("The target has been found at index number " + mid);
        }
// Searching right side of array
        if (target > array[mid]) {
            console.log("Searching the right side of the array");
// Now reassign the start index to be the old mid index +1 to narrow the next search pass.           
            start = mid +1;
        }
// Searching left side of array
        if (target < array[mid]) {
            console.log("Searching the left side of the array");
// Now reassign the end index to be the old mid index -1 to narrow the next search pass.           
            end = mid -1;        
        }
// If target is not found in this pass, keep looping.
        else {
            console.log("Target not found this time, looping again.")
        }
        console.log("Target value not found in array");
    }
console.log("The next largest number after the target value is in index position " + mid);
}

binarySearch(array, 6);














