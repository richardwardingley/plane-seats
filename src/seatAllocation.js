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
    if (bookings === '') {
        threeSeats = 4 * rows;
    } else {
        threeSeats = 3 * rows;
    }
    return threeSeats;


    //bookings.split(' ').sort();
}

console.log(seatAllocation('',1));

module.exports = seatAllocation;