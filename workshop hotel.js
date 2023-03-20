let FullRooms = [1, 2, 3, 5, 7, 9, 12, 15, 16, 17];
let MaxRooms = 20;
let RequiredRooms = 3;
let CheckInHour = 10;

let availableRooms = MaxRooms - FullRooms.length; //here define a variable to keep track of how many rooms are available


for (let i = 0; i < FullRooms.length; i++) { // Loop through to check if there are any rooms available

    // If there are enough rooms available and the check-in time has not passed, tell the user if
    if (availableRooms >= RequiredRooms && CheckInHour > new Date().getHours()) {
        console.log(`Welcome! You have been registered!`);
    } else {
        console.log(`Sorry, we can't accept more people at the moment, we are full`);
    }
}
