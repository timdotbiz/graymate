import init from './init';

const main = () => {
  console.log('** GRAYMATE **');
  const argument = process.argv[2];

  try {
    if (!argument || argument === 'init') {
      init();
    } else {
      throw new Error('Unrecognized command. Closing GRAYMATE')
    }
  } catch(e) {
    console.error(e);
  }
}

main();

export default main;