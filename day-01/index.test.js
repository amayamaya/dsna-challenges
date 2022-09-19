const { reverseSentence, addPunctuation, titleCaseWords } = require('./index');

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
      expect(titleCaseWords('the quick brown fox')).toEqual('The Quick Brown Fox');
    });
  });
