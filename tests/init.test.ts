import init, { errorHandler } from '../src/init';
import path from 'path';
import fs from 'fs';

jest.mock('fs');

test('init writes a new `graymate.yaml` file to the project root', () => {
  init();
  const spy = jest.spyOn(fs, 'writeFile');

  expect(spy).toHaveBeenCalled();

  const appDir = path.resolve('./');
  expect(fs.writeFile).toHaveBeenCalledWith(`${appDir}/graymate.yaml`, new Uint8Array(Buffer.from(' ')), errorHandler);
});
