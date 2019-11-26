
// eslint-disable-next-line no-unused-vars
const OFF = 0;
// eslint-disable-next-line no-unused-vars
const WARNING = 1;
const ERROR = 2;

module.exports = {
  'extends': ['@commitlint/config-conventional'],
  'plugins': [
    '@episerver/references'
  ],
  'rules': {
    'scope-case': [ERROR, 'always', 'kebap-case'],
    'subject-case': [ERROR, 'always', 'kebap-case'],
    'references-empty-enum': [
      ERROR,
      'never',
      [
        'fix',
        'feat'
      ]
    ]
  }
};