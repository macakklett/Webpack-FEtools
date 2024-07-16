import { add, mult } from '../calculator';

it('should be return stored logs', () => {
  expect(add(5, 10)).toEqual(15);
});

it('should be return stored logs', () => {
  expect(mult(5, 10)).toEqual(50);
});
