const fs = require('fs')
const readFile = require("readline-sync")

Allparking = []
array = []
const Alldata = fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    // create all slots 
    var array = data.toString().split("\n");
    cammnds(array)
})

function cammnds(input) {
    // Allocated slot number: 1
    obj = {}
    Allparking = []
    for (var i = 0; i < input.length; i++){
        obj[i + 1] = array[i]
        Allparking.push(obj)
    }

    console.log(Allparking)
}

for (var i = 0; i < array.length; i++) {
    var element = array.split(" ")[0];
    console.log(element)

    if (element == "park") {
        if (element in array) {
            console.log("this slots is free", i)
        } else {
            console.log("this slot is not free")
        }

        console.log(Allparking)

    } else if (element == "leave") {
        array[i].remove(function (e) {
            return e === "leave";
        });
        
        console.log(array);
    } else {
        console.log(array[i])
    }
}
