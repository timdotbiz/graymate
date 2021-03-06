import { commandProcessor } from '../src/commandLine';
jest.mock('../src/init')

import init from '../src/init';

describe('graymate cli', () => {
  test('\'graymate\' with no argument starts the initializer', () => {
    expect(init).not.toHaveBeenCalled();

    const command = commandProcessor('');
    command();

    expect(init).toHaveBeenCalled();
    expect(init).toHaveBeenCalledTimes(1);
  })

  test('\'graymate init\' starts the initializer', () => {
    expect(init).not.toHaveBeenCalled();

    const command = commandProcessor('init');
    command();

    expect(init).toHaveBeenCalled();
    expect(init).toHaveBeenCalledTimes(1);
  })
})
