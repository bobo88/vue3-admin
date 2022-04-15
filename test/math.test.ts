import { expect, test } from '@jest/globals';
const math = require('../src/jest/math')

test('add: 1 + 1 = 2', () => {
    expect(math.add(1, 1)).toBe(2);
})