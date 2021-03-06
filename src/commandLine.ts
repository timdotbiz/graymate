import init from './init';

export const commandProcessor = (argument: String): void => {
  console.log('** GRAYMATE **');

  try {
    switch(argument) {
      case 'init':
      case '':
        init();
        break;
      default:
        throw new Error('Unrecognized command. Closing GRAYMATE')
    }
  } catch(e) {
    console.error(e);
  }
}

const commandLineHandler = (): void => {
  const argument = process.argv[2] || '';

  commandProcessor(argument);
}

commandLineHandler();

export default commandLineHandler;