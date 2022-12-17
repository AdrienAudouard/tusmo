import removeAccents from './remove-accents.utils';

describe('removeAccents', () => {
  it('should remove all accents from the string', () => {
    const result = removeAccents('éùàè');
    const expected = 'euae';
    expect(result).toEqual(expected);
  });

  it('should remove all accents from an uppercase string', () => {
    const result = removeAccents('ÅÉ');
    const expected = 'AE';
    expect(result).toEqual(expected);
  });
});
