import init, { errorHandler } from '../src/init';
import path from 'path';
import fs from 'fs';

jest.mock('fs');

test('init writes a new `graymate.json` file to the project root', () => {
  init();
  const spy = jest.spyOn(fs, 'writeFile');

  expect(spy).toHaveBeenCalled();

  const appDir = path.resolve('./');
  expect(fs.writeFile).toHaveBeenCalledWith(`${appDir}/graymate.json`, new Uint8Array(Buffer.from(JSON.stringify({}))), errorHandler);
});
