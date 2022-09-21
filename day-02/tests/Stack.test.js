const { Stack } = require('../Stack');

describe('Stack Tests', () => {

  it('should add an item to an array', () => {
    const newItemArr = new Stack([]);
    newItemArr.clasPush('fox');
    newItemArr.clasPush('hound');
    newItemArr.clasPush('duck');
    expect(newItemArr.readableArr).toEqual(['fox', 'hound', 'duck']);
  });
});
