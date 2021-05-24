const fs = require('fs')
const readFile = require("readline-sync")

Allparking = []
array = []

const Alldata = fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    var array = data.toString().split("\n");
    for (var i = 0; i < array.length; i++) {
        commands(array[i], array);
    }
})

function commands(input, array) {
    var element = input.split(" ")[0];
    
    switch (element) {
        case "create_parking_lot":
            for (var i = 0; i < 6; i++) {
                console.log("Allocated slot number", ':', i + 1)
            }
            break;
        
        case "park":
            console.log("Sorry, parking lot is full", 1)
            break;
        
        case "leave":
            var carNumber = input.split(" ")[1];
            console.log("Registration number" + carNumber + "with Slot Number" + 1 + "is free with Charge" + 30)
            break;
        case "status":

            
    }       

}



