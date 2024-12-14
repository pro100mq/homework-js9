function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
}
logItems(['Mango', 'Poly', 'Ajax']);

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    const totalPrice = words.length * pricePerWord;
    return totalPrice;
}
console.log(calculateEngravingPrice("Total Price" , 10));
console.log(calculateEngravingPrice("Programming code" , 15));

function findLongestWord(string){
    const word = string.split(" ");
    let longestWord = "";

    for (let i = 0; i < word.length; i++){
        if (word[i].length > longestWord.length){
            longestWord = word[i]
        }
    }
    return longestWord;
}
console.log(findLongestWord('Hello, my name is Kirill, i love programming'))

function formatString(string){
    if (string.length <= 40) {
        return string;
    }
    return string.slice(0, 40) + "..."
}
console.log(formatString("Успіх не остаточний; невдача не фатальна: має значення мужність продовжувати"))

function checkForSpam (message){
    const lowerCase = message.toLowerCase();
    return lowerCase.includes("spam") || lowerCase.includes("sale");
}
console.log(checkForSpam("This message not a spam"))
console.log(checkForSpam("i love my family"))


const numbers = [];
let total = 0;

while (true){
    const input = prompt("Введіть число");

    if (input === null) {
    break;
    }

    const number = Number(input);
    if (Number.isNaN(number)) {
        alert("Було введено не число, спробуйте ще раз.");
        continue;
    }

    numbers.push(number);
    console.log(`Число ${number} додано до масиву.`);
 }

if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
  } else {
    console.log('Масив порожній, немає чисел для підрахунку.');
}