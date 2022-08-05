const today = new Date();

 let date = function () {
    const date = today.getDate();
    console.log("day - " + date);
}

 let month = function () {
    const month = today.getMonth();
    console.log("Month - " + (month + 1));
}


let batchInfo = function () {
    console.log("Batch - Plutonium, Third Week Fifth Day, the topic for today is Nodejs module system.")
}

module.exports.printDate = date;
module.exports.printMonth = month;
module.exports.getBachInfo = batchInfo;
