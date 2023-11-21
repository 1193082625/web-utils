import {camelize, hyphenate} from './index';

test("works with midline turn small hump", () => {
    expect(camelize('ab-cd-ef')).toBe('abCdEf');
})

test('Naming the hump and the transverse line', () => {
    expect(hyphenate('smallCat')).toBe('small-cat');
})