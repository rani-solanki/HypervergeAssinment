const fs = require('fs')
const readFile = require("readline-sync")


cammnd = [ ]
array = []
fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    var array = data.toString().split("\n");
    // console.log(data.toString())
    console.log(array)
})


function cammnds(input) {
    var element = input.split(" ")[0];
    switch (element) {
        case create_parking_lot:
        var parkings = utils.create_parking_lot[input]
            for (var i = 0; i < parkings.Elength; i++){
                var arr = new Object();
                arr[costumer(i)] = null;
                parkings.push(obj);
            }
    }
}