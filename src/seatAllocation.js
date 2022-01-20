const seatAllocation = (bookings, rows) => {

    let threeSeats;
    let leftSec = 0;
    let middleSec = 0;
    let rightSec = 0;
    let eachRowArr = [];
    let eachRowBookings = '';
    let maxRows = rows.toString().length;
    let rowCount = 0;


    const sortRows = () => {
        if (eachRowBookings.match(/[A-C]/)) {
            leftSec += 0;
        } else {
            leftSec += 1;
        }

        if ((eachRowBookings.search(/[D-G]/)) < 0) {
            middleSec += 2;
        }
        if (eachRowBookings.match(/[D]/) || (eachRowBookings.match(/[G]/))) {
            middleSec += 1;
        }
        if (eachRowBookings.match(/[D]/) && (eachRowBookings.match(/[G]/))) {
            middleSec -= 1;
        }
        if (eachRowBookings.match(/[E-F]/)) {
            middleSec += 0;
        }

        if (eachRowBookings.match(/[H-J]/)) {
            rightSec += 0;
        } else {
            rightSec += 1;
        }
        rowCount += 1;
        console.log(`rowCount: ${rowCount}`);
        // console.log(leftSec);
        // console.log(middleSec);
        // console.log(rightSec);
        eachRowArr = [];
    }

    if (bookings === '') {
        threeSeats = 4 * rows;
        return threeSeats;
    } if (bookings.length === maxRows) {
        eachRowBookings = bookings;
        console.log(`eachRowBookings: ${eachRowBookings}`);
        sortRows();
        threeSeats = (leftSec + middleSec + rightSec) + ((rows - rowCount) * ((rows-rowCount)>1 ? 4 : 1));
        console.log(`threeSeats (at top): ${threeSeats}`);
        return threeSeats;
    }

    let splitBookings = bookings.split(' ').sort();
    console.log(`splitBookings: ${splitBookings}`);
    for (let i=0; i<splitBookings.length; i++) {
        console.log('start of for');
        if (`${splitBookings[i]}`.charAt(0) === `${splitBookings[i+1]}`.charAt(0)) {
            console.log('in the if of for loop');
            eachRowArr.push(splitBookings[i]);
            console.log(`eachRowArr: ${eachRowArr}`);
            eachRowBookings = eachRowArr.join('');
            console.log(`eachRowBookings: ${eachRowBookings}`);
        } else {
            console.log('in the else of for loop');
            eachRowArr.push(splitBookings[i]);
            console.log(`eachRowArr: ${eachRowArr}`);
            eachRowBookings = eachRowArr.join('');
            sortRows();
        }
    }
    threeSeats = (leftSec + middleSec + rightSec) + ((rows - rowCount) * ((rows-rowCount)>0 ? 4 : 1));
    console.log(`threeSeats (at bottom): ${threeSeats}`);
    return threeSeats;

    }



console.log(seatAllocation('3B 3F 4I',4));

module.exports = seatAllocation;