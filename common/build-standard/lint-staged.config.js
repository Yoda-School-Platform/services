const THRESHOLD = 10;

module.exports = {
  '**/*.js?(x)': filenames => {return (filenames.length > THRESHOLD ? 'eslint .' : `eslint ${filenames.join(' ')}`);}
};