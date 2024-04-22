import inquirer from "inquirer";
let todos = [];
let condition=true;
while(condition){
let todoQuestions = await inquirer.prompt([{
        name: "firstQuestion",
        message: "what would you like to add in you todos?",
        type: "input",
    },
    {
        name: "secondQuestion",
        type: "confirm",
        message: "would you like to add more in your todos",
        default: "true"
    }]);
    let todo:any[]
todos.push(todoQuestions.firstQuestion);
condition=(todoQuestions.secondQuestion);
console.log(todos);}
