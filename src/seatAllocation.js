const seatAllocation = (bookings, rows) => {
    // let gameScore = 0;
    //
    // const roll = (pins) => {
    //     gameScore = gameScore + pins;
    // }
    //
    // const score = () => {
    //     return gameScore;
    // };
    //
    // return {
    //     roll,
    //     score
    // }

    let threeSeats;
    let leftSec;
    let middleSec;
    let rightSec;

    if (bookings === '') {
        threeSeats = 4 * rows;
        return threeSeats;
    }

    if (bookings.match(/[A-C]/)) {
        leftSec = 0;
    } else {
        leftSec = 1;
    }

    if (bookings.match(/[^D-G]/)) {
        middleSec = 2;
    } if (bookings.match(/[D]/) || (bookings.match(/[G]/))) {
        middleSec = 1;
    } if (bookings.match(/[D]/) && (bookings.match(/[G]/))) {
        middleSec = 0;
    } if (bookings.match(/[E-F]/)) {
        middleSec = 0;
    }

    if (bookings.match(/[H-J]/)) {
        rightSec = 0;
    } else {
        rightSec = 1;
    }
    threeSeats = (leftSec + middleSec + rightSec) * rows;
    return threeSeats;
}
    // let leftSec;
    // const letterCheckAbc = bookings.match(/[A-C]/);
    // switch (letterCheckAbc){
    //     case 'A':
    //     case 'B':
    //     case 'C':
    //         leftSec = 0;
    //         return leftSec;
    // }


    //bookings.split(' ').sort();


console.log(seatAllocation('1D',1));

module.exports = seatAllocation;