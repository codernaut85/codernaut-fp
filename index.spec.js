
import { 
    flatten,
    map,
    pipe,
    reverse,
    self,
    sort,
    unique
} from './';

describe('flatten', () => {
    test('it returns a flattened array', () => {
        const data = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        expect(flatten(data)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('pipe', () => {
    test('it composes functions from an amount of function arguments', () => {
        const data = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [4, 5, 6]
        ];

        const transform = pipe(
            flatten,
            unique,
            map(x => x + 1),
            reverse
        );

        expect(transform(data)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2]);
    });
});


describe('map', () => {
    test('it iterates over an array', () => {
        const data = [1, 2, 3, 4, 5, 6];
        const result = pipe(
            map(self)
        )(data);
        expect(result).toEqual(data);
    });

    test('it iterates over an array and runs each array element through a transformer function', () => {
        const data = [1, 2, 3, 4, 5, 6];
        const result = pipe(
            map(x => x + 1)
        )(data);
        expect(result).toEqual([2, 3, 4, 5, 6, 7]);
    });
});

describe('reverse', () => {
    test('it returns an array of numbers in reverse order', () => {
        const data = [1, 2, 3, 4, 5];
        expect(reverse(data)).toEqual([5, 4, 3, 2, 1]);
    });

    test('it returns an array of strings in reverse order', () => {
        const data = ['fox', 'wolf', 'dog'];
        expect(reverse(data)).toEqual(['dog', 'wolf', 'fox']);
    });
});

describe('self', () => {
    test('it returns exactly what was supplied to it', () => {
        expect(self(true)).toEqual(true);
        expect(self([])).toEqual([]);
        expect(self({})).toEqual({});
        expect(self({ name: 'Grant' })).toEqual({ name: 'Grant' });
    });
});

describe('sort', () => {
    test('it returns an array of numbers sorted into ascending order', () => {
        const data = [2, 1, 3, 5, 4];
        expect(sort(data)).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('unique', () => {
    test('it returns an array unchanged if empty', () => {
        expect(unique([])).toEqual([]);
    });

    test('it returns an array of numbers with all duplicates removed', () => {
        expect(unique([1, 2, 2, 3, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('it returns an array of strings with all duplicates removed', () => {
        expect(unique(['cat', 'dog', 'wolf', 'fox', 'dog', 'cat', 'fish'])).toEqual(['cat', 'dog', 'wolf', 'fox', 'fish']);
    });
});
