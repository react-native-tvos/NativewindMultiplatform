// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['apps/*/tsconfig.json'],
        alwaysTryTypes: true,
      },
      node: true,
    },
  },
};
