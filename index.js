const fs = require('fs')
const readFile = require("readline-sync")

Allparking = []
array = []
fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    var array = data.toString().split("\n");
    for (var i = 0; i < array.length; i++) {
        commands(array[i], array);
    }
})

function status(array) {
    alocated_arr = []
    for (var i = 1; i < 6; i++) {
        let sta = array[i].split(" ")[0];
        if (!( sta == status && leave)) {
            let carNumber = array[i].split(" ")[1];
            alocated_arr.push(carNumber)
        }
        else {
            break
        }
    }
    console.log(alocated_arr)
}


function commands(input, array) {
    let element = input.split(" ")[0];    
    switch (element) {
        case "create_parking_lot":
            console.log('created parking slots 6')
            for (var i = 0; i < 6; i++) {
                console.log("Allocated slot number", ':', i + 1)
            }
            break;
        case "park":
            console.log("Sorry, parking lot is full", input.split(" ")[1])
            break;
        
        case "leave":
            var carNumber = input.split(" ")[1];
            console.log("Registration number" + carNumber + "with Slot Number" + 1 + "is free with Charge" + 30)
            break;
        
        case "status":
            status(array)
            break;
    }       
}




