import ErrorRepository from '../ErrorRepository';

const errorRepository = new ErrorRepository();

test.each([
  [0, 'Unnown type of character'],
  [1, 'A character with the same name already exists'],
  [2, 'Name should be no more than ten characters'],
])('Error with code %n should be %s', (code, errorText) => {
  expect(errorRepository.translate(code)).toBe(errorText);
});

test('should return "Unknown error", when code not found', () => {
  expect(errorRepository.translate(10)).toBe('Unknown error');
});
