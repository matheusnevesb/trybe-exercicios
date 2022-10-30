const shipLength = require('./exercise07');

const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
    // measurementUnit: unidade de medida
];

describe('Exercise 07', () => {
    it('shipLength(ships[0]) retorna Titanic is 269.1 meters long', () => {
        expect(shipLength(ships[0])).toEqual('Titanic is 269.1 meters long')
    })
    it('shipLength(ships[1]) retorna Queen Mary 2 is 1132 feet long', () => {
        expect(shipLength(ships[1])).toEqual('Queen Mary 2 is 1132 feet long')
    })
    it('shipLength(ships[2]) retorna Yamato is 256 meters long', () => {
        expect(shipLength(ships[2])).toEqual('Yamato is 256 meters long')
    })
})