module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 自定义规则
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', ['sentence-case']],
    'header-max-length': [2, 'always', 100],
  },
};
