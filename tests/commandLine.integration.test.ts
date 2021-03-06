import { commandProcessor } from '../src/commandLine';
jest.mock('../src/init')

import init from '../src/init';

describe('graymate cli', () => {
  test('\'graymate\' with no argument starts the initializer', () => {
    expect(init).not.toHaveBeenCalled();

    commandProcessor('');

    expect(init).toHaveBeenCalled();
    expect(init).toHaveBeenCalledTimes(1);
  })

  test('\'graymate init\' starts the initializer', () => {
    expect(init).not.toHaveBeenCalled();

    commandProcessor('init');

    expect(init).toHaveBeenCalled();
    expect(init).toHaveBeenCalledTimes(1);
  })
})
