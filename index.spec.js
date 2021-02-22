
import { fpUnique } from './';

describe('fpUnique', () => {

    test('it returns an array unchanged if empty', () => {
        expect(fpUnique([])).toEqual([]);
    });

    test('it returns an array of numbers with all duplicates removed', () => {
        expect(fpUnique([1, 2, 2, 3, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('it returns an array of strings with all duplicates removed', () => {
        expect(fpUnique(['cat', 'dog', 'wolf', 'fox', 'dog', 'cat', 'fish'])).toEqual(['cat', 'dog', 'wolf', 'fox', 'fish']);
    });

});