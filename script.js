// 1.
const numbers = [1, 2, 5, 9, 4, 13, 4, 10];
console.log("Елементи більше 3 та менше 10:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3 && numbers[i] < 10) {
        console.log(numbers[i]);
    }
}

// 2.
console.log("Наявність елемента зі значенням 4");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 4) {
        console.log("Наявний!");
        break;
    }
}

// 3.
const mass = [42, 2, 33, 11, 12, 10, 0];
const sum = mass.reduce((acc, curr) => acc + curr, 0);
const average = sum / mass.length;
console.log("Середнє арифметичне масиву", average);

// 4.
const animals = ["parrot", "bull", "bear", "monkey"];
const totalCharacters = animals.reduce((acc, curr) => acc + curr.length, 0);
console.log("Кількість символів", totalCharacters);

// 5.
const mixedArray = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
const stringsOnly = mixedArray.filter(item => typeof item === 'string');
console.log("Масив лише з стрічками", stringsOnly);