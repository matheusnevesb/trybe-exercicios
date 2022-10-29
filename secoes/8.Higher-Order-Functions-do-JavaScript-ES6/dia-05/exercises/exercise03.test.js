const personLikes = require('./exercise03');

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

describe('Exercise 03', () => {
    it('Alex is 26 years old and likes fly fishing.', () => {
        expect(personLikes(alex)).toEqual('Alex is 26 years old and likes fly fishing.')
    })
    it('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.', () => {
        expect(personLikes(gunnar)).toEqual('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.')
    })
})