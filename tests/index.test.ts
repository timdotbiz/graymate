import graymate from '../src/index';
import init from '../src/init';

jest.mock('../src/init');

test('\'graymate\' with no argument starts the initializer', () => {
  graymate(['', '']);

  expect(init).toHaveBeenCalled();
  expect(init).toHaveBeenCalledTimes(1);
})

test('\'graymate init\' starts the initializer', () => {
  graymate(['', '', 'init']);

  expect(init).toHaveBeenCalled();
  expect(init).toHaveBeenCalledTimes(2);
})
