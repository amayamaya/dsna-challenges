const { reverseSentence, addPunctuation, titleCaseWords, oddishOrEvenish } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  
  it('should add punctuation to sentence', () => {
    const addExcitement = addPunctuation('!!!');
    const addQuery = addPunctuation('??');
    const wee = addExcitement('wee');

    expect(wee).toEqual('wee!!!');
    expect(addQuery('huh')).toEqual('huh??');
  });

  it('should title case words', () => {
    expect(titleCaseWords('alchemy ROCKS goLD')).toEqual('Alchemy Rocks Gold');
  });

  it('should determines whether a number is Oddish or Evenish', () => {
    expect(oddishOrEvenish(121)).toEqual('Evenish');
    expect(oddishOrEvenish(41)).toEqual('Oddish');
  });

  it('returns an item with corresponding index', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(at(arr, 2)).toEqual('c');
    expect(at(arr, 0)).toEqual('a');
  });

});