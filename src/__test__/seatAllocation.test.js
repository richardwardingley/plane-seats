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

    it('should return 4 times number of rows if all seats free on those rows', () => {
        expect(seatAllocation('',2)).toEqual(8);
        expect(seatAllocation('',3)).toEqual(12);
        expect(seatAllocation('',4)).toEqual(16);
        expect(seatAllocation('',10)).toEqual(40);
    });

    it('should return 3 if 1st seat booked on 1 row', () => {
        expect(seatAllocation('1A',1)).toEqual(3);
    });

    it('should return 3 times number of rows if 1st seat booked on those rows', () => {
        expect(seatAllocation('1A 2A',2)).toEqual(6);
        expect(seatAllocation('1A 2A 3A',3)).toEqual(9);
        expect(seatAllocation('1A 2A 3A 4A 5A',5)).toEqual(15);
    });

    it('should return 2 if 1E is booked', () => {
       expect(seatAllocation('1E',1)).toEqual(2);
    });


    // beforeEach(() => {
    //     currentGame = game();
    // });

    // it('should return 0 score for gutter game', () => {
    //     roll(0,20);
    //
    //     expect(currentGame.score()).toEqual(0);
    // });
    //
    // it('should return 20 score if all 1s rolled', () => {
    //     roll(1, 20);
    //
    //     expect(currentGame.score()).toEqual(20);
    // });
    //
    // it('should return 80 score if all 4s rolled', () => {
    //     roll(4, 20);
    //
    //     expect(currentGame.score()).toEqual(80);
    // });
    //
    // it('should return correct score if no spares/strikes rolled', () => {
    //     roll(1, 1);
    //     roll(3, 5);
    //     roll(2,10);
    //     roll(4, 4);
    //
    //     expect(currentGame.score()).toEqual(52);
    // });
    //
    // it('should return 20 if a spare rolled followed by a 5', () => {
    //     roll(5, 3);
    //     roll(0, 17);
    //
    //     expect(currentGame.score()).toEqual(20);
    // });

});