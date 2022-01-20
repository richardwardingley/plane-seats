const seatAllocation = (bookings, rows) => {

    let threeSeats;
    let leftSec = 0;
    let middleSec = 0;
    let rightSec = 0;
    let eachRowArr = [];
    let eachRowBookings = '';
    let maxRows = rows.toString().length;


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
        console.log(leftSec);
        console.log(middleSec);
        console.log(rightSec);
        eachRowArr = [];
    }

    if (bookings === '') {
        threeSeats = 4 * rows;
        return threeSeats;
    } if (bookings.length === maxRows) {
        eachRowBookings = bookings;
        console.log(eachRowBookings);
        sortRows();
        threeSeats = (leftSec + middleSec + rightSec);
        return threeSeats;
    }

    let splitBookings = bookings.split(' ').sort();
    console.log(splitBookings);
    for (let i=0; i<splitBookings.length; i++) {
        console.log('start of for');
        if (`${splitBookings[i]}`.charAt(0) === `${splitBookings[i+1]}`.charAt(0)) {
            console.log('in the if of for loop');
            eachRowArr.push(splitBookings[i]);
            console.log(eachRowArr);
            eachRowBookings = eachRowArr.join('');
            console.log(eachRowBookings)
            console.log(i);
        } else {
            console.log('in the else of for loop');
            eachRowArr.push(splitBookings[i]);
            console.log(eachRowArr);
            eachRowBookings = eachRowArr.join('');
            sortRows();
        }
    }
        threeSeats = (leftSec + middleSec + rightSec);
        return threeSeats;


    }



console.log(seatAllocation('1E',1));

module.exports = seatAllocation;