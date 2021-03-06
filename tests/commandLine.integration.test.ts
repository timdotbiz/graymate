import { commandProcessor } from '../src/commandLine';
jest.mock('../src/init')

import init from '../src/init';

describe('graymate cli', () => {
  test('\'graymate\' with no argument starts the initializer', () => {
    commandProcessor('');

    expect(init).toHaveBeenCalled();
    expect(init).toHaveBeenCalledTimes(1);
  })

  test('\'graymate init\' starts the initializer', () => {
    commandProcessor('init');

    expect(init).toHaveBeenCalled();
    expect(init).toHaveBeenCalledTimes(1);
  })
})
