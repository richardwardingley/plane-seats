const seatAllocation = require('../seatAllocation');
//
// let currentGame;
//
// const roll = (pins, times) => {
//     for(let counter=0; counter< times; counter++ ) {
//         currentGame.roll(pins);
//     }
// }

describe("Three seats available together on a plane ", () => {


    it('should return 4 if all seats free on 1 row', () => {
       expect(seatAllocation('',1)).toEqual(4);
    });

    it('should return 3 if 1st seat booked on 1 row', () => {
        expect(seatAllocation('1A',1)).toEqual(3);
    });

    it('should return 2 if 1E is booked', () => {
       expect(seatAllocation('1E',1)).toEqual(2);
    });

    it('should return 2 if 1F is booked', () => {
        expect(seatAllocation('1F',1)).toEqual(2);
    });

    it('should return 2 if 1E and 1F are booked', () => {
        expect(seatAllocation('1E 1F',1)).toEqual(2);
    });

    it('should return 1 if 1A and 1E are booked', () => {
        expect(seatAllocation('1A 1E',1)).toEqual(1);
    });

    it('should return 3 if 1D or 1G is booked', () => {
        expect(seatAllocation('1D',1)).toEqual(3);
        expect(seatAllocation('1G',1)).toEqual(3);
    });

    it('should return 2 if 1D and 1G is booked', () => {
        expect(seatAllocation('1D 1G',1)).toEqual(2);
    });

    it('should return 4 times number of rows if all seats free on those rows', () => {
        expect(seatAllocation('',2)).toEqual(8);
        expect(seatAllocation('',3)).toEqual(12);
        expect(seatAllocation('',4)).toEqual(16);
        expect(seatAllocation('',10)).toEqual(40);
    });

    it('should return 3 times number of rows if 1st seat booked on those rows', () => {
        expect(seatAllocation('1A 2A',2)).toEqual(6);
        expect(seatAllocation('1A 2A 3A',3)).toEqual(9);
        expect(seatAllocation('1A 2A 3A 4A 5A',5)).toEqual(15);
    });

    it('should return 5 if 2 different seats booked in 2 different sections on 2 rows', () => {
        expect(seatAllocation('1J 2E',2)).toEqual(5);
    });

    it('should return 8 if 3 different seats booked in 3 different sections on 3 rows', () => {
        expect(seatAllocation('1H 2B 3F',3)).toEqual(8);
    });

    it('should return correct value if bookings not in order', () => {
        expect(seatAllocation('2E 1J',2)).toEqual(5);
        expect(seatAllocation('1H 2B 1C',2)).toEqual(5);
        expect(seatAllocation('2E 1H 2B 3F 1A 3E',3)).toEqual(5);
    });

    it('should return correct value if there are empty rows before rows with bookings', () => {
        expect(seatAllocation('2A 2E 3H',3)).toEqual(8);
        expect(seatAllocation('3B 3F 4I',4)).toEqual(12);
    });

    it('should return correct value if there are empty rows after rows with bookings', () => {
        expect(seatAllocation('1A 2E 2H',3)).toEqual(8);
        expect(seatAllocation('1B 1J 2I',4)).toEqual(13);
    });

    it('should return correct value if there are empty rows in between rows with bookings', () => {
        expect(seatAllocation('1E 3E 3H',3)).toEqual(7);
        expect(seatAllocation('1J 3B 3F 4I',4)).toEqual(11);
    });

    it('should return correct value if there are empty rows before, in between, and after rows with bookings', () => {
        expect(seatAllocation('2A 2E 4H',5)).toEqual(16);
        expect(seatAllocation('2C 2F 4D 4G 6A 6J',7)).toEqual(21);
    });

});