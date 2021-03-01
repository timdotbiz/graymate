import init from './init';

export default () => {
  const argument = process.argv[2];

  if (!argument || argument === 'init') {
    init();
  }
}
