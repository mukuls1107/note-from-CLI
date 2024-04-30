import figlet from "figlet";
import chalk from "chalk";
// let argument = process.argv[3]


(function (){
    draw();
    beginning()
})()


function beginning(){
    console.log("Enter your choice: ")
    let choice = process.argv[2];
    if(choice == "add" || "a"){
        console.log(`Adding: ${process.argv[3]}`)
    }else{
        console.log("Unknown Choice")
    }
    return 0;
}

function addToObj(){

}

function deleteFromObj(){

}


function display(){

}

function draw()
{
    figlet("Notes", function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(chalk.blue(data));
      });
}