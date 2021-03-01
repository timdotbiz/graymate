import path from 'path';
import fs from 'fs';

export const errorHandler = (err: Error | null) => {
  if (err) {
    console.error('Error during initialization')

    throw err;
  };
};

const init = () => {
  const configFileName = 'graymate.json';
  console.log(`Initializing project ${configFileName}`);

  const appDir = path.resolve('./');

  fs.writeFile(
    `${appDir}/${configFileName}`,
    new Uint8Array(Buffer.from(JSON.stringify({}))),
    errorHandler
  );
};

export default init;
