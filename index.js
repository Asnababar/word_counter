import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.split(" ");
console.log(`Your sentence count the word is ${words.length}`);
