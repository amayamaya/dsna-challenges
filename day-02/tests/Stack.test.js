const { Stack } = require('../Stack');

describe('Stack Tests', () => {
  it('should add an item to an array', () => {
    const newItemArr = new Stack([]);
    newItemArr.classPush('fox');
    newItemArr.classPush('goose');
    newItemArr.classPush('lizard');
    expect(newItemArr.list).toEqual(['fox', 'goose', 'lizard']);
  });
});
