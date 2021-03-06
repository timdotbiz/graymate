import init from './init';

export const commandProcessor = (argument: String): () => void => {
  switch(argument) {
    case 'init':
    case '':
      return init;
    default:
      return () => {
        throw new Error('Unrecognized command. Closing GRAYMATE')
      }
  }
}

const commandLineHandler = (): void => {
  console.log('** GRAYMATE **');
  const argument = process.argv[2] || '';

  try {
    const command = commandProcessor(argument);
    command();
  } catch(e) {
    console.error(e);
  }
}

export default commandLineHandler;
