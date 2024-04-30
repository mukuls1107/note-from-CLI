
let userNote = process.argv[2];

const userObj = {
    content: userNote,
    id: Date.now()
}

console.log(userObj);