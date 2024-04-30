#!usr/bin/env node
let userNote  = process.argv[2]
let note = {
    content: userNote,
    id: Date.now()
}

console.log(note)