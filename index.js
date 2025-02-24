//learning starting of TypeScript
var fullname = "sribalan";
var age = 10;
function newUser(fullname, age) {
    if (age === void 0) { age = 23; }
    console.log(fullname, age);
}
newUser(fullname);
// learning generics small methods
function studentCheck(todayPresent, classMaxStudent) {
    if (classMaxStudent === void 0) { classMaxStudent = 50; }
    if (todayPresent <= classMaxStudent) {
        return false;
    }
    else {
        return true;
    }
}
var check = studentCheck(45);
console.log(check);
var Me = {
    personName: "Sribalan",
    ethernetOn: true,
    gpsPosition: { x: 10, y: 26, z: 5 },
    chargePercentage: 45,
    simName: [["airtel"], ["idea"]],
};
console.log(Me);
var FivemPlayerData = [
    { fullName: "player1", job: "unemp", pos: { x: 50, y: 20, z: 4 } },
    { fullName: "player2", job: "police", pos: { x: 89, y: 70, z: 44 } },
    { fullName: "player3", job: "doctor", pos: { x: 50, y: 25, z: 4 } },
];
console.log(FivemPlayerData);
