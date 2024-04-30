import figlet from "figlet";
import chalk from "chalk";
import fs from "node:fs"

let userNoteObject = {};
(async () => {
    await draw();
    info();
})();

async function draw() {
    try {
        const data = await figlet.textSync("Notes");
        console.log(chalk.blue(data));
    } catch (err) {
        console.log("Something went wrong...");
        console.dir(err);
    }
}

function info() {
    console.log("Enter your choice");
    console.log(
        `${chalk.green("add")}: Adds new note to the database.\n${chalk.green(
            "exit"
        )}: Exit from the Application`
    );
    return;
}




const processInput = (data) => {
    let choice = data.toString().trim();
    let flag = true;
    while (flag) {

        switch (choice) {
            case "add":
            case "a":
                addToObj();
                break;

            case "exit":
            case "ex":
                flag = false;
                process.exit(0)
                break;

            case "display":
            case "di":
                display();
                break;


            default:
                console.log(chalk.red("Something went wrong..."));
                process.exit(0)
                break;
        }
    }
};

process.stdin.on("data", processInput);


async function addToObj() {
    console.log(chalk.cyanBright("Enter the note you want to add (or 'exit' to finish): "));

    const addNoteInputHandler = (data) => {
        let final = data.toString().trim();
        if (final.toLowerCase() === "exit") {
            process.stdin.removeListener("data", addNoteInputHandler); // Remove event listener
            return;
        }
        userNoteObject["content"] = final;
        userNoteObject["id"] = Math.floor(Date.now() / 100);

        let outputData = JSON.stringify(userNoteObject) + "\n"; // Add newline character
        fs.appendFile("notes.json", outputData, (err) => {
            if (err) {
                console.log(chalk.red("Error occurred while writing data."));
            } else {
                console.log(chalk.green("Note added successfully!"));
            }
        });
    };

    process.stdin.on("data", addNoteInputHandler);
}

function deleteFromObj() { }


function display() {
    console.log(chalk.cyanBright(`ID is: ${userNoteObject["id"]}`))
    console.log(chalk.cyanBright(`Note is: ${userNoteObject["content"]}`));
}

