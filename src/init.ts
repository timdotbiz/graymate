import path from 'path';
import fs from 'fs';

export const errorHandler = (err: Error | null) => {
  if (err) throw err;
};

const init = () => {
  const appDir = path.resolve('./');

  fs.writeFile(`${appDir}/graymate.yaml`, new Uint8Array(Buffer.from(' ')), errorHandler);
};

export default init;
