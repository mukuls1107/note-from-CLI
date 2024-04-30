import figlet from "figlet";
import chalk from "chalk";
import fs from "node:fs"

let userNoteObject = {};

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
        )}: Exit from the Application.\n${chalk.green(
            "display"
        )}: Display the id and content of the Note.`
    );
    return;
}

function beginning() {
    info();

    const processInput = (data) => {
        let choice = data.toString().trim();

        switch (choice) {
            case "add":
            case "a":
                addToObj();
                break;

            case "exit":
            case "ex":
                process.exit();
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
    };

    process.stdin.on("data", processInput);
}

async function addToObj() {
    console.log(chalk.cyanBright("Enter the note you want to add (or 'exit' to finish): "));

    const addNoteInputHandler = (data) => {
        let final = data.toString().trim();
        if (final.toLowerCase() === "exit") {
            console.log(chalk.yellow("Exiting note addition..."));
            process.stdin.removeListener("data", addNoteInputHandler); // Remove event listener
            beginning(); // Display the menu again
            return;
        }
        const note = {
            content: final,
            id: Math.floor(Date.now() / 100)
        };
        console.log(chalk.green("Note to be added:", note));

        // Write note to file (or database) here

        console.log(chalk.green("Note added successfully!"));

        // Prompt for new note or exit after the note is added
        console.log(chalk.cyanBright("Enter the next note (or 'exit' to finish): "));
    };
    process.stdin.removeAllListeners("data");
    process.stdin.on("data", addNoteInputHandler);
}
function deleteFromObj() { }


function display() {
    console.log(chalk.cyanBright(`ID is: ${userNoteObject["id"]}`))
    console.log(chalk.cyanBright(`Note is: ${userNoteObject["content"]}`));
}

(async () => {
    await draw();
    beginning();
})();
