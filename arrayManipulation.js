//First task

function processArray(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * arr[i]);
        } else {
            result.push(arr[i] * 3);
        }
    }
    
    return result;
}
const processedArray = processArray(inputArray);
console.log(processedArray);

//Second task
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Arrays must have the same length.");
    }

    let formattedStrings = [];

    for (let i = 0; i < strings.length; i++) {
        if (numbers[i] % 2 === 0) {
            formattedStrings.push(strings[i].toUpperCase());
        } else {
            formattedStrings.push(strings[i].toLowerCase());
        }
    }

    return formattedStrings;
}

const strings = ["hello", "world", "JavaScript", "Node.js"];
const numbers = [1, 2, 3, 4];
const formattedStrings = formatArrayStrings(strings, numbers);
